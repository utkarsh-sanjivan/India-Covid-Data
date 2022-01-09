import { lazy, useState, useEffect } from 'react';
import './index.scss';

import { retry, formatDateToText } from '../../../utils/commonFunctions';

const BarGraph = lazy(() => retry(() => import('../../molecules/BarGraph')));
const PieGraph = lazy(() => retry(() => import('../../molecules/PieGraph')));
const RangeButton = lazy(() => retry(() => import('../../molecules/RangeButtons')));
const SwitchButton = lazy(() => retry(() => import('../../atoms/SwitchButton')));

const Graphs = ({
  timeline,
  updatedAt,
  currentStatistic,
  pieLabel,
  pieDailyData,
  pieTotalData
}) => {
  const [timelineData, setTimelineData] = useState(null);
  const [graphData, setGraphData] = useState({
    active: null,
    confirmed: null,
    deaths: null,
    recovered: null
  });
  
  useEffect(() => {
    setTimelineData(timeline.slice(-30));
  }, [timeline]);

  useEffect(() => {
    if (timelineData) {
      setGraphData({
        active: timelineData.map(time => time.active_cases_daily),
        confirmed: timelineData.map(time => time.confirmed_daily),
        deaths: timelineData.map(time => time.death_daily),
        recovered: timelineData.map(time => time.recovered_daily)
      });
    }
  }, [timelineData])

  const handleChange = checked => {
    const suffix = checked? '_total': '_daily';
    setGraphData({
      active: timelineData.map(time => time[`active_cases${suffix}`]),
      confirmed: timelineData.map(time => time[`confirmed${suffix}`]),
      deaths: timelineData.map(time => time[`death${suffix}`]),
      recovered: timelineData.map(time => time[`recovered${suffix}`])
    });
  }

  const handleRangeChange = range => {
    if (!range) setTimelineData(timeline);
    setTimelineData(timeline.slice(-1*range));
  }

  return <div className="Graph">
    {
      !timelineData? <div>Loading...</div>
      :<>
        <div className="india-text">India</div>
        <div className="last-update-text">Last Updated on {formatDateToText(updatedAt)}</div>
        <div className="toogle-button-container">
          <div className="toggle-button-label">Daily</div>
          <SwitchButton 
            defaultChecked={false}
            onChange={handleChange}
            disabled={false}
            className={''}
            />
          <div className="toggle-button-label">Commulative</div>
        </div>
        <RangeButton 
          onClick={handleRangeChange}
          isSelected={0}
        />
        <BarGraph
          labels={timelineData.map(time => time.date)}
          data={graphData.confirmed}
          title="Confirmed"
          backgroundColor={'#ff073a99'}
          className={'confirmed-graph'}
        />
        <BarGraph
          labels={timelineData.map(time => time.date)}
          data={graphData.active}
          title="Active"
          backgroundColor={'#007bff'}
          className={'active-graph'}
        />
        <BarGraph
          labels={timelineData.map(time => time.date)}
          data={graphData.recovered}
          title="Recovered"
          backgroundColor={'#28a745'}
          className={'recovered-graph'}
        />
        <BarGraph
          labels={timelineData.map(time => time.date)}
          data={graphData.deaths}
          title="Deaths"
          backgroundColor={'#6c757d'}
          className={'death-graph'}
        />
        <PieGraph
          title={`${currentStatistic} Daily Comparison`}
          pieLabel={pieLabel}
          pieData={pieDailyData}
        />
        <PieGraph
          title={`${currentStatistic} Total Comparison`}
          pieLabel={pieLabel}
          pieData={pieTotalData}
        />
      </>
    }
  </div>
}

export default Graphs;
