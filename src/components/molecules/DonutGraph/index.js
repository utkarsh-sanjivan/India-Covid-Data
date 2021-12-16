import React from 'react-dom';
import {
  Chart as ChartJS,
  ArcElement
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { chartColors } from '../../../constant/color';

ChartJS.register(ArcElement);

const DonutGraph = ({
  title,
  donughtData: data,
  donughtLabel: labels
}) => {
  const options = {
    legend: {
      display: true,
      position: "right"
    },
    plugins: {
      title: {
        display: true,
        text: title,
      },
    },
    elements: {
      arc: {
        borderWidth: 0
      }
    }
  };
  
  const mapData = {
    maintainAspectRatio: true,
    responsive: true,
    labels,
    datasets: [{
      data,
      backgroundColor: chartColors,
      hoverBackgroundColor: chartColors
    }]
  };

  return <Doughnut
    className="donut-graph"
    options={options}
    data={mapData}
  />;
}

export default DonutGraph;