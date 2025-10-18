// Fetch games data and display
fetch("../data/games.json")
  .then((res) => res.json())
  .then((games) => {
    const grid = document.getElementById("gamesGrid");
    grid.innerHTML = games
      .map(
        (g) => `
        <div class="game-card">
          <img src="${g.image}" alt="${g.title}">
          <div class="game-info">
            <h3>${g.title}</h3>
            <p>${g.category} • ${g.size}</p>
            <small>${g.description}</small>
            <span class="status">${g.status}</span>
            <span class="tag">${g.tag}</span>
          </div>
        </div>
      `
      )
      .join("");
  })
  .catch((err) => {
    console.error("Error loading games:", err);
  });
