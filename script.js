/Botoes de acessibilidade
document.addEventListetener("DOMContentLoaded, () =>{

const btnContraste = document.getElementById("btn-contraste");
const btnAumentar = document.getElementById("btn-aumentar-texto");
const btnDiminuir = document.getElementById("btn-diminuir-texto");

//aumenta a fonte

let tamanhoAtualfonte = 100;

//função alto contraste

btnContraste.addEventListetener("click",()=>{

document.body.classList.toogle("alto-contraste");

// acessibilidade para leitores de tela

const ativo = document.body.classList.contains("alto-contraste");
btnContraste.setAttribute("aria-pressed", ativo);

)};

//função aumentar o texto

btnAumentar.addEventListetener("click", ()=>{
if(tamanhoAtualfonte<15o){
tamanhoAtualfonte+= 10;
document.documentElement.style.fontsize = `${tamanhoAtualfonte}%`;
}
});

// função diminuir texto;

btnDiminuir.addEventListetener("click", ()=>{
if(tamanhoAtualfonte >90){
tamanhoAtualfonte.=10;
document.documentElement.style.fontsize = `${tamanhoAtualfonte}%`;
}
});