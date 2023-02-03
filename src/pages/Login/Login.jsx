import React from 'react'
import { useState, useContext } from 'react';
import "./login.css";
import { Navigate, NavLink } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../Component/firebase"
import {AuthContext} from "../../context/AuthContext"
function Login() {
    const [error, setError] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // const navigate = useNavigate()
    
    
    const {dispatch} = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    dispatch({type:"LOGIN", payload:user});
    // console.log(user)
    <Navigate to="/home" />
  })
  .catch((error) => {
    setError(true)
  });
    }
  return (
    <div className='login'>
        <form onSubmit={handleLogin}>
            <input style={{widows: "200px",
    height: "30px",
    margin: "10px"}}className='email' type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            <input style={{widows: "200px",
    height: "30px",
    margin: "10px"}} className="password" type="text" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
            <NavLink to="/home"><button type='submit'>Login</button></NavLink>
            { error && <span>Wrong email or password!</span>}
        </form>
    </div>
  );
}

export default Login;