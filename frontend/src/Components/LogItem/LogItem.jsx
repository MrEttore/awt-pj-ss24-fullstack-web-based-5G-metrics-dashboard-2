import './LogItem.css';

export default function LogItem({ time, payload, logNr }) {
  return (
    <li className={`log ${logNr}`}>
      <div>
        {/* TODO: Wrap better the message */}
        <p className="logTime">{time}</p>
        <p className="logMessage">{payload}</p>
      </div>
    </li>
  );
}
