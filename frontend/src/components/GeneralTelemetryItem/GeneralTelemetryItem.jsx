import { Line } from 'react-chartjs-2';
import {
  COLOR_LABEL_TEXT,
  COLOR_LABEL_TEXT_NO_DATA,
  COLOR_AXIS_BORDER,
  COLOR_DATASET_LINE,
  COLOR_GRAPH_GRID,
  COLOR_MODULE_ON,
} from '../../styles/graph-colors';
import './GeneralTelemetryItem.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const pointRadiusMapping = (dataPoints) => {
  if (dataPoints <= 10) {
    return 3.5;
  } else if (dataPoints <= 50) {
    return 2;
  } else if (dataPoints <= 75) {
    return 1.8;
  } else if (dataPoints <= 100) {
    return 1.5;
  } else {
    return 0.5;
  }
};

export default function GeneralTelemetryItem({ name, rawData = [], isLive }) {
  const uniqueLablesY = Array.from(new Set(rawData.map((dp) => dp.value)));

  const allValuesAreStrings = rawData.every(
    (dp) => typeof dp.value === 'string'
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: name.toUpperCase(),
        color:
          rawData.length !== 0 ? COLOR_LABEL_TEXT : COLOR_LABEL_TEXT_NO_DATA,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          color:
            rawData.length !== 0 ? COLOR_LABEL_TEXT : COLOR_LABEL_TEXT_NO_DATA,
        },
        ticks: {
          color:
            rawData.length !== 0 ? COLOR_LABEL_TEXT : COLOR_LABEL_TEXT_NO_DATA,
        },
        border: {
          color: COLOR_AXIS_BORDER,
          width: 2,
        },
        grid: {
          display: true,
          color: COLOR_GRAPH_GRID,
          lineWidth: 1,
        },
      },
      y: {
        display: true,
        type: allValuesAreStrings ? 'category' : 'linear',
        labels: allValuesAreStrings ? uniqueLablesY : undefined,
        position: 'left',
        ticks: {
          color:
            rawData.length !== 0 ? COLOR_LABEL_TEXT : COLOR_LABEL_TEXT_NO_DATA,
        },
        border: {
          color: COLOR_AXIS_BORDER,
          width: 2,
        },
      },
    },
  };

  const allTimestamps = rawData.map((dp) => dp.timestamp);

  const uniqueTimestamps = Array.from(new Set(allTimestamps));

  const uniqueTimestampsStrings = uniqueTimestamps.map((timestamp) =>
    new Date(timestamp).toLocaleString()
  );

  const telemetryData = rawData.map((dp) => dp.value);

  const data = {
    labels: uniqueTimestampsStrings,
    datasets: [
      {
        label: name,
        data: telemetryData,
        borderColor: COLOR_DATASET_LINE,
        borderWidth: 1.5,
        fill: false,
        stepped: false,
        pointBackgroundColor: COLOR_MODULE_ON,
        pointBorderColor: COLOR_MODULE_ON,
        pointRadius: pointRadiusMapping(telemetryData.length),
        pointHoverRadius: 5,
      },
    ],
  };

  return (
    <div className={`generalTelemetryItem ${isLive ? 'live' : ''}`}>
      <Line options={options} data={data} />
    </div>
  );
}
