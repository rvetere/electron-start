import { setupDb } from './db/setup'

const { projectRepo } = setupDb()

const resolvers = {
  Query: {
    hello: () => 'world',
    projects: () => projectRepo.getAll()
  }
}

export default resolvers
