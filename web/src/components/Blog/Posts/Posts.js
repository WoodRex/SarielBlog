import truncate from 'html-truncate'
import MarkdownIt from 'markdown-it'

import { format } from 'date-fns'
import { Link, routes } from '@redwoodjs/router'

const md = new MarkdownIt()

const formatDate = (date) => {
  return format(new Date(date), 'MMM dd')
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const formatBody = (post, summary) => {
  let output = md.render(post.body)
  if (summary) {
    return truncate(output, 24)
  }
  return output
}

const Posts = ({ post, summary = false }) => {
  return (
    <>
      {/* <MetaTags title={post.title} description="Home page" /> */}
      <article className="mt-4 mb-12">
        <header className="flex items-center justify-between">
          <h1 className="border-l-4 border-zinc-800 text-4xl font-bold my-6 pl-4">
            <Link
              to={routes.post({ id: post.id })}
              className="text-grey-800 hover:text-grey-600 rounded"
            >
              {post.title}
            </Link>
          </h1>
          {/* <h2 className="text-sm text-gray-600">by {post.author}</h2> */}
        </header>
        <header className='mb-6'>
          <time className="font-light">Published in <span className="font-semibold">Simple Blog</span> · {formatDate(post.createdAt)}</time>
        </header>
        <div className="mt-2">
          <div
            className="markdown"
            dangerouslySetInnerHTML={{ __html: formatBody(post, summary) }}
          ></div>
        </div>
        <footer className="flex items-center mt-4 text-xs text-gray-600">
          {post.category.name && (
            <ul className="text-right bg-gray-700 text-zinc-100 px-2 py-1 mt-3 rounded-full">
              {post.category.name}
            </ul>
          )}
        </footer>
      </article>
      <hr className='my-6'/>
    </>
  )
}

export default Posts
