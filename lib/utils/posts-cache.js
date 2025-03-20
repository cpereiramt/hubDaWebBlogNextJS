let postsCache = null

export function getPostsFromCache() {
  return postsCache
}

export function setPostsInCache(posts) {
  postsCache = posts
}
