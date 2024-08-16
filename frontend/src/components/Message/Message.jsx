import { IoWarningOutline } from 'react-icons/io5';
import { BiErrorAlt } from 'react-icons/bi';
import { FiInfo } from 'react-icons/fi';
import { HiStatusOnline } from 'react-icons/hi';
import { LuSearchCheck } from 'react-icons/lu';
import { LuSearchX } from 'react-icons/lu';
import './Message.css';

export default function Message({ message }) {
  if (!message) return null;

  return (
    <>
      {message.type === 'warning' && (
        <div className="warning">
          <span className="messageIcon">
            <IoWarningOutline />
          </span>
          <p className="messageText">{message.text}</p>
        </div>
      )}

      {message.type === 'error' && (
        <div className="error">
          <span className="messageIcon">
            <BiErrorAlt />
          </span>
          <p className="messageText">{message.text}</p>
        </div>
      )}

      {message.type === 'info' && (
        <div className="info">
          <span className="messageIcon">
            <FiInfo />
          </span>
          <p className="messageText">{message.text}</p>
        </div>
      )}

      {message.type === 'success-live-data' && (
        <div className="success">
          <span className="messageIcon">
            <HiStatusOnline />
          </span>
          <p className="messageText">{message.text}</p>
        </div>
      )}

      {message.type === 'success-queried-data-found' && (
        <div className="successWithData">
          <span className="messageIcon">
            <LuSearchCheck />
          </span>
          <p className="messageText">{message.text}</p>
        </div>
      )}

      {message.type === 'success-queried-data-not-found' && (
        <div className="successWithNoData">
          <span className="messageIcon">
            <LuSearchX />
          </span>
          <p className="messageText">{message.text}</p>
        </div>
      )}
    </>
  );
}
