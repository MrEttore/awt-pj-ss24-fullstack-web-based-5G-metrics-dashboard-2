import React from 'react';
import './LogItem.css';

const LogItem = React.memo(({ time, payload, logNr, isLive }) => {
  const date = new Date(time);
  const dateString = date.toLocaleString();

  return (
    <li className={`log ${isLive ? 'live' : ''}`}>
      <div className="logContent">
        <p className="logTime">{dateString}</p>
        <p className="logMessage">{payload}</p>
      </div>
    </li>
  );
});

export default LogItem;
