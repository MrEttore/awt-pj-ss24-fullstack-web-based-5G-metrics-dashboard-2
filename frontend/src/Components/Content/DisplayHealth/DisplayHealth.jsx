import { useEffect, useState } from 'react';

import HealthItem from '../../HealthItem/HealthItem';
import { transformHealthData } from '../../../Utils/transformData';
import { CN5G_MODULES } from '../../../Utils/constants';
import { getCn5gData } from '../../../Utils/fetching';

import './DisplayHealth.css';

// TODO: 'oaiExtDnUplinkState', 'oaiExtDnDownlinkInstances' ??

export default function DisplayHealth({ requestedData }) {
  // Set state to define helth status of modules
  const [healthStatus, setHealthStatus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (requestedData) {
        const data = await getCn5gData(
          requestedData.startTime,
          requestedData.endTime
        );

        const processedData = transformHealthData(data);
        setHealthStatus(processedData);
      } else
        console.warn(
          `No timespan specified! Specify a valid timespan to dislay the data!`
        );
    };

    // TODO: Add loading component

    fetchData();
  }, [requestedData]);

  return (
    <div className="contentHealth">
      {requestedData
        ? healthStatus.map((m, i) => {
            return <HealthItem name={m.moduleName} rawData={m.data} key={i} />;
          })
        : CN5G_MODULES.map((m, i) => {
            return <HealthItem name={m} key={i} />;
          })}
    </div>
  );
}
