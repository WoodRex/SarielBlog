import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'


export const posts = () => {
  return db.post.findMany()
}

//for MainPage
export const allPosts = async ({
  page = 1,
  limit = 100, // No need too much, I think
  order = { createdAt: 'desc' },
}) => {
  logger.debug({ page, limit, order }, 'In all posts')
  const offset = (page - 1) * limit

  return {
    posts: db.post.findMany({
      include: { category: true },
      take: limit,
      skip: offset,
      orderBy: order,
    }),
    count: db.post.count(),
  }
}

// for RecentArticle
export const recentPosts = async ({
  page = 1,
  limit = 3, // No need too much, I think
  order = { createdAt: 'desc' },
}) => {
  logger.debug({ page, limit, order }, 'In all posts')
  const offset = (page - 1) * limit

  return {
    posts: db.post.findMany({
      include: { category: true },
      take: limit,
      skip: offset,
      orderBy: order,
    }),
    count: db.post.count(),
  }
}

export const findPostsByCategoryId = ({ id }) => {
  return db.category
    .findUnique({
      where: { id: parseInt(id) },
    })
    .post({ include: { category: true }})
}

export const post = ({ id }) => {
  return db.post.findUnique({
    where: { id },
  })
}

export const createPost = ({ input }) => {
  return db.post.create({
    data: input,
  })
}

export const updatePost = ({ id, input }) => {
  return db.post.update({
    data: input,
    where: { id },
  })
}

export const deletePost = ({ id }) => {
  return db.post.delete({
    where: { id },
  })
}

export const Post = {
  category: (_obj, { root }) =>
    db.post.findUnique({ where: { id: root.id } }).category(),
}