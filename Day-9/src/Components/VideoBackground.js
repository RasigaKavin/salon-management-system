import React from 'react';
import videoSrc from './pexels-rodnae-productions-12405641 (Original).mp4'; 

const VideoBackground = () => {
  return (
    <div className="video-container">
      <video width="1500rem"  autoPlay muted loop id="bg-video">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;