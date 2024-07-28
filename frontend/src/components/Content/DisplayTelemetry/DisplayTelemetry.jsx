import { useState, useEffect } from 'react';

import TelemetryItem from '../../TelemetryItem/TelemetryItem';
import Loader from '../../Loader/Loader';
import { getGnBTelemetry } from '../../../utils/fetching';
import {
  transformUeTelemetryData,
  filterRequestedTelemetryData,
  transformGeneralTelemetryData,
} from '../../../utils/transformData';
import { EMPTY_MESSAGE } from '../../../utils/constants';

import './DisplayTelemetry.css';

export default function DisplayTelemetry({
  requestedData,
  onMessage,
  resetFlag,
  isLiveDataToggled,
}) {
  const [ueTelemetryStatus, setUeTelemetryStatus] = useState([]);
  const [generalTelemetryStatus, setGeneralTelemetryStatus] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLiveDataLoading, setIsLiveDataLoading] = useState(false);

  // RESET TELEMETRY STATUS

  useEffect(() => {
    if (resetFlag) setUeTelemetryStatus([]);
  }, [resetFlag]);

  // SET INITIAL UI MESSAGE

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
        const [device] = devices;

        // TODO: update api call with arr of ueIds ...
        const { data, error } = await getGnBTelemetry(
          startTime,
          endTime,
          device.value
        );

        const numDatapoints = data.length;

        if (error) throw new Error(error);

        const ueTelemetryData = transformUeTelemetryData(data);

        const generalTelemetryData = transformGeneralTelemetryData(data);

        console.log();

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

        console.log('ueTelemetryData_Telemetry: ', ueTelemetryData);
        console.log('generalTelemetryData_Telemetry: ', generalTelemetryData);

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
  // ...

  return (
    <div className={`contentTelemetry ${isLoading ? 'loading' : ''}`}>
      {isLoading && <Loader>Loading Telemetry ...</Loader>}

      {!isLoading && requestedData && (
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
