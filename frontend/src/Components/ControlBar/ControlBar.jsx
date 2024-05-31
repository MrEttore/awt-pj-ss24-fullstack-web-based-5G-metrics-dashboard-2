import Form from "../Form/Form";

import "./ControlBar.css";
import Tabs from "../Tabs/Tabs";

// TODO: build form elements in separate React components

function ControlBar({ selectedTab, onSelect }) {
  return (
    <div className="controlsContainer">
      {/* Tabs */}
      <Tabs selectedTab={selectedTab} onSelect={onSelect} />

      {/* Forms */}
      <Form selectedTab={selectedTab} />
    </div>
  );
}

export default ControlBar;
