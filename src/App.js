import './App.css';
import {useState, useEffect} from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "./firebase.js";

function App() {
  //States for register form and for login form
const [registerEmail, setRegisterEmail] = useState("");
const [registerPassword, setRegisterPassword] = useState("");
const [loginEmail, setLoginEmail] = useState("");
const [loginPassword, setLoginPassword] = useState("");

//state for user so it will not throw error when refresh page sets the user to current user when it is logged in
const [user, setUser] = useState({})
onAuthStateChanged(auth , (currentUser) => {
  setUser(currentUser);
});
const handleRegister = (event) => {
  event.preventDefault()
  register(registerEmail, registerPassword)
}

const handleLogin = (event) => {
  event.preventDefault()
  login(loginEmail, loginPassword)
}

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

// functions for login, register and logout
const register = async (registerEmail, registerPassword) => {
  try{
    const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
    console.log(user)
    } catch (error) {
    console.log(error.message);
    }
  }; 
  const login = async () => {
     try{
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user)
    } catch (error) {
      console.log(error.message);
    }
  };
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="App">
      <div>
        <h3> Register User </h3>
        <form onClick = {handleRegister}>
          <input type = "email" placeholder="Email..." onChange= {(event) => {setRegisterEmail(event.target.value)}} value = {registerEmail}/>
          <input type = "password" placeholder="Password..."  onChange= {(event) => {setRegisterPassword(event.target.value)}} value= {registerPassword}/>
          <button type = "submit" onClick={register}>Creat User</button>
        </form>
      </div>
      <div> 
        <h3>Log In</h3>
        <form onClick={handleLogin}>
          <input type= "email" placeholder="Email..." onChange= {(event) => {setLoginEmail(event.target.value)}} value = {loginEmail}/>
          <input type = "password" placeholder="Password..." onChange= {(event) => {setLoginPassword(event.target.value)}} value = {loginPassword} />
          <button type="submit" onClick={login}>Log In</button> 
        </form>     
      </div> 
      <h4> User Logged In: </h4>
  {/* shows the user name that is loged in right now    */}
      {user?.email}
      <button onClick={logout}> Sign Out </button>
    </div>
  );
}

export default App;
