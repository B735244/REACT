import logo from './logo.svg';
import './App.css';
// 요소를 꺼내오는 것이 '{}'임. {}안에 함수나 뭐 사용하고 싶은 요소를 적어주면 됨
import EventComponent_01 from './04EVENT/01OnClick';
import EventComponent_02 from './04EVENT/02OnMouse';
import EventComponent_03 from './04EVENT/03OnKey';
import EventComponent_04 from './04EVENT/04OnChange';
import EventComponent_05 from './04EVENT/05Form';
import EventComponent_06 from './04EVENT/06OnScroll';

function App() {

  //State
 
  return (
    <div className="App">
    <h1>Event Handling</h1>
    {/* 01 onClick */}
    <EventComponent_01/>
    <hr/>
    {/*02 onMouse*/ }
    <EventComponent_02/>
    <hr/>
    {/* 03 onKey */}
    <EventComponent_03/>
    <hr/>
    {/* 04 onChange */}
    <EventComponent_04/>
    <hr/>
    {/* 05 onSubmit */}
    <EventComponent_05/>
    <hr/>
    {/* 06 onScroll*/}
    <EventComponent_06/>
    <hr/>
    </div>
  );
}

export default App;
