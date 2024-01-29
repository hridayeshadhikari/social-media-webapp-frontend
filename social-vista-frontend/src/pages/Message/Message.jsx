import { Avatar, Grid, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import WestIcon from '@mui/icons-material/West';
import SendIcon from '@mui/icons-material/Send';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import SearchUser from '../../components/SearchUser/SearchUser';
import UserChatCard from './UserChatCard';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { allChatOfUser } from '../../Redux/Message/message.action';

const Message = () => {

  const dispatch = useDispatch()
  const { auth, message } = useSelector(store => store)
  const [currentChat, setCurrentChat] = useState();
  const [messages, setMessages] = useState();
  const [selectedImage, setSelectedImage] = useState();

  useEffect(() => {
    dispatch(allChatOfUser())
  }, [])
  console.log("chat--------", message.chats)

  const handleSelectImage = () => {
    console.log("handle select image")
  }

  const handleCreateMessage = (value) => {
    const message = {
      chatId: currentChat.id,
      content: value,
      image: selectedImage
    }
  }
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
          <div>
            <div className='flex justify-between items-center border-l p-5'>
              <div className='flex items-center space-x-3 '>
                <Avatar src='https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600' />
                <p>Hridayesh Adhikari</p>
              </div>


            </div>
            <div className='hideScrollBar overflow-y-scroll h-[82vh] space-y-5 py-5 px-6'>
              <ChatMessage />

            </div>
          </div>
          <div className='sticky bottom-0 border-l'>
            <div className='py-5 flex items-center justify-center space-x-5'>
              <input className=' bg-transparent border border-grey rounded-full w-[90%] py-3 px-5'
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

        </Grid>

      </Grid>

    </div>
  )
}

export default Message
