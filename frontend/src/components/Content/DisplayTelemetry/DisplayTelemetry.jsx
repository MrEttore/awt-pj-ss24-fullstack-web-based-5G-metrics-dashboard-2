import { useState, useEffect, useMemo, useRef } from 'react';

import UeTelemetryItem from '../../UeTelemetryItem/UeTelemetryItem';
import GeneralTelemetryItem from '../../GeneralTelemetryItem/GeneralTelemetryItem';
import GnbInfo from '../../GnbInfo/GnbInfo';
import Loader from '../../Loader/Loader';
import {
  getGnbTelemetry,
  getRecentGnbTelemetry,
  getLiveGnbTelemetry,
  getGeneralGnbState,
} from '../../../utils/fetching';
import {
  getUeTelemetryData,
  getGeneralTelemetryData,
  aggregateLiveUeTelemetryData,
  aggregateLiveGeneralTelemetryData,
  filterTelemetryData,
} from '../../../utils/transform-data';
import {
  EMPTY_MESSAGE,
  EMPTY_UE_TELEMETRY_STATUS,
  EMPTY_GENERAL_TELEMETRY_STATUS,
} from '../../../utils/constants';

import './DisplayTelemetry.css';

export default function DisplayTelemetry({
  requestedData,
  onMessage,
  resetFlag,
  isLiveDataToggled,
  devices,
}) {
  const [ueTelemetryStatus, setUeTelemetryStatus] = useState([]);
  const [generalTelemetryStatus, setGeneralTelemetryStatus] = useState([]);
  const [generalGnbState, setGeneralGnbState] = useState([]);
  const [isGeneralGnbStateLoading, setIsGeneralGnbStateLoading] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLiveDataLoading, setIsLiveDataLoading] = useState(false);
  const isFirstFetchGnbStatus = useRef(true);
  const ues = useMemo(() => devices.map((device) => device.value), [devices]);

  // SET INITIAL STATE

  useEffect(() => {
    if (!requestedData && !isLiveDataToggled) {
      onMessage({
        type: 'info',
        text: 'To display further data select a timespan or turn the live data on.',
      });

      setIsLiveDataLoading(false);
      setUeTelemetryStatus([]);
      setGeneralTelemetryStatus([]);
    }
  }, [requestedData, isLiveDataToggled, onMessage]);

  // FETCH QUERIED DATA

  useEffect(() => {
    const fetchTelemetryData = async () => {
      try {
        setIsLoading(true);
        onMessage(EMPTY_MESSAGE);

        const { startTime, endTime, devices, limitDatapoints } = requestedData;

        const ueIds = devices.map((device) => device.value);

        const {
          data: queriedGnbTelemetryData,
          error: errorQueriedGnbTelemetryData,
        } = await getGnbTelemetry(startTime, endTime, ueIds, limitDatapoints);

        if (errorQueriedGnbTelemetryData)
          throw new Error(errorQueriedGnbTelemetryData);

        const numDatapoints = queriedGnbTelemetryData.length;

        const ueTelemetryData = getUeTelemetryData(queriedGnbTelemetryData);

        const generalTelemetryData = getGeneralTelemetryData(
          queriedGnbTelemetryData
        );

        if (numDatapoints === 0) {
          onMessage({
            type: 'success-queried-data-not-found',
            text: 'No telemetry data for the selected filters!',
          });

          setUeTelemetryStatus(ueTelemetryData);
          setGeneralTelemetryStatus(generalTelemetryData);

          return;
        }

        const filteredUeTelemetryData = filterTelemetryData(
          ueTelemetryData,
          requestedData
        );

        setUeTelemetryStatus(filteredUeTelemetryData);
        setGeneralTelemetryStatus(generalTelemetryData);

        onMessage({
          type: 'success-queried-data-found',
          text: `Successfully returned ${numDatapoints} datapoints!`,
        });
      } catch (error) {
        onMessage({
          type: 'error',
          text: error.message,
        });

        setUeTelemetryStatus(EMPTY_UE_TELEMETRY_STATUS);
        setGeneralTelemetryStatus(EMPTY_GENERAL_TELEMETRY_STATUS);
      } finally {
        setIsLoading(false);
      }
    };

    if (!requestedData) return;

    fetchTelemetryData();
  }, [requestedData, onMessage]);

  // FETCH LIVE DATA

  useEffect(() => {
    const fetchLiveData = async () => {
      try {
        setIsLiveDataLoading(true);

        const { data: liveGnbTelemetryData, error: liveGnbTelemetryError } =
          await getLiveGnbTelemetry();

        if (liveGnbTelemetryError) throw new Error(liveGnbTelemetryError);

        if (liveGnbTelemetryData[0].ues.length === 0) {
          const generalLiveData = getGeneralTelemetryData(liveGnbTelemetryData);

          const aggregatedGeneralLiveData = aggregateLiveGeneralTelemetryData(
            generalTelemetryStatus,
            generalLiveData
          );

          setUeTelemetryStatus(EMPTY_UE_TELEMETRY_STATUS);
          setGeneralTelemetryStatus(aggregatedGeneralLiveData);

          onMessage({
            type: 'success-live-data',
            text: 'Live telemetry is on! Waiting a UE to connect ...',
          });
        } else if (generalGnbState[0].gnbStatus === 'GnbStopped') {
          setUeTelemetryStatus(EMPTY_UE_TELEMETRY_STATUS);
          setGeneralTelemetryStatus(EMPTY_GENERAL_TELEMETRY_STATUS);

          onMessage({
            type: 'success-live-data',
            text: 'Live telemetry is on! Waiting gNB to start ...',
          });
        } else {
          const ueLiveData = getUeTelemetryData(liveGnbTelemetryData);
          const generalLiveData = getGeneralTelemetryData(liveGnbTelemetryData);

          const aggregatedUeLiveData = aggregateLiveUeTelemetryData(
            ueTelemetryStatus,
            ueLiveData
          );

          const aggregatedGeneralLiveData = aggregateLiveGeneralTelemetryData(
            generalTelemetryStatus,
            generalLiveData
          );

          setUeTelemetryStatus(aggregatedUeLiveData);
          setGeneralTelemetryStatus(aggregatedGeneralLiveData);

          onMessage({
            type: 'success-live-data',
            text: 'Live telemetry is on!',
          });
        }
      } catch (err) {
        onMessage({
          type: 'error',
          text: 'Live data is not available!',
        });

        setUeTelemetryStatus(EMPTY_UE_TELEMETRY_STATUS);
        setGeneralTelemetryStatus(EMPTY_GENERAL_TELEMETRY_STATUS);
      }
    };

    if (!isLiveDataToggled) return;

    if (!isLiveDataLoading)
      onMessage({ type: 'info', text: 'Activating live data ...' });

    const intervalId = setInterval(fetchLiveData, 3000);
    return () => clearInterval(intervalId);
  }, [
    isLiveDataToggled,
    onMessage,
    ues,
    ueTelemetryStatus,
    generalTelemetryStatus,
    isLiveDataLoading,
    generalGnbState,
  ]);

  // FETCH RECENT DATA

  useEffect(() => {
    const fetchRecentData = async () => {
      try {
        setIsLoading(true);

        const { data: recentGnbTelemetryData, error: errorRecentGnbTelemetry } =
          await getRecentGnbTelemetry(ues);

        if (errorRecentGnbTelemetry) throw new Error(errorRecentGnbTelemetry);

        const processedRecentUeData = getUeTelemetryData(
          recentGnbTelemetryData
        );
        const processedRecentGeneralData = getGeneralTelemetryData(
          recentGnbTelemetryData
        );

        setUeTelemetryStatus(processedRecentUeData);
        setGeneralTelemetryStatus(processedRecentGeneralData);
      } catch (err) {
        onMessage({
          type: 'error',
          text: err.message,
        });

        setUeTelemetryStatus(EMPTY_UE_TELEMETRY_STATUS);
        setGeneralTelemetryStatus(EMPTY_GENERAL_TELEMETRY_STATUS);
      } finally {
        setIsLoading(false);
      }
    };

    if (requestedData || isLiveDataToggled) return;

    fetchRecentData();
  }, [ues, onMessage, requestedData, isLiveDataToggled, resetFlag]);

  // FETCH LIVE GNB STATUS

  useEffect(() => {
    const fetchLiveData = async () => {
      try {
        const { data: generalGnbStateData, error: generalGnbStateDataError } =
          await getGeneralGnbState();

        if (generalGnbStateDataError) throw new Error(generalGnbStateDataError);

        setGeneralGnbState(generalGnbStateData);
      } catch (err) {
        setGeneralGnbState([]);
      } finally {
        if (isFirstFetchGnbStatus.current) {
          setIsGeneralGnbStateLoading(false);
          isFirstFetchGnbStatus.current = false;
        }
      }
    };

    if (isFirstFetchGnbStatus.current) {
      setIsGeneralGnbStateLoading(true);
    }

    const intervalId = setInterval(fetchLiveData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`contentTelemetry ${isLoading ? 'loading' : ''}`}>
      {isLoading && <Loader>Loading Telemetry ...</Loader>}

      {!isLoading && !requestedData && !isLiveDataToggled && (
        <>
          <div className="generalTelemetryData">
            <GnbInfo
              gnbState={generalGnbState}
              isStateLoading={isGeneralGnbStateLoading}
            />

            <div className="generalTelemetryItems">
              {generalTelemetryStatus.map((metric, i) => {
                return (
                  <GeneralTelemetryItem
                    name={metric.metricName}
                    rawData={metric.metricData}
                    key={i}
                    isLive={isLiveDataToggled}
                  />
                );
              })}
            </div>
          </div>
          <div className="ueTelemetryItems">
            {ueTelemetryStatus.map((metric, i) => {
              return (
                <UeTelemetryItem
                  name={metric.metricName}
                  rawData={metric.metricData}
                  key={i}
                  isLive={isLiveDataToggled}
                />
              );
            })}
          </div>
        </>
      )}

      {!isLoading && (requestedData || isLiveDataToggled) && (
        <>
          <div className="generalTelemetryData">
            <GnbInfo
              gnbState={generalGnbState}
              isStateLoading={isGeneralGnbStateLoading}
            />

            <div className="generalTelemetryItems">
              {generalTelemetryStatus.map((metric, i) => {
                return (
                  <GeneralTelemetryItem
                    name={metric.metricName}
                    rawData={metric.metricData}
                    key={i}
                    isLive={isLiveDataToggled}
                  />
                );
              })}
            </div>
          </div>
          <div className="ueTelemetryItems">
            {ueTelemetryStatus.map((metric, i) => {
              return (
                <UeTelemetryItem
                  name={metric.metricName}
                  rawData={metric.metricData}
                  key={i}
                  isLive={isLiveDataToggled}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
