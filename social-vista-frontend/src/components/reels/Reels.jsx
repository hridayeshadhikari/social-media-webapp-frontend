
import React from 'react';
import { Carousel } from 'primereact/carousel';
import ReelCard from './ReelCard';

export default function Reels() {
  const reelData = [
    {
      id: 1,
      url: "https://videos.pexels.com/video-files/20770858/20770858-sd_540_960_30fps.mp4"
    },
    {
      id: 2,
      url: "https://videos.pexels.com/video-files/20770858/20770858-sd_540_960_30fps.mp4"
    },
    {
      id: 3,
      url: "https://videos.pexels.com/video-files/20770858/20770858-sd_540_960_30fps.mp4"
    },
    {
      id: 4,
      url: "https://videos.pexels.com/video-files/20770858/20770858-sd_540_960_30fps.mp4"
    },
  ];
    
    
    

    const productTemplate = (reelData) => {
        return (
            <div>
               <ReelCard item={reelData.url}/>
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <Carousel value={reelData} numVisible={1} numScroll={1} orientation="vertical" verticalViewPortHeight="550px"
            itemTemplate={productTemplate} />
        </div>
    )
}
        