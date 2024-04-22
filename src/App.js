// import logo from './logo.svg';
import './App.css';
import React from 'react';
import FavColor from './UseStateComponent';
import Car from './MultipleStateHooks'
import Timer from './UseEffectHool'
import { Component1, Component2, Component3, Component4, Component5 } from './UseContextHook';
import UseRefHook from './UseRefHook';
// import ParentComponent from './CreateContext'
import { MyProvider, ChildComponent } from './CreateContext';
import UseMemo from './UseMemo';

function App() {
  return (
    <div className="App">
      <h2>Hooks</h2>
      <FavColor/>
      <Car/>
      <Timer/>
      <Component1/>
      <Component2/>
      <Component3/>
      <Component4/>
      <Component5/>
      {/* <ParentComponent/> */}
      <MyProvider>
      <ChildComponent />
      </MyProvider>
      <UseRefHook/>
      <UseMemo/>

    </div>
  );
}

export default App;
