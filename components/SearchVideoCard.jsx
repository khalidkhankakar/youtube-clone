import Image from 'next/image'
import Link from 'next/link'
import { FaCheckCircle } from 'react-icons/fa';

const SearchVideoCard = ({video}) => {

  return (<>

    {video.map((item)=>{
      return <div  key={item.snippet.publishedAt} className={`flex bg-black/10 flex-col md:flex-row ${!item.id.channelId && "md:h-48"}   w-full my-2 border shadow-md rounded-lg`}>
      <Link href={`/${item.id.videoId  ? 'watch' : 'channel' }/${item.id.videoId ? item.id.videoId:item.id.channelId }`}><Image src={item?.snippet?.thumbnails?.high?.url} width={500} height={500}  alt="loading" className={`object-c  w-full h-full  ${item.id.channelId && "w-1/5 m-auto rounded-full"}`} /></Link>
      <div className="py-2 px-4 ">
          <h1 className="text-lg md:text-xl font-bold">{item.snippet.title}</h1>
          <h2 className="tracking-widest flex font-medium items-center text-[1rem] title-font  text-black mb-1">{item.snippet.channelTitle}<FaCheckCircle className="text-lg text-gray-600"/></h2>
          <p className="hidden md:block text-sm md:text-md">{item.snippet.description}</p>
      </div>
  </div>
    })}
  </>
  )
}

export default SearchVideoCard