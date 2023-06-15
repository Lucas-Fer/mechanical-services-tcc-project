# Mechanical Services System- TCC

## Resumo

Projeto full stack para entrega do Trabalho de Conclusão de Curso da matéria de Sistemas de Informação na UNIRON, onde será um sistema para serviços mecânicos.

O sistema de serviços mecânicos atua como um gerenciador de serviços mecânicos para a oficina, além de ser uma alternativa para o cliente que deseja mais praticidade ao receber um serviço mecânico, caso não haja necessidade ou impossibilidade de se locomover para uma oficina.

O  cliente poderá registrar de sua casa o problema com seu respectivo automóvel e o gerente na oficina será o responsável por atrelar o mecânico disponível para atuar no problema, sem necessitar realizar um agendamento ou se locomover até uma oficina, promovendo flexibilidade para ambas as partes.


<details>
  <summary>O Sistema no ponto de vista do Cliente.</summary>
  
 - O usuário ao realizar o cadastro como cliente, conseguirá registrar um serviço informando uma descrição do problema, localização atual e informando detalhes do automóvel (marca, modelo e ano). O serviço ficará como “em aberto” e disponível no ponto de vista do gerente.
</details>

<details>
  <summary>O Sistema no ponto de vista do Gerente.</summary>
 - O usuário ao ser cadastrado como gerente, tem acesso a todos os serviços e será o responsável pelos seus fluxos, podendo alterar o status do serviço e atribuir um mecânico disponível para realizar o serviço.
</details>

<details>
  <summary>O Sistema no ponto de vista de uma Oficina Mecânica.</summary>
 - O usuário administrador terá a mesma dinâmica do gerente, além de poder adicionar, remover e editar um gerente e/ou mecânico.
</details>

<details>
  <summary>O Sistema no ponto de vista de um Mecânico.</summary>
 - O usuário ao ser cadastrado como mecânico, poderá ser atrelado à um serviço caso marque seus status como disponível, além de ter acesso às informações do serviço. 
</details>


## Stack utilizada

<details>
  <summary>Back-end</summary>
  
 - Node, Express, MySql, Sequelize, TypeScript e JavaScript
  
 - O back-end será desenvolvido com o framework Node com Express + a linguaguem TypeScript, utilizando a arquitetura MSC (model-service-controller).

 - Será utilizado o banco de dados MySQL para a gestão de dados. Além de a API ser RESTful.
</details>

 <details>
  <summary>Front-end</summary>
  
 - ReactJS, JavaScript, TypeScript
  
 - O front realizará a comunicação com o banco, além de ser o responsável pela interação do usuário com o sistema, aplicando práticas de usablidade e responsividade.

 - Será utilizado Context API para gerenciar os estados da aplicação.
</details>
