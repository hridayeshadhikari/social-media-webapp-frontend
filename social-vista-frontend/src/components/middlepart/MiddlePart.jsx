import { Avatar, Card, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import StoryCircle from './StoryCircle';
import ImageIcon from '@mui/icons-material/Image'
import VideocamIcon from '@mui/icons-material/Videocam'
import ArticleIcon from '@mui/icons-material/Article'
import PostCard from '../PostCard/PostCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPostAction } from '../../Redux/Post/post.action';
import CreateStoryModal from './CreateStoryModal';

const story = [11, 1, 1, 1, 1, 1];

const MiddlePart = () => {

  const [openCreateStoryModal, setOpenCreateStoryModal] = useState(false)

  const dispatch = useDispatch();
  const { post } = useSelector(store => store);
  const handleCloseCreateStoryModal = () => setOpenCreateStoryModal(false)


  const handleOpenCreateStoryModel = () => {
    setOpenCreateStoryModal(true)
    console.log("open story model")
  }

  useEffect(() => {
    dispatch(getAllPostAction())
  }, [post.newComment])

  return (
    <div className='px-20'>
      <section className='flex items-center p-5 rounded-b-md'>
        <div className='flex flex-col items-center cursor-pointer mr-4 '>
          <IconButton onClick={handleOpenCreateStoryModel}>
          <Avatar
            sx={{ width: "4rem", height: "4rem" }}
          >
            <AddIcon sx={{ fontSize: "3rem" }} />
          </Avatar></IconButton>
          <p>new</p>
        </div>
        {story.map((item) => <StoryCircle />)}
      </section>

      <div className='mt-5 space-y-5'>
        {post.posts.slice().reverse().map((item) => <PostCard item={item} />)}
      </div>
      <div>
        <CreateStoryModal handleClose={handleCloseCreateStoryModal} open={openCreateStoryModal} />
      </div>
    </div>

  )
}

export default MiddlePart
