import Post from 'src/components/Blog/Post/Post/Post'

export const beforeQuery = ({ id }) => ({
  variables: { id },
})

export const QUERY = gql`
  query FindPostQuery($id: Int!) {
    post(id: $id) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ post }) => {
  return (
    <>
      <Post post={post} />
    </>
  )
}
