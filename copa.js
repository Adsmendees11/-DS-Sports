const dadosPorCategoria = {
  "sub11-m": {
    grupos: {
      A: [
        { nome: "Primaverense Branco", logo: "photos/primaverenseb.png" },
        { nome: "Colégio Nova Geração", logo: "photos/geracao.png" },
        { nome: "Brazukas Azul", logo: "photos/brazukasa.png" },
      ],
      B: [
        { nome: "CMDP", logo: "photos/maedivina.png" },
        { nome: "Primaverense Azul", logo: "photos/primaverensea.png" },
        { nome: "Brazukas Branco", logo: "photos/brazukasb.png" },
      ]
    },

    classificacao: {
      A: [
        { equipe: "CMDP", v: 0, e: 0, d: 0 },
        { equipe: "Primaverense Azul", v: 0, e: 0, d: 0 },
        { equipe: "Colégio Nova Geração", v: 0, e: 0, d: 0 },
      ],
      B: [
        { equipe: "Brazukas Branco", v: 0, e: 0, d: 0 },
        { equipe: "Primaverense Branco", v: 0, e: 0, d: 0 },
        { equipe: "Brazukas Azul", v: 0, e: 0, d: 0 },
      ]
    },

    artilharia: [
      { jogador: "", equipe: "", gols: 0 },
      { jogador: "", equipe: "", gols: 0 },
      { jogador: "", equipe: "", gols: 0 },
    ],

    jogos: [
      // Grupo A
      { equipeA: "Primaverense Branco", equipeB: "Brazukas Azul", placar: "" },
      { equipeA: "Colégio Nova Geração", equipeB: "Primaverense Branco", placar: "" },
      { equipeA: "Colégio Nova Geração", equipeB: "Brazukas Azul", placar: "" },

      // Grupo B
      { equipeA: "CMDP", equipeB: "Primaverense Azul", placar: "" },
      { equipeA: "CMDP", equipeB: "Brazukas Branco", placar: "" },
      { equipeA: "Primaverense Azul", equipeB: "Brazukas Branco", placar: "" },

      // Semifinais
      { equipeA: "1º Grupo A", equipeB: "2º Grupo B", placar: "" },
      { equipeA: "1º Grupo B", equipeB: "2º Grupo A", placar: "" },

      // Final
      { equipeA: "Vencedor Semi 1", equipeB: "Vencedor Semi 2", placar: "" }
    ]
  },

  "sub13-m": {
    equipes: [
      { nome: "APEC", logo: "photos/apec.png" },
      { nome: "São Cristóvão", logo: "photos/saocristovao.png" },
      { nome: "Primaverense", logo: "photos/primavera.png" },
      { nome: "Brazukas", logo: "photos/brazukas.png" },
    ],

    classificacao: [
      { equipe: "APEC", v: 0, e: 0, d: 0 },
      { equipe: "São Cristóvão", v: 0, e: 0, d: 0 },
      { equipe: "Primaverense", v: 0, e: 0, d: 0 },
      { equipe: "Brazukas", v: 0, e: 0, d: 0 },
    ],

    artilharia: [
      { jogador: "", equipe: "", gols: 0 },
      { jogador: "", equipe: "", gols: 0 },
      { jogador: "", equipe: "", gols: 0 }
    ],

    jogos: [
      // Primeiro Turno
      { equipeA: "APEC", equipeB: "São Cristóvão", placar: "" },
      { equipeA: "APEC", equipeB: "Primaverense", placar: "" },
      { equipeA: "APEC", equipeB: "Brazukas", placar: "" },
      { equipeA: "São Cristóvão", equipeB: "Primaverense", placar: "" },
      { equipeA: "São Cristóvão", equipeB: "Brazukas", placar: "" },
      { equipeA: "Primaverense", equipeB: "Brazukas", placar: "" },

      // Final
      { equipeA: "1º colocado", equipeB: "2º colocado", placar: "" }
    ]
  },

 // ...existing code...
 "sub15-m": {
  grupos: {
    A: [
      { nome: "APEC JRV", logo: "photos/apecjrv.png" },
      { nome: "Os Mata Pato", logo: "photos/matapato.png" },
      { nome: "Mainstreet Futsal", logo: "photos/mainstreet.png" },
      { nome: "Botafofo F.C", logo: "photos/botafogo.png" }
    ],
    B: [
      { nome: "PNS E.C", logo: "photos/pns.png" },
      { nome: "APEC SP", logo: "photos/apecsp.png" },
      { nome: "Errei fui mlk", logo: "photos/errei.png" }
    ]
  },

  classificacao: {
    A: [
      { equipe: "APEC JRV", v: 0, e: 0, d: 0 },
      { equipe: "Os Mata Pato", v: 0, e: 0, d: 0 },
      { equipe: "Mainstreet Futsal", v: 0, e: 0, d: 0 },
      { equipe: "Botafofo F.C", v: 0, e: 0, d: 0 }
    ],
    B: [
      { equipe: "PNS E.C", v: 0, e: 0, d: 0 },
      { equipe: "APEC SP", v: 0, e: 0, d: 0 },
      { equipe: "Errei fui mlk", v: 0, e: 0, d: 0 }
    ]
  },

  artilharia: [
    { jogador: "", equipe: "", gols: 0 },
    { jogador: "", equipe: "", gols: 0 },
    { jogador: "", equipe: "", gols: 0 }
  ],

  jogos: [
    // Confrontos na ordem definida
    { equipeA: "APEC JRV", equipeB: "Os Mata Pato", placar: "" },
    { equipeA: "Botafofo F.C", equipeB: "Mainstreet Futsal", placar: "" },
    { equipeA: "APEC SP", equipeB: "PNS E.C", placar: "" },
    { equipeA: "APEC JRV", equipeB: "Mainstreet Futsal", placar: "" },
    { equipeA: "Botafofo F.C", equipeB: "Os Mata Pato", placar: "" },
    { equipeA: "APEC SP", equipeB: "Errei fui mlk", placar: "" },
    { equipeA: "PNS E.C", equipeB: "Errei fui mlk", placar: "" },
    { equipeA: "Os Mata Pato", equipeB: "Mainstreet Futsal", placar: "" },
    { equipeA: "APEC JRV", equipeB: "Botafofo F.C", placar: "" },

    // Semifinais - placeholders
    { equipeA: "1º Grupo A", equipeB: "2º Grupo B", placar: "" },
    { equipeA: "1º Grupo B", equipeB: "2º Grupo A", placar: "" },

    // Final
    { equipeA: "Vencedor Semi 1", equipeB: "Vencedor Semi 2", placar: "" }
  ]
},
// ...existing code...

 "sub17-m": {
  grupos: {
    A: [
      { nome: "PNS E.C", logo: "photos/pns.png" },
      { nome: "Leicester PVA", logo: "photos/leicester.png" },
      { nome: "Os Mata Pato", logo: "photos/matapato.png" },
      { nome: "Os Mafioso", logo: "photos/mafioso.png" }
    ],
    B: [
      { nome: "União PVA", logo: "photos/uniao.png" },
      { nome: "APEC", logo: "photos/apec.png" },
      { nome: "Primaverense", logo: "photos/primavera.png" }
    ]
  },

  classificacao: {
    A: [
      { equipe: "PNS E.C", v: 0, e: 0, d: 0 },
      { equipe: "Leicester PVA", v: 0, e: 0, d: 0 },
      { equipe: "Os Mata Pato", v: 0, e: 0, d: 0 },
      { equipe: "Os Mafioso", v: 0, e: 0, d: 0 }
    ],
    B: [
      { equipe: "União PVA", v: 0, e: 0, d: 0 },
      { equipe: "APEC", v: 0, e: 0, d: 0 },
      { equipe: "Primaverense", v: 0, e: 0, d: 0 }
    ]
  },

  artilharia: [
    { jogador: "", equipe: "", gols: 0 },
    { jogador: "", equipe: "", gols: 0 },
    { jogador: "", equipe: "", gols: 0 }
  ],

  jogos: [
    // Grupo A (6 jogos)
    { equipeA: "PNS E.C", equipeB: "Leicester PVA", placar: "" },
    { equipeA: "Os Mata Pato", equipeB: "Os Mafioso", placar: "" },
    { equipeA: "PNS E.C", equipeB: "Os Mata Pato", placar: "" },
    { equipeA: "PNS E.C", equipeB: "Os Mafioso", placar: "" },
    { equipeA: "Leicester PVA", equipeB: "Os Mata Pato", placar: "" },
    { equipeA: "Leicester PVA", equipeB: "Os Mafioso", placar: "" },

    // Grupo B (3 jogos)
    { equipeA: "União PVA", equipeB: "APEC", placar: "" },
    { equipeA: "União PVA", equipeB: "Primaverense", placar: "" },
    { equipeA: "APEC", equipeB: "Primaverense", placar: "" },

    // Semifinais
    { equipeA: "1º Grupo A", equipeB: "2º Grupo B", placar: "" },
    { equipeA: "1º Grupo B", equipeB: "2º Grupo A", placar: "" },

    // Final
    { equipeA: "Vencedor Semi 1", equipeB: "Vencedor Semi 2", placar: "" }
  ]
},

"sub19-m": {
  equipes: [
    { nome: "União PVA", logo: "photos/uniao.png" },
    { nome: "Os Mata Pato", logo: "photos/matapato.png" },
    { nome: "Leicester PVA", logo: "photos/leicester.png" }
  ],

  classificacao: [
    { equipe: "União PVA", v: 0, e: 0, d: 0 },
    { equipe: "Os Mata Pato", v: 0, e: 0, d: 0 },
    { equipe: "Leicester PVA", v: 0, e: 0, d: 0 }
  ],

  artilharia: [
    { jogador: "", equipe: "", gols: 0 },
    { jogador: "", equipe: "", gols: 0 },
    { jogador: "", equipe: "", gols: 0 }
  ],

  jogos: [
    // Primeiro Turno
    { equipeA: "União PVA", equipeB: "Os Mata Pato", placar: "" },
    { equipeA: "União PVA", equipeB: "Leicester PVA", placar: "" },
    { equipeA: "Os Mata Pato", equipeB: "Leicester PVA", placar: "" },

    // Segundo Turno (returno)
    { equipeA: "Os Mata Pato", equipeB: "União PVA", placar: "" },
    { equipeA: "Leicester PVA", equipeB: "União PVA", placar: "" },
    { equipeA: "Leicester PVA", equipeB: "Os Mata Pato", placar: "" }
  ]
},
// ...existing code...


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

  // --- Equipes participantes ---
  if (dados.grupos) {
    // Sub-11: lista única juntando A + B
    const todasEquipes = [...dados.grupos.A, ...dados.grupos.B];
    todasEquipes.forEach((equipe) => {
      const item = document.createElement("li");
      item.innerHTML = `<img src="${equipe.logo}" alt="${equipe.nome}" class="logo-time"> ${equipe.nome}`;
      listaEquipes.appendChild(item);
    });
  } else if (dados.equipes) {
    // Sub-13 / Sub-19: lista única das equipes
    dados.equipes.forEach((equipe) => {
      const item = document.createElement("li");
      item.innerHTML = `<img src="${equipe.logo}" alt="${equipe.nome}" class="logo-time"> ${equipe.nome}`;
      listaEquipes.appendChild(item);
    });
  }

  // --- Classificação ---
  if (dados.classificacao && dados.classificacao.A && dados.classificacao.B) {
    // Sub-11: por grupos
    montarClassificacao(dados.classificacao.A, tabelaClassificacao, "Classificação - Grupo A", categoria);
    montarClassificacao(dados.classificacao.B, tabelaClassificacao, "Classificação - Grupo B", categoria);
  } else if (dados.classificacao) {
    // Sub-13 / Sub-19: geral única
    montarClassificacao(dados.classificacao, tabelaClassificacao, "Classificação - Geral", categoria);
  }

  // --- Legenda única (com quadradinho) ---
  // Remove qualquer legenda antiga no container (evita duplicações)
  tabelaClassificacao.querySelectorAll(".legenda").forEach(el => el.remove());

  const legenda = document.createElement("div");
  legenda.className = "legenda";

  if (categoria === "sub19-m") {
    legenda.innerHTML = `<span class="selecionado"></span> Campeão <small>(apenas o 1º lugar será campeão)</small>`;
  } else {
    legenda.innerHTML = `<span class="selecionado"></span> Classificados`;
  }
  tabelaClassificacao.appendChild(legenda);

  // --- Artilharia ---
  if (dados.artilharia && Array.isArray(dados.artilharia)) {
    dados.artilharia.forEach((jogador) => {
      const linha = document.createElement("tr");
      linha.innerHTML = `
        <td>${jogador.jogador}</td>
        <td>${jogador.equipe}</td>
        <td>${jogador.gols}</td>
      `;
      tabelaArtilharia.appendChild(linha);
    });
  }

  // --- Jogos ---
  if (dados.grupos) {
    // Classifica os jogos em grupos / semifinais / final mantendo a ordem original
    const groupGames = [];
    const semiGames = [];
    const finalGames = [];

    dados.jogos.forEach((jogo, idx) => {
      const a = String(jogo.equipeA || "");
      const b = String(jogo.equipeB || "");
      const isPlaceholder = /(1º|1°|2º|2°|1º colocado|2º colocado)/i;
      const isVencedor = /vencedor/i;

      if (isVencedor.test(a) || isVencedor.test(b)) {
        finalGames.push({ jogo, idx });
      } else if (isPlaceholder.test(a) || isPlaceholder.test(b)) {
        semiGames.push({ jogo, idx });
      } else {
        groupGames.push({ jogo, idx });
      }
    });

    // Renderiza fase de grupos
    const tituloGrupos = document.createElement("h3");
    tituloGrupos.textContent = "Fase de Grupos";
    blocoJogos.appendChild(tituloGrupos);
    groupGames.forEach(({ jogo, idx }) => renderizarJogo(jogo, idx, categoria));

    // Renderiza semifinais (se existirem)
    if (semiGames.length) {
      const tituloSemi = document.createElement("h3");
      tituloSemi.textContent = "Semifinais";
      blocoJogos.appendChild(tituloSemi);
      semiGames.forEach(({ jogo, idx }) => renderizarJogo(jogo, idx, categoria));
    }

    // Renderiza final (se existir)
    if (finalGames.length) {
      const tituloFinal = document.createElement("h3");
      tituloFinal.textContent = "Final";
      blocoJogos.appendChild(tituloFinal);
      finalGames.forEach(({ jogo, idx }) => renderizarJogo(jogo, idx, categoria));
    }
  } else {
    // Sub-13: Turno (6), Final (1) — mantém lógica antiga para listas simples
    const tituloTurno = document.createElement("h3");
    tituloTurno.textContent = "Turno";
    blocoJogos.appendChild(tituloTurno);
    dados.jogos.slice(0, 6).forEach((jogo, i) => renderizarJogo(jogo, i, categoria));

    const tituloFinal = document.createElement("h3");
    tituloFinal.textContent = "Final";
    blocoJogos.appendChild(tituloFinal);
    dados.jogos.slice(6, 7).forEach((jogo, i) => renderizarJogo(jogo, i + 6, categoria));
  }
}

