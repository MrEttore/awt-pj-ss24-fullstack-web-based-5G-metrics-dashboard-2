import './Header.css';
import { useState, useEffect } from 'react';

function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    // Clear the interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <h1>5G Metric Dashboard</h1>
      <p className="date">
        {time.toLocaleDateString() + ' | ' + time.toLocaleTimeString()}
      </p>
    </header>
  );
}

export default Header;
