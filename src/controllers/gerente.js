const pg = require('pg');
const conString = "postgres://postgres:root@localhost/infoshoppingdb";
const bdServer = new pg.Client(conString);
bdServer.connect();
var query = ""

module.exports = {
    envia: (req, res) => {
        var something = true
        if(req.params.consulta == 'servicos'){
            query = "SELECT * FROM servicos";
        }else if(req.params.consulta == 'usuarios'){
            query = "SELECT * FROM usuarios";
        }else if(req.params.consulta == 'analises'){
            query = "SELECT * FROM analises";
        }else if(req.params.consulta == 'clientes'){
            query = "SELECT * FROM clientes";
        }else if(req.params.consulta == 'funcionarios'){
            query = "SELECT * FROM funcionarios";
        }else if(req.params.consulta == 'itens_venda'){
            query = "SELECT * FROM itens_venda";
        }else if(req.params.consulta == 'produtos'){
            query = "SELECT * FROM produtos";
        }else if(req.params.consulta == 'produtos_analise'){
            query = "SELECT * FROM produtos_analise";
        }else if(req.params.consulta == 'quantidade_produtos_vendidos_categoria'){
            query = "SELECT categoria , SUM(IV.quantidade) FROM produtos P INNER JOIN itens_Venda IV ON P.codigo_barras = IV.codigo_barras GROUP BY categoria ORDER BY categoria ASC"
        }else if(req.params.consulta == 'analises_pendentes'){
            query = "SELECT Analises.descricao, S.id_Funcionario FROM Analises INNER JOIN Servicos S ON Analises.id_Analise=S.id_Servico WHERE Analises.status LIKE 'pendente'"
        }else if(req.params.consulta == 'comissao'){
            query = "SELECT t.id_funcionario, t.vendido*0.01-100 comissao FROM totalFuncionario t WHERE t.vendido > 10000 ORDER BY comissao DESC"
        }else if(req.params.consulta == 'lucro_medio_dia'){
            query = "SELECT EXTRACT( DAY FROM s.datahora) dia, EXTRACT(MONTH FROM s.datahora) mes, avg(s.valor) media FROM servicos s GROUP BY dia, mes ORDER BY dia"
        }else if(req.params.consulta == 'lucro_medio_dia_mes'){
            query  = "SELECT t.mes, avg(t.total) media FROM totalDia t GROUP BY t.mes ORDER BY t.mes"
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
