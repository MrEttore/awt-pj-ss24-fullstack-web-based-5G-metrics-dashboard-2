import './DisplayTelemetry.css';
import Graph from '../../Graph/Graph';

const metrics = [
  'dlBytes',
  'dlMcs',
  'dlBler',
  'ulBytes',
  'ulMcs',
  'ulBler',
  'ri',
  'pmi',
  'phr',
  'pcmax',
  'rsrq',
  'sinr',
];

export default function DisplayTelemetry() {
  return (
    <div className="contentTelemetry">
      {metrics.map((m, i) => {
        return <Graph metric={m} key={i} />;
      })}
    </div>
  );
}
