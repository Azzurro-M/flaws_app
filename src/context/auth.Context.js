import {  createContext, useContext, useState, useEffect } from "react";
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "../firebase";

const AuthContext = createContext();

const useAuth = () => {
    return useContext (AuthContext);
}

const AuthProvider = ({ children }) => {

// const [registerEmail, setRegisterEmail] = useState("");
// const [registerPassword, setRegisterPassword] = useState("");
// const [loginEmail, setLoginEmail] = useState("");
// const [loginPassword, setLoginPassword] = useState("");
// //state for user so it will not throw error when refresh page sets the user to current user when it is logged in
const [user, setUser] = useState({});

//on load firebase checkes if user authorised - use effect start listens 
// the return inside cansels the listening when componenet unmounts
useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
        unsubscribe();
    };
   }, []);
// functions for login, register and logout
const register = async ( {registerEmail, registerPassword}) => {
  try{
    const newUser = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
    console.log(newUser)
    } catch (error) {
    console.log(error.message);
    }
  }; 
  const login = async ( {loginEmail, loginPassword}) => {
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

//   return (
//     <div className="App">
//       <div>
//         <h3> Register User </h3>
//           <input className='bordes-black' placeholder="Email..."  value = {registerEmail} onChange= {(event) => {setRegisterEmail(event.target.value)}}  />
//           <input  placeholder="Password..." value= {registerPassword}  onChange= {(event) => {setRegisterPassword(event.target.value)}}  />
//           <button type = "submit" onClick={register}>Creat User</button>
//       </div>
//       <div> 
//         <h3>Log In</h3>
//           <input type= "email" placeholder="Email..." onChange= {(event) => {setLoginEmail(event.target.value)}} value = {loginEmail}/>
//           <input type = "password" placeholder="Password..." onChange= {(event) => {setLoginPassword(event.target.value)}} value = {loginPassword} />
//           <button type="submit" onClick={login}>Log In</button> 
//       </div> 
//       <h4> User Logged In: </h4>
//   {/* shows the user name that is loged in right now    */}
//       {user?.email}
//       <button onClick={logout}> Sign Out </button>
//     </div>
//   );

    const exports = {
        user,
        register,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={exports}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
export {useAuth};


