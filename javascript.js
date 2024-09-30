// Adicionar imagens nas habilidades 
const habilidades = [
    { descricao: "HTML5", arquivo: "html.logo.png" },
    { descricao: "CSS3", arquivo: "css.logo.png" },
    { descricao: "JavaScript", arquivo: "js.logo.png" },
    { descricao: "Github", arquivo: "github.logo.png" },
    { descricao: "Git", arquivo: "git.logo.png" },
    { descricao: "Bootstrap", arquivo: "boostrap.png" },
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

// Adicionar um botao para dispositivos mobile 

document.querySelector('.toggle-menu').addEventListener('click',function(){
    document.querySelector('header nav ul').classList.toggle('active');
})

