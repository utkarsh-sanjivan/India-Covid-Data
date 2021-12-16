import { Suspense, lazy, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { retry } from './utils/commonFunctions';
import './index.scss';

const App = lazy(() => retry(() => import('./App')));

ReactDOM.render(
  <Suspense fallback={<div />}>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </Suspense>,
  document.getElementById('root')
);
