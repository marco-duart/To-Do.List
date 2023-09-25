# To-Do.List

Este é um projeto simples de uma lista de tarefas (to-do list) desenvolvido usando React, TypeScript e Vite. Ele permite que você crie, visualize, marque como concluídas e/ou exclua tarefas da sua lista.


## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js e o npm (ou yarn) instalados na sua máquina.

Temos alguns caminhos para conseguir "rodar", são elas:
1. *API emulada pelo json-server(está na lista de dependências)*

2. *API simulada pelo Render(Pode ser lenta nas requisições)*

3. Utilizar a aplicação 

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
A partir desse momento, a aplicação estará rodando em sua máquina.
Por padrão, o projeto vem com a API simulada através do Render configurada , mas as alterações feitas nela "resetam" após um tempo.

##Utilizando a API do json-server

**Existe a possibilidade de emular uma API localmente, acesse a pasta da API:**
   ```bash
   cd api
   ```
**Já na pasta da API, execute o comando abaixo em uma instância diferente da instância que iniciou a aplicação:**
   ```bash
   cd api
   ```

**Funcionalidades**
Adicione novas tarefas.
Marque as tarefas como concluídas, e elas vão automaticamente para a coluna de tarefas realizadas.
Modifique tarefas.
Exclua tarefas.
Visualize sua lista de tarefas e os detalhes das tarefas.
