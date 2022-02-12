import ReactDOM from 'react-dom';
import React, { Suspense } from 'react';

const Component = React.lazy(() => import('./components'));

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <Component />
  </Suspense>,
  document.getElementById('root'),
);
