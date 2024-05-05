import { Avatar, Grid, IconButton } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
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
import { Link } from 'react-router-dom'
import SockJS from 'sockjs-client';
import Stom from 'stompjs';

const Message = () => {

  const dispatch = useDispatch()
  const { auth, message } = useSelector(store => store)
  const [currentChat, setCurrentChat] = useState();
  const [messages, setMessages] = useState([]);
  const [selectedImage, setSelectedImage] = useState();
  const [loading, setLoading] = useState(false);
  const [stompClient, setStompClient] = useState(null);
  const chatContainerRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages])

  useEffect(() => {
    const sock = new SockJS("http://localhost:1212/ws")
    const stomp = Stom.over(sock)
    setStompClient(stomp);

    stomp.connect({}, onConnect, onError)
  }, [])

  const onConnect = () => {
    console.log("WebSocket Connected....");
  }
  const onError = (error) => {
    console.log("error...", error)
  }

  useEffect(() => {
    dispatch(allChatOfUser())
  }, [])
  // console.log("chat--------", message.chats)

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

  const handleCreateMessage = () => {
    if (inputValue.trim() !== "") { // Check if input value is not empty
      const message = {
        chatId: currentChat.id,
        content: inputValue,
        image: selectedImage,
      };
      dispatch(createMessage({ message, sendMessageToServer }));
      setInputValue(""); // Clear the input box
      setSelectedImage(""); // Clear selected image
    }
  };

  useEffect(() => {
    if (stompClient && auth.user && currentChat) {
      const subscription = stompClient.subscribe(`/user/${currentChat.id}/private`,
        onMessageReceive)
    }
  }, [stompClient, auth.user, currentChat])

  const sendMessageToServer = (newMessage) => {
    if (stompClient && newMessage) {
      stompClient.send(`/app/chat/${currentChat?.id.toString()}`, {},
        JSON.stringify(newMessage))
    }
  }

  const onMessageReceive = (payload) => {
    const receivedMessage = JSON.parse(payload.body);
    setMessages(messages => {
        if (messages.some(msg => msg.id === receivedMessage.id)) {
            return messages; 
        } else {
            return [...messages, receivedMessage];
        }
    });
};


  return (
    <div>
      <Grid container className='h-screen overflow-y-hidden'>
        <Grid className='px-5' item xs={3}>
          <div className='flex space-x-2 justify-between h-full'>
            <div className='w-full'>
              <div className='flex space-x-4 item-center py-5'>
                <Link to="/"><WestIcon /></Link>
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
            <div ref={chatContainerRef} className='hideScrollBar overflow-y-scroll h-[75vh] space-y-5 py-5 px-6'>
              {
                messages.map((item) => <ChatMessage item={item} />
                )}

            </div>
            <div className='sticky bottom-0 border-l'>
              {selectedImage && <img className='w-[8rem] h-[10rem] object-cover px-2' src={selectedImage} alt='' />}
              <div className='py-5 flex items-center justify-center space-x-5'>
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)} // Update input value
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleCreateMessage();
                    }
                  }}
                  className=' bg-transparent border border-grey rounded-full w-[90%] py-3 px-5'
                  type="text"
                  placeholder='Enter Message . . . . .'
                />

                <div>
                  <input type="file" accept='image/*' onChange={handleSelectImage} className='hidden' id="image-inp" />
                  <label htmlFor="image-inp" >
                    <AddPhotoAlternateIcon sx={{ color: "gray" }} />
                  </label>
                </div>
                <div>
                  <IconButton onClick={handleCreateMessage}>
                    <SendIcon />
                  </IconButton>
                </div>

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
