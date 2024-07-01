import '../Forms.css';

export default function TelemetryForm({
  selectedTab,
  isLiveDataOn,
  onSubmit,
  children,
}) {
  return (
    <form className={`${selectedTab}Form`} onSubmit={onSubmit}>
      {/* TIME + LIVE DATA + METRICS + BTNS */}
      {children}
    </form>
  );
}
