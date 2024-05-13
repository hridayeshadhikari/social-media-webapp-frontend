import React from 'react'

const ReelCards = ({item}) => {
  console.log("%%%%%",item.video)
  return (
    <div className='w-[20rem]  px-2 my-5'>
      <video autoPlay className='w-full h-[83vh]' src={item.video}/>
    </div>
  )
}

export default ReelCards;