import { render } from '@redwoodjs/testing/web'

import Posts from './Posts'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Posts', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Posts />)
    }).not.toThrow()
  })
})
