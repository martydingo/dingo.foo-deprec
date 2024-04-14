import { getPayload } from 'payload'
import payloadConfig from '@payload-config'
import { AboutClient } from '@/components/ui/about/AboutClient'

async function Tags() {
  const payload = await getPayload({
    config: payloadConfig,
  })
  const users = await payload.find({
    collection: 'users',
  })

  return (
    <main className="xl:container xl:max-w-5xl container max-w-2xl prose dark:prose-invert">
      <AboutClient page={users.docs[0]} />
    </main>
  )
}

export default Tags
