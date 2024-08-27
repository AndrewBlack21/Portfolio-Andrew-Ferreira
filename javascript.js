document.getElementById('verMais').addEventListener('click', function() {
  const projetos = document.querySelectorAll('.projeto.hidden');
  
  projetos.forEach(function(projeto) {
      // Se o projeto estiver oculto, mostre-o; caso contrário, oculte-o novamente
      if (projeto.style.display === 'none' || projeto.style.display === '') {
          projeto.style.display = 'block';
      } else {
          projeto.style.display = 'none';
      }
  });

  // Alterna o texto do botão entre "Ver mais" e "Ver menos"
  if (this.textContent === 'Ver mais') {
      this.textContent = 'Ver menos';
  } else {
      this.textContent = 'Ver mais';
  }
});
