import { useState, useEffect } from 'react';

import LogItem from '../../LogItem/LogItem';
import Loader from '../../Loader/Loader';
import Message from '../../Message/Message';
import { getGnbLogs } from '../../../Utils/fetching';
import {
  EMPTY_MESSAGE,
  WARNING_TIMESPAN_MISSING,
} from '../../../Utils/constants';

import './DisplayLogs.css';

export default function DisplayLogs({ requestedData, onMessage }) {
  const [logsStatus, setLogsStatus] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // TODO: API call
  useEffect(() => {
    const fetchLogsData = async () => {
      if (requestedData) {
        try {
          setIsLoading(true);
          onMessage(EMPTY_MESSAGE);

          const data = await getGnbLogs(
            requestedData.startTime,
            requestedData.endTime
          );

          console.log(data);

          setLogsStatus(data);
        } catch (err) {
          console.error(err.message);
        } finally {
          setIsLoading(false);
        }
      } else {
        onMessage(WARNING_TIMESPAN_MISSING);
      }
    };

    fetchLogsData();

    // TODO: Cleanup function needed?
  }, [requestedData, onMessage]);

  return (
    <div className="contentLogs">
      {isLoading && <Loader>Loading Logs ...</Loader>}
      {!isLoading && !requestedData && <Message>No data to display</Message>}
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
