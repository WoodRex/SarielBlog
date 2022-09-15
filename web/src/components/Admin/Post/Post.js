import { MetaTags } from '@redwoodjs/web'
import humanize from 'humanize-string'
import { formatDistanceToNow } from 'date-fns'
import MarkdownIt from 'markdown-it'



const md = new MarkdownIt()

const formatDate = (date) => {
  return formatDistanceToNow(new Date(date), { addSuffix: true })
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
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
      <article className="mt-4 mb-12">
        <MetaTags title={post.title} />

        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">
            <span
              className="text-emerald-500 rounded"
            >
              {post.title}
            </span>
          </h1>
          {/* <h2 className="text-sm text-gray-600">by {post.author}</h2> */}
        </header>
        <div className="mt-2">
          <div
            className="markdown"
            dangerouslySetInnerHTML={{ __html: formatBody(post, summary) }}
          ></div>
        </div>
        <footer className="flex items-center mt-4 text-xs text-gray-600">
          <time>Posted: {formatDate(post.createdAt)}</time>
          {post.category.name && (
            <ul className="flex-1 text-right">
              {post.category.name}
            </ul>
          )}
        </footer>
      </article>
    </>
  )
}

export default Post
