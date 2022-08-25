import { render } from '@redwoodjs/testing/web'

import CategoriedPostsPage from './CategoriedPostsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CategoriedPostsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CategoriedPostsPage />)
    }).not.toThrow()
  })
})
