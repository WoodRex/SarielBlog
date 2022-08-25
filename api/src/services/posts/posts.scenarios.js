export const standard = defineScenario({
  post: {
    one: {
      data: {
        title: 'String',
        body: 'String',
        author: 'String',
        category: { create: { name: 'String' } },
      },
    },

    two: {
      data: {
        title: 'String',
        body: 'String',
        author: 'String',
        category: { create: { name: 'String' } },
      },
    },
  },
})
