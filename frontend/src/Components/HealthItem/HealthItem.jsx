import './HealthItem.css';
import { HiOutlineStatusOnline } from 'react-icons/hi';
import { HiOutlineStatusOffline } from 'react-icons/hi';

// TODO: display the messsage

export default function HealthItem({ moduleName, status, message }) {
  return (
    <div className={`itemHealth ${status === 'Healthy' ? 'online' : ''}`}>
      <p className="nameString">{moduleName}</p>
      <div className="status">
        <p className="statusString">{status}</p>
        <span>
          {status === 'Healthy' ? (
            <HiOutlineStatusOnline />
          ) : (
            <HiOutlineStatusOffline />
          )}
        </span>
      </div>
    </div>
  );
}
