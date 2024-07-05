import { useEffect, useState } from 'react';

import HealthItem from '../../HealthItem/HealthItem';
import Loader from '../../Loader/Loader';
import { transformHealthData } from '../../../Utils/transformData';
import { getCn5gData } from '../../../Utils/fetching';
import { CN5G_MODULES } from '../../../Utils/constants';

import './DisplayHealth.css';

// TODO: 'oaiExtDnUplinkState', 'oaiExtDnDownlinkInstances' ??

export default function DisplayHealth({ requestedData }) {
  // Set state to define health status of modules
  const [healthStatus, setHealthStatus] = useState([]);

  // Set state to manage laoding message
  const [isLoading, setIsLoading] = useState(false);

  // TODO: Add further useEffect() hook to display live data???
  // ...

  useEffect(() => {
    const fetchHealthData = async () => {
      if (requestedData) {
        try {
          setIsLoading(true);

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
        // TODO: take out and build a warning message instead
        console.warn(
          `No timespan specified! Specify a valid timespan to dislay the data!`
        );
      }
    };

    fetchHealthData();

    // TODO: Cleanup function needed?
  }, [requestedData]); // add healthStatus??

  return (
    <div className={`contentHealth ${isLoading ? 'loading' : ''}`}>
      {isLoading && <Loader>Loading Data ...</Loader>}
      {!isLoading && requestedData && (
        <div className="items">
          {healthStatus.map((m, i) => {
            return <HealthItem name={m.moduleName} rawData={m.data} key={i} />;
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
