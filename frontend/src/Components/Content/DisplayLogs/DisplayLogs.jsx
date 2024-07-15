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

  useEffect(() => {
    if (resetFlag) setLogsStatus([]);
  }, [resetFlag]);

  useEffect(() => {
    const fetchLogsData = async () => {
      if (!requestedData) {
        onMessage({
          type: 'warning',
          text: 'No timespan specified. Specify a valid timespan to display the data!',
        });
        return;
      }

      try {
        setIsLoading(true);
        onMessage(EMPTY_MESSAGE);

        const { startTime, endTime } = requestedData;

        const { data, error } = await getGnbLogs(startTime, endTime);

        if (error) throw new Error(error);

        const isDataNotAvailable = data.length === 0;

        if (isDataNotAvailable)
          onMessage({
            type: 'info',
            text: 'No logs for the selected timespan!',
          });

        setLogsStatus(data);
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

    fetchLogsData();
  }, [requestedData, onMessage]);

  useEffect(() => {
    const fetchLiveData = async () => {
      try {
        const liveData = await getLiveGnbLogs();

        setLogsStatus((prevLogs) => [...liveData, ...prevLogs]);

        onMessage({
          type: 'success',
          text: 'Live data is ON!',
        });

        console.log(liveData);
      } catch (error) {
        onMessage({
          type: 'error',
          text: 'No live data is not available!',
        });
      }
    };

    if (!isLiveDataToggled) {
      onMessage({
        type: 'warning',
        text: 'No timespan specified. Specify a valid timespan to display the data!',
      });
      return;
    }

    const intervalId = setInterval(fetchLiveData, 3000);
    return () => clearInterval(intervalId);
  }, [isLiveDataToggled, onMessage]);

  return (
    <div className="contentLogs">
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
