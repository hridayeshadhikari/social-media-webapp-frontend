import React from 'react'
import Login from './Login';

import {Card} from "@mui/material"
import Signup from './Signup';

const Authentication = () => {
  return (
    <div>
      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://imgs.search.brave.com/BARd_DB1sn7HPnoudF5TiQhNfHwsJ7e57TxFIu-i9Q0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ibG9n/Lmh1YnNwb3QuY29t/L2h1YmZzL2dvb2Qt/cGljdHVyZXMtcGhv/bmUtdGlwcy5qcGc"
          alt="Sample image" />
      </div>
      
      <Card className="card p-8">

        <div className="text-center mt-0">
          <h1 className='text-center font-bold text-xl font-sans'>SocialVista</h1>
          <p className='text-center space-x-10 space-y-10 font-medium'>Capture, Connect, Share: Your Life, Your Story</p>
        
        </div>
        <Signup/>
        
      </Card>
    </section>
      
    </div>
  )
}

export default Authentication
