controllers = require('./controllers');

module.exports = (app) => ({
    setup: () =>{
        app.get('/cliente/:n', controllers.cliente.envia);
        app.get('/gerente/:n', controllers.gerente.envia);
        app.get('/tecnico/:n', controllers.tecnico.envia);
    }
});