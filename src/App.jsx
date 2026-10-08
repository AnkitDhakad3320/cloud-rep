import { useEffect , useState} from 'react';
import { getPosts, getUsers } from './Api';
import { PostCard } from './components/PostCard';
import UserCard from './components/UserCard';
import './App.css';

function App() {
  const [data , setData] = useState([]);
  const [users, setUsers] = useState(null)
 useEffect(()=>{
  getPosts().then((posts)=>setData(posts));
 },[]);
 useEffect(()=>{
  getUsers().then((user)=>setUsers(user?.results[0]));
 },[])

  return (
    <div className="App">
     {users? <UserCard data={users}/>: <p>No Data Found </p>}
    {data ? data.map(e=><PostCard title={e?.title} body={e?.body} />) : <p>No Data Available</p>}
    </div>
  );
}

export default App;
