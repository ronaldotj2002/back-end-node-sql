# back-end-node-sql


# Dependências

 - body-parser
 - express
 - mariadb
 - nodemon
 - path
 - sequelize - [Documentação do Sequelize](https://sequelize.org/docs/v6/other-topics/migrations/)
 - sequelize-cli: 
    - Comandos utilizados no projeto: 
        - npx sequelize-cli init
        - npx sequelize-cli model:create --name Pessoas --attributes nome:string,cpf:integer,email:string,tipoPessoa:string
        - npx sequelize-cli db:migrate
        - npx sequelize-cli seed:generate --name pessoa
        - npx sequelize-cli db:seed:all

# Comandos
| Comandos                                    | Descrição                                                            | 
|---------------------------------------------|----------------------------------------------------------------------|
| sequelize db:migrate	                      | Executa todas as migrações pendentes para atualizar o banco de dados |
| sequelize db:migrate:schema:timestamps:add	 | Atualiza uma tabela de migração para ter marcação de data/hora       |
| sequelize db:migrate:status	                | Exibe o status de todas as migrações                                 |
| sequelize db:migrate:undo	                   | Reverte a migração mais recente do banco de dados                    |
| sequelize db:migrate:undo:all	                | Reverte todas as migrações                                           |
| sequelize db:seed	                            | Inicializa um seeder específico                                      |
| sequelize db:seed:undo	                      | Deleta arquivo do banco de dados                                     |
| sequelize db:seed:all	                      | Inicializa todos os seeders                                             |
| sequelize db:seed:undo:all	                   | Deleta todos os dados do banco de dados                              |
| sequelize db:create	                         | Cria um banco com uma configuração específica                        |
| sequelize db:drop	                            | Exclui o banco de dados especificado na configuração                 |
| sequelize init	                               | Inicializa um projeto                                                |
| sequelize init:config	                      | Inicializa as configurações                                             |
| sequelize init:migrations	                   | Inicializa as migrações                                              |
| sequelize init:models	                      | Inicializa as models                                                    |
| sequelize init:seeders	                      | Inicializa os seeders                                                |
| sequelize migration:generate [alias: migration:create] |	Gera um novo arquivo de migração                            |
| sequelize model:generate [alias: model:create]	       | Gera uma model e sua migração                               |
| sequelize seed:generate	                               | Gera um novo arquivo de seed                                |
