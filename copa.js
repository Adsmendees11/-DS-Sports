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