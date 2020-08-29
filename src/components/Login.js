import React, {useState} from 'react';
import './Login.css';

function Login() {
    const [usernameInput, setUsername] = useState(null);
    const [passwordInput, setPassword] = useState(null);
    function handleSubmit(e) {
       e.preventDefault();
        console.log(usernameInput, passwordInput);
    }


  
    return (
    <div className="loginContainer">
     <h3>Login</h3> 
    <form onSubmit={handleSubmit}>
        <label>Username
        <input type="text" name="Username" onChange={event => setUsername(event.target.value)}/>
        </label> 
        <label>Password
        <input type="text" name="Password" onChange={event => setPassword(event.target.value)}/>
        </label> 
        <input id="submit" type="submit"/>
    </form>
    
    </div>
  );
}

export default Login;