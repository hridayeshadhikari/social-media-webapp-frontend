
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Home from './pages/Home/Home';
import Message from './pages/Message/Message';
import Authentication from './pages/authentication/Authentication';
import {
  Route,
  Routes,

} from "react-router-dom";
import { useEffect } from 'react';
import { getUserProfileAction } from './Redux/Auth/auth.action';
import store from './Redux/store';


function App() {
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");
  useEffect(()=>{
    dispatch(getUserProfileAction("jwt"));
  },[jwt])
  const {auth}=useSelector(store=>store);
  return (
    <div>
      <Routes>
    
        <Route path='/*' element={<Authentication/>}></Route>
        <Route path='/*' element={auth.user?<Home/>:<Authentication/>}></Route>
        <Route path='/message' element={<Message/>}></Route>

      </Routes>  
      

    </div>
  );
}

export default App;
