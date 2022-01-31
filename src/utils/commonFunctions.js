import {
  getYear,
  format,
  formatISO,
  subDays,
  parseISO
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { stateIds } from '../constant';

const numberFormatter = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 1 });

export const retry = (fn, retriesLeft = 5, interval = 1000) => {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            reject(error);
            return;
          }

          // Passing on "reject" is the important part
          retry(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });
}

export const getIndiaDate = () => {
  return utcToZonedTime(new Date(), 'Asia/Kolkata');
};

export const getIndiaDateISO = () => {
  return formatISO(getIndiaDate(), {representation: 'date'});
};

export const getIndiaDateYesterday = () => {
  return subDays(getIndiaDate(), 1);
};

export const getIndiaDateYesterdayISO = () => {
  return formatISO(getIndiaDateYesterday(), {representation: 'date'});
};

export const formatDateToText = date => {
  const dateObj = date? new Date(date): new Date();
  const second = format(dateObj, 's')<9? `0${format(dateObj, 's')}`: format(dateObj, 's');
  const minute = format(dateObj, 'm')<9? `0${format(dateObj, 'm')}`: format(dateObj, 'm');
  const hour = format(dateObj, 'h')<9? `0${format(dateObj, 'h')}`: format(dateObj, 'h');
  const amPm = format(dateObj, 'a');
  const day = format(dateObj, 'dd');
  const month = format(dateObj, 'LLLL');
  const year = getYear(dateObj).toString().slice(-2);
  return `${day} ${month} ${year}, ${hour}:${minute}:${second} ${amPm}`;
}

export const abbreviateNumber = (number) => {
  const numberCleaned = Math.round(Math.abs(number));
  if (numberCleaned < 1e3) return numberFormatter.format(Math.floor(number));
  else if (numberCleaned >= 1e3 && numberCleaned < 1e5)
    return numberFormatter.format(number / 1e3) + 'K';
  else if (numberCleaned >= 1e5 && numberCleaned < 1e7)
    return numberFormatter.format(number / 1e5) + 'L';
  else if (numberCleaned >= 1e7 && numberCleaned < 1e10)
    return numberFormatter.format(number / 1e7) + 'Cr';
  else if (numberCleaned >= 1e10 && numberCleaned < 1e14)
    return numberFormatter.format(number / 1e10) + 'K Cr';
  else if (numberCleaned >= 1e14)
    return numberFormatter.format(number / 1e14) + 'L Cr';
};

export const formatNumber = (value, option = '') => {
  if (isNaN(value)) {
    return '-';
  } else if (option === 'long') {
    return numberFormatter.format(
      Math.abs(value) < 1 ? value : Math.round(value)
    );
  } else if (option === 'short') {
    return abbreviateNumber(value);
  } else if (option === '%') {
    return `${numberFormatter.format(value)}%`;
  } else if (option === '') {
    return numberFormatter.format(value);
  }
};

export const mapStateId = state => stateIds.find(stateId => stateId.state === state.state_name).id;
