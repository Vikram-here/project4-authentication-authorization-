import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import{ToastContainer} from 'react-toastify'
import { handleError, handleSucces } from '../util'
const Sign = () => {

    const[signinfo,setSigninfo]=useState({
        name:"",
        email:"",
        password:""
    });
    const navigate=useNavigate();
    
    const handlechange=(e)=>{
        console.log(e);
         const {name,value}=e.target;
         setSigninfo((prev)=>({...prev,[name]:value}))
    }
    console.log(signinfo);

    const handleSub=async (e)=>{
      e.preventDefault();
      const {name,email,password}=signinfo;
      if(!name|| !email ||!password){
        return handleError("all fields are required");
      }

      try{
        const url="http://localhost:8080/auth/signup";
        const res=await fetch(url,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(signinfo)
        });
        const result=await res.json();
        console.log(result);
        const{success,message,error}=result;

        if(success){
            handleSucces(message);
            setTimeout(()=>{
              navigate('/login')
            },2000)
        }else if(error){
         const data=error?.details[0].message;
         handleError(data);
        }else if(!success){
            handleSucces(message);
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
    <label htmlFor="name" className="form-label">Name</label>
    <input name="name"  type="text" className="form-control"   onChange={handlechange} value={signinfo.name}  />
     
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" name="email"  className="form-control"  onChange={handlechange} value={signinfo.email}  aria-describedby="emailHelp"/>
    <div   className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" name="password"  onChange={handlechange} className="form-control" value={signinfo.password} />
  </div>
  <div className="button">
<button type="submit" className="btn mid btn-primary">Sign In</button>
  </div>
  <span>already have an account ?
    <Link to="/login"> Login</Link>
  </span>
   
  
</form>
<ToastContainer></ToastContainer>
</div>
    </div>
  )
}

export default Sign
