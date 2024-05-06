import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import StoryCircle from './StoryCircle';
import PostCard from '../PostCard/PostCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPostAction } from '../../Redux/Post/post.action';
import CreateStoryModal from './CreateStoryModal';
import ViewStoryModal from './ViewStoryModal';
import { getfollowingsStory } from '../../Redux/Story/story.action';


const MiddlePart = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = (userId) => {
    // console.log("$$$$$$$$$",userId)
    setOpen(true);
    setSelectedUserId(userId);
    // console.log("$$$$$$$$$",selectedUserId)
  };
  const handleClose = () => setOpen(false);

  const [openCreateStoryModal, setOpenCreateStoryModal] = useState(false)

  const dispatch = useDispatch();
  const { post, story } = useSelector(store => store);
  const handleCloseCreateStoryModal = () => setOpenCreateStoryModal(false)


  const handleOpenCreateStoryModel = () => {
    setOpenCreateStoryModal(true)
    console.log("open story model")
  }

  useEffect(() => {
    dispatch(getAllPostAction())
  }, [post.newComment])


  useEffect(() => {
    dispatch(getfollowingsStory())
  }, [dispatch])

  console.log("=============>", story)

  return (
    <div className='px-20'>
      <section className='flex items-center p-5 rounded-b-md'>
        <div className='flex flex-col items-center cursor-pointer mr-4 '>

          <IconButton onClick={handleOpenCreateStoryModel}>
            <Avatar
              sx={{ width: "4rem", height: "4rem" }}
            >
              <AddIcon sx={{ fontSize: "3rem" }} />
            </Avatar>
          </IconButton>
          <p>new</p>
        </div>
        {story?.followingsStory.map((item) => (
          <button onClick={() => handleOpen(item?.user.id)}>
            <StoryCircle item={item} />
          </button>
        ))}

      </section>


      <div className='mt-5 space-y-5'>
        {post.posts.slice().reverse().map((item) => <PostCard item={item} />)}
      </div>
      <div>
        <CreateStoryModal handleClose={handleCloseCreateStoryModal} open={openCreateStoryModal} />
      </div>
      <ViewStoryModal handleClose={handleClose} open={open} userId={selectedUserId} />

    </div>

  )
}

export default MiddlePart
