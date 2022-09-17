// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Modal {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Modal from './Modal'

export const generated = () => {
  return <Modal />
}

export default {
  title: 'Components/Modal',
  component: Modal,
}
