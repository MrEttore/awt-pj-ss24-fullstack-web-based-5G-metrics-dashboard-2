import "./Tab.css";

export default function Tab({ value, onSelect, selectedTab, children }) {
  return (
    <button
      className={`tab ${selectedTab === value ? "selected" : ""}`}
      value={value}
      onClick={onSelect}
    >
      {children}
    </button>
  );
}
