# Spotify - Frontend da Tela de Buscar

**Desenvolvido durante a Imersão Front-End da Alura**

Este projeto foi criado como parte da **Imersão Front-End da Alura**, com o objetivo de reproduzir a interface de busca do Spotify. A tela permite ao usuário buscar por artistas e visualizar cards com informações sobre o artista, como nome, imagem e gênero musical. Além disso, a lógica de busca foi implementada para simular uma interação real com a API, filtrando artistas a partir do nome digitado pelo usuário.

## Funcionalidades

- **Busca por artista**: O usuário pode digitar o nome de um artista e a interface irá buscar os resultados correspondentes.
- **Exibição de cards**: Para cada artista encontrado, será exibido um card com a imagem, nome e gênero musical.
- **API Fake**: Utilização de um arquivo JSON simulado como uma API para retornar os dados dos artistas.

## Tecnologias Utilizadas

- **HTML**: Estrutura básica do projeto.
- **CSS**: Estilização e design da página (com foco na experiência de usuário).
- **JavaScript**: Implementação da lógica de busca e interação com a API.
- **JSON Server**: Utilização de um servidor fake para simular a API que retorna os dados dos artistas.

## Como Rodar o Projeto

### 1. Clonar o repositório
Primeiro, clone o repositório para a sua máquina local:
git clone https://github.com/DaviSilvaAguiar/spotify-front-end.git
2. Instalar o JSON Server
Este projeto utiliza o JSON Server para simular uma API local. Se você ainda não tem o JSON Server instalado, pode instalá-lo globalmente com o seguinte comando:
npm install -g json-server
3. Rodar o JSON Server
Na raiz do projeto, onde o arquivo db.json (ou o arquivo com seus dados de artistas) está localizado, execute o seguinte comando para iniciar o servidor fake:
json-server --watch db.json --port 3000
Isso fará com que o JSON Server inicie e fique ouvindo as requisições na porta 3000.
4. Rodar o Projeto Frontend
Abra o arquivo index.html em seu navegador para visualizar a página.

## Demonstração

### Menu Inicial

![Menu Inicial](https://github.com/SEU_USUARIO/SEU_REPOSITORIO/raw/main/src/assets/exemplo/MENU%20INICIAL.jpg)

### Tela de Busca

![Busca](https://github.com/SEU_USUARIO/SEU_REPOSITORIO/raw/main/src/assets/exemplo/BUSCA.jpg)

Spotify - Search Screen Frontend
Developed during the Alura Front-End Immersion

This project was created as part of the Alura Front-End Immersion, with the goal of replicating the Spotify search interface. The screen allows the user to search for artists and view cards with information about the artist, such as their name, image, and music genre. Additionally, the search logic was implemented to simulate a real interaction with the API, filtering artists based on the name entered by the user.

Features
Artist Search: The user can type in the name of an artist, and the interface will search for matching results.
Card Display: For each found artist, a card will be displayed with the image, name, and music genre.
Fake API: A simulated JSON file is used as a fake API to return artist data.
Technologies Used
HTML: Basic structure of the project.
CSS: Styling and design of the page (focused on user experience).
JavaScript: Implementation of the search logic and interaction with the API.
JSON Server: A fake server used to simulate an API that returns artist data.
How to Run the Project
1. Clone the repository
First, clone the repository to your local machine:

bash
Copiar
git clone https://github.com/DaviSilvaAguiar/spotify-front-end.git
2. Install JSON Server
This project uses JSON Server to simulate a local API. If you don’t have JSON Server installed, you can install it globally with the following command:

bash
Copiar
npm install -g json-server
3. Run the JSON Server
In the root of the project, where the db.json file (or the file with your artist data) is located, run the following command to start the fake server:

bash
Copiar
json-server --watch db.json --port 3000
This will start the JSON Server and keep it listening on port 3000.

4. Run the Frontend
Open the index.html file in your browser to view the page.

Demo
Initial Menu
![Menu Inicial](https://github.com/SEU_USUARIO/SEU_REPOSITORIO/raw/main/src/assets/exemplo/MENU%20INICIAL.jpg)

Search Screen
![Busca](https://github.com/SEU_USUARIO/SEU_REPOSITORIO/raw/main/src/assets/exemplo/BUSCA.jpg)



