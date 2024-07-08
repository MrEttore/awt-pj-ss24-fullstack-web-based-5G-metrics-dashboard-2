import './LogItem.css';

export default function LogItem({ time, payload, logNr }) {
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
}
