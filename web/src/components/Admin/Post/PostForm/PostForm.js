import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  TextAreaField,
  Submit,
} from '@redwoodjs/forms'
import { NavLink, routes } from '@redwoodjs/router'
import { useState } from 'react'

import MDEditor from '@uiw/react-md-editor'
import rehypeSanitize from "rehype-sanitize";


const PostForm = (props) => {
  const onSubmit = (data) => {
    data.body = value
    props.onSave(data, props?.post?.id)
  }

  const { currentUser } = useAuth()

  const [value, setValue] = useState(`${(props.post?.body ?? '' )}`);

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.post?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="author"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Author
        </Label>

        <TextField
          name="author"
          defaultValue={( props.post?.author ? props.post?.author : currentUser.email )}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="author" className="rw-field-error" />

        <Label
          name="categoryId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Category id
        </Label>

        <NumberField
          name="categoryId"
          defaultValue={props.post?.categoryId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="categoryId" className="rw-field-error" />

        <Label
          name="body"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Body
        </Label>

        <div data-color-mode="light">
          <MDEditor
            value={value}
            onChange={setValue}
            height={300}
            previewOptions={{
              rehypePlugins: [[rehypeSanitize]],
            }}
          />
        </div>

        {/* <TextAreaField
          name="body"
          defaultValue={props.post?.body}
          className="mt-2 block h-80 w-full rounded border p-2 text-base text-gray-900 focus:border-indigo-300 focus:outline-none"
          errorClassName="block mt-2 w-full p-2 border border-red-500 text-base text-red-700 rounded focus:outline-none focus:border-red-700 h-80"
          validation={{ required: true }}
        /> */}

        <FieldError name="body" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-green">
            Save
          </Submit>
          <NavLink
            to={routes.adminPosts()}
            className="rw-button rw-button-blue"
          >
            Cancel
          </NavLink>
        </div>
      </Form>
    </div>
  )
}

export default PostForm
