import './LogItem.css';
import { getGnbLogs } from '../../Utils/fetching';
import { useState, useEffect } from 'react';

export default function LogItem({ requestedData, resetFlag, onMessage }) {
  const [logsStatus, setLogsStatus] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchLogsData = async () => {
      const { data, error } = await getGnbLogs(requestedData.startTime, requestedData.endTime);
      if (requestedData.isLiveDataOn) {
        try {
          setIsLoading(true);
          // onMessage(EMPTY_MESSAGE);
          var dataReversed = data.reverse();
          let dataCropped = dataReversed.slice(0, 30);
          setLogsStatus(dataCropped);
        } catch (err) {
          console.error(err.message);
        } finally {
          setIsLoading(false);
        }
      } else {
        try {
          // onMessage(EMPTY_MESSAGE);
          setLogsStatus(data);
        } catch (err) {
          console.error(err.message);
        } finally {
          setIsLoading(false);
        }
      }
    };

    // Call fetchLogsData initially and then set the interval
    fetchLogsData();
    if (requestedData.isLiveDataOn) {
      const intervalId = setInterval(fetchLogsData, 2000); // Updates every 2 seconds
    }

  }, [requestedData, onMessage]);

  return (
    <ul className="logs">
      {logsStatus.map((log, i) => {
        const date = new Date(log.timestamp);
        const dateString = date.toLocaleString();
        return (
          <li key={i} className="log">
            <div className="logContent">
              <p className="logTime">{dateString}</p>
              <p className="logMessage">{log.payload}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}