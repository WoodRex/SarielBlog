import { Link, routes } from "@redwoodjs/router"

import truncate from 'html-truncate'

export const beforeQuery = ({ id }) => ({
  variables: { id },
})

export const QUERY = gql`
  query FindPrevPostNavQuery($id: Int!) {
    prevPost: findPrevPost(id: $id) {
      posts {
        id
        title
      }
    }
  }
`

const jsonDisplay = (obj) => {
  obj = truncate(obj, 16)
  let cleaned = JSON.stringify(obj, null, 2)

  return (
    <>
      {cleaned.replace(/\"/g, "")}
    </>
  )
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ prevPost }) => {
  return (
    <>
      {prevPost.posts.length ? (
        <span
          className="flex-1"
        >
          «
        </span>
        ) : (<span></span>)
        }
      <div className="inline-grid mx-3">
      {
        (prevPost.posts).map((post) => (
          <li key={post.id} className="my-2 list-none hover:text-emerald-700">
            <Link
              to={routes.post({ id: post.id })}
              className="text-slate-800 rounded hover:text-emerald-700 text-lg font-medium"
            >
            {jsonDisplay(post.title)}
            </Link>
          </li>
        ))
      }
      </div>
    </>
  )
}
