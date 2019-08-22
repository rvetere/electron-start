import * as fs from 'fs'
import * as path from 'path'
import { app } from 'electron'
import { AppDAO } from './appDao'
import { ProjectRepository } from './projectRepository'
import { TaskRepository, TaskModel } from './taskRepository'

export interface Database {
  projectRepo: ProjectRepository
  taskRepo: TaskRepository
}

export const setupDb = (): Database => {
  const dbPath = path.resolve(app.getPath('documents'), 'electron-start.sqlite3')

  const dao = new AppDAO(dbPath)

  const projectRepo = new ProjectRepository(dao)
  const taskRepo = new TaskRepository(dao)

  if (!fs.existsSync(dbPath)) {
    console.info('sqlite3 DB does not exist - create!', dbPath)
    initDb(projectRepo, taskRepo)
  }

  return {
    projectRepo,
    taskRepo
  }
}

const initDb = async (projectRepo: ProjectRepository, taskRepo: TaskRepository) => {
  return new Promise(async (resolve: (msg: string) => void) => {
    const blogProjectData = { name: 'electron-start - sqlite3 with GQL!' }
    let projectId: number

    try {
      await projectRepo.createTable()
      await taskRepo.createTable()

      const data = await projectRepo.create(blogProjectData.name)
      projectId = data.id

      const tasks = [
        {
          name: 'Outline',
          description: 'High level overview of sections',
          isComplete: 1,
          projectId
        },
        {
          name: 'Write',
          description: 'Write article contents and code examples',
          isComplete: 0,
          projectId
        }
      ]

      await Promise.all(
        tasks.map(task => {
          const { name, description, isComplete, projectId } = task
          return taskRepo.create(name, description, isComplete, projectId)
        })
      )

      const project = await projectRepo.getById(projectId)
      const dbTasks = await projectRepo.getTasks(project.id)

      console.log('\nRetrieved project tasks from database')
      dbTasks.forEach((task: TaskModel) => {
        console.log({ task })
      })

      resolve('success')
    } catch (err) {
      console.log('Error: ')
      console.log(JSON.stringify(err))
    }
  })
}
