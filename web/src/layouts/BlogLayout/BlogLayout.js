import { useAuth } from '@redwoodjs/auth'
import { NavLink, routes } from '@redwoodjs/router'

import Nav from 'src/components/Blog/Nav/Nav'
import Footer from 'src/components/Blog/Footer/Footer'
import styles from 'src/nav.css'

const BlogLayout = ({ children }) => {
  const { isAuthenticated, logOut } = useAuth()

  return (
    <div className="max-w-8xl mx-auto">
      <div>
        <header className="flex-wrap items-center img-container text-white md:flex h-50vh">
          <nav className="flex-grow sm:flex-grow-0 md:mt-0 md:mx-auto h-50vh">
            <ul className="flex justify-center">
              <li className="m-4 font-semibold uppercase">
                <NavLink
                  to={routes.home()}
                  className="text-emerald-200 hover:text-white"
                >
                  Home
                </NavLink>
              </li>
              <li className="m-4 font-semibold uppercase">
                <NavLink
                  to={routes.about()}
                  className="text-emerald-200 hover:text-white"
                >
                  About
                </NavLink>
              </li>
              {isAuthenticated && (
                <li className="m-4 font-semibold uppercase">
                  <NavLink
                    to={routes.adminPosts()}
                    className="text-emerald-200 hover:text-white"
                  >
                    Admin
                  </NavLink>
                </li>
              )}
              {isAuthenticated ? (
                <li className="m-4 font-semibold uppercase">
                  <a
                    onClick={logOut}
                    className="cursor-pointer text-emerald-200 hover:text-white"
                  >
                    Logout
                  </a>
                </li>
              ) : (
                <li className="m-4 font-semibold uppercase">
                  <NavLink
                    to={routes.login()}
                    className="text-emerald-200 hover:text-white"
                    activeClassName="bg-white text-indigo-600 px-2 py-1 rounded"
                  >
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>
          <div className='preview-overlay mt-auto'>
            <svg className="w-full mt-2 preview-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
              <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
              </defs>
              <g className="preview-parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="var(--gentle-wave1)"></use>
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="var(--gentle-wave2)"></use>
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="var(--gentle-wave3)"></use>
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="var(--gentle-wave)"></use>
              </g>
            </svg>
          </div>
        </header>
        <main className="sm:flex items-start">
          <section className="flex-1 bg-white px-8 pt-4 pb-8 shadow">
            {children}
          </section>
          <Nav />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default BlogLayout
