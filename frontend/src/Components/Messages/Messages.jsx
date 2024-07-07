import Message from '../Message/Message';

import './Messages.css';

export default function Messages({ message }) {
  return (
    <div className="messages">
      {message.type !== null ? <Message message={message} /> : null}
    </div>
  );
}
