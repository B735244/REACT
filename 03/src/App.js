import logo from './logo.svg';
import './App.css';
// 요소를 꺼내오는 것이 '{}'임. {}안에 함수나 뭐 사용하고 싶은 요소를 적어주면 됨
import MyComponent from './03COMPONENT/MyComponent';


function App() {

  //State
 
  return (
    <div className="App">
     <h1>COMPONENT_TEST</h1>
     <MyComponent/>
    </div>
  );
}

export default App;
