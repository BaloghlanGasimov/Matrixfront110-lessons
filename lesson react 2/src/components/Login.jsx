import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';




const Login = () => {
  
  const navigate = useNavigate();
    // const navigateFunc =()=>{
    //   navigate("/")
    // }

    const checkFunc =()=>{
        if(userstate==userEmail && passwordstate==userPassword){
            alert("Duzdu");
            localStorage.setItem("admin",nickname)
            navigate('/')
            window.location.reload(false);
        }else{
            alert("sehvdi");
        }
    }

    const usernameInput = useRef("");
    const passwordInput = useRef("");

    const [userstate,setUserState] = useState();
    const [passwordstate,setPasswordState] = useState();

    const userEmail = "ehmed@gmail.com"
    const userPassword = "1234"
    const nickname = "Ehmed"

    console.log(userstate);
    console.log(passwordstate);
  return (
    <div className='container my-5'>
  <div className="input-group mb-3">
    
    <input
      type="text"
      className="form-control"
      placeholder="Email"
      aria-describedby="basic-addon1"
    //   onChange={(e)=>{
    //     userEmail.current.value=e.target.value;
    //   }}
    onChange={(e)=>{
        setUserState(e.target.value)
    }}
        // ref={usernameInput}
    />
  </div>
    
  <p>{usernameInput.current.value}</p>
  <div className="input-group mb-3">
    <input
      type="text"
      className="form-control"
      placeholder="Password"
      aria-describedby="basic-addon2"
      onChange={(e)=>{
        setPasswordState(e.target.value)
    }}
    />
    
  </div>
 
 
  

<button className='btn btn-primary' onClick={checkFunc} >Submit</button>

    </div>
  )
}

export default Login