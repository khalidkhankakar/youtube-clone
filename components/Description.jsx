'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaThumbsUp,FaComment, FaThumbsDown, FaDownload, FaShare } from 'react-icons/fa';
const Description = ({ results }) => {


  const [isShowMore, setIsShowMore] = useState(false);

  function formatViews(views) {
    if (views >= 1000000000) {
      return `${(views / 1000000000).toFixed(1)}B`;
    } else if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    } else {
      return `${views}`;
    }
  }

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <div className="px-1 py-1">
      <h1 className="text-xl font-medium">{results.snippet.title}</h1>

      <div className="flex items-center gap-3 my-2 justify-between ">

        <div className="py-3 sm:py-4 ">
          <div className="flex items-start space-x-2">
            <div className="flex-shrink-0">
              <Image width={32} height={32} className="w-8 h-8 rounded-full" src={results?.snippet?.thumbnails?.high?.url} alt="Neil image" />
            </div>
            <div className="flex-1 min-w-0">
              <Link href={`${process.env.PRODUCTION_URL}/channel/${results.snippet.channelId}`}><span className="text-sm hover:underline font-medium text-black ">{results.snippet.channelTitle}</span></Link>
            </div>
            <button className="flex-1  bg-black/10 rounded-full text-black py-1 px-2 ">Subscribe</button>
          </div>
        </div>
        <div className='flex space-x-3'>

          <div className="flex items-center bg-black/10 rounded-full text-black px-2 s"><FaThumbsUp className="text-3xl py-1 px-2  cursor-pointer" /><span>{formatViews(results.statistics.likeCount)}</span><FaThumbsDown className="text-3xl py-1 px-2  cursor-pointer" /></div>

          <div className="flex bg-black/10 rounded-full text-black px-2 items-center"><FaComment className="text-3xl py-1 px-2  cursor-pointer" /><span>{formatViews(results.statistics.commentCount)}</span></div>
          <div className="flex flex-col bg-black/10 rounded-full text-black px-2 s items-center"><FaShare className="text-3xl py-1 px-2  cursor-pointer" /></div>
          <div className="flex flex-col bg-black/10 rounded-full text-black px-2 s items-center"><FaDownload className="text-3xl py-1 px-2  cursor-pointer" /></div>
        </div>

      </div>
<div className="px-2 py-1 bg-black/10 shadow-md rounded-md">

      <span className="text-sm mx-3 text-black my-1 font-medium">{formatViews(results.statistics.viewCount)} Views</span>

      {
        isShowMore ? <p className="text-sm font-normal">{results.snippet.description}</p> : <p className="text-sm font-normal">{results.snippet.description.substr(0, 50)} ...</p>
      }
      <button onClick={toggleReadMoreLess} className="bg-none text-blue-400">{isShowMore ? "Read Less" : "Read More"}</button>
    </div>
      
</div>
  )
}

export default Description