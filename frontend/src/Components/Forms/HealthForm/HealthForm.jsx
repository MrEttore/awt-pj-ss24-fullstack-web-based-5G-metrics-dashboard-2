import '../Forms.css';

export default function HealthForm({ selectedTab, onSubmit, children }) {
  return (
    <form className={`${selectedTab}Form`} onSubmit={onSubmit}>
      {/* TIME + LIVE DATA + BTNS */}
      {children}
    </form>
  );
}
