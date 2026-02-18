// Your local games are just HTML files in the root (or a folder)
const games = [
  { title: "Deltarune", image: "images/Deltarune.png", file: "games/deltarune/index.html" },
  { title: "Game 2", image: "images/game2.png", file: "game2.html" },
  { title: "Game 3", image: "images/game3.png", file: "game3.html" },
  { title: "Game 4", image: "images/game4.png", file: "game4.html" }
];

const grid = document.getElementById("gameGrid");
const searchInput = document.getElementById("search");
const viewer = document.getElementById("viewer");
const frame = document.getElementById("gameFrame");
const closeBtn = document.getElementById("closeViewer");

// Render the grid
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

      // Play button opens the game HTML in iframe
      card.querySelector(".play-btn").addEventListener("click", () => {
        openGame(game.file);
      });
    });
}

// Open game in iframe
function openGame(file) {
  frame.src = file;   // load the local HTML file
  viewer.classList.remove("hidden");
}

// Close iframe
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
