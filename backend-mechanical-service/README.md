# Orientações

  ## <strong>Variável de ambiente</strong>

   - Configurar o arquivo .env na RAIZ do projeto BAKCEND, alterando as variáveis relacionadas ao seu banco nome do localhost, root, senha, etc..
   
   ```
    MYSQL_USER=root
    MYSQL_PASSWORD=docker
    MYSQL_DATABASE=Mechanical_Services
    MYSQL_HOST=localhost
   ```
  ## <strong>Rodando Localmente</strong>

  - **:warning: Atenção:** Para rodar o projeto desta forma, **obrigatoriamente** você deve ter o `Node.js` instalado em seu computador.
  - **:warning: Atenção:** A versão do `Node.js` e `NPM` a ser utilizada é `"node": ">=16.0.0"` e `"npm": ">=7.0.0"`, como descrito a chave `engines` no arquivo `package.json`. Idealmente deve-se utilizar o Node.js na `versão 16.14`, a versão na que esse projeto foi testado.

  - Entrar na pasta backend do projeto e rodar o comando para instalar todas as dependências:
  ```
    npm install
  ```
  - Criar o banco com as tabelas e popular com informações base:

  ```
    npm run db:reset
  ```

  <br/>

# 🎲 Diagrama ER e Entidades

  ## Diagrama de Entidade-Relacionamento

  ### Tabelas

  O banco tem as seguintes tabelas: 
  - A tabela `users`, com os atributos `user_id`, `name`, `email`, `phone` e `location`;
  - A tabela `mechanical`, com os atributos `mechanical_id`, `name`, `email`, `password`, e `workshop_id`;
  - A tabela `services`, com os atributos `service_id`, `user_id`, `description`, `vehicle_model`,  `vehicle_brand`, `vehicle_year`, `mechanical_id`;
  - A tabela `manager`, com os atributos `manager_id`, `manager_name`, `manager_email`, `manager_password` e `workshop_id`;
  - A tabela `workshop` coms os atributos `workshop_id`, `workshop_name`, `workshop_location`;

# Progresso dos Requisitos

### <strong>CRUD do Usuário</strong>

- [x] Cadastrar um novo usuário.
- [x] Logar o usuário cadastrado.
- [x] Editar o usuário cadastrado.
- [x] Deletar o usuário cadastrado.
- [x] Listar os usuários cadastrado.

### <strong>CRUD do Mecânico</strong>

- [x] Cadastrar um novo mecânico.
- [x] Logar o mecânico cadastrado.
- [x] Editar o mecânico cadastrado.
- [x] Deletar o mecânico cadastrado.
- [x] Listar os mecânicos cadastrado.

### <strong>CRUD dos Servicos (Usuário registra um novo problema)</strong>

- [x] Cadastrar um novo serviço.
- [x] Editar o serviço cadastrado.
- [x] Deletar o serviço cadastrado.
- [x] Listar todos os serviços cadastrados.
- [x] Listar os serviços cadastrados pelo usuário.

