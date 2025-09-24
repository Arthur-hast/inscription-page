// Selecionar elementos
const root = document.documentElement;
const btn = document.getElementById("btnTema");
const ano = document.getElementById("ano");

// Preencher ano atual
ano.textContent = new Date().getFullYear()

// Tema light/dark 
btn.addEventListener("click", () => {
    const escuro = root.getAttribute("date-tema") === 'escuro'

    if (escuro) {
        root.removeAttribute("date-tema")
    } else {
        root.setAttribute("date-tema", "escuro")
    }
})