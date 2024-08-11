import { useEffect, useState } from 'react';

import HealthItem from '../../HealthItem/HealthItem';
import Loader from '../../Loader/Loader';
import {
  getHealthData,
  aggregateLiveHealthData,
} from '../../../utils/transform-data';
import {
  getCn5gData,
  getLiveCn5gData,
  getRecentCn5gData,
} from '../../../utils/fetching';
import { EMPTY_MESSAGE, EMPTY_HEALTH_STATUS } from '../../../utils/constants';

import './DisplayHealth.css';

export default function DisplayHealth({
  requestedData,
  onMessage,
  resetFlag,
  isLiveDataToggled,
}) {
  const [healthStatus, setHealthStatus] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [isLiveDataLoading, setIsLiveDataLoading] = useState(false);

  // SET INITIAL STATE

  useEffect(() => {
    if (!requestedData && !isLiveDataToggled) {
      onMessage({
        type: 'info',
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

        const { startTime, endTime, limitDatapoints } = requestedData;

        const { data, error } = await getCn5gData(
          startTime,
          endTime,
          limitDatapoints
        );

        if (error) throw new Error(error);

        const numDatapoints = data.length;

        const processedData = getHealthData(data);

        if (numDatapoints === 0) {
          onMessage({
            type: 'success-queried-data-not-found',
            text: 'No health data for the selected timespan!',
          });
          setHealthStatus(processedData);
          return;
        }

        setHealthStatus(processedData);

        onMessage({
          type: 'success-queried-data-found',
          text: `Successfully returned ${numDatapoints} datapoints!`,
        });
      } catch (err) {
        onMessage({
          type: 'error',
          text: err.message,
        });

        setHealthStatus(EMPTY_HEALTH_STATUS);
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

        const { data, error } = await getLiveCn5gData();

        if (error) throw new Error(error);

        const processedLiveData = getHealthData(data);

        // TODO: test live data feature

        const aggregatedLiveData = aggregateLiveHealthData(
          healthStatus,
          processedLiveData
        );

        setHealthStatus(aggregatedLiveData);

        onMessage({
          type: 'success-live-data',
          text: 'Live data is on!',
        });
      } catch (err) {
        onMessage({
          type: 'error',
          text: 'Live data is not available!',
        });

        setHealthStatus(EMPTY_HEALTH_STATUS);
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

        const processedRecentData = getHealthData(recentData);

        setHealthStatus(processedRecentData);
      } catch (err) {
        onMessage({
          type: 'error',
          text: err.message,
        });

        setHealthStatus(EMPTY_HEALTH_STATUS);
      } finally {
        setIsLoading(false);
      }
    };

    if (requestedData || isLiveDataToggled) return;

    fetchRecentData();
  }, [onMessage, requestedData, isLiveDataToggled, resetFlag]);

  return (
    <div className={`contentHealth  ${isLoading ? 'loading' : ''}`}>
      {isLoading && <Loader>Loading Data ...</Loader>}

      {!isLoading && !requestedData && !isLiveDataToggled && (
        <>
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
        </>
      )}

      {!isLoading && (requestedData || isLiveDataToggled) && (
        <>
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
        </>
      )}
    </div>
  );
}
