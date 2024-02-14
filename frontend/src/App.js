// import './App.css';
import {Route,Router, Routes} from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import { Toaster } from 'react-hot-toast';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { Context } from '.';
import Profile from './components/profile';




function App() {

  const {user , setUser ,setIsAuthenticated} = useContext(Context);


  useEffect(() => {
    axios.get("http://localhost:4000/api/v1/users/patientHome",{
      // withCredentials :true,
    })
    .then(res=>{
      setUser(res.data.user);
      console.log(res.data.message);

      console.log(user)
      setIsAuthenticated(true);

    })
    .catch((error)=>{
      console.log("this is ");
      console.log(error.response.data.message);
      setUser({});
      setIsAuthenticated(false);
    })    
  }, [])
  


  return (
    

    // <Router>
    <>
    <Routes>
    
    <Route path="/home" element= {<Home/>}/>;
    <Route path="/" element= {<Login/>}/>;
    <Route path="/register" element= {<Register/>}/>;
    <Route path="/profile" element= {<Profile/>}/>;
    </Routes>
    <Toaster/>
    {/* </Router> */}
    </>
    
   
  );

}

export default App;
