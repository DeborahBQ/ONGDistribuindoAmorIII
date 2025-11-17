function criarCardProjeto(imagem, alt, titulo, descricao) {
  return `
    <div class="card">
      <img src="${imagem}" alt="${alt}">
      <div class="card-conteudo">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projetos-container");

  if (container) {
    const projetos = [
      {
        imagem: "img/ONGPata.jpg",
        alt: "Pata de cachorro com coração vermelho no meio.",
        titulo: "Projeto: Adote um amigo. Categoria: Proteção Animal",
        descricao: "Nesse projeto, você poderá contribuir com ração, medicamentos, roupinhas, coleiras, camas, mantas ou com qualquer valor para ajudar nos resgates e cuidados dos animais."
      },
      {
        imagem: "img/ONG2.jpg",
        alt: "Mãos formando um círculo.",
        titulo: "Projeto: Círculo do carinho. Categoria: Assistência Humana",
        descricao: "Nesse projeto, levamamos amor e carinho em forma de alimento, roupas novas e cobertas quentinhas para os nossos amigos em situação de vulnerabilidade."
      },
      {
        imagem: "img/ONG3.png",
        alt: "Três desenhos de mulheres segurando coração.",
        titulo: "Projeto: Mulheres Independentes. Categoria: Assistência Humana / Saúde e Bem estar",
        descricao: "Nesse projeto, ajudamos mulheres recuperar sua autoestima, oferecemos cursos voltados para o mercado de trabalho, acompanhamento psicológico e médico."
      }
    ];

    projetos.forEach(p => {
      container.innerHTML += criarCardProjeto(p.imagem, p.alt, p.titulo, p.descricao);
    });
  }
});