import { useState, useEffect } from 'react';

import { getGnBTelemetry } from '../../../Utils/fetching';
import { transformTelemetryData } from '../../../Utils/transformData';
import TelemetryItem from '../../TelemetryItem/TelemetryItem';
import Loader from '../../Loader/Loader';

import './DisplayTelemetry.css';

export default function DisplayTelemetry({ requestedData }) {
  const [telemetryStatus, setTelemetryStatus] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTelemetryData = async () => {
      if (requestedData) {
        try {
          setIsLoading(true);

          // TODO: update api call with ueId ...
          const data = await getGnBTelemetry(
            requestedData.startTime,
            requestedData.endTime,
            requestedData.devices[0].value
          );

          const processedData = transformTelemetryData(data);

          console.log('processedData telemetry: ', processedData);

          setTelemetryStatus(processedData);
        } catch (err) {
          console.error(err.message);
        } finally {
          setIsLoading(false);
        }
      } else {
        // TODO: take out and build a warning message instead
        // ...
      }
    };

    fetchTelemetryData();
  }, [requestedData]);

  return (
    <div className="contentTelemetry">
      {isLoading && <Loader>Loading Data ...</Loader>}

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

          {/* TODO: add default display */}
        </div>
      )}
    </div>
  );
}
