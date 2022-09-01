import { render } from '@redwoodjs/testing/web'

import Category from './Category'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Category', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Category />)
    }).not.toThrow()
  })
})
