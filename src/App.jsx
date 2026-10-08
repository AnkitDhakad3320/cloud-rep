import Item from './components/Item';
import Cart from './components/Cart';
import './App.css';

function App() {


  return (
    <div className="App">
     <Item name='MacBook' price= {90000} />
     <Item name='Pendrive' price={3000} />
     <Item name='Iphone' price={45000}/>
     <Cart/>
    </div>
  );
}

export default App;
