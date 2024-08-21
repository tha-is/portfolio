const $html = document.querySelector('html');
const $checkbox = document.querySelector('#switch');

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode');
})

const button1 = document.querySelector('#button1');
const text = document.querySelector('#text');

function testeButton(){
    button1.innerText = "Parabéns, o teste deu certo!"
    text.innerText = "Uhuuuu"
    button1.onclick = inicialButton;
}

button1.onclick = testeButton; // estado inicial do botão

function inicialButton(){
    button1.innerText = "Clique aqui!"
    text.innerText = "Testando botões"
    button1.onclick = testeButton;
}
