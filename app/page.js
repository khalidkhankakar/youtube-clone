import Videos from "@/components/Videos";
import { SearchVideos, getRandomQuery } from "@/utils";
import './globals.css'

export default async function Home() {
  const query = getRandomQuery();
  console.log(query)
const searchResults = await SearchVideos(query);
// console.log(searchResults);
  return (
    <>
  <Videos searchResults={searchResults} />
    </>
  )
}
