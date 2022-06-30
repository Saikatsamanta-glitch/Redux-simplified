import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
// npx subset of npm
import {useSelector, useDispatch} from 'react-redux'; 
import {inc,dec} from './action';


export function App() {
  const [user, setUser] = useState([]);
  const mystate =useSelector((state) => state.changeNum);
  // when a value of useState changes it rerenders the page
  const dispatch= useDispatch();
  console.log('render 🌱');

  useEffect(() => {
    axios.get('https://api.github.com/users')// Json--->Object
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

      const dataa={
        name: "paul rudd",
      movies: ["I Love You Man", "Role Models"]
    }
      axios.post('https://reqres.in/api/users',dataa)
      .then((response)=>{
          console.log(response);
      }).catch((err)=>{console.log(err) })
  }, [])

  // fetch_data()
  console.log(user);

  
  return (
    <div className="App container">
      <h1>Hi Future full stack web developers 🌱</h1>
      <li> Axios ✅</li>
      <li> Babel ✅</li>
      <li> Web pack ✅</li>

      <h1 className='mt-3'>Counter {mystate}</h1>


      <button className='btn btn-warning mt-3 m-3' onClick={()=>{ dispatch(inc()) }} >Increment 👆 </button>
      <button className='btn btn-info mt-3 m-3' onClick={ ()=>{ dispatch(dec()) } } > Decrement 👇 </button>
      <button className='btn btn-dark mt-3 m-3' > Reset 🈯 </button>


<div className="cards mt-3">
  {user.map((val,i) => {
        return (
          <div key={i} className="card">
        <img src={val.avatar_url} alt="Avatar" height={'300px'} />
          <div className="container">
            <h4><b>{val.login}</b></h4>
            <p>Architect & Engineer</p>
          </div>
      </div>
        ) 
      })
      }
</div>
      


      {/*  */}


    </div>
  );
}


