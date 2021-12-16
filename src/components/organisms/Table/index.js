import React, { useState, useEffect } from 'react';
import {
  ArrowUpIcon,
  ArrowDownIcon,
  SortAscIcon,
  SortDescIcon
} from '@primer/octicons-react';
import { formatNumber, abbreviateNumber } from '../../../utils/commonFunctions';

const TABLE_HEADER = [
  { name: 'State/UT', sortId: 'regionName' },
  { name: 'Confirmed', sortId: 'confirmed_total' },
  { name: 'Active', sortId: 'active_cases_total' },
  { name: 'Recovered', sortId: 'recovered_total' },
  { name: 'Deceased', sortId: 'death_total' }
];

const Table = ({
  data
}) => {
  const [sortData, setSortData] = useState({
    sortColumn: 'confirmed_total',
    isAscending: false
  });
  const [stateData, setStateData] = useState({ states: [] });

  useEffect(() => {
    const viewData = [];
    const tempStates = stateData.states.length? stateData.states: data.states;
    if (stateData.states.length === 0) {
      tempStates.forEach(state => {
        viewData.push(state.state_name);
        viewData.push({ daily: state.confirmed_daily, total: state.confirmed_total, varyingIcons: false, className: 'confirmed-daily' });
        viewData.push({ daily: state.active_cases_daily, total: state.active_cases_total, varyingIcons: true, className: state.active_cases_daily>0? 'active-cases-daiy-up': 'active-cases-daiy-down' });
        viewData.push({ daily: state.recovered_daily, total: state.recovered_total, varyingIcons: false, className: 'recovered-daily' });
        viewData.push({ daily: state.death_daily, total: state.death_total, varyingIcons: false, className: 'death-daily' });
      });
      const tempData = { ...data, viewData };
      setStateData(tempData);
    }
  }, [data, stateData.states, stateData, setStateData]);

  const handleSortClick = sortId => {
    const viewData = [];
    const states = [ ...stateData.states ];
    if (sortData.sortColumn !== sortId) {
      setSortData({ sortColumn: sortId, isAscending: true });
      if (sortId === 'regionName') {
        states.sort((firstEl, secondEl) => {
          const val = firstEl.state_name.localeCompare(secondEl.state_name);
          return val;
        });
      } else {
        states.sort((firstEl, secondEl) => {
          if(parseInt(firstEl[sortId]) > parseInt(secondEl[sortId])) return 1;
          if(parseInt(firstEl[sortId]) < parseInt(secondEl[sortId])) return -1;
          return 0;
        });
      }
    } else {
      setSortData({ sortColumn: sortData.sortColumn, isAscending: !sortData.isAscending });
      states.reverse();
    }
    states.forEach(state => {
      viewData.push(state.state_name);
      viewData.push({ daily: state.confirmed_daily, total: state.confirmed_total, varyingIcons: false, className: 'confirmed-daily' });
      viewData.push({ daily: state.active_cases_daily, total: state.active_cases_total, varyingIcons: true, className: state.active_cases_daily>0? 'active-cases-daiy-up': 'active-cases-daiy-down' });
      viewData.push({ daily: state.recovered_daily, total: state.recovered_total, varyingIcons: false, className: 'recovered-daily' });
      viewData.push({ daily: state.death_daily, total: state.death_total, varyingIcons: false, className: 'death-daily' });
    });
    setStateData({ ...stateData, states, viewData });
  };

  return <div className="table fadeInUp">
    {TABLE_HEADER.map(header =>
      <div
        className="cell heading"
        style={{ textAlign: 'start', justifyContent: 'space-around' }}
        onClick={handleSortClick.bind(this, header.sortId)}
      >
        <div>{header.name}</div>
        {
          sortData.sortColumn === header.sortId && (
            <div className={'sort-icon'}>
              {sortData.isAscending ? (
                <SortAscIcon size={12} />
              ) : (
                <SortDescIcon size={12} />
              )}
            </div>)
        }
      </div>
    )}

    {stateData.viewData && stateData.viewData.map(state => {
      return state.daily || state.total?
        <div className={`cell body`} >
          <div key={state.total} className={state.className}>
            {state.daily?
              <>
                {state.varyingIcons?
                  state.daily>0? <ArrowUpIcon size={16} />: <ArrowDownIcon size={16} />
                : <ArrowUpIcon size={16} />}
                {abbreviateNumber(state.daily)}
              </>
            : null}
          </div>
          <div>{formatNumber(state.total)}</div>
        </div>
        : <div className="cell body" style={{ justifyContent: 'center' }}>
          <div key={state} style={{ textAlign: 'start' }}>{state}</div>
        </div>
    })}
    </div>
}

export default Table;
