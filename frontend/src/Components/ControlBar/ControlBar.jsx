import Forms from "../Forms/Forms";
import "./ControlBar.css";
import Tabs from "../Tabs/Tabs";

// TODO: build form elements in separate React components

function ControlBar({ selectedTab, onSelect }) {
  return (
    <div className="controlsContainer">
      {/* Tabs */}
      <Tabs selectedTab={selectedTab} onSelect={onSelect} />

      {/* Forms */}
      <Forms selectedTab={selectedTab} />
    </div>
  );
}

export default ControlBar;
