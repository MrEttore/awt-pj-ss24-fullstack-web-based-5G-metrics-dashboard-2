import './ToggleLiveDataSwitch.css';

export default function ToggleLiveDataSwitch({ label, isToggled, onToggle }) {
  return (
    <div className="toggleSwitchContainer">
      <label htmlFor="toggleSwitch">{label}</label>

      <div className="toggleBtn" id="toggleSwitch">
        <input
          type="checkbox"
          id="toggle"
          className="toggleInput"
          checked={isToggled}
          onChange={onToggle}
        />
        <label htmlFor="toggle" className="toggleLabel"></label>
      </div>
    </div>
  );
}
