document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      const nome = form.querySelector("#nome");
      const email = form.querySelector("#email");
      const mensagem = form.querySelector("#mensagem");

      let valido = true;
      let mensagens = [];

      if (!nome.value.trim()) {
        valido = false;
        mensagens.push("O campo Nome é obrigatório.");
      }

      if (!email.value.includes("@")) {
        valido = false;
        mensagens.push("Informe um e-mail válido.");
      }

      if (!mensagem.value.trim()) {
        valido = false;
        mensagens.push("O campo Mensagem é obrigatório.");
      }

      if (!valido) {
        e.preventDefault();
        alert(mensagens.join("\n"));
      }
    });
  }
});