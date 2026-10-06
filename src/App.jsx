import { useContext
  ,useState
 } from 'react';
import './App.css';
import Counter from './components/Counter'
import { CounterContext } from './context/Counter';


function App() {
const counterState = useContext(CounterContext);

  return (
    <div className="App">
      <h1> Context Api</h1>
      <p>Count is {counterState.count}</p>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  );
}

export default App;
