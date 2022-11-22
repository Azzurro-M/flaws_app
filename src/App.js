import { useNavigate } from 'react-router-dom';
import './App.css';
import {useState, useEffect} from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "./firebase.js";
import Navbar from './components/Navbar';


function App() {
  const {user, logout} = useAuth();
  const navigate = useNavigate();

  if (user)
   return (
     <div className='App'>
       <Navbar />      
     <h2>Hello {user.email}</h2>
     <button onClick={logout}> Sign Out </button> 
    </div>
   );
  return <div className='App'>
    <h2>Flaws - Home Page</h2>
      <button onClick={() => navigate("/register")}>Register</button>
      <button onClick={() => navigate("/login")}>Sign In</button> 
  </div>;
}

export default App;


//<Routes>
//<Route path='/' element={<Login />} />
//<Route path='/form' element={<Form />} />
//<Route path='/calender' element={<Calender/>}/>
//</Routes>