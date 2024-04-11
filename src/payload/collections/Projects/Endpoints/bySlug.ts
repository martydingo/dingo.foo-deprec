//@ts-nocheck
import payload from 'payload'
import { Endpoint } from 'payload/config'

export const bySlug: Endpoint = {
  path: '/bySlug/:slug',
  method: 'get',
  handler: async (req, res, next) => {
    const collectionSearchResult = await payload.find({
      collection: 'blog',
    })
    const searchBySlug = Object.values(collectionSearchResult.docs).filter(
      (blogPost) => blogPost.slug === req.params.slug,
    )[0]

    if (searchBySlug) {
      res.status(200).send(searchBySlug)
    } else {
      res.status(404).send({ error: 'not found' })
    }
  },
}
