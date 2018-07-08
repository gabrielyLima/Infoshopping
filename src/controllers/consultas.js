const pg = require('pg');
const conString = "postgres://postgres:root@localhost/infoshoppingdb";
const bdServer = new pg.Client(conString);
bdServer.connect();
var query = ""

module.exports = {
    envia: (req, res) => {
        var something = true
        if(req.params.id == "1"){
            query = "SELECT u.nome_completo, CASE WHEN t.vendido IS NULL THEN 1000 ELSE 1000 +0.01*(t.vendido) END FROM (usuarios u INNER JOIN funcionarios f ON u.id_usuario = f.id_funcionario) LEFT OUTER JOIN totalFuncionario t ON u.id_usuario = t.id_funcionario WHERE 1000+0.01*(t.vendido)>1100 ORDER BY u.nome_completo"
        }else if(req.params.id == "2"){
            query = " SELECT f.id_funcionario, s.datahora FROM funcionarios f, servicos s WHERE f.id_funcionario = s.id_funcionario AND s.datahora < NOW() + interval'15 days' ORDER BY s.datahora"
        }else if(req.params.id == "3"){
            query = "SELECT t.id_funcionario, t.vendido*0.01-100 comissao FROM totalFuncionario t WHERE t.vendido > 10000 ORDER BY comissao DESC"
        }else if(req.params.id == "4"){
            query = "SELECT nome, descricao FROM Produtos WHERE descricao NOT LIKE '%desmontavel%';"
        }else if(req.params.id == "5"){
            query  = "SELECT p.nome, p.preco FROM Produtos p WHERE p.preco BETWEEN 5 AND 40;"
        }else if(req.params.id == "6"){
            query = " SELECT categoria, SUM(CASE WHEN IV.quantidade IS NOT NULL THEN IV.quantidade ELSE 0 END) FROM produtos P LEFT OUTER JOIN itens_Venda IV ON P.codigo_barras = IV.codigo_barras GROUP BY categoria ORDER BY categoria ASC"
        }else if(req.params.id == "7"){
            query = "SELECT t.mes, avg(t.total) media FROM totalDia t GROUP BY t.mes ORDER BY t.mes"
        }else if(req.params.id == "8"){
            query = "SELECT EXTRACT( DAY FROM s.datahora) dia, EXTRACT(MONTH FROM s.datahora) mes, avg(s.valor) media FROM servicos s GROUP BY dia, mes ORDER BY dia"
        }else if(req.params.id == "9"){
            query = "SELECT Analises.descricao, S.id_Funcionario FROM Analises INNER JOIN Servicos S ON Analises.id_Analise=S.id_Servico WHERE Analises.status='pendente'"
        }else if(req.params.id == "10"){
            query = "SELECT u.nome_completo, p.categoria FROM usuarios u INNER JOIN produtos_analise p ON u.id_usuario = p.id_cliente WHERE u.nome_completo LIKE '%Cavalcante%' AND EXISTS (SELECT s.id_cliente, COUNT(s.id_servico) FROM servicos s INNER JOIN usuarios u ON u.id_usuario = s.id_funcionario WHERE u.nome_completo LIKE '%Dias%' GROUP BY s.id_cliente HAVING COUNT(s.id_servico)>=3)"
        }else if(req.params.id == "11"){
            query = "SELECT u.nome_Completo, c.telefone FROM Clientes c INNER JOIN usuarios u ON u.id_usuario = c.id_cliente WHERE nome_Completo LIKE '%Cavalcante%'"
        }
        else{
            something = false
        }
        if(something){
            bdServer.query(query)
                .then(result => {
                    res.send(result.rows);
                }).catch(err => {
                    res.send(err);
                });
        }
    }
}
