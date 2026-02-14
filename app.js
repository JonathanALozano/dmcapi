async function loadCharacters(query = "") {
  const url = query
    ? `/api/characters?q=${encodeURIComponent(query)}`
    : "/api/characters";

  const container = document.getElementById("characters");
  if (!container) return;

  container.innerHTML = `<p class="text-secondary">Cargando...</p>`;

  const res = await fetch(url);
  if (!res.ok) {
    container.innerHTML = `<p class="text-secondary">Error cargando personajes (${res.status}).</p>`;
    return;
  }

  const data = await res.json();
  container.innerHTML = "";

  if (!Array.isArray(data) || data.length === 0) {
    container.innerHTML = `<p class="text-secondary">No se encontraron personajes.</p>`;
    return;
  }

  for (const c of data) {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4";
    col.innerHTML = `
      <div class="card bg-dark border border-secondary rounded-4 shadow h-100">
        <img src="${c.image}" class="card-img-top rounded-top-4" alt="${c.name}">
        <div class="card-body">
          <h5 class="fw-bold">${c.name}</h5>
          <p class="text-secondary mb-2">${c.description}</p>
          <div class="d-flex gap-2 flex-wrap">
            <span class="badge text-bg-danger">${c.style}</span>
            <span class="badge text-bg-secondary">${c.role}</span>
          </div>
        </div>
      </div>
    `;
    container.appendChild(col);
  }
}

async function loadRandomQuote() {
  const res = await fetch("/api/quotes/random");
  const q = await res.json();

  const text = document.getElementById("quoteText");
  const char = document.getElementById("quoteChar");
  if (!text || !char) return;

  text.textContent = q.text;
  char.innerHTML = q.character
    ? `
      <div class="d-flex align-items-center gap-2">
        ${q.image ? `<img src="${q.image}" alt="${q.character}" class="quote-avatar">` : ""}
        <span class="text-secondary small">— ${q.character}</span>
      </div>
    `
    : "";
}

async function loadGames() {
  const res = await fetch("/api/games");
  const data = await res.json();

  const container = document.getElementById("games");
  if (!container) return;

  container.innerHTML = "";

  if (!Array.isArray(data) || data.length === 0) {
    container.innerHTML = `<p class="text-secondary">No hay juegos para mostrar.</p>`;
    return;
  }

  for (const g of data) {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-3";
    col.innerHTML = `
      <div class="card bg-dark border border-secondary rounded-4 shadow h-100">
        <img src="${g.image}" class="card-img-top rounded-top-4" alt="${g.title}">
        <div class="card-body">
          <h5 class="fw-bold">${g.title}</h5>
          <p class="text-secondary mb-1">Año: ${g.year}</p>
          ${g.platform ? `<p class="text-secondary mb-0">Plataforma: ${g.platform}</p>` : ""}
        </div>
      </div>
    `;
    container.appendChild(col);
  }
}

// --- Todo se registra cuando el DOM ya cargó ---
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const btnSearch = document.getElementById("btnSearch");
  const btnQuote = document.getElementById("btnQuote");

  // Debug rápido (sirve para ver en consola si existen)
  console.log("searchInput:", !!searchInput, "btnSearch:", !!btnSearch);

  if (btnSearch && searchInput) {
    btnSearch.addEventListener("click", () => {
      loadCharacters(searchInput.value.trim());
    });

    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        loadCharacters(searchInput.value.trim());
      }
    });
  }

  if (btnQuote) btnQuote.addEventListener("click", loadRandomQuote);

  loadCharacters();
  loadRandomQuote();
  loadGames();
});
