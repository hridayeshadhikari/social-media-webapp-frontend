import { Grid } from '@mui/material';
import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { Route, Routes, useLocation } from 'react-router-dom';
import MiddlePart from '../../components/middlepart/MiddlePart';
import Reels from '../../components/reels/Reels';
import CreateReel from '../../components/reels/CreateReel';
import Profile from '../profile/Profile';
import HomeRight from '../../components/homeright/HomeRight';

const Home = () => {
  const location = useLocation();
  return (

    <div className='20px'>
      <Grid container spacing={0} >
        <Grid item xs={0} lg={3}>
          <div className='sticky top-0'>
            <Sidebar />
          </div>
        </Grid>

        <Grid lg={location.pathname === "/" ? 6 : 9} item className='px-5 flex justify-center' xs={12}>

          <Routes>
            <Route path='/' element={<MiddlePart />}></Route>
            <Route path='/reels' element={<Reels />}></Route>
            <Route path='/create-reel' element={<CreateReel />}></Route>
            <Route path='/profile/:id' element={<Profile />}></Route>
          </Routes>

        </Grid>

        {location.pathname === "/" &&
          <Grid item lg={3} className='relative'>

            <div className='sticky top-0 w-full '>
              <HomeRight />
            </div>

          </Grid>
        }
      </Grid>
    </div>

  );
}

export default Home;
