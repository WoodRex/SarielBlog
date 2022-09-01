import { useParams } from "@redwoodjs/router"
import SearchCell from "src/components/Blog/Cell/SearchCell/SearchCell"


const SearchPage = () => {
  const { term } = useParams()

  return <SearchCell term={term} />
}

export default SearchPage