// --- Classificação com título e cabeçalho ---
function montarClassificacao(grupoOuLista, container, titulo, categoria) {
  const tituloEl = document.createElement("h3");
  tituloEl.textContent = titulo;
  container.appendChild(tituloEl);

  const tabela = document.createElement("table");
  tabela.className = "tabela-classificacao-grupo";

  const thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
      <th>Posição</th>
      <th>Equipe</th>
      <th>V</th>
      <th>E</th>
      <th>D</th>
      <th>Pontos</th>
    </tr>
  `;
  tabela.appendChild(thead);

  const tbody = document.createElement("tbody");

  const lista = Array.isArray(grupoOuLista) ? grupoOuLista : [];
  const classificacaoOrdenada = lista
    .map(time => ({
      ...time,
      pontos: (time.v * 3) + (time.e * 1)
    }))
    .sort((a, b) => b.pontos - a.pontos);

  classificacaoOrdenada.forEach((time, index) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
      <td>${index + 1}°</td>
      <td>${time.equipe}</td>
      <td>${time.v}</td>
      <td>${time.e}</td>
      <td>${time.d}</td>
      <td>${time.pontos}</td>
    `;
    // Sub19: marca apenas o 1º colocado
    if (categoria === "sub19-m" && index === 0) {
      linha.classList.add("selecionado");
    }
    tbody.appendChild(linha);
  });

  tabela.appendChild(tbody);
  container.appendChild(tabela);
}

