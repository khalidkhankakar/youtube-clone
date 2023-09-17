import SearchVideoCard from '@/components/SearchVideoCard'
import { SearchVideos } from '@/utils'



export default async function Slug({params}) {
  const searchResults = await SearchVideos(params.slug)
  return (
    <>
    <SearchVideoCard video={searchResults.items} />
    </>
  )
}