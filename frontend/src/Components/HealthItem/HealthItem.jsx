import { Line } from 'react-chartjs-2';

import './HealthItem.css';
import {
  COLOR_MODULE_ON,
  COLOR_MODULE_OFF,
  COLOR_LABEL_TEXT,
  COLOR_AXIS_BORDER,
  COLOR_DATASET_LINE,
  COLOR_DATASET_POINT_BACKGROUND,
  COLOR_DATASET_POINT_BORDER,
  COLOR_GRAPH_GRID,
} from '../../Styles/graphColors';

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

export default function HealthItem({ name, rawData = [] }) {
  const color = '#F5F5F5';

  // Set the display options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    // which plugins we want to activate
    plugins: {
      title: {
        display: true,
        text:
          rawData.length !== 0
            ? name.toUpperCase()
            : `${name.toUpperCase()} (No data)`,
        color: COLOR_LABEL_TEXT,
      },
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const dataIndex = tooltipItem.dataIndex;
            return messages[dataIndex]
              ? `Message: ${messages[dataIndex]}`
              : 'Message: no message available';
          },
        },
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          color: COLOR_LABEL_TEXT,
        },
        ticks: {
          color: COLOR_LABEL_TEXT,
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
        type: 'category',
        labels: ['ON', 'OFF'],
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 1,
        ticks: {
          color: COLOR_LABEL_TEXT,
        },
        border: {
          color: COLOR_AXIS_BORDER,
          width: 2,
        },
      },
    },
  };

  /// Process the rawData array ///

  const labels = rawData.map((dp) => {
    const date = new Date(dp.timestamp);
    const dateString = date.toLocaleString();

    return dateString;
  });

  const healthData = rawData.map((dp) => dp.status);

  const messages = rawData.map((dp) => dp.message);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Health',
        data: healthData.map((value) => (value === 'Healthy' ? 'ON' : 'OFF')),
        borderColor: COLOR_DATASET_LINE,
        fill: false,
        stepped: true,
        pointBackgroundColor: healthData.map((value) =>
          value === 'Healthy' ? COLOR_MODULE_ON : COLOR_MODULE_OFF
        ),
        pointBorderColor: healthData.map((value) =>
          value === 'Healthy' ? COLOR_MODULE_ON : COLOR_MODULE_OFF
        ),
        pointRadius: 3,
        pointHoverRadius: 7,
      },
    ],
  };

  return (
    <div className={`healthItem ${rawData.length !== 0 ? '' : 'noData'}`}>
      <Line options={options} data={data} />
    </div>
  );
}
