export const schema = gql`
  type Post {
    id: Int!
    title: String!
    body: String!
    author: String!
    category: Category!
    categoryId: Int!
    createdAt: DateTime!
  }

  type PostsSet {
    posts: [Post]!
    count: Int!
  }

  type Query {
    posts: [Post!]! @requireAuth
    post(id: Int!): Post @requireAuth
    allPost(id: Int!): Post @skipAuth
    findNextPost(id: Int!): PostsSet @skipAuth
    findPrevPost(id: Int!): PostsSet @skipAuth
    recentPosts(page: Int, limit: Int): PostsSet @skipAuth
    allPosts(page: Int, limit: Int): PostsSet @skipAuth
    findPostsByCategoryId(id: Int!, page: Int, limit: Int): PostsSet @skipAuth
    searchPosts(term: String): [Post] @skipAuth
  }

  input CreatePostInput {
    title: String!
    body: String!
    author: String!
    categoryId: Int!
  }

  input UpdatePostInput {
    title: String
    body: String
    author: String
    categoryId: Int
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`
