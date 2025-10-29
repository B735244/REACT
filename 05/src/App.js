import logo from './logo.svg';
import './App.css';
import React from "react";
import Component_01 from './05Rendering/01Component';
import Component_02 from './05Rendering/02Component';
import Component_03 from './05Rendering/03Component';

function App() {
  return (
    <div className="App">
      <h1>조건부 렌더링</h1>

      {/* if */}
      <Component_01 isAuth={true}/>
      <hr/>

      {/* 삼항 연산자 */}
      <Component_02 isAuth={true}/>

      {/* && */}
      <Component_03 items ={['손보금','손보동','손금동','박규동']}/>
    </div>
  );
}

export default App;
