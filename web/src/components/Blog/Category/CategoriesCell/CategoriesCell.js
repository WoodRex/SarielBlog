import Category from "src/components/Blog/Category/Category/Category"

export const QUERY = gql`
  query CategoriesQuery {
    categories: allCategories {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ categories }) => {
  return (
    <div className="mt-16">
      <h2 className="font-semibold text-indigo-800">Categories</h2>
      <ul className="text-sm mt-2">
        {
          categories.map((category) => (
            <li key={category.id} className="inline-block mr-1">
              <Category category={category}/>
            </li>
          ))
        }
      </ul>
      <nav className="mt-16"></nav>
    </div>
  )
}
