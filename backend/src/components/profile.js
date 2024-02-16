import React, { useContext } from 'react'
import { Context } from '..';
import { Navigate } from 'react-router-dom';

const Profile = () => {
    const {isAuthenticated, loading , user } =  useContext(Context);
    if(!isAuthenticated) {
      return <Navigate to="/"/>
    }     
    console.log(user);
 
    return (
    <div>
      <h1>Profile page</h1>
    </div>
  )
}

export default Profile
