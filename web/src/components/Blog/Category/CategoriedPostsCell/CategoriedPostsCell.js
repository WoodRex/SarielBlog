import Posts from "src/components/Blog/Post/Posts/Posts"

export const QUERY = gql`
  query POST($id: Int!) {
    posts: findPostsByCategoryId(id: $id) {
      id
      title
      body
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

export const Success = ({ posts }) => {
  return posts.map((post) => <Posts key={post.id} post={post} summary={true} />)
}
