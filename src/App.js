import { lazy, Suspense, useEffect } from 'react';
import { Route, Redirect, Switch, useLocation } from 'react-router-dom';
// import ReactGA from 'react-ga';
import ReactGA from 'react-ga4';

import './App.scss';
import { retry } from './utils/commonFunctions';

const Homepage = lazy(() => retry(() => import('./components/pages/Homepage')));
const Header = lazy(() => retry(() => import('./components/templates/Header')));

const TRACKING_ID = "UA-233194323-1";
const GA4_TRACKING_ID = "321226714";
// ReactGA.initialize(TRACKING_ID);
ReactGA.initialize(GA4_TRACKING_ID);

const App = () => {
  const location = useLocation();
  const pages = [
    {
      pageLink: '/',
      view: Homepage,
      displayName: 'Homepage',
      showInNavbar: true,
    }
  ];

  useEffect(() => {
    // ReactGA.pageview(window.location.pathname + window.location.search);
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
  }, []);

  return (
    <div className="App">
      <Header pages={pages} />
      <Suspense fallback={<div />}>
        <Switch location={location}>
          {pages.map((page, index) => {
            return (
              <Route
                exact
                path={page.pageLink}
                render={({match}) => <page.view />}
                key={index}
              />
            );
          })}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
