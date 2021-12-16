import { lazy } from 'react';
import { Home } from 'react-feather';
import useDarkMode from 'use-dark-mode';import './index.scss'
import { retry } from '../../../utils/commonFunctions';

const SunMoon = lazy(() => retry(() => import('../../atoms/SunMoon')));

function Header() {
  const darkMode = useDarkMode(false);
  
  return <div className="Header">
    <Home className="home-icon"/>
    <span>
      <SunMoon {...{ darkMode }} />
    </span>
  </div>
};

export default Header;
