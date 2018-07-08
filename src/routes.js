controllers = require('./controllers');

module.exports = (app) => ({
    setup: () =>{
        app.get('/cms/CadastrarProduto', (req, res) => {res.render('productForm', {})});
        //CRUD Produtos
        app.get('/api/produtos', controllers.produtos.listar);
        app.post('/api/produtos', controllers.produtos.cadastrar);
        app.delete('/api/produtos/:codigo_barras', controllers.produtos.remover);
        app.put('/api/produtos', controllers.produtos.alterar);
        //CRUD Servicos
        app.get('/api/servicos', controllers.servicos.listar);
        app.post('/api/servicos', controllers.servicos.realizar);
        app.delete('/api/servicos/:id_servico', controllers.servicos.remover);
        //CRUD Funcionarios
        app.get('/api/funcionarios', controllers.funcionarios.listar);
        app.post('/api/funcionarios', controllers.funcionarios.cadastrar);
        app.delete('/api/funcionarios/:id_funcionario', controllers.funcionarios.remover);
        app.put('/api/funcionarios', controllers.funcionarios.alterar);
        //CRUD Usuarios
        app.get('/api/usuarios', controllers.usuarios.listar);
        app.post('/api/usuarios', controllers.usuarios.cadastrar);
        app.delete('/api/usuarios/:email', controllers.usuarios.remover);
        app.put('/api/usuarios/:id_usuario', controllers.usuarios.alterar);
        //Consultas
        //Não acredito que seria muito util para implementação, mas temos que levar em conta
        //por que o trabalho de BD exigi as 12 consultas eu acho, não sei na verdade, se não
        //exigir podemos excluir
        app.get('/cliente/:consulta', controllers.cliente.envia);
        app.get('/gerente/:consulta', controllers.gerente.envia);
        app.get('/tecnico/:consulta', controllers.tecnico.envia);
    }
});