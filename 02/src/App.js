import logo from './logo.svg';
import './App.css';
// 요소를 꺼내오는 것이 '{}'임. {}안에 함수나 뭐 사용하고 싶은 요소를 적어주면 됨
import { Element1, Element2, Element3, Element4, Element5 } from './02JSX/01_Basic';
import Basic_01 from "./02JSX/01_Basic"
import CustomComponent from "./02JSX/CustomComponent"
import { Component_Event_01,Component_Event_02,Component_Event_03 } from './02JSX/03_Event';


function App() {

  //State
  const footerState="Footer State.."
  const headerState="Header State.."
  return (
    <div className="App">
      <header className ="gnb" style={{height:"100px", backgroundColor:"lightblue"}}>

      </header>
      <main>
        
        <section>
          <h1>01_BASIC</h1>
          <div>
            <Element1 />
            <Element2 />
            <hr />
            <Element3 auth={"ROLE_USER"} name={"손보금"} />
            <Element3 auth={"ROLE_ADMIN"} name={"손금동"} />
            <hr />
            <Element4 auth={'ROLE_USER'} name={"손보동"} />
            <hr />
            <Element5 list={["손보금", "손보동", "손금동", "박규동"]} />
            <hr />
            <Basic_01.DefaultComponent1 />
            <Basic_01.DefaultComponent2 />
            <hr />
          </div>
        </section>

        <section>
          <h1>02_CUSTOM_COMPONENT</h1>
          <div>
            <CustomComponent />
          </div>
        </section>
        <hr/>

        <section>
          <h1>03_EVENT_HANDLER</h1>
          <Component_Event_01/>
          <Component_Event_02/>
          <Component_Event_03/>
        </section>




      </main>
    </div>
  );
}

export default App;
