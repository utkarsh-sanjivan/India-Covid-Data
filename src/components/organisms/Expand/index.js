import { lazy, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';

import { retry } from '../../../utils/commonFunctions';

const SunMoon = lazy(() => retry(() => import('../../atoms/SunMoon')));

const navLinkProps = (path, animationDelay) => ({
  className: `${window.location.pathname === path ? 'focused' : ''}`,
});

function Expand({pages, setExpand, darkMode, windowSize}) {
  const expandElement = useRef(null);

  const handleMouseLeave = useCallback(() => {
    windowSize.width >= 769 && setExpand(false);
  }, [setExpand, windowSize.width]);

  return (
    <div className="expand" ref={expandElement} onMouseLeave={handleMouseLeave}>
      {pages.map((page, i) => {
        if (page.showInNavbar === true) {
          return (
            <Link
              to={page.pageLink}
              key={i}
              {...(windowSize.width < 769 && {
                onClick: setExpand.bind(this, false),
              })}
            >
              <span
                {...navLinkProps(page.pageLink, page.animationDelayForNavbar)}
              >
                {page.displayName}
              </span>
            </Link>
          );
        }
        return null;
      })}

      {windowSize.width < 769 && <SunMoon {...{darkMode}} />}
    </div>
  );
}

export default Expand;
