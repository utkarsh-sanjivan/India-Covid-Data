import React from 'react';
import {Line} from 'react-chartjs-2';
import { 
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title
} from 'chart.js';

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title
);

const LineGraph = ({
  dataValue,
  labels
})=> {
  const data = { 
    labels,
    datasets: [
      {
        label: 'Dataset of Months',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dataValue
      }
    ]
  };

  const option = {
    type: 'line',
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Chart Title'
        }
      },
      scales: {
        x: {
          type: 'linear'
        },
        y: {
          type: 'linear'
        }
      }
    }
  }

  return <Line data={data} option={option}/>
}

export default LineGraph;