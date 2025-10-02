function mostrarAba(abaId) {
  // Esconde todas as abas
  document.querySelectorAll('.conteudo-aba').forEach(sec => {
    sec.classList.remove('ativo');
  });

  // Ativa a aba selecionada
  const abaSelecionada = document.getElementById(abaId);
  abaSelecionada.classList.add('ativo');

  // Mostra todas as notícias da aba
  abaSelecionada.querySelectorAll('.noticia').forEach(noticia => {
    noticia.style.display = 'block';
  });

  // Limpa o campo de busca
  document.getElementById('campoBusca').value = '';
}

function buscarNoticia() {
  const termo = document.getElementById('campoBusca').value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

  // Ativa a aba "todas" para mostrar os resultados
  mostrarAba('todas');

  // Filtra as notícias dentro da aba "todas"
  const todasNoticias = document.querySelector('#todas');

  todasNoticias.querySelectorAll('.noticia').forEach(noticia => {
    const texto = noticia.innerText
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    noticia.style.display = texto.includes(termo) ? 'block' : 'none';
  });
}
