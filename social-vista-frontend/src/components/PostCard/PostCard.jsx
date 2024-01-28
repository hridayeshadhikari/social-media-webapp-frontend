import { Card, CardHeader, Divider } from '@mui/material'
import React, { useState } from 'react'
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
import { createCommentAction, likePostAction } from '../../Redux/Post/post.action';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../Redux/store';
import { isPostLiked, numberOfLikes } from '../../Utils/isPostLiked';

const PostCard = ({ item }) => {

    const [showComments,setShowComments]=useState(false)
    const {auth,post}=useSelector(store=>store)
    const dispatch=useDispatch();
    const handleCreateComment=(description)=>{
        const reqData={
            postId:item.id,
            data:{description}
            
        }
        dispatch(createCommentAction(reqData))

    }

    const handleLikePost=()=>{
        dispatch(likePostAction(item.id))
    }

    const handleShowComments=()=>setShowComments(!showComments)

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
                title={item.user.firstName + " " + item.user.lastName}
                subheader={"@" + item.user.firstName.toLowerCase() + "_" + item.user.lastName.toLowerCase()}
            />
            <img className='w-full max-h-[35rem] object-cover object-top' src={item.image} alt="" />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {item.caption}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className='flex justify-between'>
                <div>
                    <IconButton onClick={handleLikePost} aria-label="add to favorites">
                        {isPostLiked(auth.user.id,item) ? <FavoriteIcon />:<FavoriteBorderIcon />}
                    </IconButton>
                    <IconButton aria-label="comment" onClick={handleShowComments}>
                        {true ? <ChatBubbleOutlineIcon /> : <ChatBubbleIcon />}
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <div className='ml-3 font-semibold text-[#616161]'>{numberOfLikes(item)} likes</div>
                </div>
                <div>
                    <IconButton aria-label="share">
                        {true ? <BookmarkBorderIcon /> : <BookmarkIcon />}
                    </IconButton>
                </div>
            </CardActions>
            { showComments &&
            <section>
                <div className='flex items-center space-x-5 mx-3 my-5'>
                    <Avatar sx={{}} />
                    <input onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            handleCreateComment(e.target.value)
                            console.log("enter pressed...", e.target.value)
                        }
                    }} className='w-full outline-none bg-transparent border border-[#3b4054] rounded-full px-5 py-2' type="text" placeholder='write your comment....' />
                </div>
                <Divider />
                <div className='mx-3 space-y-2 my-2 text-xs'>
                    { item.comments?.map((comment)=>
                    <div className=' flex justify-between items-center'>
                        <div className='flex items-center space-x-5' >
                            <Avatar sx={{ height: "2rem", width: "2rem", fontSize: ".8rem" }}>
                                
                            </Avatar>
                            <p>{comment.description}</p>

                        </div>

                    </div>)}

                </div>
            </section>}
        </Card>
    )
}

export default PostCard
