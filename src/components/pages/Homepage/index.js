import React, { lazy, useEffect, useState, Suspense } from 'react';

import { getTodayCovidData, getTotalCovidData } from '../../../api';
import { retry } from '../../../utils/commonFunctions';
import './index.scss';

const Table = lazy(() => retry(() => import('../../organisms/Table')));
const MapSwitcher = lazy(() => retry(() => import('../../organisms/MapSwitcher')));
const Graph = lazy(() => retry(() => import('../../organisms/Graph')));
const TableLoader = lazy(() => retry(() => import('../../molecules/TableLoader')));

function Homepage() {
  const [data, setData] = useState(null);
  const [allData, setAllData] = useState(null);
  const [donughtLabel, setDonughtLabel] = useState([]);
  const [donughtDailyData, setDonughtDailyData] = useState([]);
  const [donughtTotalData, setDonughtTotalData] = useState([]);

  useEffect(() => {
    retry(getTodayCovidData).then(data => {
      setDonughtLabel(data.states.map(state => state.state_name));
      setDonughtDailyData(data.states.map(state => parseInt(state.active_cases_daily)));
      setDonughtTotalData(data.states.map(state => parseInt(state.active_cases_total)));
      setData(data);
    });
    retry(getTotalCovidData).then(setAllData);
  }, []);

  const handleMapSwitch = statistics => {
    console.log(statistics);
    setDonughtDailyData(data.states.map(state => parseInt(state[`${statistics}_daily`])));
    setDonughtTotalData(data.states.map(state => parseInt(state[`${statistics}_total`])));
  }

  return <div className='Homepage'>
    {data && (
      <Suspense fallback={<TableLoader />}>
        <div className='homepage-left-pane'>
          <MapSwitcher data={data} handleMapSwitch={handleMapSwitch}/>
          <Table {...{data}}/>
        </div>
        <div className='homepage-right-pane'>
          <Graph 
            timeline={allData? allData.timeline: []}
            donughtLabel={donughtLabel}
            donughtDailyData={donughtDailyData}
            donughtTotalData={donughtTotalData}
          />
        </div>
      </Suspense>
    )}
  </div>
}

export default Homepage;
