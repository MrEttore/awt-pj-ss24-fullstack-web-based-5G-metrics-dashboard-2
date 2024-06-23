import { useState } from 'react';

import ControlBar from '../ControlBar/ControlBar.jsx';
import Content from '../Content/Content.jsx';
import Tabs from '../Tabs/Tabs.jsx';
import Forms from '../Forms/Forms.jsx';

import './Main.css';

function Main() {
  // Set state to control the tab selection
  const [selectedTab, setSelectedTab] = useState('healthStatus');

  // Set state to control the data requests
  const [requestedData, setRequestedData] = useState(null);

  function handleSelectedTab(e) {
    setSelectedTab(e.target.value);
  }

  function handleDataRequest(data) {
    setRequestedData(data);
  }

  return (
    <main className="main">
      <ControlBar>
        {/* TABS */}
        <Tabs selectedTab={selectedTab} onSelectTab={handleSelectedTab} />

        {/* FORMS */}
        <Forms selectedTab={selectedTab} onDataRequest={handleDataRequest} />
      </ControlBar>

      {/* CONTENT */}
      <Content selectedTab={selectedTab} requestedData={requestedData} />
    </main>
  );
}

export default Main;
