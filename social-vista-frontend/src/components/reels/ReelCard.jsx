import React from 'react'
import Carousel from 'react-instagram-carousel';



const images = [
  '/img/example1.jpg',
  '/img/example2.jpg',
  '/img/example3.jpg'
];
const ReelCard = () => {

 
  return (
    <div style={{width: '400px', height: '600px'}}>
    <Carousel images={images} />
  </div>
  )
}

export default ReelCard
