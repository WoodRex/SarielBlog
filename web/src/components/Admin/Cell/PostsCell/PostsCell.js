import { Link, routes } from '@redwoodjs/router'

import Posts from 'src/components/Admin/Posts/Posts'

export const QUERY = gql`
  query FindPosts {
    posts {
      id
      title
      body
      author
      category {
        name
      }
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No posts yet. '}
      <Link to={routes.adminNewPost()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ posts }) => {
  return <Posts posts={posts} />
}
