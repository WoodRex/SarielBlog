import { useParams } from '@redwoodjs/router'
import CategoriedPostsCell from 'src/components/Blog/Category/CategoriedPostsCell/CategoriedPostsCell'


const BlogCategoryArticlesPage = () => {
  const { id } = useParams()

  return (
    <CategoriedPostsCell id={id} />
  )
}

export default BlogCategoryArticlesPage
