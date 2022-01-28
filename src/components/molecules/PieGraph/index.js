import React from 'react-dom';
import {
  Chart as ChartJS,
  ArcElement
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { chartColors } from '../../../constant/color';

ChartJS.register(ArcElement);

const PieGraph = (props) => {
  const {
    title,
    pieData: data,
    pieLabel: labels
  } = props;
  const totalSum = data.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  const options = {
    legend: {
      display: false,
      position: "right"
    },
    plugins: {
      title: {
        display: true,
        text: title,
      },
      tooltip: {
        callbacks: {
            label: tooltipItem => {
              const currentData = tooltipItem.dataset.data[tooltipItem.dataIndex];
              const percentage = (currentData/totalSum)*100;
              return  `${tooltipItem.label}: ${percentage.toFixed(2)}%`;
           }
        }
      }  
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

  return <Pie
    className="donut-graph"
    options={options}
    data={mapData}
  />;
}

export default PieGraph;