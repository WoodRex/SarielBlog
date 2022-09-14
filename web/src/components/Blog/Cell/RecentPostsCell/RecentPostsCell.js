import InlineLoader from "src/components/Public/InlineLoader/InlineLoader"
import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query RecentPostsQuery {
    recentPosts {
      posts {
        id
        title
        createdAt
      }
    }
  }
`

export const Loading = () => InlineLoader

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

const jsonDisplay = (obj) => {
  let cleaned = JSON.stringify(obj, null, 2)

  return (
    <>
      {cleaned.replace(/\"/g, "")}
    </>
  )
}

export const Success = ({ recentPosts }) => {
  return (
    <div className="min-w-fit">
      <h2 className="font-semibold text-indigo-800">Recent Articles</h2>
      <ul className="mt-2 text-sm">
        {recentPosts.posts.map((post) => (
          <li key={post.id} className="my-2">
            <Link
              to={routes.post({ id: post.id })}
              className="text-gray-400 rounded hover:text-sky-400 sm:text-sm font-medium"
            >
              {jsonDisplay(post.title)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
