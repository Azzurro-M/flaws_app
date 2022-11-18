import { useAuth } from "../context/auth.Context";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError ] = useState("");
    

    const { login } = useAuth();
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
          setLoading(true);
          await login({loginEmail, loginPassword});
          setLoading(false);
          navigate("/");
        } catch (err) {
          setLoading(false);
          console.log(err);
          setError(err.message);
        }
    };

if (loading) return <div>Loading...</div>;

return (
    <form onSubmit={onSubmit}>
      <h3>Log In</h3>
      {error&&<div>{error}</div>}
           <input type= "email" placeholder="Email..." value = {loginEmail}  onChange= {(event) => {setLoginEmail(event.target.value);}} />
           <input type = "password" placeholder="Password..." value = {loginPassword} onChange= {(event) => {setLoginPassword(event.target.value);}}  />
           <button type="submit" onClick={login}>Log In</button> 
        
       {/* <h4> User Logged In: </h4>
   {/* shows the user name that is loged in right now    */}
       {/* {user?.email} */} 
       {/* <button onClick={logout}> Sign Out </button> */}
    </form>

  );
};

export default Login;