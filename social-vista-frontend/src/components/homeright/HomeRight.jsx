import React from 'react'
import SearchUser from '../SearchUser/SearchUser'
import PopularUser from './PopularUser'
import { Card } from '@mui/material'

const popularUser=[1,1,1,1,1]
const HomeRight = () => {
  return (
    <div className='pr-5'>
      <SearchUser/>
      <Card>
      <div className='flex justify-between py-5 items-center'>
      <p className='font-semibold opacity-70 ml-3'>Suggestion for you</p>
      <p className='text-xs font-semibold opacity-90 mr-3'>View All</p>
      </div>
      <div className=''>
        {popularUser.map((item)=><PopularUser/>)}
      </div>
      </Card>
    </div>
  )
}

export default HomeRight;