// --- Renderização de jogo (funciona para ambos formatos) ---
function renderizarJogo(jogo, i, categoria) {
  const bloco = document.createElement("div");
  bloco.className = "jogo";

  const resultado = (jogo.placar && jogo.placar.trim() !== "") ? jogo.placar : "X";

  const gruposOuEquipes = dadosPorCategoria[categoria].grupos
    ? dadosPorCategoria[categoria].grupos
    : dadosPorCategoria[categoria].equipes;

  const blocoHtml = `
    <div class="duelo" id="duelo-${categoria}-${i}">
      <img src="${buscarLogo(gruposOuEquipes, jogo.equipeA)}" alt="${jogo.equipeA}" class="logo-time">
      <span class="nome-time">${jogo.equipeA}</span>
      <span class="resultado">${resultado}</span>
      <span class="nome-time">${jogo.equipeB}</span>
      <img src="${buscarLogo(gruposOuEquipes, jogo.equipeB)}" alt="${jogo.equipeB}" class="logo-time">
    </div>
  `;

  bloco.innerHTML = blocoHtml;
  blocoJogos.appendChild(bloco);
}

// --- Busca de logo (aceita grupos ou lista simples) ---
function buscarLogo(gruposOuEquipes, nome) {
  let lista;
  if (Array.isArray(gruposOuEquipes)) {
    // Sub-13 / Sub-19: lista simples
    lista = gruposOuEquipes;
  } else {
    // Sub-11: objeto com A e B
    lista = [...gruposOuEquipes.A, ...gruposOuEquipes.B];
  }
  const equipe = lista.find(e => e.nome === nome);
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