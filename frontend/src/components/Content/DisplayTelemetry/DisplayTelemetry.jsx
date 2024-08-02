import { useState, useEffect, useMemo } from 'react';

import UeTelemetryItem from '../../UeTelemetryItem/UeTelemetryItem';
import GeneralTelemetryItem from '../../GeneralTelemetryItem/GeneralTelemetryItem';
import Loader from '../../Loader/Loader';
import {
  getGnbTelemetry,
  getRecentGnbTelemetry,
  getLiveGnbTelemetry,
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

  const [isLoading, setIsLoading] = useState(false);

  const [isLiveDataLoading, setIsLiveDataLoading] = useState(false);

  const ues = useMemo(() => devices.map((device) => device.value), [devices]);

  // RESET TELEMETRY STATUS

  useEffect(() => {
    if (resetFlag) setUeTelemetryStatus([]);
  }, [resetFlag]);

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

        const { startTime, endTime, devices } = requestedData;

        const ueIds = devices.map((device) => device.value);

        const { data, error } = await getGnbTelemetry(
          startTime,
          endTime,
          ueIds
        );

        if (error) throw new Error(error);

        const numDatapoints = data.length;

        const ueTelemetryData = getUeTelemetryData(data);

        const generalTelemetryData = getGeneralTelemetryData(data);

        if (numDatapoints === 0) {
          onMessage({
            type: 'success-queried-data-not-found',
            text: 'No telemetry data for the selected timespan!',
          });
          setUeTelemetryStatus(ueTelemetryData);
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

        const { data, error } = await getLiveGnbTelemetry(ues);

        if (error) throw new Error(error);

        console.log('data: ', data);

        const ueLiveData = getUeTelemetryData(data);
        const generalLiveData = getGeneralTelemetryData(data);

        console.log('ueLiveData: ', ueLiveData);
        console.log('generalLiveData: ', generalLiveData);

        // FIXME: data aggregation in status

        const aggregatedUeLiveData = aggregateLiveUeTelemetryData(
          ueTelemetryStatus,
          ueLiveData
        );

        console.log('aggregatedUeLiveData: ', aggregatedUeLiveData);

        // const aggregatedGeneralLiveData = aggregateLiveGeneralTelemetryData(
        //   generalTelemetryStatus,
        //   generalLiveData
        // );

        // setUeTelemetryStatus(aggregatedUeLiveData);
        // setGeneralTelemetryStatus(aggregatedGeneralLiveData);

        setUeTelemetryStatus(EMPTY_UE_TELEMETRY_STATUS);
        setGeneralTelemetryStatus(EMPTY_GENERAL_TELEMETRY_STATUS);

        onMessage({
          type: 'success-live-data',
          text: 'Live data is on!',
        });
      } catch (err) {
        onMessage({
          type: 'error',
          text: `${err}`,
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
    ues,
    isLiveDataToggled,
    onMessage,
    ueTelemetryStatus,
    generalTelemetryStatus,
    isLiveDataLoading,
  ]);

  // FETCH RECENT DATA

  useEffect(() => {
    const fetchRecentData = async () => {
      try {
        setIsLoading(true);

        const { recentData, error } = await getRecentGnbTelemetry(ues);

        if (error) throw new Error(error);

        const processedRecentUeData = getUeTelemetryData(recentData);
        const processedRecentGeneralData = getGeneralTelemetryData(recentData);

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
  }, [ues, onMessage, requestedData, isLiveDataToggled]);

  return (
    <div className={`contentTelemetry ${isLoading ? 'loading' : ''}`}>
      {isLoading && <Loader>Loading Telemetry ...</Loader>}

      {!isLoading && !requestedData && !isLiveDataToggled && (
        <>
          <div className="generalTelemetryItems">
            {generalTelemetryStatus.map((metric, i) => {
              return (
                <GeneralTelemetryItem
                  name={metric.metricName}
                  rawData={metric.metricData}
                  key={i}
                />
              );
            })}
          </div>
          <div className="ueTelemetryItems">
            {ueTelemetryStatus.map((metric, i) => {
              return (
                <UeTelemetryItem
                  name={metric.metricName}
                  rawData={metric.metricData}
                  key={i}
                />
              );
            })}
          </div>
        </>
      )}

      {!isLoading && (requestedData || isLiveDataToggled) && (
        <>
          <div className="generalTelemetryItems">
            {generalTelemetryStatus.map((metric, i) => {
              return (
                <GeneralTelemetryItem
                  name={metric.metricName}
                  rawData={metric.metricData}
                  key={i}
                />
              );
            })}
          </div>
          <div className="ueTelemetryItems">
            {ueTelemetryStatus.map((metric, i) => {
              return (
                <UeTelemetryItem
                  name={metric.metricName}
                  rawData={metric.metricData}
                  key={i}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
