import { RiBaseStationLine } from 'react-icons/ri';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';

import './LabelsTelemetryData.css';

export default function LabelsTelemetryData() {
  return (
    <div className="labelsTelemetry">
      <div className="labelLeft">
        <p className="text">
          <RiBaseStationLine className="icon" aria-hidden="true" /> General
          telemetry data
        </p>
      </div>

      <div className="labelRight">
        <p className="text">
          <HiOutlineDevicePhoneMobile className="icon" aria-hidden="true" />{' '}
          Device specific telemetry data
        </p>
      </div>
    </div>
  );
}
