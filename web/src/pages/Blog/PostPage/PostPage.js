import { useParams } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import PostCell from 'src/components/Blog/Cell/PostCell/PostCell'

const PostPage = () => {
  const { id } = useParams()

  return (
    <>
      <MetaTags title="Post" description="Post page" />

      <PostCell id={id}></PostCell>
    </>
  )
}

export default PostPage
