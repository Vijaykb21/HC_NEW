import React, { useContext } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import './navbar.css'
import { Context } from '../..';
import { Button } from 'bootstrap';
import axios from 'axios';
import toast from 'react-hot-toast';


export default function Navbar(){
  
  const {isAuthenticatedDoctor , isAuthenticatedReception , isAuthenticated , setIsAuthenticated , loading , setLoading} =  useContext(Context);

  console.log("isAuthenticatedReception : ",isAuthenticatedReception);
  console.log("isAuthenticated : " , isAuthenticated);

  if(isAuthenticated){
    return <Navigate to="/profile"/> ;
  }

  if(isAuthenticatedReception){
    return <Navigate to="/receptionHome"/> ;
  }
  if(isAuthenticatedDoctor){
    return <Navigate to="/doctorHome"/> ; 
  }

  return (
  
    <div className='navbar'>
      <NavLink to='/' > home</NavLink>
      <NavLink className='middle_item' to='/loginAs'> Login </NavLink>
      
        
      
      {/* <NavLink to="/profile">Profile</NavLink> */}
      <NavLink to="/emailVerfication">SignUp</NavLink>

     
      
   
   
    </div>

    
  )
}


