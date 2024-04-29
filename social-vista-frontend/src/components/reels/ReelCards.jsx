import React from 'react'

const ReelCards = ({props}) => {
  return (
    <div className='w-[20rem]  px-2 my-5'>
      <video autoPlay className='w-full h-[83vh]' src={props}/>
    </div>
  )
}

export default ReelCards;