import { Avatar, Card, CardHeader, IconButton } from '@mui/material'
import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const UserChatCard = () => {
  return (
    <Card>
        <CardHeader avatar={
            <Avatar sx={{width:"3rem", height:"3rem", fontSize:"1.5rem" }}
             src='https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049569.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1706400000&semt=ais'/>
        }
        action={<IconButton>
            <MoreHorizIcon/>
        </IconButton>}
        title="Harry Adhikari"
        subheader={"@harry_adhikari"}
        >
            
        </CardHeader>
      
    </Card>
  )
}

export default UserChatCard
