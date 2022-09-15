import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const AdminLayout = ({ children }) => {
  const { logOut } = useAuth()

  return (
    <div className="mx-8">
      <header className="block items-center justify-between border-b px-8 pt-4 pb-4 md:flex">
        <div>
          <Link
            to={routes.home()}
            className="text-xs text-emerald-500 hover:text-emerald-700"
          >
            &laquo; Back to Site
          </Link>
          <h1>
            <Link
              to={routes.adminPosts()}
              className="text-xl font-semibold leading-none"
            >
              Simple Blog Backend
            </Link>
          </h1>
        </div>
        <nav className="text-right">
          <a
            href="#"
            onClick={logOut}
            className="text-xs uppercase text-emerald-500 hover:text-emerald-800"
          >
            Logout
          </a>
        </nav>
      </header>
      <main className="mt-2 flex px-8 pb-8">
        <aside className="mt-4 hidden w-64 md:block">
          <nav>
            <ul>
              <li>
                <Link
                  to={routes.adminPosts()}
                  className="font-semibold text-emerald-500"
                >
                  All Posts
                </Link>
              </li>
              <li className="mt-8">
                <Link
                  to={routes.adminCategories()}
                  className="font-semibold text-emerald-500"
                >
                  All Categories
                </Link>
              </li>
              <li className="mt-8">
                <Link
                  to={routes.adminNewPost()}
                  className="rounded bg-emerald-500 px-3 py-2 text-xs uppercase tracking-wide text-white hover:bg-emerald-400"
                >
                  + New Post
                </Link>
              </li>
              <li className="mt-8">
                <Link
                  to={routes.adminNewCategory()}
                  className="rounded bg-emerald-500 px-3 py-2 text-xs uppercase tracking-wide text-white hover:bg-emerald-400"
                >
                  + New Category
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <section className="mt-4 sm:flex-1">{children}</section>
      </main>
    </div>
  )
}

export default AdminLayout
