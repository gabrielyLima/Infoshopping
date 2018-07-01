const pg = require('pg');
const conString = "postgres://postgres:root@localhost/infoshoppingdb";
const bdServer = new pg.Client(conString);
bdServer.connect();
var query = ""

module.exports = {
    envia: (req, res) => {
        var envio = ""
        var something = true
        if(req.params.n == 'servicos'){
            query = "SELECT * FROM servicos";
        }else{
            something = false
        }
        if(something){
            bdServer.query(query)
                .then(resaux => {
                    const rows = resaux
                    .rows;
                    envio = envio + JSON.stringify(rows); 
                    res.send(`<h1>${envio}<h1>`);
                }).catch(err => {
                    envio = err;
                    res.send(`<h1>${envio}<h1>`);
                });
        }
    }
}
