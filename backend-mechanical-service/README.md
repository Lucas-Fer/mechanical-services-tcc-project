# Orientações

  ## <strong>Variável de ambiente</strong>

   - Configurar o arquivo database/_utils.js, alterando as variáveis relacionadas ao seu banco nome do localhost, root, senha, etc..

   ```
   const connection = mysql.createPool({
    host: 'localhost', || alterar
    user: 'root', || alterar
    password: 'docker', || alterar
    multipleStatements: true || MANTER,
   });
   ```
  - Alterar também o arquivo model/connection.js

  ```
  const connection = mysql.createPool({
   host: 'localhost', || alterar
   user: 'root', || alterar
   password: 'docker', || alterar
   database: 'Mechanical_Services', || MANTER
  });
  ```

  ## <strong>Rodando Localmente</strong>

  - **:warning: Atenção:** Para rodar o projeto desta forma, **obrigatoriamente** você deve ter o `Node.js` instalado em seu computador.
  - **:warning: Atenção:** A versão do `Node.js` e `NPM` a ser utilizada é `"node": ">=16.0.0"` e `"npm": ">=7.0.0"`, como descrito a chave `engines` no arquivo `package.json`. Idealmente deve-se utilizar o Node.js na `versão 16.14`, a versão na que esse projeto foi testado.

  - Entrar na pasta backend do projeto e rodar o comando:
  ```
    npm install
  ```
  - Criar o banco com as tabelas e popular com informações base:

  ```
    npm run migration
    npm run seed
  ```

  <br/>

# 🎲 Diagrama ER e Entidades

  ## Diagrama de Entidade-Relacionamento

  ### Tabelas

  O banco tem quatro tabelas: 
  - A tabela `users`, com os atributos `user_id`, `name`, `email`, `phone` e `endereco`;
  - A tabela `mechanical`, com os atributos `mechanical_id`, `name`, `email`, `autonomous` e `mechanical_workshop`;
  - A tabela `services`, com os atributos `service_id`, `user_id`, `description`, `car_model`,  `car_brand` e `car_year`;
  - A tabela `mechanical_service`, com os atributos `service_id`, `mechanical_id` e `status_service`;

# Progresso dos Requisitos

### <strong>CRUD do Usuário</strong>

- [ ] Cadastrar um novo usuário.
- [ ] Logar o usuário cadastrado.
- [ ] Editar o usuário cadastrado.
- [ ] Deletar o usuário cadastrado.
- [ ] Listar o usuário cadastrado.


