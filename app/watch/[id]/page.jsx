import { CommentsOfVideo } from "@/components/CommentsOfVideo"
import Description from "@/components/Description"
import PlayVideo from "@/components/PlayVideo"
import SuggestV from "@/components/SuggestV"
import { SuggestedVideos, VideoComments, VideoDetails } from "@/utils"


const page = async ({params}) => {
  const getVideoDetails = await VideoDetails(params.id);
  const getVideoComments = await VideoComments(params.id);
  const getSuggestedVideos = await SuggestedVideos(params.id);
  return (
    <div className="flex items-start justify-between flex-col md:flex-row gap-3  w-[95%]  m-auto">
      <div className="flex flex-col   w-full md:w-[75%]  ">
      <PlayVideo videoId={params.id} />
      <Description results={getVideoDetails.items[0]}/>
      <CommentsOfVideo comments={getVideoComments.items} />
      </div>
      <SuggestV results={getSuggestedVideos.items}/>
    </div>
  )
}

export default page