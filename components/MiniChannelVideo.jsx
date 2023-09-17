'use client'
import YouTube from "react-youtube"

const MiniChannelVideo = ({videoId}) => {
  const opts = {
    height: '200',
    width: '250',
    playerVars: {
      autoplay: 0,
    },
  }
  
  return (
      <YouTube videoId={videoId} opts={opts}  />
  )
    
}

export default MiniChannelVideo