import { HiOutlineStatusOnline } from "react-icons/hi";
import { HiOutlineStatusOffline } from "react-icons/hi";
import HealthItem from "../../HealthItem/HealthItem";
import "./DisplayHealth.css";
import { useState } from "react";

export default function DisplayHealth() {
  const [isOnline, setIsOnline] = useState(false);

  // TODO: API call to set the status of each component
  // ...

  return (
    <div className="gridHealth">
      {Array.from({ length: 13 }, (_, i) => (
        <HealthItem
          key={i}
          icon={
            isOnline ? <HiOutlineStatusOnline /> : <HiOutlineStatusOffline />
          }
          status={isOnline}
          moduleName={`Module_${i + 1}`}
        />
      ))}
    </div>
  );
}
