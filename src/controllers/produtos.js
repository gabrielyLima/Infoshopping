const db = require('../db');

module.exports = {
    cadastrar: (req, res) => {
        console.log(req.body)
        // const { codigo_barras, preco, categoria, descricao, nome } = req.body.produto;
        // db.query(
        //     'INSERT INTO produtos (codigo_barras, preco, categoria, descricao, nome)'+
        //     '   VALUES ($1, $2, $3, $4, $5)'
        // , [codigo_barras, preco, categoria, descricao, nome])
        //     .then(result=>console.log(result))
        //     .catch(error=>console.log(error))
        res.sendStatus(200)
    },
    listar: (req, res) => {

    },
    remover: (req, res) => {

    },
    alterar: (req, res) => {

    },
}