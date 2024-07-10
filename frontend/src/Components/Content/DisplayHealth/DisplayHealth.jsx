import { useEffect, useState } from 'react';

import HealthItem from '../../HealthItem/HealthItem';
import Loader from '../../Loader/Loader';
import Message from '../../Message/Message';
import { transformHealthData } from '../../../Utils/transformData';
import { getCn5gData } from '../../../Utils/fetching';
import {
  INFO_NO_HEALTH_DATA,
  EMPTY_MESSAGE,
  WARNING_TIMESPAN_MISSING,
} from '../../../Utils/constants';

import './DisplayHealth.css';

// TODO: 'oaiExtDnUplinkState', 'oaiExtDnDownlinkInstances' ??

export default function DisplayHealth({ requestedData, onMessage }) {
  const [healthStatus, setHealthStatus] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // TODO: Add further useEffect() hook to display live data???
  // ...

  useEffect(() => {
    const fetchHealthData = async () => {
      if (requestedData) {
        try {
          setIsLoading(true);
          onMessage(EMPTY_MESSAGE);

          const data = await getCn5gData(
            requestedData.startTime,
            requestedData.endTime
          );

          const processedData = transformHealthData(data);

          setHealthStatus(processedData);
        } catch (err) {
          console.error(err.message);
          // TODO: add error when fetch fails ...
          onMessage({
            type: 'error',
            text: err.message,
          });
        } finally {
          setIsLoading(false);
        }
      } else {
        onMessage(WARNING_TIMESPAN_MISSING);
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
        <Message message={INFO_NO_HEALTH_DATA} />
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
