import React, { useEffect, useState } from 'react';
import './LogItem.css';

const LogItem = React.memo(({ time, payload, logNr }) => {
  // const [isEntering, setIsEntering] = useState(true);

  // useEffect(() => {
  //   setIsEntering(true);
  //   const timer = setTimeout(() => setIsEntering(false), 1000);
  //   return () => clearTimeout(timer);
  // }, [time, payload]);

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
