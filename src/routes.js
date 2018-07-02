controllers = require('./controllers');

module.exports = (app) => ({
    setup: () =>{
        app.get('/cms/CadastrarProduto', (req, res) => {res.render('productForm', {})});

        //CRUD Produtos
        app.get('/api/produtos', controllers.produtos.listar);
        app.post('/api/produtos', controllers.produtos.cadastrar);
        app.delete('/api/produtos', controllers.produtos.remover);
        app.put('/api/produtos', controllers.produtos.alterar);
        
        app.get('/cliente/:n', controllers.cliente.envia);
        app.get('/gerente/:n', controllers.gerente.envia);
        app.get('/tecnico/:n', controllers.tecnico.envia);
    }
});