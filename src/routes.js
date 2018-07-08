controllers = require('./controllers');

module.exports = (app) => ({
    setup: () =>{
        app.get('/cms/CadastrarProduto', (req, res) => {res.render('productForm', {})});

        //CRUD Produtos
        app.get('/api/produtos', controllers.produtos.listar);
        app.post('/api/produtos', controllers.produtos.cadastrar);
        app.delete('/api/produtos/:codigo_barras', controllers.produtos.remover);
        app.put('/api/produtos', controllers.produtos.alterar);
        
        app.get('/cliente/:consulta', controllers.cliente.envia);
        app.get('/gerente/:consulta', controllers.gerente.envia);
        app.get('/tecnico/:consulta', controllers.tecnico.envia);
    }
});