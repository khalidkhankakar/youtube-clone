import Image from "next/image"
import Link from "next/link"

const SuggestV = ({results}) => {
  return (
<div className="w-full p-1 flex flex-col border-2 bg-black/10 rounded-lg  overflow-y-auto h-[35rem]">
  <h1 className="text-lg text-center font-bold">Suggested Videos</h1>
  {
    results.map((item)=>(
    <div key={item.snippet.publishedAt} class=" my-2  border-gray-600  rounded-lg shadow">
    <Link href={`/watch/${item.id.videoId}`}>
        <Image src={item?.snippet?.thumbnails?.high?.url} width={500} height={500}  class="rounded-t-lg  h-[11.5rem] object-cover"  alt="logoing.." />
    </Link>
    <div class="p-1">
            <h5 class="text-sm text-center font-medium tracking-tight text-gray-900 ">{item.snippet.title.substr(0,50)} ...</h5>
    </div>
    </div>
    ))
  }



</div>
  )
}

export default SuggestV