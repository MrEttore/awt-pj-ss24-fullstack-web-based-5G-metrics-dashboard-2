import Tab from "../Tab/Tab";
import { TbActivityHeartbeat } from "react-icons/tb";
import { TbMobiledata } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import "./Tabs.css";

export default function Tabs({ selectedTab, onSelect }) {
  return (
    <div className="tabContainer">
      <Tab
        value="healthStatus"
        icon={<TbActivityHeartbeat />}
        onSelect={onSelect}
        selectedTab={selectedTab}
      >
        Health Status
      </Tab>
      <Tab
        value="telemetry"
        icon={<TbMobiledata />}
        onSelect={onSelect}
        selectedTab={selectedTab}
      >
        Telemetry
      </Tab>
      <Tab
        value="logs"
        icon={<FaCode />}
        onSelect={onSelect}
        selectedTab={selectedTab}
      >
        Logs
      </Tab>
    </div>
  );
}
