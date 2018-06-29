module.exports = require('require-all')({
    dirname: __dirname,
    filter: name => name === 'index.js'? false : name.replace(/\..*/,''),
    recursive: false,
})