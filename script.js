// Alternar Abas das Categorias
function abrirCategoria(evt, nomeAba) {
  const abas = document.querySelectorAll('.conteudo-aba');
  abas.forEach(aba => aba.classList.remove('active'));

  const botoes = document.querySelectorAll('.aba-btn');
  botoes.forEach(botao => botao.classList.remove('active'));

  const abaSelecionada = document.getElementById(nomeAba);
  if (abaSelecionada) {
    abaSelecionada.classList.add('active');
  }

  evt.currentTarget.classList.add('active');
}

// Filtro Inteligente na Busca
function filtrarRituais() {
  const input = document.getElementById('input-busca').value.toLowerCase();
  const cards = document.querySelectorAll('.card-ritual');
  const abas = document.querySelectorAll('.conteudo-aba');

  if (input.trim() !== '') {
    // Exibe todas as abas durante a busca dinâmica
    abas.forEach(aba => aba.classList.add('active'));

    cards.forEach(card => {
      const titulo = card.querySelector('h3').textContent.toLowerCase();
      const tipo = card.querySelector('.tipo-ritual').textContent.toLowerCase();
      const desc = card.querySelector('.desc-ritual').textContent.toLowerCase();

      if (titulo.includes(input) || tipo.includes(input) || desc.includes(input)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  } else {
    // Restaura o comportamento de abas original
    cards.forEach(card => card.style.display = 'flex');
    const botoes = document.querySelectorAll('.aba-btn');
    
    botoes.forEach((btn, index) => {
      if (btn.classList.contains('active')) {
        const categorias = ['prosperidade', 'amor', 'saude', 'protecao', 'oraculos'];
        restaurarAba(categorias[index]);
      }
    });
  }
}

function restaurarAba(nomeAba) {
  const abas = document.querySelectorAll('.conteudo-aba');
  abas.forEach(aba => aba.classList.remove('active'));
  const abaSelecionada = document.getElementById(nomeAba);
  if (abaSelecionada) abaSelecionada.classList.add('active');
}