import React from 'react'
import { Avatar } from '@mui/material'


const StoryCircle = () => {
    return (
        <div>

            <div className='flex flex-col cursor-pointer mr-4 items-center'>

                <Avatar
                    sx={{ width: "4rem", height: "4rem" }}
                    src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
                >

                </Avatar>
                <p>harry</p>

            </div>
        </div>
    )
}

export default StoryCircle
