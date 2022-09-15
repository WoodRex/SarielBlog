// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Footer {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Footer from './Footer'

export const generated = () => {
  return <Footer />
}

export default {
  title: 'Components/Footer',
  component: Footer,
}
