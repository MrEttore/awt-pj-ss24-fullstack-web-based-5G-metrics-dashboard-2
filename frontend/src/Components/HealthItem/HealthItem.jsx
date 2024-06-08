import "./HealthItem.css";

export default function HealthItem({ icon, status, moduleName }) {
  return (
    <div className={`itemHealth ${status ? "online" : ""}`}>
      <p>{moduleName}</p>
      <span className="icon">{icon}</span>
    </div>
  );
}
