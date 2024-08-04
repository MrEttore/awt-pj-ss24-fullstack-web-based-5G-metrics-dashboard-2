import { useState, useCallback, useEffect } from 'react';

import ControlBar from '../ControlBar/ControlBar.jsx';
import Content from '../Content/Content.jsx';
import Tabs from '../Tabs/Tabs.jsx';
import Forms from '../Forms/Forms.jsx';
import InformationDisplay from '../InformationDisplay/InformationDisplay.jsx';
import Filters from '../Filters/Filters.jsx';
import Messages from '../Messages/Messages.jsx';
import { EMPTY_MESSAGE, DASHBOARD_UE_METRICS } from '../../utils/constants.js';
import { getGnbUes } from '../../utils/fetching.js';

import './Main.css';

function Main() {
  const [selectedTab, setSelectedTab] = useState('healthStatus');

  const [requestedData, setRequestedData] = useState(null);

  const [resetFlag, setResetFlag] = useState(false);

  const [isLiveDataToggled, setIsLiveDataToggled] = useState(false);

  const [message, setMessage] = useState(EMPTY_MESSAGE);

  const [error, setError] = useState(false);

  const [devices, setDevices] = useState([]);

  const [metrics, setMetrics] = useState([]);

  function handleSelectedTab(e) {
    setError(false);
    setSelectedTab(e.target.value);
    setRequestedData(null);
    setIsLiveDataToggled(false);
  }

  function handleLiveDataToggle() {
    setIsLiveDataToggled(!isLiveDataToggled);
    setResetFlag(false);
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

  // GET LIST OF AVAILABLE DEVICES

  useEffect(() => {
    const getDevices = async () => {
      try {
        const data = await getGnbUes();

        const deviceData = data.map((device) => {
          return { value: device, label: `UE${device}` };
        });

        setDevices(deviceData);
      } catch (err) {
        console.error(err.message);
      }
    };

    getDevices();
  }, []);

  // GET LIST OF AVAILABLE METRICS

  useEffect(() => {
    function getMetrics(metricsArray) {
      const metrics = metricsArray.map((m) => {
        return { value: m, label: m };
      });

      metrics.unshift({ value: 'all', label: 'All metrics' });

      setMetrics(metrics);
    }

    getMetrics(DASHBOARD_UE_METRICS);
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
          devices={devices}
          metrics={metrics}
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
        devices={devices}
      />
    </main>
  );
}

export default Main;
