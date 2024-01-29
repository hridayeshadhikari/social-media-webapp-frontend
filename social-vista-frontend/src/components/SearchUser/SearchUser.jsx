import { Avatar, Card, CardHeader } from '@mui/material'
import React, { useState } from 'react'
import { searchUser } from '../../Redux/Auth/auth.action';
import { useDispatch, useSelector } from 'react-redux';
import { createChat } from '../../Redux/Message/message.action';


const SearchUser = () => {

  const [username, setUsername] = useState("");
  const handleSearchUser = (e) => {
    setUsername(e.target.value)
    console.log("search user....", auth.searchUser)
    dispatch(searchUser(username))
  }
  const handleClick = (id) => {
    dispatch(createChat({ userId: id }))
  }
  const dispatch = useDispatch();
  const { message, auth } = useSelector(store => store)
  return (
    <div>
      <div className='py-5 relative '>
        <input className='bg-transparent border border-grey outline-none w-full px-5 py-2 rounded-full'
          placeholder='search user. . . .'
          onChange={handleSearchUser}
          type="text"
        />

        {
          username && (
            auth.searchUser.map((item) =>
              <Card key={item.id} className='absolute w-full z-10 top-[4.5rem] cursor-pointer'>
                <CardHeader
                 onClick={() => {
                    handleClick(item.id)
                    setUsername("")
                  }}
                  avatar={<Avatar src='https://images.pexels.com/photos/7490540/pexels-photo-7490540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />}

                  title={item.firstName + " " + item.lastName}
                  subheader={item.firstName.toLowerCase() + "_" + item.lastName.toLowerCase()}

                />
              </Card>
            )
          )}
      </div>


    </div>
  )
}

export default SearchUser
