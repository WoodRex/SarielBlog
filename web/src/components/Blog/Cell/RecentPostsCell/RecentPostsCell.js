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
    <pre>
      <code>{cleaned.replace(/\"/g, "")}</code>
    </pre>
  )
}

export const Success = ({ recentPosts }) => {
  return (
    <div>
      <h2 className="font-semibold text-indigo-800">Recent Articles</h2>
      <ul className="mt-2 text-sm">
        {recentPosts.posts.map((post) => (
          <li key={post.id} className="my-2">
            <Link
              to={routes.post({ id: post.id })}
              className="text-slate-800 rounded hover:text-sky-400 text-lg font-medium"
            >
              {jsonDisplay(post.title)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
