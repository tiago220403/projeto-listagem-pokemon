// obtendo elemento botão de alterar o tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");
// obtendo elemento body
const body = document.querySelector("body");
// obtendo elemento imagem
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

// adicionando evento para clique no botão de alterar o tema
botaoAlterarTema.addEventListener("click", () => {
    //  remover a classe modo-escuro do body
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")
    // alternar a classe do body
    body.classList.toggle("modo-escuro")

    if(modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTemaa.setAttribute("src","./src/imagens/sun.png")
    } else {
        // troca imagem do sol para lua
        imagemBotaoTrocaDeTemaa.setAttribute("src","./src/imagens/moon.png")
    }
});