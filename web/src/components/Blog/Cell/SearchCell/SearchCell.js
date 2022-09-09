import InlineLoader from "src/components/Public/InlineLoader/InlineLoader"
import Posts from "src/components/Blog/Posts"

export const beforeQuery = ({ term }) => ({ variables: { term } })

export const QUERY = gql`
  query SearchPostsQuery($term: String) {
    posts: searchPosts(term: $term) {
      id
      title
      author
      body
      createdAt
      category {
        id
        name
    }
  }
}
`

const sortedPosts = (articles) => {
  return articles.slice().sort((a, b) => {
    if (new Date(a.createdAt) < new Date(b.createdAt)) return 1
    if (new Date(a.createdAt) > new Date(b.createdAt)) return -1
    return 0
  })
}

export const Loading = () => InlineLoader

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ posts, variables }) => {
  return (
    <>
      <h2 className="mt-5 text-lg text-indigo-400">
        Found {posts.length} article
        {posts.length == 1 ? '' : 's'} including &ldquo;
        {variables.term}&rdquo;:
      </h2>
      {posts.length ? (
        sortedPosts(posts).map((post) =>
        <Posts
          key={post.id}
          post={post}
          summary={true}
        />)
      ) : (
        <h3 className="mt-4 text-xl text-gray-500">
          No article is found. Try a different term
        </h3>
      )}
    </>
  )
}
