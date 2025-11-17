document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a[data-link]");
  const conteudo = document.getElementById("conteudo");

  async function carregarPagina(url) {
    try {
      const resposta = await fetch(url);
      const html = await resposta.text();
      conteudo.innerHTML = html;
      window.history.pushState({}, "", url);
    } catch (erro) {
      conteudo.innerHTML = "<p>Erro ao carregar a página.</p>";
    }
  }

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const url = link.getAttribute("href");
      carregarPagina(url);
    });
  });


  window.addEventListener("popstate", () => {
    carregarPagina(location.pathname);
  });
});