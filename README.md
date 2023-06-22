# back-end-node-sql

# Dependências

 - body-parser
 - express
 - mariadb
 - nodemon
 - path
 - sequelize - [Documentação do Sequelize](https://sequelize.org/docs/v6/other-topics/migrations/)
 - sequelize-cli
 - bcryptjs
 - uuid
 - jsonwebtoken

# Banco de dados
 - mariadb 
 - nome do banco: curso - (Caso queira usar outro nome para o banco, alterar no arquivo config.json)

# sequelize-cli: 

 - Comandos utilizados no projeto: 
    - npx sequelize-cli init 
        --> Criando um template inicial
    - npx sequelize-cli model:create --name Pessoas --attributes nome:string,cpf:integer,email:string,tipoPessoa:string 
        --> Criando um model
    - npx sequelize-cli db:migrate 
        --> Criando a migração, de acordo com o arquivo da pasta migrations
    - npx sequelize-cli seed:generate --name pessoa 
        --> Gerando arquivo base para setar ou dropar dados na tabela 
    - npx sequelize-cli db:seed:all 
        --> Inclui os dados inseridos no seed, na tabela


# Iniciar o projeto

 - npm start