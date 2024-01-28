import React from 'react'

const ChatMessage = () => {
  return (
    <div className={`flex ${true?"justify-start" :"justify:end"} text-white`}>
        <div className={`p-1 ${true?"rounded-md":"px-5 rounded-full"} bg-blue-500`}>
            {true && <img className='w-[12rem] h-[17rem] object-cover rounded-md' alt='' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' />}
            <p className={`?{true? "py-2": "py-1"}`}>message....</p>

        </div>
      
    </div>
  )
}

export default ChatMessage

