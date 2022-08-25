import { render } from '@redwoodjs/testing/web'

import InlineLoader from './InlineLoader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InlineLoader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InlineLoader />)
    }).not.toThrow()
  })
})
