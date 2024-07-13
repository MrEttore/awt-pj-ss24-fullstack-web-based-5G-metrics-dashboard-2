import { useState, useEffect } from 'react';

import TelemetryItem from '../../TelemetryItem/TelemetryItem';
import Loader from '../../Loader/Loader';
import Message from '../../Message/Message';
import { getGnBTelemetry } from '../../../Utils/fetching';
import {
  transformTelemetryData,
  filterRequestedTelemetryData,
} from '../../../Utils/transformData';
import { EMPTY_MESSAGE } from '../../../Utils/constants';

import './DisplayTelemetry.css';

export default function DisplayTelemetry({ requestedData, onMessage }) {
  const [telemetryStatus, setTelemetryStatus] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // TODO: add "dlCarrierFreq" and "ulCarrierFreq" from payload

  useEffect(() => {
    const fetchTelemetryData = async () => {
      if (!requestedData) {
        onMessage({
          type: 'warning',
          text: 'No timespan specified. Specify a valid timespan to display the data!',
        });
        return;
      }

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

        if (error) throw new Error(error);

        const processedData = transformTelemetryData(data);

        const filteredTelemetryData = filterRequestedTelemetryData(
          processedData,
          requestedData
        );

        setTelemetryStatus(filteredTelemetryData);
      } catch (error) {
        onMessage({
          type: 'error',
          text: error.message,
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchTelemetryData();
  }, [requestedData, onMessage]);

  return (
    <div
      className={`contentTelemetry ${!requestedData ? 'noData' : ''} ${
        isLoading ? 'loading' : ''
      }`}
    >
      {isLoading && <Loader>Loading Telemetry ...</Loader>}
      {!isLoading && !requestedData && (
        <Message
          message={{
            type: 'info',
            text: 'No telemetry data to display.',
          }}
        />
      )}
      {!isLoading && requestedData && (
        <div className="items">
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
      )}
    </div>
  );
}
