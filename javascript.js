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

const habilidades = [
    { descricao: "HTML5", arquivo: "html.logo.png" },
    { descricao: "CSS3", arquivo: "css.logo.png" },
    { descricao: "JavaScript", arquivo: "js.logo.png" },
    { descricao: "Github", arquivo: "github.logo.png" },
    { descricao: "Git", arquivo: "git.logo.png" },
    { descricao: "Em aprendizado", arquivo: "coming_soon.png" },
    { descricao: "Em aprendizado", arquivo: "coming_soon.png" },
    { descricao: "Em aprendizado", arquivo: "coming_soon.png" },
];

const habilidadesSection = document.getElementById("habilidades");

habilidades.forEach(habilidade => {
    const habilidadeDiv = document.createElement("div");
    habilidadeDiv.classList.add("habilidade");
    habilidadeDiv.setAttribute("data-descricao", habilidade.descricao);

    const img = document.createElement("img");
    img.src = `imagens/${habilidade.arquivo}`;
    img.alt = habilidade.descricao;

    habilidadeDiv.appendChild(img);
    habilidadesSection.appendChild(habilidadeDiv);
});

document.querySelector('.toggle-menu').addEventListener('click',function(){
    document.querySelector('header nav ul').classList.toggle('active');
})

