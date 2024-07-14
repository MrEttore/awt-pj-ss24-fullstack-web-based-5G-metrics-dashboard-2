import { useState, useEffect } from 'react';

import LogItem from '../../LogItem/LogItem';
import Loader from '../../Loader/Loader';
import Message from '../../Message/Message';

import './DisplayLogs.css';

export default function DisplayLogs({ requestedData, onMessage, resetFlag }) {
  const [logsStatus, setLogsStatus] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="contentLogs">
      {isLoading && <Loader>Loading Logs ...</Loader>}
      {!isLoading && !requestedData && (
        <Message
          message={{
            type: 'info',
            text: 'No logs to display.',
          }}
        />
      )}
      {!isLoading && requestedData && (
        <LogItem
          requestedData={requestedData}
          resetFlag={resetFlag}
        />
      )}
    </div>
  );
}