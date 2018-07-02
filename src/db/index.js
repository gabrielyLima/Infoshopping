const { Pool } = require('pg')

const pool = new Pool({
    user: 'aldo',
    host: '127.0.0.1',
    database: 'infoshoppingdb',
    password: 'root',
    port: 5432,
  })

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
}