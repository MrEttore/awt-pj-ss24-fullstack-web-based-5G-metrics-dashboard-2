import React from 'react';
import './LogItem.css';

const LogItem = React.memo(({ time, payload, logNr }) => {
  const date = new Date(time);
  const dateString = date.toLocaleString();

  return (
    <li className={`log ${logNr}`}>
      <div className="logContent">
        <p className="logTime">{dateString}</p>
        <p className="logMessage">{payload}</p>
      </div>
    </li>
  );
});

export default LogItem;
