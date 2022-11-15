import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h3> Register User </h3>
        <input placeholder="Email..." />
        <input placeholder="Password..." />
        <button>Creat User</button>
      </div>
      <div>
        <h3>Log In</h3>
        <input placeholder="Email..." />
        <input placeholder="Password..." />
        <button>Log In</button>      
      </div> 
      <h4> User Logged In: </h4>
      <button> Sign Out </button>
    </div>
    
  );
}

export default App;
