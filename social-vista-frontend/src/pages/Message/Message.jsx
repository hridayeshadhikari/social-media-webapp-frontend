import { Avatar, Grid, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import WestIcon from '@mui/icons-material/West';
import SendIcon from '@mui/icons-material/Send';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import SearchUser from '../../components/SearchUser/SearchUser';
import UserChatCard from './UserChatCard';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { allChatOfUser, createMessage } from '../../Redux/Message/message.action';
import { UploadToCloud } from '../../Utils/UploadToCloud';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Message = () => {

  const dispatch = useDispatch()
  const { auth, message } = useSelector(store => store)
  const [currentChat, setCurrentChat] = useState();
  const [messages, setMessages] = useState([]);
  const [selectedImage, setSelectedImage] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(allChatOfUser())
  }, [])
  console.log("chat--------", message.chats)

  const handleSelectImage = async (e) => {
    setLoading(true)
    console.log("handle select image")
    const imgUrl = await UploadToCloud(e.target.files[0], "image")
    setSelectedImage(imgUrl)
    setLoading(false)
  };

  useEffect(() => {
    setMessages([...messages, message.message])
  }, [message.message])

  const handleCreateMessage = (value) => {
    const message = {
      chatId: currentChat?.id,
      content: value,
      image: selectedImage,
    }
    dispatch(createMessage(message))
  };
  return (
    <div>
      <Grid container className='h-screen overflow-y-hidden'>
        <Grid className='px-5' item xs={3}>
          <div className='flex space-x-2 justify-between h-full'>
            <div className='w-full'>
              <div className='flex space-x-4 item-center py-5'>
                <WestIcon />
                <h1 className='font-bold'>Home</h1>

              </div>
              <div className='h-[83vh]'>


                <div>
                  <SearchUser />
                </div>
                <div className='h-full space-y-4 mt-5 overflow-y-scroll hideScrollbar'>
                  {
                    message.chats.map((item) => {

                      return <div onClick={() => {
                        setCurrentChat(item)
                        setMessages(item.messages)
                      }}>

                        <UserChatCard chat={item} />
                      </div>
                    })

                  }
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid className='h-full' item xs={9}>
          {currentChat ? <div>
            <div className='flex justify-between items-center border-l p-5'>
              <div className='flex items-center space-x-3 '>
                <Avatar src='https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600' />
                <p>{auth.user?.id === currentChat.users[0]?.id ? currentChat.users[1].firstName + " " +
                  currentChat.users[1].lastName : currentChat.users[0].firstName + " " + currentChat.users[0].lastName}</p>
              </div>


            </div>
            <div className='hideScrollBar overflow-y-scroll h-[82vh] space-y-5 py-5 px-6'>
              {
                messages.map((item) => <ChatMessage item={item} />
                )}

            </div>
            <div className='sticky bottom-0 border-l'>
              {selectedImage && <img className='w-[8rem] h-[10rem] object-cover px-2' src={selectedImage} alt='' />}
              <div className='py-5 flex items-center justify-center space-x-5'>
                <input
                  onKeyPress={(e) => {
                    if (e.key === "Enter" && e.target.value) {
                      handleCreateMessage(e.target.value)
                      setSelectedImage("");
                      
                    }
                  }}
                  className=' bg-transparent border border-grey rounded-full w-[90%] py-3 px-5'
                  type="text" placeholder='Enter Message . . . . .' />

                <div>
                  <input type="file" accept='image/*' onChange={handleSelectImage} className='hidden' id="image-inp" />
                  <label htmlFor="image-inp" >
                    <AddPhotoAlternateIcon />
                  </label>
                </div>
                <SendIcon />

              </div>



            </div>
          </div> : <div className='h-full space-y-5  flex flex-col justify-center items-center'>
            <ChatBubbleOutlineIcon sx={{ fontSize: "15rem" }} />
            <p className='text-xl font-semibold'>no chat selected</p>
          </div>}


        </Grid>

      </Grid>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

    </div>
  )
}

export default Message
