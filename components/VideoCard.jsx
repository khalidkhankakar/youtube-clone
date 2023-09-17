import Image from 'next/image'
import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns';
import { FaCheckCircle } from 'react-icons/fa';
const VideoCard = ({video}) => {
  function getTimeAgo(timestamp) {
    return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
  }
  return (
<div className="p-4 mx-2 my-2 md:w-[31%] rounded-lg bg-black/10 ">
    <div className="h-full border-gray-200 rounded-lg overflow-hidden">
    <Link key={video.snippet.publishedAt} href={`/${video.id.videoId  ? 'Watch' : 'Channel' }/${video.id.videoId ? video.id.videoId:video.id.channelId }`}><Image   width={500} height={500} className={`lg:h-48 md:h-36 w-full object-cover object-center ${video.id.channelId && "md:h-1/2 m-auto h-1/2  w-1/2 rounded-full"} `}  src={video?.snippet?.thumbnails?.high?.url} alt="Loading..." /></Link>
      <div className="p-2">
        <h1 className="title-font text-md font-medium text-gray-900 mb-1">{video.snippet.title}</h1>
        <div className="flex items-center">
        <h2 className="tracking-widest text-[1rem] title-font font-medium text-black mb-1">{video.snippet.channelTitle}</h2><span><FaCheckCircle className="text-lg text-gray-600"/></span>
        </div>
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{getTimeAgo(video.snippet.publishedAt)}</h2>
      </div>
    </div>
  </div>
  )
}

export default VideoCard