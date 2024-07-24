import { useState, useEffect } from 'react';

import LogItem from '../../LogItem/LogItem';
import Loader from '../../Loader/Loader';
import Message from '../../Message/Message';
import { getGnbLogs, getLiveGnbLogs } from '../../../Utils/fetching';
import { EMPTY_MESSAGE } from '../../../Utils/constants';

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

  // RESET HEALTH STATUS

  useEffect(() => {
    if (resetFlag) setLogsStatus([]);
  }, [resetFlag]);

  // SET INITIAL UI MESSAGE

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

        const { startTime, endTime } = requestedData;

        const { data, error } = await getGnbLogs(startTime, endTime);

        const numDatapoints = data.length;

        if (error) throw new Error(error);

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

        const liveData = await getLiveGnbLogs();

        setLogsStatus((prevLogs) => [...liveData, ...prevLogs]);

        onMessage({
          type: 'success-live-data',
          text: 'Live data is on!',
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
    return () => clearInterval(intervalId);
  }, [isLiveDataToggled, onMessage, isLiveDataLoading]);

  // FETCH RECENT DATA
  // ...

  return (
    <div className={`contentLogs ${isLiveDataToggled ? 'live' : ''}`}>
      {isLoading && <Loader>Loading Logs ...</Loader>}
      {!isLoading && !requestedData && !isLiveDataToggled && (
        <Message
          message={{
            type: 'info',
            text: 'No logs to display.',
          }}
        />
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
