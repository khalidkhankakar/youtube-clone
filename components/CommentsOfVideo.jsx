'use client'

import { useState } from "react";

export const CommentsOfVideo = ({comments}) => {
    const [showComments, setShowComments] = useState(false);

    const toggleComments = () => {
        setShowComments(!showComments);
      };

  return (
<>
<div className="w-full  p-4  sm:p-3">
    <div className="flex items-center justify-between mb-2">
        <h5 className="text-xl font-bold leading-none text-black ">Comments</h5>
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-600 ">

        {showComments ? comments.map((item) =>(  <li key={item.snippet.topLevelComment.snippet.publishedAt} className="py-3 sm:py-4">
                <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} alt="Neil image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-black truncate ">{item.snippet.topLevelComment.snippet.authorDisplayName}</p>
                        <p className="text-sm  text-black">{item.snippet.topLevelComment.snippet.textOriginal}</p>
                    </div>
                </div>
            </li>)) :  <li className="py-3 sm:py-4">
            <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={comments[0]?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} alt="Neil image"/>
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-black truncate ">{comments[0].snippet.topLevelComment.snippet.authorDisplayName}</p>
                    <p className="text-sm  text-black">{comments[0].snippet.topLevelComment.snippet.textOriginal}</p>
                </div>
            </div>
        </li> }
    
        </ul>
        <button className="bg-none text-blue-600" onClick={toggleComments}>
        {showComments ? 'View Less' : 'View More'}
      </button>
   </div>
</div>
</>
  )
}
