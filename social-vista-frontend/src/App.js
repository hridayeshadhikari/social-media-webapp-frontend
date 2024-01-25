
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Home from './pages/Home/Home';
import Authentication from './pages/authentication/Authentication';
import {Route,Routes,} from "react-router-dom";
import { useEffect } from 'react';
import { getProfileAction } from './Redux/Auth/auth.action';


function App() {
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");
  useEffect(()=>{
    dispatch(getProfileAction(jwt));
  },[jwt])
  const {auth}=useSelector(store=>store);
  
  return (
    <div>
      <Routes>

    
        <Route path='/a' element={<Authentication/>}></Route>
        <Route path='/*' element={auth.user?<Home/>:<Authentication/>}></Route>

      </Routes>  
      

    </div>
  );
}

export default App;
