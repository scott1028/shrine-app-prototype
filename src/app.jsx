import ReactDOM from 'react-dom';
import React, { Suspense } from 'react';

// import Component from './components';
// import 'core-js';

const Component = React.lazy(() => import('./components'));

ReactDOM.render(
  <>
    <div>Hello world</div>
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  </>,
  document.getElementById('root')
);
