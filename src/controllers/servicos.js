const db = require('../db');

module.exports = {
    realizar: (req, res) => {
        const datahora = new  Date().toLocaleString();
        const { valor, id_funcionario, id_cliente } = req.body.servico;
        db.query(`
            INSERT INTO servicos (datahora, valor, id_funcionario, id_cliente)
               VALUES ($1, $2, $3, $4)
        `, [datahora, valor, id_funcionario, id_cliente])
            .then(result => {
                console.log('sucesso:');
                console.log(result);
                res.sendStatus(200);
            })
            .catch(error => {
                console.log('erro:');
                console.log(error);
                res.sendStatus(500);
            });
    },
    listar: (req, res) => {
        db.query(`
            SELECT * FROM servicos
        `)
        .then(data => {
            res.send(data.rows);
        })
        .catch(error => {
            res.sendStatus(500);
        })
    },
    remover: (req, res) => {
        const id_servico = req.params.id_servico;
        if(id_servico){
            db.query(`
                DELETE FROM servicos
                   WHERE id_servico = $1
            `, [id_servico])
                .then(result => {
                    console.log(result);
                    res.sendStatus(200);
                })
                .catch(error => {
                    console.log(error);
                    res.sendStatus(500);
                });
        } else {
            console.log(id_servico);
            res.sendStatus(500);
        }
    },
}