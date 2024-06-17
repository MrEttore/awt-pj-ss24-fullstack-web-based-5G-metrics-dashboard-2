import './Graph.css';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'iPhone15',
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Samsund S24',
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: '37446b', // Color of legend labels
        font: {
          weight: 'bold', // Make legend labels bold
        },
      },
    },
    title: {
      display: true,
      // text: '',
      color: '37446b', // Corrected hex color value
    },
  },
  scales: {
    x: {
      ticks: {
        color: '37446b', // Color of x-axis labels
      },
    },
    y: {
      ticks: {
        color: '37446b', // Color of y-axis labels
      },
    },
  },
};

export default function Graph({ metric }) {
  options.plugins.title.text = metric.toUpperCase();

  return (
    <div className="graph">
      <Line options={options} data={data} />
    </div>
  );
}
