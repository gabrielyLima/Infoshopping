INSERT INTO usuarios (email, senha, nome_completo) VALUES ('esc@ecomp.poli.br', '12345', 'Emerson da Silva Carneiro');
INSERT INTO usuarios (email, senha, nome_completo) VALUES ('mgls@ecomp.poli.br', '12346', 'Maria Gabriely Lima da Silva');
INSERT INTO usuarios (email, senha, nome_completo) VALUES ('addm@ecomp.poli.br', '12347', 'Aryel Dias de Menezes');
INSERT INTO usuarios (email, senha, nome_completo) VALUES ('afsm@ecomp.poli.br', '12348', 'Aldo Ferrreira de Souza Monteiro');
INSERT INTO usuarios (email, senha, nome_completo) VALUES ('afc@ecomp.poli.br', '12349', 'Antonio Fernando Coelho');
INSERT INTO usuarios (email, senha, nome_completo) VALUES ('rsc@ecomp.poli.br', '12357', 'Roberta Silva Cavalcante');
INSERT INTO usuarios (email, senha, nome_completo) VALUES ('tcc@ecomp.poli.br', '12356', 'Tomas Coelho Carvalho');
INSERT INTO usuarios (email, senha, nome_completo) VALUES ('llm@ecomp.poli.br', '12358', 'Lucas Leite Monteiro');


INSERT INTO clientes VALUES (001, 'Rua Doutor Elias Gomes, 134, Campina de Barreto, Recife, PE', '33344556');
INSERT INTO clientes VALUES (002, 'Rua Rodrigues Ferreira, 45, Várzea, Recife, PE', '30973103');
INSERT INTO clientes VALUES (003, 'Rua das Hortencias, 20, Saramandaia, Igaraçu, PE', '36287765');
INSERT INTO clientes VALUES (004, 'Rua José Clamentino, 47, Graças, Recife, PE', '33447786');

INSERT INTO funcionarios VALUES (005, '9897654', '11313354581', '54561', '23671', 10000, 'Tecnico');
INSERT INTO funcionarios VALUES (006, '9897655', '22022345562', '65432', '24562', 10000, 'Tecnico');
INSERT INTO funcionarios VALUES (007, '8384570', '11515567483', '44573', '67843', 7000, 'Vendedor');
INSERT INTO funcionarios VALUES (008, '9897651', '11313354584', '34894', '97864', 7000, 'Vendedor');

INSERT INTO servicos (dataHora, valor, id_funcionario, id_cliente) VALUES ('04-12-2018 10:00:03', 100, 005, 001);
INSERT INTO servicos (dataHora, valor, id_funcionario, id_cliente) VALUES ('04-13-2018 09:00:05', 150, 005, 002);
INSERT INTO servicos (dataHora, valor, id_funcionario, id_cliente) VALUES ('04-14-2018 11:20:04', 80, 008, 003);
INSERT INTO servicos (dataHora, valor, id_funcionario, id_cliente) VALUES ('04-14-2018 16:07:09', 90, 007, 004);

INSERT INTO produtos VALUES ('123254764736212132', '10-02-2018 07:00:01', 15.00, 200, 'perifericos', '...','Mouse');
INSERT INTO produtos VALUES ('002435668987654434', '11-02-2018 18:30:09', 250.00, 150, 'peças', '...', 'Placa-mãe');

INSERT INTO produtos_analise VALUES ('34547565687', 002, 'Impressora', 'outros');
INSERT INTO produtos_analise VALUES ('34536475689', 004, 'Computador', 'Desktop');

INSERT INTO analises VALUES (002,'em espera', '...','34547565687');
INSERT INTO analises VALUES (003,'concluido', '...','34536475689');

INSERT INTO itens_venda VALUES (001,'123254764736212132', 2, 15.00);
INSERT INTO itens_venda VALUES (004,'002435668987654434', 1, 240.00);

