import { useState, useEffect } from 'react';

import LogItem from '../../LogItem/LogItem';
import Loader from '../../Loader/Loader';
import Message from '../../Message/Message';
import { getGnbLogs } from '../../../Utils/fetching';
import {
  EMPTY_MESSAGE,
  INFO_NO_LOGS_AVAILABLE,
} from '../../../Utils/constants';

import './DisplayLogs.css';

export default function DisplayLogs({ requestedData, onMessage }) {
  const [logsStatus, setLogsStatus] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

        setLogsStatus(data);
      } catch (error) {
        onMessage({
          type: 'error',
          text: error.message,
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchLogsData();

    // TODO: Cleanup function needed?
  }, [requestedData, onMessage]);

  return (
    <div className="contentLogs">
      {isLoading && <Loader>Loading Logs ...</Loader>}
      {!isLoading && !requestedData && (
        <Message message={INFO_NO_LOGS_AVAILABLE} />
      )}
      {!isLoading && requestedData && (
        <ul className="logs">
          {logsStatus.map((log, i) => {
            return (
              <LogItem
                time={log.timestamp}
                payload={log.payload}
                logNr={i}
                key={i}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}
