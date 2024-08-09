import { useState, useEffect } from 'react';

import LogItem from '../../LogItem/LogItem';
import Loader from '../../Loader/Loader';
import {
  getGnbLogs,
  getLiveGnbLogs,
  getRecentGnbLogs,
} from '../../../utils/fetching';
import { EMPTY_MESSAGE } from '../../../utils/constants';

import './DisplayLogs.css';

export default function DisplayLogs({
  requestedData,
  onMessage,
  resetFlag,
  isLiveDataToggled,
}) {
  const [logsStatus, setLogsStatus] = useState([]);
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
      setLogsStatus([]);
    }
  }, [requestedData, isLiveDataToggled, onMessage]);

  // FETCH QUERIED DATA

  useEffect(() => {
    const fetchLogsData = async () => {
      try {
        setIsLoading(true);
        onMessage(EMPTY_MESSAGE);

        const { startTime, endTime, limitDatapoints } = requestedData;

        const { data, error } = await getGnbLogs(
          startTime,
          endTime,
          limitDatapoints
        );

        if (error) throw new Error(error);

        const numDatapoints = data.length;

        if (numDatapoints === 0) {
          onMessage({
            type: 'success-queried-data-not-found',
            text: 'No logs for the selected timespan!',
          });
          setLogsStatus(data);
          return;
        }

        setLogsStatus(data);

        onMessage({
          type: 'success-queried-data-found',
          text: `Successfully returned ${numDatapoints} logs!`,
        });
      } catch (error) {
        onMessage({
          type: 'error',
          text: error.message,
        });
        setLogsStatus([]);
      } finally {
        setIsLoading(false);
      }
    };

    if (!requestedData) return;

    fetchLogsData();
  }, [requestedData, onMessage]);

  // FETCH LIVE DATA

  useEffect(() => {
    const fetchLiveData = async () => {
      try {
        setIsLiveDataLoading(true);

        const { data: newLog, error } = await getLiveGnbLogs();

        if (error) throw new Error(error);

        if (
          logsStatus.length === 0 ||
          newLog[0].timestamp !== logsStatus[0].timestamp
        ) {
          setLogsStatus((logsStatus) => [...newLog, ...logsStatus]);

          onMessage({
            type: 'success-live-data',
            text: 'Live data is on!',
          });
        } else {
          onMessage({
            type: 'success-live-data',
            text: 'Live data is on! Waiting for new logs ...',
          });
        }
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
    return () => clearInterval(intervalId);
  }, [isLiveDataToggled, onMessage, isLiveDataLoading, logsStatus]);

  // FETCH RECENT DATA

  useEffect(() => {
    const fetchRecentData = async () => {
      try {
        setIsLoading(true);

        const { recentData, error } = await getRecentGnbLogs();

        if (error) throw new Error(error);

        setLogsStatus(recentData);
      } catch (err) {
        onMessage({
          type: 'error',
          text: err.message,
        });

        setLogsStatus([]);
      } finally {
        setIsLoading(false);
      }
    };

    if (requestedData || isLiveDataToggled) return;

    fetchRecentData();
  }, [onMessage, requestedData, isLiveDataToggled, resetFlag]);

  return (
    <div className={`contentLogs ${isLiveDataToggled ? 'live' : ''}`}>
      {isLoading && <Loader>Loading Logs ...</Loader>}

      {!isLoading && !requestedData && !isLiveDataToggled && (
        <ul className="logs">
          {logsStatus.map((log, i) => (
            <LogItem
              time={log.timestamp}
              payload={log.payload}
              logNr={i}
              key={i}
            />
          ))}
        </ul>
      )}

      {!isLoading && (requestedData || isLiveDataToggled) && (
        <ul className="logs">
          {logsStatus.map((log, i) => (
            <LogItem
              time={log.timestamp}
              payload={log.payload}
              logNr={i}
              key={i}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
