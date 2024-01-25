import { Card, CardHeader } from '@mui/material'
import React from 'react'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import CardActions from '@mui/material/CardActions';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const PostCard = ({item}) => {
    return (
        <Card className=''>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={item.user.firstName+" "+item.user.lastName}
                subheader={"@"+item.user.firstName.toLowerCase()+"_"+item.user.lastName.toLowerCase()}
            />
            <CardMedia
                component="img"
                height="194"
                image={item.image}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {item.caption}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className='flex justify-between'>
                <div>
                    <IconButton aria-label="add to favorites">
                        {true?<FavoriteBorderIcon/>:<FavoriteIcon />}
                    </IconButton>
                    <IconButton aria-label="share">
                        {true?<ChatBubbleOutlineIcon/>:<ChatBubbleIcon/>}
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </div>
                <div>
                    <IconButton aria-label="share">
                        {true?<BookmarkBorderIcon />:<BookmarkIcon/>}
                    </IconButton>
                </div>
            </CardActions>
        </Card>
    )
}

export default PostCard
