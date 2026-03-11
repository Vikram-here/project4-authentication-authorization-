import React from 'react'
import './login.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import { handleError, handleSucces } from '../util'


const Login = () => {

   const[loginfo,setLoginfo]=useState({
         
        email:"",
        password:""
    });
    const navigate=useNavigate();
    const handlechange=(e)=>{
        console.log(e);
         const {name,value}=e.target;
         setLoginfo((prev)=>({...prev,[name]:value}))
    }
     

    const handleSub=async (e)=>{
      e.preventDefault();
      const {email,password}=loginfo;
      if(!email ||!password){
        return handleError("all fields are required");
      }

      try{
        const url="http://localhost:8080/auth/login";
        const res=await fetch(url,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(loginfo)
        });
        const result=await res.json();
         const{success,message,jwtoken ,name ,error}=result;

        if(success){
            handleSucces(message);
            localStorage.setItem('token',jwtoken);
            localStorage.setItem('loggedin',name);
            setTimeout(()=>{
              navigate('/home')
            },2000)
        }else if(error){
         const data=error?.details[0].message;
         handleError(data);
        }else if(!success){
            handleError(message);
        }
      }catch(err){
         handleError(err)
      }
    }


  return (
     <div className='main'>
        <div className="cont">
      <form onSubmit={handleSub}>
        
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" name="email"  className="form-control"  onChange={handlechange} value={loginfo.email}  aria-describedby="emailHelp"/>
    <div   className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" name="password"  onChange={handlechange} className="form-control" value={loginfo.password} />
  </div>
  <div className="button">
<button type="submit" className="btn mid btn-primary">Login </button>
  </div>
  <span>already have an account ?
    <Link to="/signup"> sign up</Link>
  </span>
   
  
</form>
<ToastContainer></ToastContainer>
</div>
    </div>
  )
}

export default Login
