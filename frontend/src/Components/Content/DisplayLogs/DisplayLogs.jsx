import { useState, useEffect } from 'react';

import LogItem from '../../LogItem/LogItem';
import Loader from '../../Loader/Loader';
import { getGnbLogs } from '../../../Utils/fetching';

import './DisplayLogs.css';

export default function DisplayLogs({ requestedData }) {
  const [logsStatus, setLogsStatus] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // TODO: API call
  useEffect(() => {
    const fetchLogsData = async () => {
      if (requestedData) {
        try {
          setIsLoading(true);

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
        console.warn(
          `No timespan specified! Specify a valid timespan to dislay the data!`
        );
      }
    };

    fetchLogsData();

    // TODO: Cleanup function needed?
  }, [requestedData]);

  return (
    <div className="contentLogs">
      {isLoading && <Loader>Loading Logs ...</Loader>}
      <ul className="logs">
        {!isLoading &&
          requestedData &&
          logsStatus.map((log, i) => {
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
      <div className="statistics">
        <p>[Statistics]</p>
      </div>
    </div>
  );
}
