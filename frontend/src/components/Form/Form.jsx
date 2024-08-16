import './Form.css';

export default function Form({ selectedTab, onSubmit, children }) {
  return (
    <form className={`${selectedTab}Form`} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
