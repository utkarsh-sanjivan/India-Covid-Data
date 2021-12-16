import {
  SLIDE_IN,
  SLIDE_OUT,
  SLIDE_IN_MOBILE,
  SLIDE_OUT_MOBILE,
} from '../../../animations';

import { lazy, useState, useCallback } from 'react';
import { Home } from 'react-feather';
import { Link } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import { useLockBodyScroll, usePageLeave, useWindowSize } from 'react-use';
import useDarkMode from 'use-dark-mode';

import './index.scss'
import { retry } from '../../../utils/commonFunctions';

const SunMoon = lazy(() => retry(() => import('../../atoms/SunMoon')));
const Expand = lazy(() => retry(() => import('../../organisms/Expand')));

const activeNavIcon = (path) => ({
  style: {
    stroke: window.location.pathname === path ? '#4c75f2' : '',
  },
});

function Navbar({pages, showLanguageSwitcher, setShowLanguageSwitcher}) {
  const [expand, setExpand] = useState(false);
  const darkMode = useDarkMode(false);

  useLockBodyScroll(expand);
  const windowSize = useWindowSize();

  usePageLeave(() => setExpand(false));

  const navbarTransition = useTransition(true, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
  });

  const expandTransition = useTransition(expand, {
    from: windowSize.width < 769 ? SLIDE_IN_MOBILE : SLIDE_IN,
    enter: windowSize.width < 769 ? SLIDE_OUT_MOBILE : SLIDE_OUT,
    leave: windowSize.width < 769 ? SLIDE_IN_MOBILE : SLIDE_IN,
    config: {mass: 1, tension: 210, friction: 26},
  });

  const handleMouseEnter = useCallback(() => {
    if (windowSize.width >= 769) {
      setExpand(true);
    }
  }, [windowSize.width]);

  return navbarTransition((style, item) => (
    <animated.div className="Navbar" {...{style}}>
      <div className="navbar-middle">
        <Link to="/" onClick={setExpand.bind(this, false)}>
          Covid19<span>India</span>
        </Link>
      </div>

      <div
        className="navbar-right"
        onMouseEnter={handleMouseEnter}
        {...(windowSize.width < 769 && {
          onClick: setExpand.bind(this, !expand),
        })}
      >
        {windowSize.width < 769 && (
          <span>{expand ? 'Close' : 'Menu'}</span>
        )}

        {windowSize.width >= 769 && (
          <>
            <Link to="/">
              <span>
                <Home {...activeNavIcon('/')} />
              </span>
            </Link>
            <span>
              <SunMoon {...{darkMode}} />
            </span>
          </>
        )}
      </div>

      {expandTransition(
        (style, item) =>
          item && (
            <animated.div {...{style}}>
              <Expand {...{pages, setExpand, darkMode, windowSize}} />
            </animated.div>
          )
      )}
    </animated.div>
  ));
}

export default Navbar;
