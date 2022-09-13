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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ nextPost, id }) => {
  return (
    <div>
    {
      (nextPost.posts).map((post) => (
        JSON.stringify(post.title)
      ))
    }
    </div>)
}
