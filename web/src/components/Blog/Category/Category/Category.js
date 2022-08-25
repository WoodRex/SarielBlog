import { Link, routes } from '@redwoodjs/router'

const Category = ({ category }) => {
  return (
      <Link
        to={routes.category({ id: category.id })}
        className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-800 px-2 py-1 mb-1 rounded"
      >
        {category.name}
      </Link>
  )
}

export default Category
