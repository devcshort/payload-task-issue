import { TaskHandler } from 'payload'

export const taskHandler: TaskHandler<'test-task'> = ({ input }) => {
  console.debug('Running test task...')
  console.log(input.text)

  return {
    output: input.text,
  }
}
