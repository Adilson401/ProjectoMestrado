async function loadPartial(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;

  const res = await fetch(url);
  if (!res.ok) {
    el.innerHTML = `<div style="padding:10px;color:#b00">Erro ao carregar ${url}</div>`;
    return;
  }
  el.innerHTML = await res.text();
}

function setActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll("[data-nav]").forEach(a => {
    if (a.getAttribute("data-nav") === path) a.classList.add("active");
  });
}

function setYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

(async function init() {
  // head é opcional (mais comum manter head direto em cada HTML),
  // mas deixei como componente também.
  await loadPartial("#app-header", "/partial/header.html");
  await loadPartial("#app-footer", "/partial/footer.html");

  setActiveNav();
  setYear();
})();