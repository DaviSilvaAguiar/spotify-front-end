const resultArtist = document.getElementById("result-artist");
const playlistContainer = document.getElementById("result-playlists");
const searchInput = document.getElementById("search-input");

function requestApi(searchTerm) {
  fetch(`http://localhost:3000/artists`)
    .then((response) => response.json())
    .then((results) => {
      const filteredResults = results.filter((artist) =>
        artist.name.toLowerCase().includes(searchTerm) // agora filtra com o nome correto
      );
      
      // Se não houver resultados, esconde o painel de artistas e mostra as playlists
      if (filteredResults.length === 0) {
        resultArtist.classList.add("hidden");
        playlistContainer.classList.remove("hidden");
      } else {
        displayResults(filteredResults); // exibe os resultados filtrados
      }
    });
}

function displayResults(results) {
  hidePlaylists();
  const artistImage = document.getElementById("artist-img");
  const artistName = document.getElementById("artist-name");

  // Exibe o primeiro artista encontrado
  const artist = results[0]; // se você quiser mostrar mais de um, pode alterar essa parte
  artistImage.src = artist.urlImg;
  artistName.innerText = artist.name;

  resultArtist.classList.remove("hidden");
}

function hidePlaylists() {
  playlistContainer.classList.add("hidden");
}

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.trim().toLowerCase();
  
  // Se o campo estiver vazio, mostra as playlists novamente
  if (searchTerm === "") {
    resultArtist.classList.add("hidden");
    playlistContainer.classList.remove("hidden");
    return;
  }

  // Realiza a busca utilizando a função refinada
  requestApi(searchTerm);
});
