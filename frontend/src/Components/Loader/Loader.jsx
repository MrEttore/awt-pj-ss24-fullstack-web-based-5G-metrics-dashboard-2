import './Loader.css';

export default function Loader({ children }) {
  return (
    <div className="loader">
      <p>{children}</p>
    </div>
  );
}
