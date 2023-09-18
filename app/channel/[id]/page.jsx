import MiniChannelVideo from '@/components/MiniChannelVideo';
import { ChannelDetails, ChannelVideos } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';

const page = async ({ params }) => {
  const Cdetails = await ChannelDetails(params.id);
  const mainData = await Cdetails.items[0];
const Cvideos = await ChannelVideos(params.id);
const mainVid = await Cvideos.items;
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


  return (
    <>
      <section class="channel-banner flex-shrink-0 w-full h-[7rem] md:h-[14rem] justify-end items-end bg-cover bg-center p-4" style={{ backgroundImage: `url(${mainData.brandingSettings.image.bannerExternalUrl})` }} />

      <section className="bg-black/10 mt-1 flex flex-col py-2 justify-center sm:items-center md:flex-row md:justify-between">
        <div className="logo flex gap-4 flex-col md:flex-row justify-center items-center">
          <Image width={100} height={100} src={mainData?.snippet?.thumbnails?.high?.url} alt="channel logo... " className="w-32 h-32 rounded-full " />

          <div className="deatail flex flex-col gap-1 md:gap-2 md:items-start items-center">
            <h1 className="text-2xl font-medium ">{mainData.snippet.title}</h1>
            <h1 className="text-lg font-bold block md:hidden cursor-pointer text-red-500 hover:font-semibold ">Subscribe</h1>
            <div><span className="font-light sm:text-center text-blue-600 cursor-pointer hover:underline">{mainData.snippet.customUrl}</span>  <span className="font-medium text-red-600 sm:text-center">{formatViews(mainData.statistics.subscriberCount)} subscribers</span> <span className="font-medium sm:text-center">{formatViews(mainData.statistics.videoCount)} videos</span>
            </div>
            <p className="sm:text-center">{mainData.snippet.description.substr(0, 100)}</p>
          </div>
        </div>
        <div className="subscribe">
          <h1 className="text-lg hidden font-bold md:block cursor-pointer text-red-500 hover:font-semibold rounded-full  mt-3 py-1 px-5">Subscribe</h1>
        </div>
      </section>
      <div class="featured-video  flex cursor-pointer my-2">

        <div class="video-thumbnail pr-6">
          <MiniChannelVideo videoId={mainVid[0].id.videoId}/>
        </div>

        <div class="video-info flex-1">
          <h3 class="video-title text-xl font-normal">{mainVid[0].snippet.channelTitle}</h3>
        </div>
      </div>
<hr className="text-gray-900 w-[90%] m-auto my-2" />

      <nav class="channel-nav rounded-md px-3 bg-black/30 ">

        <div class="container">
          <ul className="flex justify-between items-center ">
            <li class="nav-item inline-block text-base font-medium uppercase  text-gray-200 px-2 py-2 hover:text-black">Home</li>
            <li class="nav-item inline-block text-base font-medium uppercase  text-black">Videos</li>
            <li class="nav-item inline-block text-base font-medium uppercase  text-gray-200  py-2 hover:text-black">Playlists</li>
            <li class="nav-item inline-block text-base font-medium uppercase  text-gray-200  py-2 hover:text-black">About</li>
            <li class="nav-item inline-block text-base font-medium uppercase  text-gray-200 px-2 py-2 hover:text-black">Community</li>
          </ul>
        </div>
      </nav>


      <section class="text-gray-600 body-font">
  <div class="container px-2 py-8 mx-auto">
    <div class="flex flex-wrap -m-4">

    {mainVid.map((item)=>(
      <div key={item.snippet.publishedAt} class="p-2 md:w-1/4">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Link href={`/watch/${item.id.videoId}`}><Image src={item?.snippet?.thumbnails?.high?.url} width={500} height={500} class="lg:h-48 md:h-36 w-full object-cover"  alt="blog"/></Link>
          <div class="p-2">
            <h1 class="title-font text-lg font-medium text-gray-900 mb-1">{item.snippet.title}</h1>
            <p class="leading-relaxed mb-1">{item.snippet.channelTitle}</p>
          </div>
        </div>
      </div>    ))}



      
    </div>
  </div>
</section>
    </>
  )
}

export default page