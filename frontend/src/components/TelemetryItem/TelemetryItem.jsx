import { Line } from 'react-chartjs-2';

import './TelemetryItem.css';
import {
  COLOR_LABEL_TEXT,
  COLOR_LABEL_TEXT_NO_DATA,
  COLOR_AXIS_BORDER,
  COLOR_DATASET_LINE,
  COLOR_GRAPH_GRID,
  COLOR_MODULE_ON,
} from '../../styles/graphColors';

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

// Register Chart.js components and scales
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function TelemetryItem({ name, rawData = [] }) {
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
      // TODO: legend needed?
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

  const labelsX = rawData.map((dp) => {
    const date = new Date(dp.timestamp);
    const dateString = date.toLocaleString();

    return dateString;
  });

  const telemetryData = rawData.map((dp) => dp.value);

  const data = {
    labels: labelsX,
    datasets: [
      {
        label: name,
        data: telemetryData,
        borderColor: COLOR_DATASET_LINE,
        fill: false,
        stepped: false,
        pointBackgroundColor: COLOR_MODULE_ON,
        pointBorderColor: COLOR_MODULE_ON,
        pointRadius: telemetryData.length <= 10 ? 4 : 2.5,
        pointHoverRadius: 5,
      },
    ],
  };

  return (
    <div className={`telemetryItem ${rawData.length !== 0 ? '' : 'noData'}`}>
      <Line options={options} data={data} />
    </div>
  );
}
