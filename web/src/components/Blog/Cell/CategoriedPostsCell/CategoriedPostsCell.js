import { Link, routes } from "@redwoodjs/router"
import Posts from "src/components/Blog/Posts/Posts"
import InlineLoader from "src/components/Public/InlineLoader/InlineLoader"

export const beforeQuery = ({ id, page, perPage }) => {
  page = page ? parseInt(page) : 1
  return { variables: { id: id, page: page, limit: perPage } }
}

export const QUERY = gql`
  query POST($id: Int!, $page: Int, $limit: Int) {
    categoriedPosts: findPostsByCategoryId(id: $id, page: $page, limit: $limit) {
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

const Pagination = ({ count, page, perPage, id }) => {
  const items = []

  for (let i = 0; i < Math.ceil(count / perPage); i++) {
    items.push(
      <li key={i} className="inline-block mx-1 text-indigo-400">
        <Link
          to={routes.category({ id: id ,page: i + 1 })}
          className={
            page === i + 1
              ? 'py-1 px-3 bg-indigo-100 text-indigo-600 rounded'
              : 'py-1 px-3'
          }
        >
          {i + 1}
        </Link>
      </li>
    )
  }

  return <ul className="list-none text-center">{items}</ul>
}

export const Loading = () => InlineLoader

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ categoriedPosts, page, perPage, id }) => {
  let switchCase = 'categoriedPosts'
  return (
    <>
      {sortedPosts(categoriedPosts.posts).map((post) => (
        <Posts
          key={post.id}
          post={post}
          summary={true}
        />
      ))}
      <Pagination
        id={id}
        count={categoriedPosts.count}
        page={page}
        perPage={perPage}
      />
    </>
  )
}
