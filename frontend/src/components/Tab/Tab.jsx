import "./Tab.css";

export default function Tab({ value, onSelect, selectedTab, icon, children }) {
  return (
    <button
      className={`tab ${selectedTab === value ? "selected" : ""}`}
      value={value}
      onClick={onSelect}
    >
      <span className="tabIcon">{icon}</span>
      {children}
    </button>
  );
}
