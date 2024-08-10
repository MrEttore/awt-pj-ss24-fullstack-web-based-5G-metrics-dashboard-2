import { Line } from 'react-chartjs-2';

import './HealthItem.css';
import {
  COLOR_MODULE_ON,
  COLOR_MODULE_STARTING,
  COLOR_MODULE_OFF,
  COLOR_MODULE_NOT_IMPLEMENTED,
  COLOR_MODULE_UNKNOWN,
  COLOR_LABEL_TEXT,
  COLOR_LABEL_TEXT_NO_DATA,
  COLOR_AXIS_BORDER,
  COLOR_DATASET_LINE,
  COLOR_GRAPH_GRID,
} from '../../styles/graph-colors';

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

export default function HealthItem({ name, rawData = [], isLive }) {
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
        type: 'category',
        labels: ['HEALTHY', 'STARTING', 'STOPPED', 'NOT IMP.'],
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 1,
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

  const labels = rawData.map((dp) => {
    const date = new Date(dp.timestamp);
    const dateString = date.toLocaleString();

    return dateString;
  });

  const healthData = rawData.map((dp) => dp.status);

  const messages = rawData.map((dp) => dp.message);

  const statusMapping = {
    Healthy: 'HEALTHY',
    Starting: 'STARTING',
    Stopped: 'STOPPED',
    NotImplemented: 'NOT IMP.',
  };

  const colorMapping = {
    Healthy: COLOR_MODULE_ON,
    Starting: COLOR_MODULE_STARTING,
    Stopped: COLOR_MODULE_OFF,
    NotImplemented: COLOR_MODULE_NOT_IMPLEMENTED,
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Health',
        data: healthData.map((value) => statusMapping[value] || 'UNKNOWN'),
        borderColor: COLOR_DATASET_LINE,
        fill: false,
        stepped: true,
        pointBackgroundColor: healthData.map(
          (value) => colorMapping[value] || COLOR_MODULE_UNKNOWN
        ),
        pointBorderColor: healthData.map(
          (value) => colorMapping[value] || COLOR_MODULE_UNKNOWN
        ),
        pointRadius: healthData.length <= 10 ? 4 : 2.5,
        pointHoverRadius: 7,
      },
    ],
  };

  return (
    <div className={`healthItem ${isLive ? 'live' : ''}`}>
      <Line options={options} data={data} />
    </div>
  );
}
