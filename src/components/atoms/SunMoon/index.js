import React from 'react';
import { Moon, Sun  } from 'react-feather';

const SunMoon = ({darkMode}) => {
  return (
    <div
      className="sun-moon"
      onClick={() => darkMode.toggle()}>
      <div>{darkMode.value ? <Sun color={'#ffc107'}/> : <Moon />}</div>
    </div>
  );
};

export default SunMoon;
