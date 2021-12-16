import axios from 'axios';

export async function getTodayCovidData() {
  const states_data =  await axios.get('https://www.mohfw.gov.in/data/datanew.json');
  const india_data = states_data.data.splice(-1)[0];
  const responseObj = {
    confirmed_total: india_data.new_positive,
    confirmed_daily: india_data.new_positive-india_data.positive,
    active_cases_total: india_data.new_active,
    active_cases_daily: india_data.new_active - india_data.active,
    recovered_total: india_data.new_cured,
    recovered_daily: india_data.new_cured - india_data.cured,
    death_total: india_data.new_death,
    death_daily: india_data.new_death - india_data.death,
    states: []
  }
  states_data.data.forEach(state => {
    responseObj.states.push({
      state_name: state.state_name,
      state_code: state.state_code,
      confirmed_total: state.new_positive,
      confirmed_daily: state.new_positive - state.positive,
      active_cases_total: state.new_active,
      active_cases_daily: state.new_active - state.active,
      recovered_total: state.new_cured,
      recovered_daily: state.new_cured - state.cured,
      death_total: state.new_death,
      death_daily: state.new_death - state.death
    });
  });

  responseObj.states.sort((firstEl, secondEl) => {
    if(parseInt(firstEl['confirmed_total']) < parseInt(secondEl['confirmed_total'])) return 1;
    if(parseInt(firstEl['confirmed_total']) > parseInt(secondEl['confirmed_total'])) return -1;
    return 0;
  });

  return responseObj;
}

export async function getTotalCovidData() {
  const alldata =  await axios.get('https://corona-api.com/countries/IN');
  const responseObj = alldata.data.data;
  const timeline = responseObj.timeline.reverse().map((time, index) => {
    const active_cases_daily = index>0? time.active - responseObj.timeline[index-1].active :time.active;
    return {
      date: time.date,
      dateObj: time.updated_at,
      confirmed_total: time.confirmed,
      confirmed_daily: time.new_confirmed,
      active_cases_total: time.active,
      active_cases_daily,
      recovered_total: time.recovered,
      recovered_daily: time.new_recovered,
      death_total: time.deaths,
      death_daily: time.new_deaths
    }
  });
  return {
    code: responseObj.code,
    name: responseObj.name,
    population: responseObj.population,
    timeline
  };
}
