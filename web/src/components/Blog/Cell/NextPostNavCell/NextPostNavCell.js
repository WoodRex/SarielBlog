import { Link, routes } from "@redwoodjs/router"

import truncate from "html-truncate"

export const beforeQuery = ({ id }) => ({
  variables: { id },
})

export const QUERY = gql`
  query FindNextPostNavQuery($id: Int!) {
    nextPost: findNextPost(id: $id) {
      posts {
        id
        title
      }
    }
  }
`

const jsonDisplay = (obj) => {
  obj = truncate(obj, 32)
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

export const Success = ({ nextPost }) => {
  return (
    <>
      <div className="inline-grid">
        {
          (nextPost.posts).map((post) => (
            <li key={post.id} className="my-2 list-none">
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
