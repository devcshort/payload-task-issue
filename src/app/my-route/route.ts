import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  await payload.jobs.queue({
    input: {
      text: 'Hello, world!',
    },
    task: 'test-task',
  })

  await payload.jobs.run()

  return Response.json({ message: 'Starting test-task job' })
}
