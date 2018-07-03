const db = require('../db');

module.exports = {
    cadastrar: (req, res) => {
        const { codigo_barras, preco, categoria, descricao, nome } = req.body.produto;
        db.query(`
            INSERT INTO produtos (codigo_barras, preco, categoria, descricao, nome)
               VALUES ($1, $2, $3, $4, $5)
        `, [codigo_barras, preco, categoria, descricao, nome])
            .then(result => {
                console.log(result);
                res.sendStatus(200);
            })
            .catch(error => {
                console.log(error);
                res.sendStatus(500);
            });
    },
    listar: (req, res) => {
        db.query(`
            SELECT * FROM produtos
        `)
        .then(data => {
            res.send(data.rows);
        })
        .catch(error => {
            res.sendStatus(500);
        })
    },
    remover: (req, res) => {
        const codigo_barras = req.body.produto.codigo_barras;
        if(codigo_barras){
            db.query(`
                DELETE FROM produtos
                   WHERE codigo_barras = $0
            `, [codigo_barras])
                .then(result => {
                    console.log(result);
                    res.sendStatus(200);
                })
                .catch(error => {
                    console.log(error);
                    res.sendStatus(500);
                });
        } else {
            res.sendStatus(500);
        }
    },
    alterar: (req, res) => {
        const { 
            codigo_barras,
            preco,
            categoria,
            descricao,
            nome,
            ultimo_reabastecimento,
            quantidade
        } = req.body.produto;
        if(codigo_barras){
            db.query(`
                UPDATE produtos 
                    SET preco = $1,
                    SET categoria = $2,
                    SET descricao = $3,
                    SET nome = $4,
                    SET ultimo_reabastecimento = $5,
                    SET quantidade = $6
                    WHERE codigo_barras = $7
            `, [preco, categoria, descricao, nome, ultimo_reabastecimento, quantidade, codigo_barras])
                .then(result => {
                    console.log(result);
                    res.sendStatus(200);
                })
                .catch(error => {
                    console.log(error);
                    res.sendStatus(500);
                });
        } else {
            res.sendStatus(500);
        }
    },
}