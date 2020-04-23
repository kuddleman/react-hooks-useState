import React from 'react';

import ClassCounter from './ClassCounter'
import HookCounter from './HookCounter'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello from App</h1>
      <ClassCounter />
      <HookCounter />
    </div>
  );
}

export default App;

//Only call hooks at the top level

// don't call hook inside looops, conditions or nexted functions

// only call hooks from within React functional coponents.


