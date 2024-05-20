import { useEffect, useState } from "react";
import "./Footer.css";

function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  return (
    <footer className="footer">
      <p className="date">
        {time.toLocaleDateString() + " | " + time.toLocaleTimeString()}
      </p>
    </footer>
  );
}

export default Footer;
