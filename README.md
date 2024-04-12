# Aplicativo Híbrido para Gerenciamento de Usuários e Carros - Frontend

Este é um aplicativo híbrido que se conecta a uma API RESTful para gerenciamento de usuários e carros com funcionalidade de autenticação via login. A aplicação é desenvolvida utilizando o framework Ionic com Angular.

## Funcionalidades

1. **Autenticação do Usuário:**
   - Como usuário, quero poder fazer login no aplicativo para acessar minhas informações e gerenciar meus carros.

2. **Gerenciamento de Usuários:**
   - Como usuário, quero poder listar todos os usuários cadastrados.
   - Como usuário, quero poder cadastrar um novo usuário no aplicativo.
   - Como usuário, quero poder buscar um usuário pelo seu identificador único (ID).
   - Como usuário, quero poder remover um usuário pelo seu identificador único (ID).
   - Como usuário, quero poder atualizar as informações de um usuário existente.

3. **Gerenciamento de Carros:**
   - Como usuário autenticado, quero poder listar todos os meus carros cadastrados.
   - Como usuário autenticado, quero poder cadastrar um novo carro na minha conta.
   - Como usuário autenticado, quero poder buscar um carro pelo seu identificador único (ID).
   - Como usuário autenticado, quero poder remover um carro pelo seu identificador único (ID).
   - Como usuário autenticado, quero poder atualizar as informações de um carro pertencente à minha conta.

## Solução

Este projeto consiste em um aplicativo híbrido desenvolvido com Ionic e Angular que se conecta a uma API RESTful para gerenciamento de usuários e carros. Abaixo estão os principais componentes e características da solução:

- **Tecnologias Utilizadas:** Ionic, Angular, TypeScript.
- **Funcionalidades:** O aplicativo permite a autenticação de usuários, além de operações CRUD (criação, listagem, busca, atualização e remoção) de usuários e carros.
- **Autenticação:** Os usuários podem fazer login no aplicativo fornecendo suas credenciais. Um token de acesso é retornado após autenticação bem-sucedida, permitindo o acesso às funcionalidades protegidas.
- **Documentação:** A API RESTful está documentada utilizando o Swagger para facilitar o entendimento e uso por parte dos desenvolvedores.

## Executando o Projeto Locamente:

**Clonar o Repositório:**

- git clone https://github.com/ranyelmoraes/secure-car-park-frontend.git

**Instalar as Dependências:**

- npm install

**Executar o Aplicativo:**

- ionic serve

**Para publicação, utilizei o node/express para servir os arquivos estáticos do frontend**

**Realizar build que o express irá utilizar:**

- ionic run build

**Iniciar aplicação com node/express**

- node server.js

**Versões do Node utilizada é a v20.12.2**


4. **Acesso ao Aplicativo:**
O aplicativo será executado em seu navegador padrão. Você também pode instalar o aplicativo em um dispositivo móvel usando o Ionic DevApp ou compilando-o para Android/iOS.

## Links Úteis

- **Link para a aplicação do frontend: https://securecarpark-frontend-bcbdef122ce4.herokuapp.com/home**
- **Link para o código fonte do frontend: https://github.com/ranyelmoraes/secure-car-park-frontend**
- **Link para a aplicação do backend: https://securecarpark-api-dd4eb9b7d738.herokuapp.com/**
- **Link para o código fonte do backend: https://github.com/ranyelmoraes/secure-car-park**

**A documentação da API está disponível em: https://securecarpark-api-dd4eb9b7d738.herokuapp.com/open-api.html**
**Observação: O frontend pode não conter todas as funcionalidades presentes no backend, pois ainda está em desenvolvimento.**
**O projeto foi implantado no Heroku para fins de validação e testes.**

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma *issue* ou enviar um *pull request* com melhorias, correções ou novas funcionalidades.
