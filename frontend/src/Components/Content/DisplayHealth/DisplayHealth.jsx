import { useEffect, useState } from 'react';

import HealthItem from '../../HealthItem/HealthItem';
import Loader from '../../Loader/Loader';
import {
  transformHealthData,
  aggregateLiveHealthData,
} from '../../../Utils/transformData';
import { getCn5gData, getLiveCn5gData } from '../../../Utils/fetching';
import { CN5G_MODULES, EMPTY_MESSAGE } from '../../../Utils/constants';

import './DisplayHealth.css';

// TODO: 'oaiExtDnUplinkState', 'oaiExtDnDownlinkInstances' ??

export default function DisplayHealth({
  requestedData,
  onMessage,
  resetFlag,
  isLiveDataToggled,
}) {
  const [healthStatus, setHealthStatus] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLiveDataLoading, setIsLiveDataLoading] = useState(false);

  useEffect(() => {
    if (resetFlag) setHealthStatus([]);
  }, [resetFlag]);

  useEffect(() => {
    if (!requestedData && !isLiveDataToggled) {
      onMessage({
        type: 'warning',
        text: 'To display the data select a timespan or turn the live data on.',
      });

      setIsLiveDataLoading(false);
    }
  }, [requestedData, isLiveDataToggled, onMessage]);

  useEffect(() => {
    const fetchHealthData = async () => {
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

    if (!requestedData) return;

    fetchHealthData();
  }, [requestedData, onMessage]);

  useEffect(() => {
    const fetchLiveData = async () => {
      try {
        setIsLiveDataLoading(true);

        const liveData = await getLiveCn5gData();

        const processedLiveData = transformHealthData(liveData);

        const aggregatedLiveData = aggregateLiveHealthData(
          healthStatus,
          processedLiveData
        );

        setHealthStatus(aggregatedLiveData);

        onMessage({
          type: 'success',
          text: 'Live data is ON!',
        });
      } catch (error) {
        onMessage({
          type: 'error',
          text: 'Live data is not available!',
        });
      }
    };

    if (!isLiveDataToggled) return;

    if (!isLiveDataLoading)
      onMessage({ type: 'info', text: 'Activating live data ...' });

    const intervalId = setInterval(fetchLiveData, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [isLiveDataToggled, onMessage, healthStatus, isLiveDataLoading]);

  return (
    <div className={`contentHealth  ${isLoading ? 'loading' : ''}`}>
      {isLoading && <Loader>Loading Data ...</Loader>}

      {!isLoading && !requestedData && !isLiveDataToggled && (
        <ul className="items">
          {CN5G_MODULES.map((module, i) => {
            return <HealthItem name={module} key={i} />;
          })}
        </ul>
      )}

      {!isLoading && (requestedData || isLiveDataToggled) && (
        <ul className="items">
          {healthStatus.map((module, i) => {
            return (
              <HealthItem
                name={module.moduleName}
                rawData={module.moduleData}
                key={i}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}
