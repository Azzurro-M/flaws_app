import { useAuth } from "../context/auth.Context";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { processFirebaseErrors } from "../util/errors";
import '../App.css';

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
          console.log("2 mail", loginEmail, "2 password", loginPassword);
          setLoading(false);
          navigate("/");
        } catch (err) {
          setLoading(false);
          console.log(err);
          setError(processFirebaseErrors(err.message));
        }
    };

if (loading) return <div>Loading...</div>;

return (
  <>
    <form className="login" onSubmit={onSubmit}>
      <h3>Log In</h3>
      {error&&<p>{error}</p>}
           <input type= "email" placeholder="Email..." value = {loginEmail}  onChange= {(event) => {setLoginEmail(event.target.value);}} />
           <input type = "password" placeholder="Password..." value = {loginPassword} onChange= {(event) => {setLoginPassword(event.target.value);}}  />
           <button className="button" type="submit" onClick={login}>Log In</button> 
           <p>Want to creat an account? - <Link to="/register">Register</Link></p>
     </form>
     
 </>
  );
};

export default Login;