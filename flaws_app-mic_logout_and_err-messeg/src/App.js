import './App.css';
import { useAuth } from './context/auth.Context';

function App() {
  const {user, logout} = useAuth();

  if (user)
   return (
    <div>
     <h2>Hello {user.email}</h2>
      
      <button onClick={logout}> Sign Out </button> 
    </div>
   );
  return <div className='App'>
    <h2>Flaws - Home Page</h2>
      <p>Register</p>
      <p>Sign In</p> 
  </div>;
}
export default App;
 