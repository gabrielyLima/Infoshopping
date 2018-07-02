controllers = require('./controllers');

module.exports = (app) => ({
    setup: () =>{
        app.get('/aaa/printar/:n', controllers.aaa.printar);
        
        app.get('/cms', (req, res) => {res.render('cms', {})});

        app.get('/api/produtos', controllers.produtos.listar);
        app.post('/api/produtos', controllers.produtos.cadastrar);
        app.delete('/api/produtos', controllers.produtos.remover);
        app.put('/api/produtos', controllers.produtos.alterar);
    }
});