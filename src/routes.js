controllers = require('./controllers');

module.exports = (app) => ({
    setup: () =>{
        app.get('/aaa/printar/:n', controllers.aaa.printar)
    }
});