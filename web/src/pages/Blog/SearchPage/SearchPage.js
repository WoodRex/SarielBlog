import { useParams } from "@redwoodjs/router"
import SearchCell from "src/components/Blog/Search/SearchCell/SearchCell"

const SearchPage = () => {
  const { term } = useParams()

  return <SearchCell term={term} />
}

export default SearchPage
