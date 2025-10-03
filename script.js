const noticias = [
  {
    titulo: "Corinthians empata contra o Internacional",
    imagem: "photos/corinthians x internacional.webp",
    texto: "Em jogo polêmico por conta da arbitragem, Corinthians empata contra o Internacional e segue perto do Z4...",
    data: "01/10/2025",
    categoria: "brasileiros",
    link: "noticia-corinthians.html"
  },
  {
    titulo: "Palmeiras vence clássico contra o Corinthians",
    imagem: "imagens/palmeiras.jpg",
    texto: "Com gol de Endrick, o Verdão garante mais três pontos e se aproxima da liderança.",
    data: "30/09/2025",
    categoria: "brasileiros",
    link: "noticia-palmeiras.html"
  },
  {
    titulo: "Grêmio vence o Cruzeiro fora de casa",
    imagem: "photos/photo_perfil.jpg",
    texto: "Com gol de Suárez, Grêmio garante vitória importante na reta final do Brasileirão.",
    data: "01/10/2025",
    categoria: "brasileiros",
    link: "noticia-gremio.html"
  },
  {
    titulo: "Real Madrid goleia o Barcelona no Bernabéu",
    imagem: "imagens/realmadrid.jpg",
    texto: "Com atuação de destaque de Bellingham, os merengues vencem por 4x1.",
    data: "01/10/2025",
    categoria: "europeus",
    link: "noticia-real.html"
  },
  {
    titulo: "Manchester City vence o Arsenal fora de casa",
    imagem: "imagens/manchester.jpg",
    texto: "Com dois gols de Haaland, os Citizens seguem firmes na liderança da Premier League.",
    data: "29/09/2025",
    categoria: "europeus",
    link: "noticia-city.html"
  }
];

function mostrarNoticias(categoria) {
  const container = document.getElementById("noticias");
  const titulo = document.getElementById("titulo-aba");

  // Atualiza o título da aba
  if (categoria === "todas") {
    titulo.textContent = "Todas as Notícias";
  } else if (categoria === "brasileiros") {
    titulo.textContent = "Notícias - Times Brasileiros";
  } else if (categoria === "europeus") {
    titulo.textContent = "Notícias - Times Europeus";
  }

  // Filtra as notícias
  const filtradas = categoria === "todas"
    ? noticias
    : noticias.filter(n => n.categoria === categoria);

  // Renderiza as notícias
  container.innerHTML = `<h2 id="titulo-aba">${titulo.textContent}</h2>`;
  filtradas.forEach(n => {
    container.innerHTML += `
      <a href="${n.link}" class="link-noticia">
        <div class="noticia">
          <h3>${n.titulo}</h3>
          <div class="noticia-conteudo">
            <img src="${n.imagem}" alt="${n.titulo}">
            <p>${n.texto}</p>
          </div>
          <span class="data">${n.data}</span>
        </div>
      </a>
    `;
  });

  // Limpa campo de busca
  document.getElementById("campoBusca").value = "";
}

function buscarNoticia() {
  const termo = document.getElementById("campoBusca").value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

  const container = document.getElementById("noticias");
  const titulo = document.getElementById("titulo-aba");
  titulo.textContent = "Resultados da Busca";

  const resultados = noticias.filter(n => {
    const texto = (n.titulo + " " + n.texto)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    return texto.includes(termo);
  });

  container.innerHTML = `<h2 id="titulo-aba">${titulo.textContent}</h2>`;
  resultados.forEach(n => {
    container.innerHTML += `
      <a href="${n.link}" class="link-noticia">
        <div class="noticia">
          <h3>${n.titulo}</h3>
          <div class="noticia-conteudo">
            <img src="${n.imagem}" alt="${n.titulo}">
            <p>${n.texto}</p>
          </div>
          <span class="data">${n.data}</span>
        </div>
      </a>
    `;
  });
}

// Inicializa com todas as notícias
document.addEventListener("DOMContentLoaded", () => {
  mostrarNoticias("todas");
});