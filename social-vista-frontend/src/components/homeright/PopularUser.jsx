import React from 'react';
import { Button,CardHeader } from '@mui/material'
import { red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton';

const PopularUser = () => {
  return (
    <div>
         <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <Button size='small'>
                            follow
                        </Button>
                    </IconButton>
                }
                title="HarryAdhikari"
                subheader="@harry"
            />
      
    </div>
  )
}

export default PopularUser;
