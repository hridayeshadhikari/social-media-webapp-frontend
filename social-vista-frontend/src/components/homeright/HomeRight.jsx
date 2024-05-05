import React, { useEffect } from 'react';
import SearchUser from '../SearchUser/SearchUser';
import PopularUser from './PopularUser';
import { Card } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '../../Redux/Auth/auth.action';

const HomeRight = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const suggestions = auth.users.filter(user => user.id !== auth.jwt.id);

  return (
    <div className='pr-5'>
      <SearchUser/>
      <Card>
        <div className='flex justify-between py-5 items-center'>
          <p className='font-semibold opacity-70 ml-3'>Suggestions for you</p>
          <p className='text-xs font-semibold opacity-90 mr-3'>View All</p>
        </div>
        <div className=''>
          {suggestions.map((item) => <PopularUser key={item.id} item={item}/>)}
        </div>
      </Card>
    </div>
  );
}

export default HomeRight;
