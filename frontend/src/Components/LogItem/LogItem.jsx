import './LogItem.css';

export default function LogItem({ time, payload, logNr }) {
  return (
    <li className={`log ${logNr}`}>
      <div>
        {time} | {payload}
      </div>
    </li>
  );
}
