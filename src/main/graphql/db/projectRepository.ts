import { AppDAO } from './appDao'

export interface ProjectModel {
  id: number
  name: string
}

export class ProjectRepository {
  private dao: AppDAO

  constructor(dao: AppDAO) {
    this.dao = dao
  }

  createTable() {
    const sql = `
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT)`
    return this.dao.run(sql)
  }

  create(name: string) {
    return this.dao.run('INSERT INTO projects (name) VALUES (?)', [name])
  }

  update(project: ProjectModel) {
    const { id, name } = project
    return this.dao.run(`UPDATE projects SET name = ? WHERE id = ?`, [name, id])
  }

  delete(id: number) {
    return this.dao.run(`DELETE FROM projects WHERE id = ?`, [id])
  }

  getById(id: number) {
    return this.dao.get(`SELECT * FROM projects WHERE id = ?`, [id])
  }

  getAll() {
    return this.dao.all(`SELECT * FROM projects`)
  }

  getTasks(projectId: number) {
    return this.dao.all(`SELECT * FROM tasks WHERE projectId = ?`, [projectId])
  }
}
