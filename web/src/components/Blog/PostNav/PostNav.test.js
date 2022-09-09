import { render } from '@redwoodjs/testing/web'

import PostNav from './PostNav'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PostNav', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PostNav />)
    }).not.toThrow()
  })
})
