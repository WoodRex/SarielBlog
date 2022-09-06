import { format } from 'date-fns'

import avatar from 'src/assets/img/avatar.jpg'
import MDEditor from '@uiw/react-md-editor'
import { toast } from '@redwoodjs/web/toast'

const formatDate = (date) => {
  return format(new Date(date), 'MMM dd')
}

const copyUrl = (url) => {
  navigator.clipboard.writeText(url);
}

const Post = ({ post, currentUrl, summary = false }) => {
  return (
    <>
      <header className='sm:mt-5'>
        <div className='grid grid-rows-3 grid-flow-col gap-1 w-48'>
          <img
                className="inline-block w-12 rounded-full row-span-3 mt-1"
                alt="User Avatar"
                src={avatar}
            />
            <p className='col-span-3'>{post.author}</p>
            <time className="font-light col-span-3">{formatDate(post.createdAt)}</time>
        </div>
      </header>
      <article className="mt-3 mb-12">
        <header>
          <div className="sm:grid justify-items-center">
            <h1 className="text-3xl font-bold mb-3 pl-4 text-center">
              {post.title}
            </h1>
            <hr className='my-6 md:w-1/6'/>
          </div>
        </header>
        <div className="mt-2" data-color-mode="light">
          <MDEditor.Markdown source={post.body} style={{ whiteSpace: 'pre-wrap' }} />
        </div>
        <hr className='my-6'/>
        <footer className="flex items-center mt-4 text-sm text-gray-600">
          {post.category.name && (
            <ul className="flex-none text-left bg-gray-700 text-zinc-100 px-2 py-1 mt-3 rounded-full">
              {post.category.name}
            </ul>
          )}
          <div className='flex-auto w-64'></div>
          <a
            className='flex-1 text-right hover:text-gray-300 py-1 mt-3 text-sm cursor-pointer'
            onClick={() => {
              copyUrl(currentUrl);
            }}
          >
            Share
          </a>
        </footer>
      </article>
    </>
  )
}

export default Post
