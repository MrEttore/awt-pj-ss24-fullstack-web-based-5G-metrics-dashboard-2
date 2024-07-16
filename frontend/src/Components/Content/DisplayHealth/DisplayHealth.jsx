import { useEffect, useState } from 'react';

import HealthItem from '../../HealthItem/HealthItem';
import Loader from '../../Loader/Loader';
import Message from '../../Message/Message';
import {
  transformHealthData,
  aggregateLiveHealthData,
} from '../../../Utils/transformData';
import { getCn5gData, getLiveCn5gData } from '../../../Utils/fetching';
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

  useEffect(() => {
    if (resetFlag) setHealthStatus([]);
  }, [resetFlag]);

  useEffect(() => {
    if (!requestedData && !isLiveDataToggled)
      onMessage({
        type: 'warning',
        text: 'No timespan specified. Specify a valid timespan to display the data!',
      });
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

    const intervalId = setInterval(fetchLiveData, 3000);
    return () => clearInterval(intervalId);
  }, [isLiveDataToggled, onMessage, healthStatus]);

  return (
    <div
      className={`contentHealth ${
        !requestedData && !isLiveDataToggled ? 'noData' : ''
      } ${isLoading ? 'loading' : ''}`}
    >
      {isLoading && <Loader>Loading Data ...</Loader>}

      {!isLoading && !requestedData && !isLiveDataToggled && (
        <Message
          message={{
            type: 'info',
            text: 'No health data to display.',
          }}
        />
      )}

      {!isLoading && (requestedData || isLiveDataToggled) && (
        <ul className="items">
          {healthStatus.map((m, i) => {
            return (
              <HealthItem name={m.moduleName} rawData={m.moduleData} key={i} />
            );
          })}
        </ul>
      )}
    </div>
  );
}
