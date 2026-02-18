// Local games
const games = [
  { title: "Deltarune", image: "images/Deltarune.png", url: "https://example.com" },
  { title: "Game 2", image: "images/game2.jpg", url: "https://example.com" },
  { title: "Game 3", image: "images/game3.jpg", url: "https://example.com" },
  { title: "Game 4", image: "images/game4.jpg", url: "https://example.com" },
  { title: "Game 5", image: "images/game5.jpg", url: "https://example.com" },
  { title: "Game 6", image: "images/game6.jpg", url: "https://example.com" }
];

const grid = document.getElementById("gameGrid");
const searchInput = document.getElementById("search");
const viewer = document.getElementById("viewer");
const frame = document.getElementById("gameFrame");
const closeBtn = document.getElementById("closeViewer");

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
          <button class="play-btn">Play</button>
        </div>
      `;

      grid.appendChild(card);

      // Play button opens iframe
      card.querySelector(".play-btn").addEventListener("click", () => {
        openGame(game.url);
      });
    });
}

function openGame(url) {
  frame.src = url;
  viewer.classList.remove("hidden");
}

closeBtn.addEventListener("click", () => {
  frame.src = "";
  viewer.classList.add("hidden");
});

// Search functionality
searchInput.addEventListener("input", (e) => {
  renderGames(e.target.value);
});

// Initial render
renderGames();
