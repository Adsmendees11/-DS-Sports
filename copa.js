// Código para popular a tabela de classificação, artilharia e jogos possíveis
const dadosPorCategoria = {
  "sub11-m": {
    equipes: [
      { nome: "Dom Bosco FC", logo: "photos/" },
      { nome: "Primavera United", logo: "photos/primavera.png" },
      { nome: "Atlético Leste", logo: "photos/atletico.png" },
      { nome: "Juventude do Cerrado", logo: "photos/juventude.png" }
    ],
    classificacao: [
      { equipe: "Dom Bosco FC", v: 0, e: 1, d: 0 },
      { equipe: "Primavera United", v: 2, e: 1, d: 0 },
      { equipe: "Atlético Leste", v: 0, e: 0, d: 0 },
      { equipe: "Juventude do Cerrado", v: 0, e: 0, d: 0 },
    ],
    artilharia: [
      { jogador: "João Pedro", equipe: "Dom Bosco FC", gols: 4 },
      { jogador: "Lucas Silva", equipe: "Dom Bosco FC", gols: 3 },
      { jogador: "Rafael", equipe: "Primavera United", gols: 2 },
    ],
    jogos: [
      { equipeA: "Dom Bosco FC", equipeB: "Primavera United", placar: "2x2" },
      { equipeA: "Dom Bosco FC", equipeB: "Atlético Leste", placar: "" },
      { equipeA: "Dom Bosco FC", equipeB: "Juventude do Cerrado", placar: "" },
      { equipeA: "Primavera United", equipeB: "Atlético Leste", placar: "" },
      { equipeA: "Primavera United", equipeB: "Juventude do Cerrado", placar: "" },
      { equipeA: "Atlético Leste", equipeB: "Juventude do Cerrado", placar: "" }
    ]
  },
  "sub13-m": {
    equipes: [
      { nome: "Dom sebastião", logo: "photos/dom-bosco.png" },
      { nome: "Primavera United", logo: "photos/primavera.png" },
      { nome: "Atlético Leste", logo: "photos/atletico.png" },
      { nome: "Juventude do Cerrado", logo: "photos/juventude.png" }
    ],
    classificacao: [
      { equipe: "Dom Bosco FC", v: 0, e: 1, d: 0 },
      { equipe: "Primavera United", v: 2, e: 1, d: 0 },
      { equipe: "Atlético Leste", v: 0, e: 0, d: 0 },
      { equipe: "Juventude do Cerrado", v: 0, e: 0, d: 0 },
    ],
    artilharia: [
      { jogador: "João Pedro", equipe: "Dom Bosco FC", gols: 4 },
      { jogador: "Lucas Silva", equipe: "Dom Bosco FC", gols: 3 },
      { jogador: "Rafael", equipe: "Primavera United", gols: 2 },
    ],
    jogos: [
      { equipeA: "Dom Bosco FC", equipeB: "Primavera United", placar: "2x2" },
      { equipeA: "Dom Bosco FC", equipeB: "Atlético Leste", placar: "" },
      { equipeA: "Dom Bosco FC", equipeB: "Juventude do Cerrado", placar: "" },
      { equipeA: "Primavera United", equipeB: "Atlético Leste", placar: "" },
      { equipeA: "Primavera United", equipeB: "Juventude do Cerrado", placar: "" },
      { equipeA: "Atlético Leste", equipeB: "Juventude do Cerrado", placar: "" }
    ]
  },
  "sub15-m": {
    equipes: [
      { nome: "Dom sebastião", logo: "photos/dom-bosco.png" },
      { nome: "Primavera United", logo: "photos/primavera.png" },
      { nome: "Atlético Leste", logo: "photos/atletico.png" },
      { nome: "Juventude do Cerrado", logo: "photos/juventude.png" }
    ],
    classificacao: [
      { equipe: "Dom Bosco FC", v: 0, e: 1, d: 0 },
      { equipe: "Primavera United", v: 2, e: 1, d: 0 },
      { equipe: "Atlético Leste", v: 0, e: 0, d: 0 },
      { equipe: "Juventude do Cerrado", v: 0, e: 0, d: 0 },
    ],
    artilharia: [
      { jogador: "João Pedro", equipe: "Dom Bosco FC", gols: 4 },
      { jogador: "Lucas Silva", equipe: "Dom Bosco FC", gols: 3 },
      { jogador: "Rafael", equipe: "Primavera United", gols: 2 },
    ],
    jogos: [
      { equipeA: "Dom Bosco FC", equipeB: "Primavera United", placar: "2x2" },
      { equipeA: "Dom Bosco FC", equipeB: "Atlético Leste", placar: "" },
      { equipeA: "Dom Bosco FC", equipeB: "Juventude do Cerrado", placar: "" },
      { equipeA: "Primavera United", equipeB: "Atlético Leste", placar: "" },
      { equipeA: "Primavera United", equipeB: "Juventude do Cerrado", placar: "" },
      { equipeA: "Atlético Leste", equipeB: "Juventude do Cerrado", placar: "" }
    ]
  },
  "sub17-m": {
    equipes: [
      { nome: "Dom sebastião", logo: "photos/dom-bosco.png" },
      { nome: "Primavera United", logo: "photos/primavera.png" },
      { nome: "Atlético Leste", logo: "photos/atletico.png" },
      { nome: "Juventude do Cerrado", logo: "photos/juventude.png" }
    ],
    classificacao: [
      { equipe: "Dom Bosco FC", v: 0, e: 1, d: 0 },
      { equipe: "Primavera United", v: 2, e: 1, d: 0 },
      { equipe: "Atlético Leste", v: 0, e: 0, d: 0 },
      { equipe: "Juventude do Cerrado", v: 0, e: 0, d: 0 },
    ],
    artilharia: [
      { jogador: "João Pedro", equipe: "Dom Bosco FC", gols: 4 },
      { jogador: "Lucas Silva", equipe: "Dom Bosco FC", gols: 3 },
      { jogador: "Rafael", equipe: "Primavera United", gols: 2 },
    ],
    jogos: [
      { equipeA: "Dom Bosco FC", equipeB: "Primavera United", placar: "2x2" },
      { equipeA: "Dom Bosco FC", equipeB: "Atlético Leste", placar: "" },
      { equipeA: "Dom Bosco FC", equipeB: "Juventude do Cerrado", placar: "" },
      { equipeA: "Primavera United", equipeB: "Atlético Leste", placar: "" },
      { equipeA: "Primavera United", equipeB: "Juventude do Cerrado", placar: "" },
      { equipeA: "Atlético Leste", equipeB: "Juventude do Cerrado", placar: "" }
    ]
  },
  "sub19-m": {
    equipes: [
      { nome: "Dom sebastião", logo: "photos/dom-bosco.png" },
      { nome: "Primavera United", logo: "photos/primavera.png" },
      { nome: "Atlético Leste", logo: "photos/atletico.png" },
      { nome: "Juventude do Cerrado", logo: "photos/juventude.png" }
    ],
    classificacao: [
      { equipe: "Dom Bosco FC", v: 0, e: 1, d: 0 },
      { equipe: "Primavera United", v: 2, e: 1, d: 0 },
      { equipe: "Atlético Leste", v: 0, e: 0, d: 0 },
      { equipe: "Juventude do Cerrado", v: 0, e: 0, d: 0 },
    ],
    artilharia: [
      { jogador: "João Pedro", equipe: "Dom Bosco FC", gols: 4 },
      { jogador: "Lucas Silva", equipe: "Dom Bosco FC", gols: 3 },
      { jogador: "Rafael", equipe: "Primavera United", gols: 2 },
    ],
    jogos: [
      { equipeA: "Dom Bosco FC", equipeB: "Primavera United", placar: "2x2" },
      { equipeA: "Dom Bosco FC", equipeB: "Atlético Leste", placar: "" },
      { equipeA: "Dom Bosco FC", equipeB: "Juventude do Cerrado", placar: "" },
      { equipeA: "Primavera United", equipeB: "Atlético Leste", placar: "" },
      { equipeA: "Primavera United", equipeB: "Juventude do Cerrado", placar: "" },
      { equipeA: "Atlético Leste", equipeB: "Juventude do Cerrado", placar: "" }
    ]
  },
  "sub13-f": {
    equipes: [
      { nome: "Dom sebastião", logo: "photos/dom-bosco.png" },
      { nome: "Primavera United", logo: "photos/primavera.png" },
      { nome: "Atlético Leste", logo: "photos/atletico.png" },
      { nome: "Juventude do Cerrado", logo: "photos/juventude.png" }
    ],
    classificacao: [
      { equipe: "Dom Bosco FC", v: 0, e: 1, d: 0 },
      { equipe: "Primavera United", v: 2, e: 1, d: 0 },
      { equipe: "Atlético Leste", v: 0, e: 0, d: 0 },
      { equipe: "Juventude do Cerrado", v: 0, e: 0, d: 0 },
    ],
    artilharia: [
      { jogador: "João Pedro", equipe: "Dom Bosco FC", gols: 4 },
      { jogador: "Lucas Silva", equipe: "Dom Bosco FC", gols: 3 },
      { jogador: "Rafael", equipe: "Primavera United", gols: 2 },
    ],
    jogos: [
      { equipeA: "Dom Bosco FC", equipeB: "Primavera United", placar: "2x2" },
      { equipeA: "Dom Bosco FC", equipeB: "Atlético Leste", placar: "" },
      { equipeA: "Dom Bosco FC", equipeB: "Juventude do Cerrado", placar: "" },
      { equipeA: "Primavera United", equipeB: "Atlético Leste", placar: "" },
      { equipeA: "Primavera United", equipeB: "Juventude do Cerrado", placar: "" },
      { equipeA: "Atlético Leste", equipeB: "Juventude do Cerrado", placar: "" }
    ]
  },
  "Livre-f": {
    equipes: [
      { nome: "Dom sebastião", logo: "photos/dom-bosco.png" },
      { nome: "Primavera United", logo: "photos/primavera.png" },
      { nome: "Atlético Leste", logo: "photos/atletico.png" },
      { nome: "Juventude do Cerrado", logo: "photos/juventude.png" }
    ],
    classificacao: [
      { equipe: "Dom Bosco FC", v: 0, e: 1, d: 0 },
      { equipe: "Primavera United", v: 2, e: 1, d: 0 },
      { equipe: "Atlético Leste", v: 0, e: 0, d: 0 },
      { equipe: "Juventude do Cerrado", v: 0, e: 0, d: 0 },
    ],
    artilharia: [
      { jogador: "João Pedro", equipe: "Dom Bosco FC", gols: 4 },
      { jogador: "Lucas Silva", equipe: "Dom Bosco FC", gols: 3 },
      { jogador: "Rafael", equipe: "Primavera United", gols: 2 },
    ],
    jogos: [
      { equipeA: "Dom Bosco FC", equipeB: "Primavera United", placar: "2x2" },
      { equipeA: "Dom Bosco FC", equipeB: "Atlético Leste", placar: "" },
      { equipeA: "Dom Bosco FC", equipeB: "Juventude do Cerrado", placar: "" },
      { equipeA: "Primavera United", equipeB: "Atlético Leste", placar: "" },
      { equipeA: "Primavera United", equipeB: "Juventude do Cerrado", placar: "" },
      { equipeA: "Atlético Leste", equipeB: "Juventude do Cerrado", placar: "" }
    ]
  },
  "sub13-m": {
    equipes: [
      { nome: "Dom sebastião", logo: "photos/dom-bosco.png" },
      { nome: "Primavera United", logo: "photos/primavera.png" },
      { nome: "Atlético Leste", logo: "photos/atletico.png" },
      { nome: "Juventude do Cerrado", logo: "photos/juventude.png" }
    ],
    classificacao: [
      { equipe: "Dom Bosco FC", v: 0, e: 1, d: 0 },
      { equipe: "Primavera United", v: 2, e: 1, d: 0 },
      { equipe: "Atlético Leste", v: 0, e: 0, d: 0 },
      { equipe: "Juventude do Cerrado", v: 0, e: 0, d: 0 },
    ],
    artilharia: [
      { jogador: "João Pedro", equipe: "Dom Bosco FC", gols: 4 },
      { jogador: "Lucas Silva", equipe: "Dom Bosco FC", gols: 3 },
      { jogador: "Rafael", equipe: "Primavera United", gols: 2 },
    ],
    jogos: [
      { equipeA: "Dom Bosco FC", equipeB: "Primavera United", placar: "2x2" },
      { equipeA: "Dom Bosco FC", equipeB: "Atlético Leste", placar: "" },
      { equipeA: "Dom Bosco FC", equipeB: "Juventude do Cerrado", placar: "" },
      { equipeA: "Primavera United", equipeB: "Atlético Leste", placar: "" },
      { equipeA: "Primavera United", equipeB: "Juventude do Cerrado", placar: "" },
      { equipeA: "Atlético Leste", equipeB: "Juventude do Cerrado", placar: "" }
    ]
  }
};

