import { useEffect, useState } from 'react';

import HealthItem from '../../HealthItem/HealthItem';
import Loader from '../../Loader/Loader';
import {
  transformHealthData,
  aggregateLiveHealthData,
} from '../../../Utils/transformData';
import {
  getCn5gData,
  getLiveCn5gData,
  getRecentCn5gData,
} from '../../../Utils/fetching';
import { EMPTY_MESSAGE } from '../../../Utils/constants';

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

  // RESET HEALTH STATUS

  useEffect(() => {
    if (resetFlag) setHealthStatus([]);
  }, [resetFlag]);

  // SET INITIAL UI MESSAGE

  useEffect(() => {
    if (!requestedData && !isLiveDataToggled) {
      onMessage({
        type: 'warning',
        text: 'To display further data select a timespan or turn the live data on.',
      });

      setIsLiveDataLoading(false);
      setHealthStatus([]);
    }
  }, [requestedData, isLiveDataToggled, onMessage]);

  // FETCH QUERIED DATA

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

        console.log('UseEffect: Fetch queried data!');
      } catch (err) {
        onMessage({
          type: 'error',
          text: err.message,
        });
        setHealthStatus([]);
      } finally {
        setIsLoading(false);
      }
    };

    if (!requestedData) return;

    fetchHealthData();
  }, [requestedData, onMessage]);

  // FETCH LIVE DATA

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

        console.log('UseEffect: Fetch live data!');

        onMessage({
          type: 'success',
          text: 'Live data is ON!',
        });
      } catch (err) {
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
    return () => clearInterval(intervalId);
  }, [isLiveDataToggled, onMessage, healthStatus, isLiveDataLoading]);

  // FETCH RECENT DATA

  useEffect(() => {
    const fetchRecentData = async () => {
      try {
        setIsLoading(true);

        const { recentData, error } = await getRecentCn5gData();

        if (error) throw new Error(error);

        const processedRecentData = transformHealthData(recentData);

        setHealthStatus(processedRecentData);

        console.log('UseEffect: Fetch recent data!');
      } catch (err) {
        onMessage({
          type: 'error',
          text: err.message,
        });
        setHealthStatus([]);
      } finally {
        setIsLoading(false);
      }
    };

    if (requestedData || isLiveDataToggled) return;

    fetchRecentData();
  }, [onMessage, requestedData, isLiveDataToggled]);

  return (
    <div className={`contentHealth  ${isLoading ? 'loading' : ''}`}>
      {isLoading && <Loader>Loading Data ...</Loader>}

      {!isLoading && !requestedData && !isLiveDataToggled && (
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

      {!isLoading && (requestedData || isLiveDataToggled) && (
        <ul className="items">
          {healthStatus.map((module, i) => {
            return (
              <HealthItem
                name={module.moduleName}
                rawData={module.moduleData}
                isLoading={isLoading}
                key={i}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}
