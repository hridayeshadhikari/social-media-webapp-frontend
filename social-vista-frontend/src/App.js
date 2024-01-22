
import './App.css';
import Home from './pages/Home/Home';
import Message from './pages/Message/Message';
import Authentication from './pages/authentication/Authentication';
import {
  Route,
  Routes,

} from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
    
        <Route path='/auth' element={<Authentication/>}></Route>
        <Route path='/*' element={<Home/>}></Route>
        <Route path='/message' element={<Message/>}></Route>


      </Routes>  
      

    </div>
  );
}

export default App;
