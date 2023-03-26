import './App.css';
import React,{useState} from 'react';
import Cards from './Cards';

function App() {
  const [users, setUsers] = useState([]);

  const loadUsers=async()=>{
    const response = await fetch("https://api.github.com/users");
    const jsonresponse = await 
    response.json();
    setUsers(jsonresponse);
  }

  return (
    <div className="App">
      <h1>Hello Users!</h1>
      <p>To fetch the user data just click on the below button.</p>
      <button  onClick={loadUsers} className="btn">
        <span>Get Data</span>
      </button>

      <div>
      {
      users.map(user=>(
        <>
           <Cards id={user.id} login={user.login} avatar_url={user.avatar_url}/>
          </>
      ))  
      }
      </div>
    </div>
  );
}

export default App;
