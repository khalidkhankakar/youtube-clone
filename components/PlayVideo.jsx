'use client'
import YouTube from "react-youtube"

const PlayVideo = ({videoId}) => {
  const opts = {
    height: '350',
    width: '650',
    playerVars: {
      autoplay: 1,
    },
  }
  
  return (
    <div className="w-full ">
      <YouTube videoId={videoId} opts={opts}  />
    </div>
  )
    
}

export default PlayVideo