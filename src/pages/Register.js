import { useAuth } from "../context/auth.Context";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { processFirebaseErrors } from "../util/errors";

const Register = () => {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError ] = useState("");
    

    const { register } = useAuth();
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
          setLoading(true);
          await register({registerEmail, registerPassword});
          console.log("2 mail", registerEmail, "2 password", registerPassword);
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
    <form onSubmit={onSubmit}>
        <h3> Register User </h3>
        {error&&<p>{error}</p>}
        <input  type= "email" placeholder="Email..."  value = {registerEmail} onChange= {(event) => {setRegisterEmail(event.target.value);}}  />
        <input  type = "password" placeholder="Password..." value= {registerPassword}  onChange= {(event) => {setRegisterPassword(event.target.value);}}  />
        <button type = "submit" onClick={register}>Creat User</button> 
        <p>Already have an account? - <Link to="/login">Log In</Link></p>
    </form> 
    
  </> 
  );
};

export default Register;