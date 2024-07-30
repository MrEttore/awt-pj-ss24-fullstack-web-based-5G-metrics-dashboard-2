import { useState, useEffect, useMemo } from 'react';

import TelemetryItem from '../../TelemetryItem/TelemetryItem';
import Loader from '../../Loader/Loader';
import {
  getGnbTelemetry,
  getRecentGnbTelemetry,
} from '../../../utils/fetching';
import {
  transformUeTelemetryData,
  transformGeneralTelemetryData,
  filterRequestedTelemetryData,
} from '../../../utils/transformData';
import { EMPTY_MESSAGE } from '../../../utils/constants';

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

        console.log('data: ', data);

        const numDatapoints = data.length;

        const ueTelemetryData = transformUeTelemetryData(data);

        const generalTelemetryData = transformGeneralTelemetryData(data);

        if (numDatapoints === 0) {
          onMessage({
            type: 'success-queried-data-not-found',
            text: 'No telemetry data for the selected timespan!',
          });
          setUeTelemetryStatus(ueTelemetryData);
          return;
        }

        const filteredUeTelemetryData = filterRequestedTelemetryData(
          ueTelemetryData,
          requestedData
        );

        console.log('filteredUeTelemetryData: ', filteredUeTelemetryData);

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
        setUeTelemetryStatus([]);
      } finally {
        setIsLoading(false);
      }
    };

    if (!requestedData) return;

    fetchTelemetryData();
  }, [requestedData, onMessage]);

  // FETCH LIVE DATA
  // ...

  // FETCH RECENT DATA

  useEffect(() => {
    const fetchRecentData = async () => {
      try {
        setIsLoading(true);

        const { recentData, error } = await getRecentGnbTelemetry(ues);

        if (error) throw new Error(error);

        const processedRecentUeData = transformUeTelemetryData(recentData);
        const processedRecentGeneralData =
          transformGeneralTelemetryData(recentData);

        // console.log('processedRecentUeData: ', processedRecentUeData);

        setUeTelemetryStatus(processedRecentUeData);
        setGeneralTelemetryStatus(processedRecentGeneralData);
      } catch (err) {
        onMessage({
          type: 'error',
          text: err.message,
        });

        // TODO: add display of modules when fetch fails
        setUeTelemetryStatus([]);
        setGeneralTelemetryStatus([]);
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
                <TelemetryItem
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
                <TelemetryItem
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
                <TelemetryItem
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
                <TelemetryItem
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
