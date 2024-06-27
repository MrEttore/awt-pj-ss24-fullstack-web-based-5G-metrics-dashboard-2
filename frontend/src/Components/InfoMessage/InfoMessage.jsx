import './InfoMessage.css';

export default function InfoMessage({ children }) {
  return (
    <div className="messageContainer">
      <p className="message">{children}</p>
    </div>
  );
}
