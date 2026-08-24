const PER_PAGE = 10;
let currentPage = Number(new URLSearchParams(location.search).get("page")) || 1;
let query = "";

const grid = document.getElementById("mapGrid");
const pagination = document.getElementById("pagination");
const paginationTop = document.getElementById("paginationTop");
const emptyState = document.getElementById("emptyState");
const resultCount = document.getElementById("resultCount");
const searchInput = document.getElementById("searchInput");

function removeVietnameseTones(str) {
  return String(str ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, c => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
  }[c]));
}

function getFilteredMaps() {
  const q = removeVietnameseTones(query.trim());

  if (!q) return MAPS;

  return MAPS.filter(map =>
    removeVietnameseTones(map.name).includes(q)
  );
}

function goPage(page) {
  const totalPages = Math.max(1, Math.ceil(getFilteredMaps().length / PER_PAGE));
  currentPage = Math.max(1, Math.min(page, totalPages));

  const url = new URL(location.href);
  if (currentPage === 1) url.searchParams.delete("page");
  else url.searchParams.set("page", currentPage);

  history.replaceState({}, "", url);
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function pageNumbers(totalPages) {
  if (totalPages <= 7) {
    return Array.from({length: totalPages}, (_, i) => i + 1);
  }

  const pages = [1];

  if (currentPage > 4) pages.push("...");

  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);

  for (let i = start; i <= end; i++) {
    if (!pages.includes(i)) pages.push(i);
  }

  if (currentPage < totalPages - 3) pages.push("...");

  pages.push(totalPages);
  return pages;
}

function renderPagination(totalPages) {
  const paginations = [paginationTop, pagination];

  if (totalPages <= 1) {
    paginations.forEach(p => {
      if (p) p.innerHTML = "";
    });
    return;
  }

  let html = `
    <button class="page-btn prev"
            ${currentPage === 1 ? "disabled" : ""}
            data-page="${currentPage - 1}">
      ← Prev
    </button>
  `;

  for (const page of pageNumbers(totalPages)) {
    if (page === "...") {
      html += `<span class="page-dots">...</span>`;
    } else {
      html += `
        <button class="page-btn ${page === currentPage ? "active" : ""}"
                data-page="${page}">
          ${page}
        </button>
      `;
    }
  }

  html += `
    <button class="page-btn next"
            ${currentPage === totalPages ? "disabled" : ""}
            data-page="${currentPage + 1}">
      Next →
    </button>
  `;

  paginations.forEach(p => {
    if (!p) return;

    p.innerHTML = html;

    p.querySelectorAll("button[data-page]").forEach(btn => {
      btn.addEventListener("click", () => {
        goPage(Number(btn.dataset.page));
      });
    });
  });
}

function render() {
  const maps = [...getFilteredMaps()].reverse();
  const totalPages = Math.max(1, Math.ceil(maps.length / PER_PAGE));

  if (currentPage > totalPages) currentPage = totalPages;

  const start = (currentPage - 1) * PER_PAGE;
  const visible = maps.slice(start, start + PER_PAGE);

  resultCount.textContent = `${maps.length} map${maps.length === 1 ? "" : "s"}`;

  grid.innerHTML = visible.map(map => `
    <a class="map-card" href="map.html?id=${encodeURIComponent(map.id)}&page=${currentPage}">
      <div class="map-image-wrap">
        <img class="map-image"
             src="${escapeHtml(map.image)}"
             alt="${escapeHtml(map.name)}">
      </div>
      <div class="map-name">${escapeHtml(map.name)}</div>
    </a>
  `).join("");

  const isEmpty = visible.length === 0;
  emptyState.classList.toggle("hidden", !isEmpty);
  grid.classList.toggle("hidden", isEmpty);

  renderPagination(totalPages);
}

searchInput.addEventListener("input", e => {
  query = e.target.value;
  currentPage = 1;
  render();
});

document.getElementById("year").textContent = new Date().getFullYear();

render();
