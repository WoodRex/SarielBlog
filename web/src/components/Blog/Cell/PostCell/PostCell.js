import { routes, useLocation } from '@redwoodjs/router'
import Post from 'src/components/Blog/Post/Post'

export const beforeQuery = ({ id }) => ({
  variables: { id },
})

export const QUERY = gql`
  query FindPostQuery($id: Int!) {
    post: allPost(id: $id) {
      id
      title
      body
      author
      createdAt
      category {
        id
        name
      }
    }
  }
`

// const checkPrevPostisExist = (articles) => {
//   return articles.slice().sort((a, b) => {
//     if (new Date(a.createdAt) < new Date(b.createdAt)) return 1
//     if (new Date(a.createdAt) > new Date(b.createdAt)) return -1
//     return 0
//   })
// }

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ post }) => {
  const { pathname, search, hash } = useLocation()

  // let currentUrl = routes.post({id : post.id });
  let currentUrl = window.location.host + pathname;
  return (
    <>
      <Post post={post} currentUrl={currentUrl}/>
    </>
  )
}
