import Image from 'next/image'
import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns';
import { FaCheckCircle } from 'react-icons/fa';

const SearchVideoCard = ({video}) => {
  function getTimeAgo(timestamp) {
    return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
  }
  return (<>

    {video.map((item)=>{
      return <Link key={item.snippet.publishedAt} href={`/${item.id.videoId  ? 'Watch' : 'Channel' }/${item.id.videoId ? item.id.videoId:item.id.channelId }`}><div  className="flex bg-black/10 flex-col md:flex-row w-full my-2 h-48 border shadow-md rounded-md">
      <Image src={item?.snippet?.thumbnails?.high?.url} width={500} height={500}  alt="" className={`object-cover w-1/4 h-auto  ${item.id.channelId && "w-1/5 rounded-full"}`} />
      <div className="py-2 px-4 ">
          <h1 className="text-lg md:text-xl font-bold">{item.snippet.title}</h1>
          <h2 className="tracking-widest flex font-medium items-center text-[1rem] title-font  text-black mb-1">{item.snippet.channelTitle}<FaCheckCircle className="text-lg text-gray-600"/></h2>
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{getTimeAgo(item.snippet.publishedAt)}</h2>
          <p className="text-sm md:text-md">{item.snippet.description}</p>
      </div>
  </div></Link>
    })}
  </>
  )
}

export default SearchVideoCard