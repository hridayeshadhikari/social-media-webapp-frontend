import { Avatar, Card, CardHeader } from '@mui/material'
import React from 'react'


const SearchUser = () => {
  const handleSearchUser=()=>{
    console.log("search user....")
  }
  const handleClick=(id)=>{
    console.log(id)
  }
  return (
    <div>
        <div className='py-5 relative '>
          <input className='bg-transparent border border-grey outline-none w-full px-5 py-2 rounded-full'
           placeholder='search user. . . .' onChange={handleSearchUser} type="text" name="" id="" />

        </div>
        {
          false && <Card>
                  <CardHeader onClick={()=>{handleClick()}}
                  avatar={<Avatar src='https://images.pexels.com/photos/7490540/pexels-photo-7490540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>}
                   
                  title="Harry"
                  subheader={"@harry_singh"}
   
                   />
       </Card>
        }
      
    </div>
  )
}

export default SearchUser
