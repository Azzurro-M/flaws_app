import './App.css';
import {useState, useEffect} from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "./firebase.js";
import Navbar from './components/Navbar';

function App() {
  const {user} = useAuth();

  return (
    
    <div className="App">
      <Navbar />
      <div>
        <h3> Register User </h3>
          <input  placeholder="Email..."  value = {registerEmail} onChange= {(event) => {setRegisterEmail(event.target.value)}}  />
          <input  placeholder="Password..." value= {registerPassword}  onChange= {(event) => {setRegisterPassword(event.target.value)}}  />
          <button type = "submit" onClick={register}>Creat User</button>
      </div>
      <div> 
        <h3>Log In</h3>
          <input type= "email" placeholder="Email..." onChange= {(event) => {setLoginEmail(event.target.value)}} value = {loginEmail}/>
          <input type = "password" placeholder="Password..." onChange= {(event) => {setLoginPassword(event.target.value)}} value = {loginPassword} />
          <button type="submit" onClick={login}>Log In</button> 
      </div> 
      <h4> User Logged In: </h4>
  {/* shows the user name that is loged in right now    */}
      {user?.email}
      <button onClick={logout}> Sign Out </button>
    </div>

}
export default App;


