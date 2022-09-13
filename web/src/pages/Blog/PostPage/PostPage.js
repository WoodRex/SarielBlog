import { useParams } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import NextPostNavCell from 'src/components/Blog/Cell/NextPostNavCell/NextPostNavCell'
import PostCell from 'src/components/Blog/Cell/PostCell/PostCell'


const PostPage = () => {
  const { id } = useParams()

  return (
    <>
      <MetaTags title="Post" description="Post page" />

      <PostCell id={id} />
      <NextPostNavCell id={id} />
    </>
  )
}

export default PostPage
