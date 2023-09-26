# To-Do.List

Este é um projeto simples de uma lista de tarefas (to-do list) desenvolvido usando React, TypeScript e Vite. Ele permite que você crie, visualize, marque como concluídas e/ou exclua tarefas da sua lista.


## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js e o npm (ou yarn) instalados na sua máquina.

Temos alguns caminhos para conseguir rodar o projeto, são eles:
1. *API emulada pelo json-server(está na lista de dependências)*

2. *API simulada pelo Render(Pode ser lenta nas requisições)*

3. *Utilizar a aplicação pelo Vercel (duplamente lenta nas requisições), através do link [httto-do-list-gilt-six.vercel.app](https://to-do-list-gilt-six.vercel.app/)*

## Instalação do projeto

Siga estas etapas para executar o projeto localmente:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/marco-duart/To-Do.List
   ```
2. **Acesse a pasta do projeto:**
   ```bash
   cd to-do-list
   ```
4. **Já na pasta do projeto, instale as dependências:**
   ```bash
   npm install
   ```
Ou pelo yarn
   ```bash
   yarn
   ```

5. **Uso: Após a instalação, você pode iniciar o servidor de desenvolvimento local com o seguinte comando:**
Com npm:
   ```bash
   npm run dev
   ```
   Ou com yarn:
   ```bash
   yarn dev
   ```
A partir desse momento, o projeto estará rodando em sua máquina.
Por padrão, o projeto vem com a API simulada através do Render configurada, mas as alterações feitas nela "resetam" após um tempo.

##Utilizando a API do json-server

**Existe a possibilidade de emular uma API localmente, acesse a pasta da API:**
   ```bash
   cd api
   ```
**Já na pasta da API, execute o comando abaixo em uma instância diferente da instância que iniciou a aplicação:**
   ```bash
   json-server 
   ```
*O Json-Server vai usar a porta 3000, então inicie primeiramente o ele, e depois inicie o projeto em outra instância.*

**Manualmente, altere o endereço da api na pasta toDoList/src/data/services/config.ts, na linha 3:**


**Funcionalidades**
Páginas Tasks e New
Adicione novas tarefas através da pagina New.
Marque as tarefas como concluídas, e elas vão automaticamente para a coluna de tarefas realizadas.
Modifique tarefas.
Exclua tarefas.
Visualize sua lista de tarefas e os detalhes das tarefas.

##Dependências (Caso não instalem automaticamente)##
   ```bash
   npm i styled-components react-router-dom axios
   npm i -g json-server
   npm install --save react-modal
   ```

Espero corresponder as espectativas! Ótimo trabalho para a equipe do TI.
