import React, { useContext } from 'react'
import PatientNavbar from './PNavbar'
import { Context } from '../..';
import { Navigate } from 'react-router-dom';

const PastRecord = () => {
  const {isAuthenticated} = useContext(Context);
    if(!isAuthenticated) {
        return <Navigate to="/"/>
      }
  
  return (
    <div>
       <PatientNavbar/>     
      <h1>Your Past Record !!  ha ha ha  </h1>     
    </div>
  )
}

export default PastRecord
