import { useEffect
  ,useState
 } from 'react';
import './App.css';
import Timer from './components/Timer';
// import Todo from './components/todo';
// import UuseEffectComponent from './components/UuseEffectComponent';
// import MyComponent from './components/Mycomp';
// import CounterComponent from "./CounterComponent";


function App() {

  // const [isVisible , setIsVisible] = useState(true);
  useEffect(()=>{
      console.log("component is mounting....");
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todoie App</h1>
        {/* <Todo todo="Todo"/> */}
        {/* <CounterComponent/> */}
        {/* <UuseEffectComponent /> */}
        
        {/* {
          isVisible ? <MyComponent /> : <></>
        }
        <button onClick={ ()=>{setIsVisible(!isVisible)}}>
          Hide/Unhide
        </button> */}
        {/* <Timer/> */}
      </header>
    </div>
  );
}

export default App;
