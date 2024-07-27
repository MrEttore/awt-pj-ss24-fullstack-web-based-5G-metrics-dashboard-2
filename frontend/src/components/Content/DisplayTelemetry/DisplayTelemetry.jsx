import { useState, useEffect } from 'react';

import TelemetryItem from '../../TelemetryItem/TelemetryItem';
import Loader from '../../Loader/Loader';
import Message from '../../Message/Message';
import { getGnBTelemetry } from '../../../utils/fetching';
import {
  transformTelemetryData,
  filterRequestedTelemetryData,
} from '../../../utils/transformData';
import { EMPTY_MESSAGE } from '../../../utils/constants';

import './DisplayTelemetry.css';

export default function DisplayTelemetry({
  requestedData,
  onMessage,
  resetFlag,
  isLiveDataToggled,
}) {
  const [telemetryStatus, setTelemetryStatus] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLiveDataLoading, setIsLiveDataLoading] = useState(false);

  // TODO: add "dlCarrierFreq" and "ulCarrierFreq" from payload

  // RESET TELEMETRY STATUS

  useEffect(() => {
    if (resetFlag) setTelemetryStatus([]);
  }, [resetFlag]);

  // SET INITIAL UI MESSAGE

  useEffect(() => {
    if (!requestedData && !isLiveDataToggled) {
      onMessage({
        type: 'info',
        text: 'To display further data select a timespan or turn the live data on.',
      });

      setIsLiveDataLoading(false);
      setTelemetryStatus([]);
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

        console.log('data_Telemetry: ', data);

        const numDatapoints = data.length;

        if (error) throw new Error(error);

        const processedData = transformTelemetryData(data);

        console.log('processedData_Telemetry: ', processedData);

        if (numDatapoints === 0) {
          onMessage({
            type: 'success-queried-data-not-found',
            text: 'No telemetry data for the selected timespan!',
          });
          setTelemetryStatus(processedData);
          return;
        }

        const filteredTelemetryData = filterRequestedTelemetryData(
          processedData,
          requestedData
        );

        console.log('filteredTelemetryData_Telemetry: ', filteredTelemetryData);

        setTelemetryStatus(filteredTelemetryData);

        onMessage({
          type: 'success-queried-data-found',
          text: `Successfully returned ${numDatapoints} datapoints!`,
        });
      } catch (error) {
        onMessage({
          type: 'error',
          text: error.message,
        });
        setTelemetryStatus([]);
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
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
          </div>
          <div className="ueTelemetryItems">
            {telemetryStatus.map((m, i) => {
              return (
                <TelemetryItem
                  name={m.metricName}
                  rawData={m.metricData}
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
