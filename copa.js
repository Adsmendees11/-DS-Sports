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
      { equipe: "Brazukas Azul", v: 2, e: 0, d: 0 },
      { equipe: "Colégio Nova Geração", v: 1, e: 0, d: 1 },
      { equipe: "Primaverense Branco", v: 0, e: 0, d: 2 },
    ],
    B: [
      { equipe: "Primaverense Azul", v: 2, e: 0, d: 0 },
      { equipe: "CMDP", v: 1, e: 0, d: 1 },
      { equipe: "Brazukas Branco", v: 0, e: 0, d: 2 },
    ]
  },

  artilharia: [
    { jogador: "", equipe: "", gols: 0 },
    { jogador: "", equipe: "", gols: 0 },
    { jogador: "", equipe: "", gols: 0 },
  ],

  jogos: [
    { fase: "grupos", equipeA: "Primaverense Branco", equipeB: "Brazukas Azul", placar: "0 X 3" },
    { fase: "grupos", equipeA: "Colégio Nova Geração", equipeB: "Primaverense Branco", placar: "4 X 1" },
    { fase: "grupos", equipeA: "Colégio Nova Geração", equipeB: "Brazukas Azul", placar: "2 X 3" },
    { fase: "grupos", equipeA: "CMDP", equipeB: "Primaverense Azul", placar: "0 X 4" },
    { fase: "grupos", equipeA: "CMDP", equipeB: "Brazukas Branco", placar: "5 X 0" },
    { fase: "grupos", equipeA: "Primaverense Azul", equipeB: "Brazukas Branco", placar: "1 X 0" },

    { fase: "semi", equipeA: "Brazukas Azul", equipeB: "CMDP", placar: "" },
    { fase: "semi", equipeA: "Primaverense Azul", equipeB: "Colégio Nova Geração", placar: "" },

    { fase: "final", equipeA: "Vencedor Semi 1", equipeB: "Vencedor Semi 2", placar: "" }
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
    { equipe: "APEC", v: 1, e: 0, d: 2 },
    { equipe: "São Cristóvão", v: 3, e: 0, d: 0 },
    { equipe: "Primaverense", v: 2, e: 0, d: 1 },
    { equipe: "Brazukas", v: 0, e: 0, d: 3 },
  ],

  artilharia: [
    { jogador: "", equipe: "", gols: 0 },
    { jogador: "", equipe: "", gols: 0 },
    { jogador: "", equipe: "", gols: 0 }
  ],

  jogos: [
    { fase: "grupos", equipeA: "APEC", equipeB: "São Cristóvão", placar: "1 X 2" },
    { fase: "grupos", equipeA: "APEC", equipeB: "Primaverense", placar: "0 X 5" },
    { fase: "grupos", equipeA: "APEC", equipeB: "Brazukas", placar: "2 X 1" },
    { fase: "grupos", equipeA: "São Cristóvão", equipeB: "Primaverense", placar: "2 X 1" },
    { fase: "grupos", equipeA: "São Cristóvão", equipeB: "Brazukas", placar: "1 X 0" },
    { fase: "grupos", equipeA: "Primaverense", equipeB: "Brazukas", placar: "3 X 0" },

    { fase: "final", equipeA: "São Cristóvão", equipeB: "Primaverense", placar: "" }
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
      { equipe: "Os Mata Pato", v: 3, e: 0, d: 0 },
      { equipe: "Mainstreet Futsal", v: 1, e: 1, d: 1 },
      { equipe: "APEC JRV", v: 0, e: 1, d: 1 },
      { equipe: "Botafofo F.C", v: 0, e: 0, d: 2 }
    ],
    B: [
      { equipe: "Errei fui mlk", v: 1, e: 1, d: 0 },
      { equipe: "PNS E.C", v: 1, e: 1, d: 0 },
      { equipe: "APEC SP", v: 0, e: 0, d: 2 }
    ]
  },

  artilharia: [
    { jogador: "", equipe: "", gols: 0 },
    { jogador: "", equipe: "", gols: 0 },
    { jogador: "", equipe: "", gols: 0 }
  ],

  jogos: [
    { fase: "grupos", equipeA: "APEC JRV", equipeB: "Os Mata Pato", placar: "1 X 2" },
    { fase: "grupos", equipeA: "Botafofo F.C", equipeB: "Mainstreet Futsal", placar: "1 X 4" },
    { fase: "grupos", equipeA: "APEC SP", equipeB: "PNS E.C", placar: "0 X 2" },
    { fase: "grupos", equipeA: "APEC JRV", equipeB: "Mainstreet Futsal", placar: "0 X 0" },
    { fase: "grupos", equipeA: "Botafofo F.C", equipeB: "Os Mata Pato", placar: "0 X 6" },
    { fase: "grupos", equipeA: "APEC SP", equipeB: "Errei fui mlk", placar: "0 X 3" },
    { fase: "grupos", equipeA: "PNS E.C", equipeB: "Errei fui mlk", placar: "1 X 1" },
    { fase: "grupos", equipeA: "Os Mata Pato", equipeB: "Mainstreet Futsal", placar: "6 X 1" },
    { fase: "grupos", equipeA: "APEC JRV", equipeB: "Botafofo F.C", placar: "" },

    { fase: "semi", equipeA: "Os Mata Pato", equipeB: "PNS E.C", placar: "" },
    { fase: "semi", equipeA: "Errei fui mlk", equipeB: "(APEC JRV OU Mainstreet Futsal)", placar: "" },

    { fase: "final", equipeA: "Vencedor Semi 1", equipeB: "Vencedor Semi 2", placar: "" }
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
      { equipe: "Leicester PVA", v: 2, e: 0, d: 0 },
      { equipe: "Os Mata Pato", v: 2, e: 0, d: 0 },
      { equipe: "PNS E.C", v: 1, e: 0, d: 2 },
      { equipe: "Os Mafioso", v: 0, e: 0, d: 3 }
    ],
    B: [
      { equipe: "Primaverense", v: 2, e: 0, d: 0 },
      { equipe: "União PVA", v: 0, e: 1, d: 1 },
      { equipe: "APEC", v: 0, e: 1, d: 1 }
    ]
  },

  artilharia: [
    { jogador: "", equipe: "", gols: 0 },
    { jogador: "", equipe: "", gols: 0 },
    { jogador: "", equipe: "", gols: 0 }
  ],

  jogos: [
    // Grupo A
    { fase: "grupos", equipeA: "PNS E.C", equipeB: "Leicester PVA", placar: "0 X 1" },
    { fase: "grupos", equipeA: "Os Mata Pato", equipeB: "Os Mafioso", placar: "1 X 0" },
    { fase: "grupos", equipeA: "PNS E.C", equipeB: "Os Mata Pato", placar: "0 X 3" },
    { fase: "grupos", equipeA: "PNS E.C", equipeB: "Os Mafioso", placar: "3 X 0" },
    { fase: "grupos", equipeA: "Leicester PVA", equipeB: "Os Mata Pato", placar: "" },
    { fase: "grupos", equipeA: "Leicester PVA", equipeB: "Os Mafioso", placar: "1 X 0" },

    // Grupo B
    { fase: "grupos", equipeA: "União PVA", equipeB: "APEC", placar: "2 X 2" },
    { fase: "grupos", equipeA: "União PVA", equipeB: "Primaverense", placar: "0 X 3" },
    { fase: "grupos", equipeA: "APEC", equipeB: "Primaverense", placar: "1 X 2" },

    // Semifinais
    { fase: "semi", equipeA: "Primaverense", equipeB: "(Leicester PVA OU Os Mata Pato)", placar: "" },
    { fase: "semi", equipeA: "(APEC OU União PVA)", equipeB: "2º Grupo A", placar: "" },

    // Final
    { fase: "final", equipeA: "Vencedor Semi 1", equipeB: "Vencedor Semi 2", placar: "" }
  ]
},

