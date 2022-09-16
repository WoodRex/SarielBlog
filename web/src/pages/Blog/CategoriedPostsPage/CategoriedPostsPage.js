import { useParams } from '@redwoodjs/router'
import CategoriedPostsCell from 'src/components/Blog/Cell/CategoriedPostsCell/CategoriedPostsCell'


const POSTS_PER_PAGE = 5

const BlogCategoryArticlesPage = () => {
  let { id, page } = useParams()
  page = page || 1

  return (
    <CategoriedPostsCell
      id={parseInt(id)}
      page={parseInt(page)}
      perPage={POSTS_PER_PAGE}
    />
  )
}

export default BlogCategoryArticlesPage
