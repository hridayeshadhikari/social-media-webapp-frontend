import { Card, CardHeader, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
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
import { createCommentAction, getSavePost, likeComment, likePostAction, savePost } from '../../Redux/Post/post.action';
import { useDispatch, useSelector } from 'react-redux';
import { isPostLiked, numberOfLikes } from '../../Utils/isPostLiked';
import { isCommentLiked } from '../../Utils/isCommentLiked';
import { isPostSaved } from '../../Utils/isPostSaved';

const PostCard = ({ item }) => {

    const [showComments, setShowComments] = useState(false)
    const [commentText, setCommentText] = useState('');
    const { auth, post } = useSelector(store => store)
    const dispatch = useDispatch();
    const handleCreateComment = (description) => {
        const reqData = {
            postId: item.id,
            data: { description }
        }
        dispatch(createCommentAction(reqData))
        setCommentText('');
    }

    const handleLikePost = () => {
        dispatch(likePostAction(item.id))
    }

    const handleShowComments = () => setShowComments(!showComments)

    const handleSavePost = () => {
        dispatch(savePost(item.id))
        console.log("savedPost-------->",post.savePost)
    }

    const handleLikeComment = (commentId) => {
        dispatch(likeComment(commentId))

    }

    useEffect(() => {
        dispatch(getSavePost())
    }, [dispatch])
    // console.log("savedPost--------$$$$>",post.savePost)
    


    const createdAtDate = new Date(item?.createdAt);
    // console.log("===============", createdAtDate)
    const currentDate = new Date();
    const timeDifferenceMs = currentDate - createdAtDate;
    const daysDifference = timeDifferenceMs / (1000 * 60 * 60 * 24);
    const daysPassed = Math.round(daysDifference);

    // console.log(`${daysPassed} days have passed since`);
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
                title={item?.user.firstName + " " + item?.user.lastName}
                subheader={"@" + item?.user.firstName.toLowerCase() + "_" + item?.user.lastName.toLowerCase()}
            />
            {item?.image ? (
                <img className='w-full max-h-[35rem] object-cover object-top' src={item?.image} alt="" />
            ) : item?.video ? (
                <video autoPlay className='w-full max-h-[35rem]' controls>
                    <source src={item?.video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : null}
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {item?.caption}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className='flex justify-between'>
                <div>
                    <IconButton onClick={handleLikePost} aria-label="add to favorites">
                        {isPostLiked(auth.jwt.id, item) ? <FavoriteIcon sx={{ color: "red" }} /> : <FavoriteBorderIcon />}
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
                    <IconButton aria-label="bookmark" onClick={handleSavePost}>
                        {isPostSaved(post.savePost,item) ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                    </IconButton>
                </div>
            </CardActions>
            {showComments &&
                <section>
                    <div className='flex items-center space-x-5 mx-3 my-5'>
                        <Avatar sx={{}} />
                        <input
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                    handleCreateComment(e.target.value)
                                    console.log("enter pressed...", e.target.value)
                                }
                            }} className='w-full outline-none bg-transparent border border-[#3b4054] rounded-full px-5 py-2' type="text" placeholder='write your comment....' />
                    </div>
                    <Divider />

                    <div className='mx-3 space-y-2 my-2 text-xs'>
                        <h1 className='font-bold'>Comments....</h1>
                        {
                            item.comments && item.comments.length > 0 ? (
                                item.comments?.slice().reverse().map((comment) =>
                                    <div className=' flex justify-between items-center' key={comment.id}>
                                        <div className='flex items-center space-x-5' >
                                            <Avatar sx={{ height: "2rem", width: "2rem", fontSize: ".8rem" }}>

                                            </Avatar>
                                            <div className='flex-col'>
                                                <h1 className='font-bold'>
                                                    @{comment.user.firstName.toLowerCase()}_{comment.user.lastName.toLowerCase()} ( {daysPassed > 1 ? `${daysPassed} day ago` : 'today'} )
                                                </h1>
                                                <p>{comment.description}</p>
                                            </div>

                                        </div>
                                        <div className='flex-col'>
                                            <IconButton onClick={() => handleLikeComment(comment.id)} aria-label="like-comment">
                                                {isCommentLiked(auth.jwt.id, comment) ? <FavoriteIcon sx={{ color: "red" }} /> : <FavoriteBorderIcon />}
                                            </IconButton>
                                            <p className='font-bold'>{comment.liked.length} likes</p>
                                        </div>

                                    </div>)
                            ) : (
                                <p className='text-center font-bold'>No comments</p>
                            )
                        }

                    </div>
                </section>}
        </Card>
    )
}

export default PostCard