"sub19-m": {
  equipes: [
    { nome: "União PVA", logo: "photos/uniao.png" },
    { nome: "Os Mata Pato", logo: "photos/matapato.png" },
    { nome: "Leicester PVA", logo: "photos/leicester.png" }
  ],

  classificacao: [
    { equipe: "União PVA", v: 1, e: 1, d: 0, pontos: 4 },
    { equipe: "Os Mata Pato", v: 0, e: 1, d: 0, pontos: 1 },
    { equipe: "Leicester PVA", v: 0, e: 0, d: 1, pontos: 0 }
  ],

  artilharia: [
    { jogador: "", equipe: "", gols: 0 },
    { jogador: "", equipe: "", gols: 0 },
    { jogador: "", equipe: "", gols: 0 }
  ],

  jogos: [
    // Primeiro Turno
    { fase: "grupos", equipeA: "União PVA", equipeB: "Os Mata Pato", placar: "0 X 0" },
    { fase: "grupos", equipeA: "União PVA", equipeB: "Leicester PVA", placar: "3 X 2" },
    { fase: "grupos", equipeA: "Os Mata Pato", equipeB: "Leicester PVA", placar: "" },

    // Segundo Turno (returno)
    { fase: "grupos", equipeA: "Os Mata Pato", equipeB: "União PVA", placar: "" },
    { fase: "grupos", equipeA: "Leicester PVA", equipeB: "União PVA", placar: "" },
    { fase: "grupos", equipeA: "Leicester PVA", equipeB: "Os Mata Pato", placar: "" }
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
    const todasEquipes = [...dados.grupos.A, ...dados.grupos.B];
    todasEquipes.forEach((equipe) => {
      const item = document.createElement("li");
      item.innerHTML = `<img src="${equipe.logo}" alt="${equipe.nome}" class="logo-time"> ${equipe.nome}`;
      listaEquipes.appendChild(item);
    });
  } else if (dados.equipes) {
    dados.equipes.forEach((equipe) => {
      const item = document.createElement("li");
      item.innerHTML = `<img src="${equipe.logo}" alt="${equipe.nome}" class="logo-time"> ${equipe.nome}`;
      listaEquipes.appendChild(item);
    });
  }

  // --- Classificação ---
  if (dados.classificacao && dados.classificacao.A && dados.classificacao.B) {
    montarClassificacao(dados.classificacao.A, tabelaClassificacao, "Classificação - Grupo A", categoria);
    montarClassificacao(dados.classificacao.B, tabelaClassificacao, "Classificação - Grupo B", categoria);
  } else if (dados.classificacao) {
    montarClassificacao(dados.classificacao, tabelaClassificacao, "Classificação - Geral", categoria);
  }

  // --- Legenda ---
  tabelaClassificacao.querySelectorAll(".legenda").forEach(el => el.remove());
  const legenda = document.createElement("div");
  legenda.className = "legenda";
  legenda.innerHTML = (categoria === "sub19-m")
    ? `<span class="selecionado"></span> Campeão <small>(apenas o 1º lugar será campeão)</small>`
    : `<span class="selecionado"></span> Classificados`;
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
  if (dados.jogos) {
    const fases = { grupos: [], semi: [], final: [] };

    dados.jogos.forEach((jogo, idx) => {
      if (jogo.fase === "final") {
        fases.final.push({ jogo, idx });
      } else if (jogo.fase === "semi") {
        fases.semi.push({ jogo, idx });
      } else {
        fases.grupos.push({ jogo, idx });
      }
    });

    // Renderiza fase de grupos
    if (fases.grupos.length) {
      const tituloGrupos = document.createElement("h3");
      tituloGrupos.textContent = "Fase de Grupos";
      blocoJogos.appendChild(tituloGrupos);
      fases.grupos.forEach(({ jogo, idx }) => renderizarJogo(jogo, idx, categoria));
    }

    // Renderiza semifinais
    if (fases.semi.length) {
      const tituloSemi = document.createElement("h3");
      tituloSemi.textContent = "Semifinais";
      blocoJogos.appendChild(tituloSemi);
      fases.semi.forEach(({ jogo, idx }) => renderizarJogo(jogo, idx, categoria));
    }

    // Renderiza final
    if (fases.final.length) {
      const tituloFinal = document.createElement("h3");
      tituloFinal.textContent = "Final";
      blocoJogos.appendChild(tituloFinal);
      fases.final.forEach(({ jogo, idx }) => renderizarJogo(jogo, idx, categoria));
    }
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
    .map(time => ({ ...time, pontos: (time.v * 3) + (time.e * 1) }))
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
    if (categoria === "sub19-m" && index === 0) {
      linha.classList.add("selecionado");
    }
    tbody.appendChild(linha);
  });

  tabela.appendChild(tbody);
  container.appendChild(tabela);
}

// --- Renderização de jogo ---
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