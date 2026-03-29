function getQuery() {
  const params = new URLSearchParams(location.search);
  return (params.get("q") || "").trim();
}

function normalize(text) {
  return String(text || "").toLowerCase();
}

function setupSearchForm() {
  const form = document.getElementById("search-form");
  const input = document.getElementById("search-input");

  if (!form || !input) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const q = input.value.trim();
    if (!q) return;
    location.href = "search.html?q=" + encodeURIComponent(q);
  });
}

function renderSearchResults() {
  const container = document.getElementById("results");
  if (!container) return;

  const q = getQuery();
  if (!q) {
    container.innerHTML = "<p>検索語を入力してください。</p>";
    return;
  }

  const nq = normalize(q);
  const matched = searchData.filter(item =>
    normalize(item.name).includes(nq) ||
    normalize(item.prefecture).includes(nq) ||
    normalize(item.kana).includes(nq)
  );

  if (matched.length === 0) {
    location.href = "notfound.html";
    return;
  }

  container.innerHTML = matched.map(item => `
    <div class="con2">
      <p><a href="${item.file}">${item.name}</a>（${item.prefecture}）</p>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", function () {
  setupSearchForm();
  renderSearchResults();
});