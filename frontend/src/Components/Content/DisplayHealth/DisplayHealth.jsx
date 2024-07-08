import { useEffect, useState } from 'react';

import HealthItem from '../../HealthItem/HealthItem';
import Loader from '../../Loader/Loader';
import {
  CN5G_MODULES,
  EMPTY_MESSAGE,
  WARNING_TIMESPAN_MISSING,
} from '../../../Utils/constants';
import { transformHealthData } from '../../../Utils/transformData';
import { getCn5gData } from '../../../Utils/fetching';

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
          console.err(err.message);
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
    <div className={`contentHealth ${isLoading ? 'loading' : ''}`}>
      {isLoading && <Loader>Loading Data ...</Loader>}
      {!isLoading && requestedData && (
        <div className="items">
          {healthStatus.map((m, i) => {
            return (
              <HealthItem name={m.moduleName} rawData={m.moduleData} key={i} />
            );
          })}
        </div>
      )}
      {!isLoading && !requestedData && (
        <div className="items">
          {CN5G_MODULES.map((m, i) => {
            return <HealthItem name={m} key={i} />;
          })}
        </div>
      )}
    </div>
  );
}
