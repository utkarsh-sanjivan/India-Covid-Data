import React, { lazy, useEffect, useState, Suspense } from 'react';

import { getTodayCovidData, getTotalCovidData } from '../../../api';
import { retry } from '../../../utils/commonFunctions';
import { mapColors } from '../../../constant/color';
import './index.scss';

const Banner = lazy(() => retry(() => import('../../molecules/Banner')));
const Graph = lazy(() => retry(() => import('../../organisms/Graph')));
const MapSwitcher = lazy(() => retry(() => import('../../organisms/MapSwitcher')));
const Table = lazy(() => retry(() => import('../../organisms/Table')));
const TableLoader = lazy(() => retry(() => import('../../molecules/TableLoader')));

// const pieStatisticObject = {
//   'active_cases': 'Active Cases',
//   'recovered': 'Recovered',
//   'death': 'Death',
//   'confirmed': 'Confirmed'
// }

function Homepage() {
  const [data, setData] = useState(null);
  const [className, setClassName] = useState('confirmed-banner');
  const [allData, setAllData] = useState(null);
  const [currentStatistics, setCurrentStatistics] = useState('confirmed');
  // const [currentStatistic, setCurrentStatistic] = useState('Confirmed');
  // const [pieLabel, setPieLabel] = useState([]);
  // const [pieDailyData, setPieDailyData] = useState([]);
  // const [pieTotalData, setPieTotalData] = useState([]);
  const [mapData, setMapData] = useState([]);
  const [mapColorArray, setMapColorArray] = useState(mapColors.confirmed)
  const [isDaily, setIsDaily] = useState(true);

  useEffect(() => {
    retry(getTodayCovidData).then(data => {
      // setPieLabel(data.states.map(state => state.state_name));
      // setPieDailyData(data.states.map(state => parseInt(state.confirmed_daily)));
      // setPieTotalData(data.states.map(state => parseInt(state.confirmed_total)));
      setMapData(data.states.map(state => { return { id: state.id, state: state.state_name, value: parseInt(state.confirmed_daily) } }));
      setData(data);
    });
    retry(getTotalCovidData).then(setAllData);
  }, []);

  const handleMapSwitch = statistics => {
    setClassName(`${statistics}-banner`);
    setCurrentStatistics(statistics);
    // setCurrentStatistic(pieStatisticObject[statistics]);
    // setPieDailyData(data.states.map(state => parseInt(state[`${statistics}_daily`])));
    // setPieTotalData(data.states.map(state => parseInt(state[`${statistics}_total`])));
    setMapColorArray(mapColors[statistics]);
    setMapData(
      data.states.map(state => {
        return {
          id: state.id,
          state: state.state_name,
          value: parseInt(state[isDaily? `${statistics}_total`: `${statistics}_daily`])
        } 
      })
    );
  }

  const handleIsDailySwitch = newIsDaily => {
    setIsDaily(newIsDaily);
    setMapData(
      data.states.map(state => {
        return {
          id: state.id,
          state: state.state_name,
          value: parseInt(state[newIsDaily? `${currentStatistics}_total`: `${currentStatistics}_daily`])
        } 
      })
    );
  }

  return <div className='Homepage'>
    <Banner className={className}/>
    {data && (
      <Suspense fallback={<TableLoader />}>
        <div className='homepage-left-pane'>
          <MapSwitcher data={data} handleMapSwitch={handleMapSwitch}/>
          <Table
            {...{data}}
            updatedAt={allData? allData.updatedAt: null}
          />
        </div>
        <div className='homepage-right-pane'>
          <Graph 
            timeline={allData? allData.timeline: []}
            updatedAt={allData? allData.updatedAt: null}
            // currentStatistic={currentStatistic}
            // pieLabel={pieLabel}
            // pieDailyData={pieDailyData}
            // pieTotalData={pieTotalData}
            mapData={mapData}
            mapColorArray={mapColorArray}
            handleIsDailySwitch={handleIsDailySwitch}
          />
        </div>
      </Suspense>
    )}
  </div>
}

export default Homepage;
