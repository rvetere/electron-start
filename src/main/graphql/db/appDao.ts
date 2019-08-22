import * as sqlite3 from 'sqlite3'

export type DbResult = any

export class AppDAO {
  private db: sqlite3.Database

  constructor(dbFilePath: string) {
    this.db = new sqlite3.Database(dbFilePath, err => {
      if (err) {
        console.error('Could not connect to database', err)
      } else {
        console.log('Connected to database')
      }
    })
  }

  run(sql: string, params: Array<any> = []): Promise<DbResult> {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, function(err) {
        if (err) {
          console.log('Error running sql ' + sql)
          console.log(err)
          reject(err)
        } else {
          resolve({ id: this.lastID })
        }
      })
    })
  }

  get(sql: string, params: Array<any> = []): Promise<DbResult> {
    return new Promise((resolve, reject) => {
      this.db.get(sql, params, (err, result) => {
        if (err) {
          console.log('Error running sql: ' + sql)
          console.log(err)
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }

  all(sql: string, params: Array<any> = []): Promise<DbResult> {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, rows) => {
        if (err) {
          console.log('Error running sql: ' + sql)
          console.log(err)
          reject(err)
        } else {
          resolve(rows)
        }
      })
    })
  }
}
