
import React, { useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { getAllReels } from '../../Redux/Reel/reel.action';
import { useDispatch, useSelector } from 'react-redux';
import ReelCards from './ReelCards';

export default function Reels() {


  const { reel } = useSelector((store) => store)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllReels())
  }, [dispatch])

  // console.log("====>", reel.reel[0])

  // const res=reel.reel.map((item)=>{
  //   console.log("============",item)
  // })

  // console.log(res)



  const productTemplate = (reel) => {
    console.log("========>",reel)
    return (
      <div>
        {
          reel?.reel?.map((item) => {
            <div key={item.id} >
              <ReelCards item={item.video} />
            </div>
          })
        }
      </div>
    );
  };

  return (
    <div className="card flex justify-content-center">
      <Carousel value={reel.reel} numVisible={1} numScroll={1} orientation="vertical" verticalViewPortHeight="550px"
        itemTemplate={productTemplate} />
    </div>
  )
}
