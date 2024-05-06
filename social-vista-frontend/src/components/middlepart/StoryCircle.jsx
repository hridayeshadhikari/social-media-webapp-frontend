import React from 'react'
import { Avatar } from '@mui/material'


const StoryCircle = ({item}) => {
    return (
        <div>

            <div className='flex flex-col cursor-pointer mr-4 items-center'>

                <Avatar
                    sx={{ width: "4rem", height: "4rem" }}
                    src='https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?size=626&ext=jpg'
                >

                </Avatar>
                <p>{item.user.firstName.toLowerCase()}</p>

            </div>
        </div>
    )
}

export default StoryCircle
