import './App.css';
import Todo from './components/todo';
import CounterComponent from "./CounterComponent";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todoie App</h1>
        <Todo todo="Todo"/>
        <CounterComponent/>
      </header>
    </div>
  );
}

export default App;
