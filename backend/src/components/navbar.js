import React, { useContext } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import './navbar.css'
import { Context } from '..';
import { Button } from 'bootstrap';
import axios from 'axios';
import toast from 'react-hot-toast';


export default function Navbar(){
  
  const {isAuthenticated , setIsAuthenticated , loading , setLoading} =  useContext(Context);

  const logoutHandler = async()=>{
    
    setLoading(true);
    try {
     await axios.get("http://localhost:4000/api/v1/users/logout" , 
      {   
       credentials: 'include',
      }
      )
      
     toast.success("Logged out succesfully");
     setIsAuthenticated(false);
     setLoading(false);
    }
    catch (error) {
       toast.error(error.response.data.message);
       setIsAuthenticated(true);
       setLoading(false);
    }
   
  };

  // if(!isAuthenticated){
  //   return <Navigate to="/"/> ;
  // }
 

  return (
  
    <div className='navbar'>
      <NavLink to='/home' > home</NavLink>
      {
        isAuthenticated ? (<button disabled={loading} onClick={logoutHandler}> logout</button>):
        (<NavLink className='middle_item' to='/'> Login </NavLink>) 
      }
     
      
   
   
    </div>

    
  )
}


