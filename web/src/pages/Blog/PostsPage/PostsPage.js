import { useParams } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import PostsCell from 'src/components/Blog/Cell/PostsCell/PostsCell'

// output variable to env later
const POSTS_PER_PAGE = 5

const PostsPage = () => {

  let { page } = useParams()

  page = page || 1

  return (
    <>
      <MetaTags title="Posts" description="Posts page" />

      <PostsCell
        page={parseInt(page)}
        perPage={POSTS_PER_PAGE}
      />
    </>
  )
}

export default PostsPage
