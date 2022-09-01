import humanize from 'humanize-string'
import { format, formatDistanceToNow } from 'date-fns'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Admin/Cell/PostsCell'

const DELETE_POST_MUTATION = gql`
  mutation DeletePostMutation($id: Int!) {
    deletePost(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const PostsList = ({ posts }) => {
  const [deletePost] = useMutation(DELETE_POST_MUTATION, {
    onCompleted: () => {
      toast.success('Post deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete post ' + id + '?')) {
      deletePost({ variables: { id } })
    }
  }

  const sortedPosts = (posts) => {
    return posts.slice().sort((a, b) => {
      if (new Date(a.createdAt) < new Date(b.createdAt)) return 1
      if (new Date(a.createdAt) > new Date(b.createdAt)) return -1
      return 0
    })
  }

  return (
    <div className="rw-table-wrapper-responsive">
      <table className="w-full">
        <tbody>
          {sortedPosts(posts).map((post) => (
            <tr key={post.id}>
              <td className="py-2">
                <Link
                  to={routes.adminPost({ id: post.id })}
                  className="font-semibold text-indigo-700"
                >
                  {post.title}
                </Link>
              </td>

              <td className="py-2 text-center text-sm">
                {truncate(post.category.name)}
              </td>

              <td className="py-2 text-right text-sm">
                <span className="block">
                  Published{' '}
                  <time dateTime={post.createdAt}>
                    {formatDistanceToNow(new Date(post.createdAt), {
                      addSuffix: true,
                    })}
                  </time>
                </span>
                <time className="block text-gray-500" dateTime={post.createdAt}>
                  {format(new Date(post.createdAt), 'PPPPp')}
                </time>
              </td>

              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminEditPost({ id: post.id })}
                    title={'Edit post ' + post.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>

                  <button
                    type="button"
                    title={'Delete post ' + post.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(post.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PostsList
