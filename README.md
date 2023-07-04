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
 - cors

# Banco de dados
 - mariadb 
 - nome do banco: curso - (Caso queira usar outro nome para o banco, alterar no arquivo config.json)

# sequelize-cli: 

 - Comandos utilizados no projeto: 
    - npx sequelize-cli init 
        --> Criando um template inicial
    - npx sequelize-cli model:create --name Usuarios --attributes nome:string,login:string,email:string,role:string,senha:string 
        --> Criando um model
    - npx sequelize-cli db:migrate 
        --> Criando a migração, de acordo com o arquivo da pasta migrations
    - npx sequelize-cli seed:generate --name pessoa 
        --> Gerando arquivo base para setar ou dropar dados na tabela 
    - npx sequelize-cli db:seed:all 
        --> Inclui os dados inseridos no seed, na tabela


# RUBRICAS
 - O cadastro de alunos deverá salvar os dados do cadastro em banco relacional.
   - Path: 'http://localhost:3000/usuarios/'
   - Método: POST
   - Body = {nome, login, email, role, senha}
--------------------------------------------------------------------------------------------
- Ao logar, as informações deverão ser consumidas da base de dados.
    - Path: 'http://localhost:3000/auth/login/'
    - Método: POST
    - Body = {login, senha}
--------------------------------------------------------------------------------------------
- Os cursos ser consumidos da base de dados da tabela de cursos;
- Apenas cursos disponíveis que não foram iniciados ainda deverão ser apresentados; 
- Nesta consulta o serviço deverá devolver informação da quantidade de alunos inscritos
  - Path: 'http://localhost:3000/cursos/disponiveis'
  - Método: GET
--------------------------------------------------------------------------------------------
- Validar se aluno já está inscrito no curso; 
- Criar inscrição na tabela de inscrição.
  - Path: 'http://localhost:3000/inscricoes/:idUsuario'
  - Método: POST
  - Body: { data_inscricao, cursoId } 

- A exclusão deve continuar na tabela porém com uma coluna de data de cancelamento.
 - Path: 'http://localhost:3000/inscricoes/id/:idInscricao'
 - Método DELETE

 A Collections está na pasta COLLECTIONS. 
# Iniciar o projeto

    - Criar uma banco de dados com o nome 'curso'
    - Rodar a migração para gerar as tabelas no banco: npx sequelize-cli db:migrate 
    - Usar a collection que está na pasta COLLECTIONS
    

    - NODE - Versão: v18.16.0

    