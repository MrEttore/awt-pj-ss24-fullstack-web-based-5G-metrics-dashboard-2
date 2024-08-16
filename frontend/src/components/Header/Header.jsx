import React, { useState, useEffect } from 'react';

import { TfiDashboard } from 'react-icons/tfi';

import './Header.css';

function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <div className="leftColumn">
        <TfiDashboard />
      </div>
      <div className="centerColumn">
        <h1 className="title">5G Metric Dashboard</h1>
      </div>
      <div className="rightColumn">
        <p className="date">
          {time.toLocaleDateString()} | {time.toLocaleTimeString()}
        </p>
      </div>
    </header>
  );
}

export default Header;
