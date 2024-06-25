import { useState } from 'react';

import LogItem from '../../LogItem/LogItem';

import './DisplayLogs.css';

const dummyLogsStatus = [
  { timestamp: '2024-06-24 10:00:00', payload: 'Log 1' },
  { timestamp: '2024-06-24 10:30:00', payload: 'Log 2' },
  { timestamp: '2024-06-24 11:00:00', payload: 'Log 3' },
  { timestamp: '2024-06-24 11:30:00', payload: 'Log 4' },
  { timestamp: '2024-06-24 12:00:00', payload: 'Log 5' },
  { timestamp: '2024-06-24 12:30:00', payload: 'Log 6' },
  { timestamp: '2024-06-24 13:00:00', payload: 'Log 7' },
  { timestamp: '2024-06-24 13:30:00', payload: 'Log 8' },
  { timestamp: '2024-06-24 14:00:00', payload: 'Log 9' },
  { timestamp: '2024-06-24 14:30:00', payload: 'Log 10' },
  { timestamp: '2024-06-24 15:00:00', payload: 'Log 11' },
  { timestamp: '2024-06-24 15:30:00', payload: 'Log 12' },
  { timestamp: '2024-06-24 16:00:00', payload: 'Log 13' },
  { timestamp: '2024-06-24 16:30:00', payload: 'Log 14' },
  { timestamp: '2024-06-24 17:00:00', payload: 'Log 15' },
  { timestamp: '2024-06-24 17:30:00', payload: 'Log 16' },
  { timestamp: '2024-06-24 18:00:00', payload: 'Log 17' },
  { timestamp: '2024-06-24 18:30:00', payload: 'Log 18' },
  { timestamp: '2024-06-24 19:00:00', payload: 'Log 19' },
  { timestamp: '2024-06-24 19:30:00', payload: 'Log 20' },
];

export default function DisplayLogs({ requestedData }) {
  const [logsStatus, setLogsStatus] = useState([]);

  // TODO: API call
  // useEffect(()=>{})
  return (
    <div className="contentLogs">
      <ul className="logs">
        {dummyLogsStatus.map((log, i) => {
          return (
            <LogItem time={log.timestamp} payload={log.payload} logNr={i} />
          );
        })}
      </ul>
      <div className="statistics">
        <p>[Statistics]</p>
      </div>
    </div>
  );
}
