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
        }
        else if(req.params.n == 'analises'){
            query = "SELECT * FROM analises";
        }else if(req.params.n == 'clientes'){
            query = "SELECT * FROM clientes";
        }else if(req.params.n == 'itens_venda'){
            query = "SELECT * FROM itens_venda";
        }else if(req.params.n == 'produtos'){
            query = "SELECT * FROM produtos";
        }else if(req.params.n == 'produtos_analise'){
            query = "SELECT * FROM produtos_analise";
        }else if(req.params.n == 'analises_pendentes'){
            query = "SELECT Analises.descricao, S.id_Funcionario FROM Analises INNER JOIN Servicos S ON Analises.id_Analise=S.id_Servico WHERE Analises.status LIKE ’pendente’"
        }else if(req.params.n == 'produtos_analise_ndesmontaveis'){
            query = "SELECT nome, descricao FROM Produtos WHERE descricao NOT LIKE ‘%desmontavel%’"
        }else if(req.params.n == 'agendados'){
            query = "SELECT f.id_funcionario, s.datahora FROM funcionarios f, servicos s WHERE f.id_funcionario = s.id_funcionario AND s.datahora < NOW() + interval'15 days’ ORDER BY s.datahora"
        }
        else{
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
