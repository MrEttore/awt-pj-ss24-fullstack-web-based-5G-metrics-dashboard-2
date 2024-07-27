import Tab from '../Tab/Tab';

import { TbActivityHeartbeat } from 'react-icons/tb';
import { TbMobiledata } from 'react-icons/tb';
import { FaCode } from 'react-icons/fa6';

import './Tabs.css';

export default function Tabs({ selectedTab, onSelectTab }) {
  return (
    <div className="tabContainer">
      {/* TAB */}
      <Tab
        value="healthStatus"
        icon={<TbActivityHeartbeat />}
        onSelect={onSelectTab}
        selectedTab={selectedTab}
      >
        Cn5g modules
      </Tab>
      <Tab
        value="telemetry"
        icon={<TbMobiledata />}
        onSelect={onSelectTab}
        selectedTab={selectedTab}
      >
        Telemetry
      </Tab>
      <Tab
        value="logs"
        icon={<FaCode />}
        onSelect={onSelectTab}
        selectedTab={selectedTab}
      >
        Logs
      </Tab>
    </div>
  );
}
