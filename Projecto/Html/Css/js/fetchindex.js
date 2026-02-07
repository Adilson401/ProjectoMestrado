
  document.getElementById('year').textContent = new Date().getFullYear();

  const BASE = new URL(".", window.location.href);

  async function buscarConteudo(relPath) {
    const url = new URL(relPath, BASE).toString();
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      return `<div class="container py-4">
        <div class="alert alert-danger">
          Erro ao carregar: <b>${relPath}</b><br>
          Status: <b>${res.status}</b> (${res.statusText})
        </div>
      </div>`;
    }

    const htmlText = await res.text();
    const doc = new DOMParser().parseFromString(htmlText, "text/html");

    const conteudo = doc.querySelector("#conteudo");
    if (!conteudo) {
      return `<div class="container py-4">
        <div class="alert alert-warning">
          A página <b>${relPath}</b> abriu, mas não tem <b>#conteudo</b>.
        </div>
      </div>`;
    }

    return conteudo; // retorna o nó <main id="conteudo">
  }

  async function montarPaginaPrincipal() {
    const alvo = document.getElementById("PaginaCentral");
    alvo.innerHTML = ""; // limpa

    // Carrega e empilha: HOME -> PRODUTO -> TESTEMUNHA
    const home = await buscarConteudo("pages/home.html");
    const produto = await buscarConteudo("pages/produto.html");
    const testemunha = await buscarConteudo("pages/testemunha.html");

    // adiciona na ordem
    [home, produto, testemunha].forEach(item => {
      if (typeof item === "string") {
        // é HTML de erro
        const wrap = document.createElement("div");
        wrap.innerHTML = item;
        alvo.appendChild(wrap);
      } else {
        alvo.appendChild(item);
      }
    });
  }

  document.addEventListener("DOMContentLoaded", montarPaginaPrincipal);
