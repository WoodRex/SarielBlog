import { MetaTags } from '@redwoodjs/web'

import PostsPage from '../PostsPage/PostsPage'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <PostsPage />
    </>
  )
}

export default HomePage
