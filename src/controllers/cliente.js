const pg = require('pg');
const conString = "postgres://postgres:root@localhost/infoshoppingdb";
const bdServer = new pg.Client(conString);
bdServer.connect();
var query = ""

module.exports = {
    envia: (req, res) => {
        var something = true
        if(req.params.consulta == 'produtos'){
            query = "SELECT nome, descricao, categoria, preco FROM Produtos ORDER BY categoria ASC"
        }
        else{
            something = false
        }

        if(something){
            bdServer.query(query)
                .then(result => {
                    res.send(result.rows);
                }).catch(err => {
                    res.send("DEU ERRO");
                });
        }
    }
}
