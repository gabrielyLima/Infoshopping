const db = require('../db');

module.exports = {
    cadastrar: (req, res) => {
        const { id_funcionario, RG, CPF, conta_banco, agencia_bancaria, meta, tipo_funcionario } = req.body.funcionario;
        db.query(`
            INSERT INTO produtos (id_funcionario, RG, CPF, conta_banco, agencia_bancaria, meta, tipo_funcionario)
               VALUES ($1, $2, $3, $4, $5, $6, $7)
        `, [id_funcionario, codigo_barras, preco, categoria, descricao, nome, quantidade])
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
            SELECT * FROM funcionarios
        `)
        .then(data => {
            res.send(data.rows);
        })
        .catch(error => {
            res.sendStatus(500);
        })
    },
    remover: (req, res) => {
        const id_funcionario = req.params.id_funcionario;
        if(id_funcionario){
            db.query(`
                DELETE FROM funcionarios
                   WHERE id_funcionario = $1
            `, [id_funcionario])
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
        const { id_funcionario, RG, CPF, conta_banco, agencia_bancaria, meta, tipo_funcionario } = req.body.funcionario;
        if(id_funcionario){
            db.query(`
                UPDATE produtos 
                    SET conta_banco = $1,
                    SET agencia_bancaria = $2,
                    SET meta = $3,
                    SET tipo_funcionario = $4,
                    WHERE id_funcionario = $5
            `, [conta_banco, agencia_bancaria, meta, tipo_funcionario, id_funcionario])
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