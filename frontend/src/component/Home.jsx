import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSucces } from '../util';
import{ToastContainer} from 'react-toastify'


const Home = () => {

  const navigate=useNavigate();

  const[logged,setLogged]=useState('');
    const[products,setProducts]=useState( '');

  useEffect(()=>{
    setLogged(localStorage.getItem('loggedin'));
  },[]);

  const handleLogout=()=>{
    localStorage.removeItem('token');
        localStorage.removeItem('loggedin');
        handleSucces("user logged-out");
        setTimeout(()=>{
navigate('/login');
        },2000)

  }

  const fetchdata=async()=>{
    try{
      const url="http://localhost:8080/Products";
      const headers={
        headers:{
          'Authorization':localStorage.getItem('token')
        }
      }
      const res=await fetch(url,headers);
      const result= await res.json();
      setProducts(result) 
        
       
    }catch(err){
      handleError(err);
    }
  }
  useEffect(()=>{
    fetchdata();
  },[])
  console.log(products);
  
  return (
    <div className='home-page'>
      <div className="user">
       <h1>WELCOME "{ logged.toUpperCase()}"</h1>
        
        
 
       
  
      </div>
      <div className="bt">
        <button type="submit" onClick={handleLogout} className="btn mid btn-primary">log out</button>
          
         
        
     
      
       </div>
        <div className="prod">
           { products && products.map(item=>(
       <ul>
      {(item.name).toUpperCase()}<br></br>
      {(item.position).toUpperCase()}
       </ul>
               
               
 
       
       
      ))} 
         </div>
       <ToastContainer></ToastContainer>
       
    </div> 
  
  )
}

export default Home
