CREATE TABLE IF NOT EXISTS usuarios
(
  id_usuario SERIAL PRIMARY KEY,
  email VARCHAR(254) NOT NULL UNIQUE,
  senha VARCHAR(20) NOT NULL,
  nome_completo VARCHAR(185) NOT NULL
);

CREATE TABLE IF NOT EXISTS clientes
(
  id_cliente INTEGER PRIMARY KEY,
  endereco VARCHAR(120) NOT NULL,
  telefone VARCHAR(14) NOT NULL,
  FOREIGN KEY (id_cliente)
    REFERENCES usuarios (id_usuario) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS funcionarios
(
  id_funcionario INTEGER PRIMARY KEY ,
  RG VARCHAR(7) NOT NULL UNIQUE ,
  CPF VARCHAR(11) NOT NULL UNIQUE ,
  conta_banco VARCHAR(5),
  agencia_bancaria VARCHAR(5),
  meta FLOAT,
  tipo_funcionario VARCHAR(20) NOT NULL,
  FOREIGN KEY (id_funcionario)
    REFERENCES usuarios (id_usuario) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS servicos
(
  id_servico SERIAL PRIMARY KEY,
  dataHora TIMESTAMP NOT NULL,
  valor FLOAT NOT NULL,
  id_funcionario INTEGER,
  id_cliente INTEGER NOT NULL,
  FOREIGN KEY (id_funcionario)
    REFERENCES funcionarios (id_funcionario) ON DELETE CASCADE,
  FOREIGN KEY (id_cliente)
    REFERENCES clientes (id_cliente) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS produtos
(
  codigo_barras VARCHAR(20) PRIMARY KEY,
  ultimo_reabastecimento TIMESTAMP,
  preco FLOAT NOT NULL,
  quantidade INTEGER NOT NULL,
  categoria VARCHAR(20),
  descricao TEXT,
  nome VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS produtos_analise
(
  numero_serie VARCHAR(30) PRIMARY KEY,
  id_cliente INTEGER NOT NULL,
  nome VARCHAR(20) NOT NULL,
  categoria VARCHAR(20) NOT NULL,
  FOREIGN KEY (id_cliente)
    REFERENCES clientes (id_cliente) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS analises
(
  id_analise INTEGER PRIMARY KEY,
  status VARCHAR(20) NOT NULL,
  descricao TEXT NOT NULL,
  n_serie_prod_analise VARCHAR(30) NOT NULL,
  FOREIGN KEY (id_analise)
    REFERENCES servicos (id_servico) ON DELETE CASCADE,
  FOREIGN KEY (n_serie_prod_analise)
    REFERENCES produtos_analise (numero_serie) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS itens_venda
(
  id_venda INTEGER,
  codigo_barras VARCHAR(20),
  quantidade INTEGER NOT NULL,
  preco FLOAT NOT NULL,
  PRIMARY KEY (id_venda, codigo_barras),
  FOREIGN KEY (id_venda)
    REFERENCES servicos (id_servico) ON DELETE CASCADE,
  FOREIGN KEY (codigo_barras)
    REFERENCES produtos (codigo_barras) ON DELETE CASCADE
);