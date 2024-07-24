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

  // Set state to control the reset flag
  const [resetFlag, setResetFlag] = useState(false);

  // Set state to control live data
  const [isLiveDataToggled, setIsLiveDataToggled] = useState(false);

  // Set state to control info/error messages
  const [message, setMessage] = useState(EMPTY_MESSAGE);

  // Set state to mark an error message
  const [error, setError] = useState(false);

  function handleSelectedTab(e) {
    setError(false);
    setSelectedTab(e.target.value);
    setRequestedData(null);
    setIsLiveDataToggled(false);
  }

  function handleLiveDataToggle() {
    setIsLiveDataToggled(!isLiveDataToggled);
  }

  function handleDataRequest(data) {
    setError(false);
    setResetFlag(false);
    setRequestedData(data);
  }

  function handleDataReset() {
    setRequestedData(null);
    setResetFlag(true);
  }

  const handleMessage = useCallback((msg) => {
    if (msg.type === 'error') setError(true);
    setMessage(msg);
  }, []);

  return (
    <main className="main">
      <ControlBar>
        <Tabs selectedTab={selectedTab} onSelectTab={handleSelectedTab} />
        <Forms
          selectedTab={selectedTab}
          onDataRequest={handleDataRequest}
          onDataReset={handleDataReset}
          isLiveDataToggled={isLiveDataToggled}
          onToggleLiveData={handleLiveDataToggle}
        />
      </ControlBar>

      <InformationDisplay>
        <Filters filters={requestedData} isThereError={error} />
        <Messages message={message} />
      </InformationDisplay>

      <Content
        selectedTab={selectedTab}
        requestedData={requestedData}
        onMessage={handleMessage}
        resetFlag={resetFlag}
        isLiveDataToggled={isLiveDataToggled}
      />
    </main>
  );
}

export default Main;
