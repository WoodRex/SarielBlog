import MarkdownIt from 'markdown-it'
import truncate from 'html-truncate'
import { format } from 'date-fns'
import { Link, routes } from '@redwoodjs/router'

import avatar from 'src/assets/img/avatar.jpg'

const md = new MarkdownIt()

const formatDate = (date) => {
  return format(new Date(date), 'MMM dd')
}

const formatBody = (post, summary) => {
  let output = md.render(post.body)
  if (summary) {
    return truncate(output, 500)
  }
  return output
}

const Post = ({ post, summary = false }) => {
  return (
    <>
      <header className='mt-5'>
        <div className='grid grid-rows-3 grid-flow-col gap-1 w-48'>
          <img
                className="inline-block w-12 rounded-full row-span-3"
                alt="User Avatar"
                src={avatar}
            />
            <p className='col-span-3'>{post.author}</p>
            <time className="font-light col-span-3">{formatDate(post.createdAt)}</time>
        </div>
      </header>
      <article className="mt-3 mb-12">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold">
            <span
              className="text-grey-800 rounded"
            >
              {post.title}
            </span>
          </h1>
        </header>
        <div className="mt-2">
          <div
            className="markdown"
            dangerouslySetInnerHTML={{ __html: formatBody(post, summary) }}
          ></div>
        </div>
        {/* <footer className="flex items-center mt-4 text-xs text-gray-600">
          {post.category.name && (
            <ul className="flex-1 text-right">
              {post.category.name}
            </ul>
          )}
        </footer> */}
      </article>
    </>
  )
}

export default Post
