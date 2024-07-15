import { useEffect, useState } from 'react';

import HealthItem from '../../HealthItem/HealthItem';
import Loader from '../../Loader/Loader';
import Message from '../../Message/Message';
import { transformHealthData } from '../../../Utils/transformData';
import { getCn5gData } from '../../../Utils/fetching';
import { EMPTY_MESSAGE } from '../../../Utils/constants';

import './DisplayHealth.css';

// TODO: 'oaiExtDnUplinkState', 'oaiExtDnDownlinkInstances' ??

export default function DisplayHealth({ requestedData, onMessage, resetFlag }) {
  const [healthStatus, setHealthStatus] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // TODO: Add further useEffect() hook to display live data???
  // ...

  useEffect(() => {
    if (resetFlag) setHealthStatus([]);
  }, [resetFlag]);

  useEffect(() => {
    const fetchHealthData = async () => {
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

        const { startTime, endTime } = requestedData;

        const { data, error } = await getCn5gData(startTime, endTime);

        if (error) throw new Error(error);

        const processedData = transformHealthData(data);

        const isDataNotAvailable = processedData.every(
          (metric) => metric.moduleData.length === 0
        );

        if (isDataNotAvailable)
          onMessage({
            type: 'info',
            text: 'No health data for the selected timespan!',
          });

        setHealthStatus(processedData);
      } catch (error) {
        onMessage({
          type: 'error',
          text: error.message,
        });
        setHealthStatus([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHealthData();

    // TODO: Cleanup function needed?
  }, [requestedData, onMessage]);

  return (
    <div
      className={`contentHealth ${!requestedData ? 'noData' : ''} ${
        isLoading ? 'loading' : ''
      }`}
    >
      {isLoading && <Loader>Loading Data ...</Loader>}
      {!isLoading && !requestedData && (
        <Message
          message={{
            type: 'info',
            text: 'No health data to display.',
          }}
        />
      )}
      {!isLoading && requestedData && (
        <div className="items">
          {healthStatus.map((m, i) => {
            return (
              <HealthItem name={m.moduleName} rawData={m.moduleData} key={i} />
            );
          })}
        </div>
      )}
    </div>
  );
}
