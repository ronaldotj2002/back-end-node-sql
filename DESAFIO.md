# Back-end Node.JS com SQL

Uma organização filantrópica pretende levar conhecimento sobre diversas áreas às pessoas que buscam entrar no mercado de trabalho, através do portal público da organização, desta forma permitindo que pessoas estejam aptas para ocupar posições de trabalho abertas no mercado.

Diante desta necessidade, ficou entendido pelo time de produto que para alcançar tal objetivo seriam necessárias a disponibilização de novas funcionalidades em seu portal:

- Cadastro do aluno;
- Realizar login;
- Listar cursos disponíveis para inscrição;
- Realizar inscrição;
- Cancelar inscrição.

![PD-Back-end Node JS com SQL](https://github.com/ronaldotj2002/back-end-node-sql/assets/964667/32c52c5a-9528-43e2-92a2-ee8962fd4ecf)

Hoje, a solução do portal da organização é uma aplicação web estática desenvolvida com javascript e react que conta com um time dedicado para sua sustentação e evolução. 

Sendo assim, todo o desenvolvimento no portal para adequarmos às novas funcionalidades será de responsabilidade deles. Ficando aqui para nós o desenvolvimento do backend que será responsável por estar permitindo o aluno através do portal interagir com a organização e conseguir consumir as funcionalidades que a organização estará entregando ao final do desenvolvimento.

Diante do cenário descrito acima, desenvolva um serviço web REST, que seja capaz de entregar aos seus usuários as funcionalidades apresentadas acima. Seguem detalhes de cada funcionalidade:


| Funcionalidade         | Objetivo                                  | Observações
|------------------------|-------------------------------------------|-------------------------------------------------------------------|
| Cadastro do aluno      | Permitir qualquer pessoa que tenha interesse em participar do programa de capacitação através do seu cadastro | O cadastro de alunos deverá salvar os dados do cadastro em banco relacional |
| Realizar login         | Permitir ao usuário realizar o login com seu usuário e senha                                                  | Ao logar, as informações deverão ser consumidas da base de dados            | 
| Listar cursos disponíveis para inscrição | Permitir ao usuário logado exibir todos os cursos disponíveis                               | Os cursos ser consumidos da base de dados da tabela de cursos               
| Listar cursos disponíveis para inscrição | Permitir ao usuário logado exibir todos os cursos disponíveis                               | Apenas cursos disponíveis que não foram iniciados ainda deverão ser apresentados |  
| Listar cursos disponíveis para inscrição | Permitir ao usuário logado exibir todos os cursos disponíveis                          | Nesta consulta o serviço deverá devolver informação da quantidade de alunos inscritos |
| Realizar inscrição    | Permitir ao usuário logado realizar uma inscrição no curso selecionado                                        | Validar se aluno já está inscrito no curso | 
| Realizar inscrição    | Permitir ao usuário logado realizar uma inscrição no curso selecionado                                        | Criar inscrição na tabela de inscrição. |
| Cancelar inscrição    | Permitir ao usuário logado cancelar uma inscrição no curso selecionado       | A exclusão deve lógica o registro deve continuar na tabela porém com uma coluna de data de cancelamento |


