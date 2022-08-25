import { useAuth } from '@redwoodjs/auth'
import { Link, NavLink, routes } from '@redwoodjs/router'

import Nav from 'src/components/Blog/Nav/Nav'

import logo from 'src/assets/img/logo.png'

const BlogLayout = ({ children }) => {
  const { isAuthenticated, logOut } = useAuth()

  return (
    <div className="max-w-8xl mx-auto">
      <div className="sm:mx-8">
        <header className="flex-wrap items-center border-b-4 border-indigo-300 bg-indigo-600 px-8 py-6 text-white md:flex ">
          <div className="flex flex-1">
            <div className="mt-1 flex-grow text-center md:text-left">
              <Link to={routes.home()}>
                <img
                  className="inline-block w-80"
                  src={logo}
                  alt="Hammer Review Logo"
                />
              </Link>
            </div>
          </div>
          <nav className="min-h-screenmt-4 mt-4 flex-grow sm:flex-grow-0 md:mt-0">
            <ul className="flex justify-center">
              <li className="mx-4 font-semibold uppercase">
                <NavLink
                  to={routes.about()}
                  className="text-indigo-200 hover:text-indigo-800"
                  activeClassName="bg-white text-indigo-600 px-2 py-1 rounded"
                >
                  About
                </NavLink>
              </li>
              {isAuthenticated && (
                <li className="mx-4 font-semibold uppercase">
                  <NavLink
                    to={routes.adminPosts()}
                    className="text-white hover:text-indigo-800"
                    activeClassName="bg-white text-indigo-600 px-2 py-1 rounded"
                  >
                    Admin
                  </NavLink>
                </li>
              )}
              {isAuthenticated ? (
                <li className="mx-4 font-semibold uppercase">
                  <a
                    onClick={logOut}
                    className="cursor-pointer text-indigo-200 hover:text-indigo-800"
                  >
                    Logout
                  </a>
                </li>
              ) : (
                <li className="mx-4 font-semibold uppercase">
                  <NavLink
                    to={routes.login()}
                    className="text-white hover:text-indigo-800"
                    activeClassName="bg-white text-indigo-600 px-2 py-1 rounded"
                  >
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>
        </header>
        <main className="flex items-start">
          <section className="flex-1 bg-white px-8 pt-4 pb-8 shadow">
            {children}
          </section>
          <Nav />
        </main>
        <footer className="bg-indigo-600 py-4 text-center text-sm text-indigo-200">
          Woodrex 2022
        </footer>
      </div>
    </div>
  )
}

export default BlogLayout
