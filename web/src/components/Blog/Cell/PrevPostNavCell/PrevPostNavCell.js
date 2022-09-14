import { Link, routes } from "@redwoodjs/router"

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
  let cleaned = JSON.stringify(obj, null, 2)

  return (
    <pre>
      <code>{cleaned.replace(/\"/g, "")}</code>
    </pre>
  )
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ prevPost }) => {
  return (
    <div>
    {
      (prevPost.posts).map((post) => (
        <li key={post.id} className="my-2 list-none">
          <Link
            to={routes.post({ id: post.id })}
            className="text-slate-800 rounded hover:text-sky-400 text-lg font-medium"
          >
          {jsonDisplay(post.title)}
          </Link>
        </li>
      ))
    }
    </div>
  )
}
