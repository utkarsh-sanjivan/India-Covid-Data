import React, { lazy, useState, useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineController,
  LineElement,
  PointElement
} from 'chart.js';

import { retry } from '../../../utils/commonFunctions';

const SwitchButton = lazy(() => retry(() => import('../../atoms/SwitchButton')));

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineController,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const BarGraph = ({
  data,
  title: label,
  labels,
  backgroundColor,
  className
}) => {
  const [ isBar, setIsBar ] = useState(false);

  const options = isBar? {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: label,
      },
    },
  }: {
    type: 'line',
    options: {
      plugins: {
        title: {
          display: true,
          text: label
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
  };
  
  const mapData = isBar? {
    labels,
    datasets: [{
      label,
      data,
      backgroundColor,
    }],
  }: { 
    labels,
    datasets: [
      {
        label,
        fill: false,
        lineTension: 0.1,
        backgroundColor,
        borderColor: backgroundColor,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: backgroundColor,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: backgroundColor,
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data
      }
    ]
  };

  return <div className='line-bar-graph-container'>
    {isBar?
      <Bar
        className={`bar-graph ${className}`}
        options={options}
        data={mapData}
      />
      : <Line
        className={`bar-graph ${className}`}
        data={mapData}
        option={options}
      />}
    <div className={'line-bar-switch'}>
      <div className="toggle-button-label">Line</div>
      <SwitchButton 
        defaultChecked={false}
        onChange={() => setIsBar(!isBar)}
        disabled={false}
        className={'line-bar-switch'}
        />
      <div className="toggle-button-label">Bar</div>
    </div>
  </div>;
}

export default BarGraph;