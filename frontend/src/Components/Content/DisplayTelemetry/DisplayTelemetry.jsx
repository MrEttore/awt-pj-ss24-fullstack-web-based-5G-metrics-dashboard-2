import { useState, useEffect } from 'react';

import TelemetryItem from '../../TelemetryItem/TelemetryItem';
import Loader from '../../Loader/Loader';
import Message from '../../Message/Message';
import { getGnBTelemetry } from '../../../Utils/fetching';
import {
  transformTelemetryData,
  filterRequestedTelemetryData,
} from '../../../Utils/transformData';
import {
  INFO_NO_TELEMETRY_DATA,
  WARNING_TIMESPAN_MISSING,
  EMPTY_MESSAGE,
} from '../../../Utils/constants';

import './DisplayTelemetry.css';

export default function DisplayTelemetry({ requestedData, onMessage }) {
  const [telemetryStatus, setTelemetryStatus] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // TODO: add "dlCarrierFreq" and "ulCarrierFreq" from payload

  useEffect(() => {
    const fetchTelemetryData = async () => {
      if (requestedData) {
        try {
          setIsLoading(true);
          onMessage(EMPTY_MESSAGE);

          // TODO: update api call with arr of ueIds ...
          const data = await getGnBTelemetry(
            requestedData.startTime,
            requestedData.endTime,
            requestedData.devices[0].value
          );

          const processedData = transformTelemetryData(data);

          const filteredTelemetryData = filterRequestedTelemetryData(
            processedData,
            requestedData
          );

          setTelemetryStatus(filteredTelemetryData);
        } catch (err) {
          console.error(err.message);
        } finally {
          setIsLoading(false);
        }
      } else {
        onMessage(WARNING_TIMESPAN_MISSING);
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
        <Message message={INFO_NO_TELEMETRY_DATA} />
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
