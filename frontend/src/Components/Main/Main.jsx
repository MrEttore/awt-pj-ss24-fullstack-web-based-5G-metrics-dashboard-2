import { useState, useCallback } from 'react';

import ControlBar from '../ControlBar/ControlBar.jsx';
import Content from '../Content/Content.jsx';
import Tabs from '../Tabs/Tabs.jsx';
import Forms from '../Forms/Forms.jsx';
import InformationDisplay from '../InformationDisplay/InformationDisplay.jsx';
import Filters from '../Filters/Filters.jsx';
import Messages from '../Messages/Messages.jsx';
import { EMPTY_MESSAGE } from '../../Utils/constants.js';

import './Main.css';

function Main() {
  // Set state to control the tab selection
  const [selectedTab, setSelectedTab] = useState('healthStatus');

  // Set state to control the data requests
  const [requestedData, setRequestedData] = useState(null);

  // Set state to control info/error messages
  const [message, setMessage] = useState(EMPTY_MESSAGE);

  function handleSelectedTab(e) {
    setSelectedTab(e.target.value);
    setRequestedData(null);
  }

  function handleDataRequest(data) {
    setRequestedData(data);
  }

  function handleDataReset() {
    setRequestedData(null);
  }

  const handleMessage = useCallback((msg) => {
    setMessage(msg);
  }, []);

  return (
    <main className="main">
      <ControlBar>
        {/* TABS */}
        <Tabs selectedTab={selectedTab} onSelectTab={handleSelectedTab} />

        {/* FORMS */}
        <Forms
          selectedTab={selectedTab}
          onDataRequest={handleDataRequest}
          onDataReset={handleDataReset}
        />

        {/* MESSAGES/ FILTERS */}
        <InformationDisplay>
          <Filters />
          <Messages message={message} />
        </InformationDisplay>
        {/* ... */}
      </ControlBar>

      {/* CONTENT */}
      <Content
        selectedTab={selectedTab}
        requestedData={requestedData}
        onMessage={handleMessage}
      />
    </main>
  );
}

export default Main;
