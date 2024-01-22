import React from 'react'
import Login from './Login';

import { Card } from "@mui/material"
import Signup from './Signup';
import {
  Route,
  Routes,

} from "react-router-dom";


const Authentication = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
       
        <Card className="card p-12 mt-7 items-center justify-center">

          <div className="container text-center mt-0 ">
            <h1 className='text-center font-bold text-xl font-sans'>SocialVista</h1>
            <p className='text-center space-x-10 space-y-10 font-medium'>Capture, Connect, Share: Your Life, Your Story</p>

          </div>
          <Routes>

            <Route path='/' element={<Login/>}></Route>
            <Route path='/register' element={<Signup/>}></Route>
            <Route path='/login' element={<Login/>}></Route>

          </Routes>


        </Card>
      </section>

    </div>
  )
}

export default Authentication
