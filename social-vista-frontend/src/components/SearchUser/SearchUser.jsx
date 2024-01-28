import { Avatar, Card, CardHeader } from '@mui/material'
import React, { useState } from 'react'


const SearchUser = () => {

  const [username, setUsername] = useState("");
  const handleSearchUser = (e) => {
    setUsername(e.target.value)
    console.log("search user....")
  }
  const handleClick = (id) => {
    console.log(id)
  }
  return (
    <div>
      <div className='py-5 relative '>
        <input className='bg-transparent border border-grey outline-none w-full px-5 py-2 rounded-full'
          placeholder='search user. . . .'
          onChange={handleSearchUser}
          type="text"
          name=""
          id="" />

        {
          username && (<Card className='absolute w-full z-10 top-[4.5rem] cursor-pointer'>
            <CardHeader
              onClick={() => {
                handleClick()
                setUsername("")
              }}
              avatar={<Avatar src='https://images.pexels.com/photos/7490540/pexels-photo-7490540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />}

              title="Harry"
              subheader={"@harry_singh"}

            />
          </Card>
          )}
      </div>


    </div>
  )
}

export default SearchUser
