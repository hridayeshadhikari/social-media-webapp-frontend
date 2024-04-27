import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'
import { Button, Card } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PostCard from '../../components/PostCard/PostCard'
import ReelCard from '../../components/ReelCard/ReelCard';
import { useDispatch, useSelector } from 'react-redux';
import ProfileModal from './ProfileModal';
import { getUsersPostAction } from '../../Redux/Post/post.action';

const tabs = [{ value: "post", name: "Posts" },
{ value: "reels", name: "Reels" },
{ value: "saved", name: "Saved" },
{ value: "repost", name: "Repost" },
]
const posts = [1, 1, 1, 1, 1];
const reels = [1, 1, 1, 1, 1, 1];
const savePost = [1, 1, 1, 1, 1];

const Profile = () => {
  const [value, setValue] = React.useState('post');
  const dispatch=useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { auth,post } = useSelector(store => store);
  const { id } = useParams();
  useEffect(()=>{
    dispatch(getUsersPostAction(auth?.user.id))
  })
  
  return (
    <Card className='my-10 w-[70%]'>
      <div className='rounded-md'>
        <div className='h-[14rem]'>
          <img className='w-full h-full rounded-t-md' src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg" alt="" />
        </div>
        <div className='px-5 flex justify-between items-start mt-5 h-[5rem]'>
          <Avatar className='tarnsform -translate-y-24' sx={{ height: "8rem", width: "8rem" }} src='https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?t=st=1705995186~exp=1705998786~hmac=9a0d68b55d7d18fb8ac72fdf8d1875d797b0bb7ebe28b1ed8fd8ff6c1aa486fc&w=740' />
          {true ? <Button onClick={handleOpen} sx={{ borderRadius: "20px" }} variant='outlined'>Edit Profile</Button>
            : <Button sx={{ borderRadius: "20px" }} variant='outlined'>Follow</Button>}
        </div>
        <div className='p-5'>
          <div>
            <h1 className='py-1 font-bold text-xl'>{auth.user?.firstName+" "+auth.user?.lastName}</h1>
            <p>@{auth.user?.firstName.toLowerCase() + "_" + auth.user?.lastName.toLowerCase()}</p>
          </div>
          <div className='flex gap-3 items-center py-3'>
            <span>{post?.posts.length} Post</span>
            <span>{auth?.user.followers.length} Follower</span>
            <span>{auth?.user.following.length} Followings</span>
          </div>
          

        </div>
        <section>
          <Box sx={{ width: '100%', borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="wrapped label tabs example"
            >
              {tabs.map((item) => (<Tab value={item.value} label={item.name} wrapped />))}
            </Tabs>
          </Box>
          <div className='flex justify-center'>
            {value === "post" ? (<div className='space-y-5 w-[70%] my-10'>
              {post?.posts.map((item) => (<div className='border border-slate-100 rounded-md'>
                <PostCard item={item}/>
              </div>
              ))}
            </div>) : value === "reels" ? <div className='flex gap-2 flex-wrap justify-center'>
              {reels.map((item) => <ReelCard />)}
            </div> : value === "saved" ? <div className='space-y-5 w-[70%] my-10'>
              {savePost.map((item) => (<div className='border border-slate-100 rounded-md'>
                <PostCard />
              </div>))}
            </div> : (
              <div>Repost</div>
            )}
          </div>
        </section>
      </div>
      <section>
        <ProfileModal open={open} handleClose={handleClose}/>
      </section>
    </Card>
  )
}

export default Profile
