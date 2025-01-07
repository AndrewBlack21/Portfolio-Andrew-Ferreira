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

// formulario

class FormSubmit {
    constructor(settings) {
    this.settings = settings;
    this.form = document.querySelector(settings.form);
    this.formButton = document.querySelector(settings.button);
    if (this.form) {
        this.url = this.form.getAttribute("action");
    }
      this.sendForm = this.sendForm.bind(this); // Vincula o contexto
    }

    displayMessage(message, isSuccess = true) {
    this.form.innerHTML = `<h1 class="${isSuccess ? 'success' : 'error'}">${message}</h1>`;
    }

    getFormData() {
      const formData = new FormData(this.form); // Coleta os dados do formulário
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    return formObject;
    }

    async sendForm(event) {
      event.preventDefault(); // Impede o envio padrão
    this.formButton.disabled = true;
    this.formButton.innerText = "Enviando...";
    try {
        const response = await fetch(this.url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(this.getFormData()),
        });

        if (response.ok) {
        this.displayMessage("Mensagem enviada com sucesso!", true);
        } else {
        throw new Error("Falha no envio");
        }
    } catch (error) {
        this.displayMessage("Não foi possível enviar sua mensagem. Tente novamente.", false);
        console.error(error);
    } finally {
        this.formButton.disabled = false;
        this.formButton.innerText = "Enviar";
    }
    }

    init() {
    if (this.form) {
        this.form.addEventListener("submit", this.sendForm);
    }
    return this;
    }
}

const formHandler = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
});

formHandler.init();