import { useAuth } from "../context/auth.Context";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

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
          setLoading(false);
          navigate("/");
        } catch (err) {
          setLoading(false);
          console.log(err);
          setError(err.message);
        }
    };

if (loading) return <div>Loading...</div>;

if (error) return <div>{error}</div>;

return (
    <form onSubmit={onSubmit}>
        <h3> Register User </h3>
        <input  placeholder="Email..."  value = {registerEmail} onChange= {(event) => {setRegisterEmail(event.target.value);}}  />
        <input  placeholder="Password..." value= {registerPassword}  onChange= {(event) => {setRegisterPassword(event.target.value);}}  />
        {/* <button type = "submit" onClick={register}>Creat User</button> */}
    </form> 
  );
};

export default Register;