const seletor = document.getElementById("categoria");
const listaEquipes = document.getElementById("lista-equipes");
const tabelaClassificacao = document.getElementById("tabela-classificacao");
const tabelaArtilharia = document.getElementById("tabela-artilharia");
const blocoJogos = document.getElementById("bloco-jogos");

function atualizarTabelas(categoria) {
  const dados = dadosPorCategoria[categoria];
  if (!dados) return;

  // Limpa tudo
  listaEquipes.innerHTML = "";
  tabelaClassificacao.innerHTML = "";
  tabelaArtilharia.innerHTML = "";
  blocoJogos.innerHTML = "";

  // Equipes (com logos)
  dados.equipes.forEach((equipe) => {
    const item = document.createElement("li");
    item.innerHTML = `<img src="${equipe.logo}" alt="${equipe.nome}" class="logo-time"> ${equipe.nome}`;
    listaEquipes.appendChild(item);
  });

  // Classificação (calcula pontos e ordena)
const classificacaoOrdenada = dados.classificacao
  .map(time => ({
    ...time,
    pontos: (time.v * 3) + (time.e * 1) // vitórias = 3, empates = 1
  }))
  .sort((a, b) => b.pontos - a.pontos);

classificacaoOrdenada.forEach((time, index) => {
  const linha = document.createElement("tr");
  linha.innerHTML = `
    <td>${index + 1}°</td>   <!-- posição com símbolo de ordinal -->
    <td>${time.equipe}</td>
    <td>${time.v}</td>
    <td>${time.e}</td>
    <td>${time.d}</td>
    <td>${time.pontos}</td>
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

  // Jogos possíveis
dados.jogos.forEach((jogo, i) => {
  const bloco = document.createElement("div");
  bloco.className = "jogo";
  bloco.innerHTML = `
    <div class="duelo" id="duelo-${categoria}-${i}">
      <img src="${buscarLogo(dados.equipes, jogo.equipeA)}" alt="${jogo.equipeA}" class="logo-time">
      <span class="nome-time">${jogo.equipeA}</span>
      <span class="placar" id="placar-${categoria}-${i}">Não definido</span>
      <span class="nome-time">${jogo.equipeB}</span>
      <img src="${buscarLogo(dados.equipes, jogo.equipeB)}" alt="${jogo.equipeB}" class="logo-time">
    </div>
    <button class="btn-resultado">Ver placar</button>
  `;

  // Evento do botão
  bloco.querySelector(".btn-resultado").addEventListener("click", () => {
    if (jogo.placar && jogo.placar.trim() !== "") {
      bloco.querySelector(`#placar-${categoria}-${i}`).textContent = jogo.placar;
    } else {
      bloco.querySelector(`#placar-${categoria}-${i}`).textContent = "Não definido";
    }
  });

  blocoJogos.appendChild(bloco);
});
}

// Função auxiliar para buscar logo
function buscarLogo(equipes, nome) {
  const equipe = equipes.find(e => e.nome === nome);
  return equipe ? equipe.logo : "photos/default.png";
}

// Evento de troca de categoria
seletor.addEventListener("change", (e) => {
  atualizarTabelas(e.target.value);
});

// Inicialização
window.addEventListener("DOMContentLoaded", () => {
  atualizarTabelas(seletor.value);
});