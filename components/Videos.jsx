import React from 'react'
import VideoCard from './VideoCard'

const Videos = ({searchResults}) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5  mx-auto">
        <div className="flex flex-wrap m-auto ">
          {
            searchResults.items.map((item)=>{
              return <VideoCard  key={item.snippet.publishedAt} video={item}/>
            })
          }

        </div>  
        </div>
    </section>
  )
}

export default Videos