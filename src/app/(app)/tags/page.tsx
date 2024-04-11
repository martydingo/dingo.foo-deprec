import { getPayload } from 'payload'
import payloadConfig from '@payload-config'

async function Tags() {
  const payload = await getPayload({
    config: payloadConfig,
  })
  const pages = await payload.find({
    collection: 'projects',
  })
  return <main className="xl:container xl:max-w-5xl container max-w-2xl"></main>
}

export default Tags
