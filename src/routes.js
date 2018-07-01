controllers = require('./controllers');

module.exports = (app) => ({
    setup: () =>{
        app.get('/firstTry/print/:n', controllers.firstTry.print)
        app.get('/client/:n', controllers.client.envia)
    }
});