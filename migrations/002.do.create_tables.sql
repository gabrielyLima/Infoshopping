CREATE VIEW totalFuncionario AS
  SELECT f.id_funcionario id_funcionario, SUM(s.valor) vendido
  FROM funcionarios f INNER JOIN servicos s
    ON f.id_funcionario = s.id_funcionario
  where datahora > now() - interval '30 days'
  GROUP BY f.id_funcionario;

CREATE VIEW totalDia as
    SELECT EXTRACT( DAY FROM s.datahora) dia, EXTRACT(MONTH FROM s.datahora) mes, SUM(s.valor) total
FROM servicos s
GROUP BY dia, mes
