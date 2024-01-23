import React from 'react'
import { useParams } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'
import { Button, Card } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PostCard from '../../components/PostCard/PostCard'

const tabs = [{ value: "post", name: "Posts" },
{ value: "reels", name: "Reels" },
{ value: "saved", name: "Saved" },
{ value: "repost", name: "Repost" },
]
const posts = [1, 1, 1, 1, 1];
const Profile = () => {
  const [value, setValue] = React.useState('post');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { id } = useParams();
  return (
    <Card className='my-10 w-[70%]'>
      <div className='rounded-md'>
        <div className='h-[14rem]'>
          <img className='w-full h-full rounded-t-md' src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg" alt="" />
        </div>
        <div className='px-5 flex justify-between items-start mt-5 h-[5rem]'>
          <Avatar className='tarnsform -translate-y-24' sx={{ height: "8rem", width: "8rem" }} src='https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?t=st=1705995186~exp=1705998786~hmac=9a0d68b55d7d18fb8ac72fdf8d1875d797b0bb7ebe28b1ed8fd8ff6c1aa486fc&w=740' />
          {true ? <Button sx={{ borderRadius: "20px" }} variant='outlined'>Edit Profile</Button>
            : <Button sx={{ borderRadius: "20px" }} variant='outlined'>Follow</Button>}
        </div>
        <div className='p-5'>
          <div>
            <h1 className='py-1 font-bold text-xl'>Hridayesh Adhikari</h1>
            <p>@Harry</p>
          </div>
          <div className='flex gap-3 items-center py-3'>
            <span>41 post</span>
            <span>35 follower</span>
            <span>40 followings</span>
          </div>
          <div>
            <p>my name is hridayesh adhikari</p>
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
              {posts.map((item) => (<div className='border border-slate-400 rounded-md'>
                <PostCard />
              </div>
              ))}
            </div>) : ""}
          </div>
        </section>
      </div>
    </Card>
  )
}

export default Profile
