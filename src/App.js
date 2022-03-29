import React, { Suspense } from 'react';

import './App.css';

const Pokemon = React.lazy(() => import(
  /* webpackChunkName: "PokeComponent" */
  './Pokemon'
));

function App() {
  return (
    <div className="App">
      <Suspense fallback="loading..."><Pokemon /></Suspense>
    </div>
  );
}

export default App;
