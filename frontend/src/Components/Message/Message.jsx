import './Message.css';

export default function Message({ message }) {
  if (!message) return null;

  return (
    <div
      className={`message ${message.type === 'warning' ? 'warning' : 'error'}`}
    >
      <p className="messageText">{message.text}</p>
    </div>
  );
}
