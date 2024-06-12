import HealthItem from '../../HealthItem/HealthItem';
import './DisplayHealth.css';
import { useEffect, useState } from 'react';

const url = '/api/cn5g/telemetry';
const moduleStrings = [
  'amf',
  'ausf',
  'nrf',
  'smf',
  'upf',
  'udm',
  'udr',
  'nssf',
  'nef',
  'mysql',
  'extdn',
  'asterisk',
  'openspeedtest',
];

// TODO: 'oaiExtDnUplinkState', 'oaiExtDnDownlinkInstances' ??

export default function DisplayHealth() {
  const [healthStatus, setHealthStatus] = useState([]);

  // TODO: API call with timestamp

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        let content = data[0];

        const modules = Object.keys(content).reduce((acc, module) => {
          const value = content[module];

          if (moduleStrings.includes(module))
            acc.push({
              name: module,
              status: value.status,
              message: value.message,
            });

          return acc;
        }, []);

        return setHealthStatus(modules);
      } catch (err) {
        console.error(`Failed to fetch the data ${err}`);
      }
    };

    fetchData(url);
  }, []);

  return (
    <div className="gridHealth">
      {healthStatus.map((module, i) => {
        return (
          <HealthItem
            key={i}
            status={module.status}
            moduleName={module.name}
            message={module.message}
          />
        );
      })}
    </div>
  );
}
