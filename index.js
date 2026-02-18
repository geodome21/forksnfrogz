const games = [
  { title: "Deltarune", image: "images/deltarune.png", url: "games/deltarune/index.html" },
  { title: "Game 2", image: "https://source.unsplash.com/900x700/?arcade", url: "https://example.com" },
  { title: "Game 3", image: "https://source.unsplash.com/900x700/?car,game", url: "https://example.com" },
  { title: "Game 4", image: "https://source.unsplash.com/900x700/?retro", url: "https://example.com" },
  { title: "Game 5", image: "https://source.unsplash.com/900x700/?puzzle", url: "https://example.com" },
  { title: "Game 6", image: "https://source.unsplash.com/900x700/?adventure", url: "https://example.com" }
];

const grid = document.getElementById("gameGrid");
const searchInput = document.getElementById("search");

function renderGames(filter = "") {
  grid.innerHTML = "";

  games
    .filter(game => game.title.toLowerCase().includes(filter.toLowerCase()))
    .forEach(game => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${game.image}" alt="${game.title}">
        <div class="overlay">
          <h2>${game.title}</h2>
          <button onclick="window.open('${game.url}', '_blank')">Play</button>
        </div>
      `;

      grid.appendChild(card);
    });
}

searchInput.addEventListener("input", (e) => {
  renderGames(e.target.value);
});

renderGames();
