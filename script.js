const noticias = [
  {
    titulo: "Juventude tenta abandonar o campo após gol do Fluminense no Maracanã",
    imagem: "photos/fluminense-juventude.jpeg",
    texto: "Uma cena inusitada marcou o Brasileirão neste fim de semana. Durante a partida entre Fluminense e Juventude...",
    data: "17/10/2025",
    categoria: "brasileiros",
    link: "noticia-fluminense-juventude.html"
  },
  {
    titulo: "O QUE ACONTECEU COM O TIME DO SÃO PAULO EM 2025?",
    imagem: "photos/sãopaulo.photo.jpg",
    texto: "O São Paulo sem dúvidas é um dos times que sempre vem forte em todas as competições que disputa, nesse ano de 2025...",
    data: "22/10/2025",
    categoria: "brasileiros",
    link: "noticia-sãopaulo.html"
  },
  {
    titulo: "Real Madrid bate Barcelona no El Clássico",
    imagem: "photos/realmadrid-barcelona.jpg",
    texto: "Vinicius Jr se revolta após substituição em Real Madrid x Barcelona…",
    data: "26/10/2025",
    categoria: "europeus",
    link: "noticia-viniciusjr.html"
  },
  {
    titulo: "Kylian Mbappé: O próximo melhor jogador do mundo?",
    imagem: "photos/mbappe.jpeg",
    texto: "Desde sua chegada ao Real Madrid Mbappé vem mostrando que tem…",
    data: "01/11/2025",
    categoria: "europeus",
    link: "noticia-mbappe.html"
  },
  {
    titulo: "Real Madrid 4x0 Valencia: Endrick volta a ter chance na La Liga",
    imagem: "photos/endrick.jpg",
    texto: "Vinícius Júnior perdeu um pênalti… mas o Real Madrid não perdoou o Valencia...",
    data: "02/11/2025",
    categoria: "europeus",
    link: "noticia-endrick.html"
  },
  {
    titulo: "Vitor Roque convocado para a seleção brasileira",
    imagem: "photos/vitor-roque.webp",
    texto: "Vitor Roque, jovem promessa do futebol brasileiro, foi convocado para a seleção principal do Brasil...",
    data: "05/11/2025",
    categoria: "brasileiros",
    link: "noticia-roque.html"
  },
   {
    titulo: "Inicio da Copa Dom Bosco 2025",
    imagem: "photos/logocopa.jpg",
    texto: "A tão esperada Copa Dom Bosco 2025 está prestes a começar...",
    data: "02/11/2025",
    categoria: "copa",
    link: "noticia-dombosco.html"
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
  } else if (categoria === "copa") {
    titulo.textContent = "Notícias - Copa Dom Bosco";
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


document.addEventListener("DOMContentLoaded", () => {
  mostrarNoticias("todas");
});

  const imagens = document.querySelectorAll('.carousel-track img');

  imagens.forEach(img => {
    img.addEventListener('click', () => {
      const confirmar = confirm(`Você se interessou por um produto? Deseja falar com nosso atendimento via WhatsApp?`);

      if (confirmar) {
        const numero = '5566996912511'; // coloque aqui o número do WhatsApp com DDD e país
        const mensagem = encodeURIComponent(`Olá! Tenho interesse em um produto.`);
        const link = `https://wa.me/${numero}?text=${mensagem}`;
        window.open(link, '_blank');
      }
    });
  });

// Código para popular a tabela de classificação e artilharia'
const dadosPorCategoria = {
  "sub11-m": {
    equipes: ["Dom Bosco FC", "Primavera United", "Atlético Leste", "Juventude do Cerrado"],
    classificacao: [
      { equipe: "Dom Bosco FC", v: 3, e: 1, d: 0 },
      { equipe: "Primavera United", v: 2, e: 1, d: 1 },
      { equipe: "Atlético Leste", v: 1, e: 1, d: 2 },
      { equipe: "Juventude do Cerrado", v: 0, e: 1, d: 3 },
    ],
    artilharia: [
      { jogador: "João Pedro", equipe: "Dom Bosco FC", gols: 4 },
      { jogador: "Lucas Silva", equipe: "Dom Bosco FC", gols: 3 },
      { jogador: "Rafael", equipe: "Primavera United", gols: 2 },
    ],
    noticias: [
      {
        imagem: "photos/",
        titulo: "Dom Bosco FC vence Primavera United por 2x1",
        texto: "João Pedro e Lucas Silva marcaram para Dom Bosco. Rafael fez o gol da Primavera."
      },
      {
        imagem: "atletico-leste.jpg",
        titulo: "Atlético Leste empata com Juventude em 1x1",
        texto: "Carlos Mendes marcou para o Atlético e Bruno Rocha empatou para Juventude."
      }
    ]
  },

  "sub13-m": {
  equipes: [],
  classificacao: [],
  artilharia: [],
  noticias: []
},

"sub15-m": {
  equipes: [],
  classificacao: [],
  artilharia: [],
  noticias: []
},

"sub17-m": {
  equipes: [],
  classificacao: [],
  artilharia: [],
  noticias: []
},

"sub19-m": {
  equipes: [],
  classificacao: [],
  artilharia: [],
  noticias: []
},


  "sub13-f": {
    equipes: ["Estrelas do Cerrado", "Meninas da Primavera", "Fênix FC"],
    classificacao: [
      { equipe: "Estrelas do Cerrado", v: 2, e: 0, d: 0 },
      { equipe: "Meninas da Primavera", v: 1, e: 0, d: 1 },
      { equipe: "Fênix FC", v: 0, e: 0, d: 2 },
    ],
    artilharia: [
      { jogador: "Ana Clara", equipe: "Estrelas do Cerrado", gols: 3 },
      { jogador: "Marina", equipe: "Meninas da Primavera", gols: 2 },
      { jogador: "Beatriz", equipe: "Fênix FC", gols: 1 },
    ],
    noticias: [
      {
        imagem: "estrelas-cerrado.jpg",
        titulo: "Estrelas do Cerrado vencem Fênix FC por 3x0",
        texto: "Ana Clara brilhou com 2 gols e Marina completou o placar."
      }
    ]
  },

  "sub15-f": {
  equipes: [],
  classificacao: [],
  artilharia: [],
  noticias: []
},

"livre-f": {
  equipes: [],
  classificacao: [],
  artilharia: [],
  noticias: []
},
  // Adicione outras categorias aqui seguindo o mesmo padrão
};

const seletor = document.getElementById("categoria");
const listaEquipes = document.getElementById("lista-equipes");
const tabelaClassificacao = document.getElementById("tabela-classificacao");
const tabelaArtilharia = document.getElementById("tabela-artilharia");
const blocoNoticias = document.getElementById("bloco-noticias");

function atualizarTabelas(categoria) {
  const dados = dadosPorCategoria[categoria];
  if (!dados) return;

  // Limpa tudo
  listaEquipes.innerHTML = "";
  tabelaClassificacao.innerHTML = "";
  tabelaArtilharia.innerHTML = "";
  blocoNoticias.innerHTML = "";

  // Equipes
  dados.equipes.forEach((equipe) => {
    const item = document.createElement("li");
    item.textContent = equipe;
    listaEquipes.appendChild(item);
  });

  // Classificação
  dados.classificacao.forEach((time, index) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
      <td>${index + 1}</td>
      <td>${time.equipe}</td>
      <td>${time.v}</td>
      <td>${time.e}</td>
      <td>${time.d}</td>
    `;
    tabelaClassificacao.appendChild(linha);
  });

  // Artilharia
  dados.artilharia.forEach((jogador) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
      <td>${jogador.jogador}</td>
      <td>${jogador.equipe}</td>
      <td>${jogador.gols}</td>
    `;
    tabelaArtilharia.appendChild(linha);
  });

  // Notícias
  dados.noticias.forEach((noticia) => {
    const bloco = document.createElement("div");
    bloco.className = "noticia";
    bloco.innerHTML = `
      <img src="${noticia.imagem}" alt="${noticia.titulo}" />
      <div class="conteudo-noticia">
        <h3>${noticia.titulo}</h3>
        <p>${noticia.texto}</p>
      </div>
    `;
    blocoNoticias.appendChild(bloco);
  });
}

// Evento de troca de categoria
seletor.addEventListener("change", (e) => {
  atualizarTabelas(e.target.value);
});

// Inicialização
window.addEventListener("DOMContentLoaded", () => {
  atualizarTabelas(seletor.value);
});