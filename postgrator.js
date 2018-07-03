const config = require('./config/config.json');
const Postgrator = require('postgrator')

const toVersion = process.argv[2];

const postgrator = new Postgrator({
  migrationDirectory: __dirname + '/migrations',
  driver: 'pg',
  host: config.db.host,
  port: config.db.port,
  database: config.db.database,
  username: config.db.username,
  password: config.db.password
})

// Migrate to specific version
postgrator
  .migrate(toVersion)
  .then(appliedMigrations => console.log(appliedMigrations))
  .catch(error => {
    console.log(error)
    // Because migrations prior to the migration with error would have run
    // error object is decorated with appliedMigrations
    console.log(error.appliedMigrations) // array of migration objects
  })