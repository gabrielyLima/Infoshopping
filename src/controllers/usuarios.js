const db = require('../db');

module.exports = {
    cadastrar: (req, res) => {
        const { email, senha, nome_completo } = req.body.usuario;
        db.query(`
            INSERT INTO usuarios (email, senha, nome_completo)  
               VALUES ($1, $2, $3)
        `, [email, senha, nome_completo])
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
            SELECT * FROM usuarios
        `)
        .then(data => {
            res.send(data.rows);
        })
        .catch(error => {
            res.sendStatus(500);
        })
    },
    remover: (req, res) => {
        const id_usuario = req.params.id_usuario;
        if(id_usuario){
            db.query(`
                DELETE FROM usuarios
                   WHERE id_usuario = $1
            `, [id_usuario])
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
        const id_usuario = req.params.id_usuario;
        const { email, senha, nome_completo } = req.body.usuario;
        if(id_usuario){
            db.query(`
                UPDATE produtos 
                    SET email = $1,
                    SET senha = $2,
                    SET nome_completo = $3
                    WHERE id_usuario = $5
            `, [email, senha, nome_completo, id_usuario])
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