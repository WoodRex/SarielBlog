import InlineLoader from "src/components/Public/InlineLoader/InlineLoader"
import Pagination from "src/components/Public/Pagination/Pagination"
import Posts from 'src/components/Blog/Post/Posts/Posts'

export const beforeQuery = ({ page, perPage }) => {
  page = page ? parseInt(page) : 1
  return { variables: { page: page, limit: perPage } }
}

export const QUERY = gql`
  query FindPostsQuery($page: Int, $limit: Int) {
    allPosts(page: $page, limit: $limit) {
      posts {
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
      count
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
export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ allPosts, page, perPage }) => {
  return (
    <>
      {sortedPosts(allPosts.posts).map((post) => (
        <Posts
          key={post.id}
          post={post}
          summary={true}
        />
      ))}
      <Pagination
        count={allPosts.count}
        page={page}
        perPage={perPage}
      />
    </>
  )
}
