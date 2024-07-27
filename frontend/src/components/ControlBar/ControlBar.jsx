import './ControlBar.css';

function ControlBar({ children }) {
  return (
    <div className="controlsContainer">
      {/* TABS and FORMS */}
      {children}
    </div>
  );
}

export default ControlBar;
