//? um array que serve para mapear todos os botês de numeros
const numeros = [
  document.querySelector("#numero1"),
  document.querySelector("#numero2"),
  document.querySelector("#numero3"),
  document.querySelector("#numero4"),
  document.querySelector("#numero5"),
  document.querySelector("#numero6"),
  document.querySelector("#numero7"),
  document.querySelector("#numero8"),
  document.querySelector("#numero9"),
  document.querySelector("#numero0"),
];

//? uma constante que marca o conteiner pai, usado para mudar as bordas quando da erro
const conteiner = document.querySelector(".conteiner");

//? constante que marca o conteiner onde vai parar as operações
const conteinerResultado = document.querySelector(".conteinerResultado");
conteinerResultado.textContent = '' //?atribui o valor inicial dele como nada

//? serve para contar os sinais de operação, usei para marcar quantos sinais ja foram colocados
let contadorOperacao = 0;

//? passa por todos os itens do arry numeros e adiciona um evento para cada
numeros.forEach((botao) => {
  //? adiciona um listener para cada botão de numero, ele checa o click de cada um
  botao.addEventListener("click", (e /*e server para mostrar o evento que disparaou*/) => {
    conteinerResultado.textContent +=
      e.target/*target busca a origem do evento, ou seja, oque o causou*/.textContent;
    contadorOperacao = 0;
    conteinerResultado.style.border = "none";
    conteiner.style.border = "none";

  });
});

//? uma constante que marca o botão de soma da calculadora
const soma = document.querySelector(".soma");

//?adiciona um listener a esse botão
soma.addEventListener("click", (e) => {
  //? esse primeiro if, regula se tem realmente algo antes do sinal de operação, assim marcando erro se não houver
  if ((conteinerResultado.textContent == '') || (contadorOperacao != 0)) {
    erroEscrita()
  } else {
    Soma(conteinerResultado.textContent.length)
    conteinerResultado.textContent += " " + e.target.textContent + " ";
    contadorOperacao++;
    acertoEscrita()
  }
});

//? marca o botão de subtração
const subtracao = document.querySelector(".subtracao");

//? adiciona um listener ao botão acima
subtracao.addEventListener("click", (e) => {
  if ((conteinerResultado.textContent == '') || (contadorOperacao != 0)) {
    erroEscrita()
  }
  else {
    conteinerResultado.textContent += " " + e.target.textContent + " ";
    contadorOperacao++;
    acertoEscrita()
  }
  Sub(conteinerResultado.textContent.length)
});

//? marca o botão de divisão
const divisao = document.querySelector(".divisao");

//? adiciona um listener ao botão acima
divisao.addEventListener("click", (e) => {
  if ((conteinerResultado.textContent == '') || (contadorOperacao != 0)) {
    erroEscrita()
  } else {
    conteinerResultado.textContent += " " + e.target.textContent + " ";
    contadorOperacao++;
    acertoEscrita()
  }
});

//? constante que marca o botão de multiplicação
const multiplicacao = document.querySelector(".multiplicacao");

//? adiciona um listener ao botão marcado
multiplicacao.addEventListener("click", (e) => {
  if (conteinerResultado.textContent == "") {
    erroEscrita()

  } else if (contadorOperacao != 0) {
    erroEscrita()

  } else {

    conteinerResultado.textContent += " · ";
    contadorOperacao++;
    acertoEscrita()

  }
});

//? uma constante que marca o bortão de deletar
const botaoDelete = document.querySelector(".delete");

//? adiciona um listener ao botão de deletar
botaoDelete.addEventListener("click", () => {
  //? ele verifica se a ultima modificação da conta foi um operador, e se for apaga o operador e seus espaços, se não apaga apenas um numero
  if (contadorOperacao != 0) {
    conteinerResultado.textContent = conteinerResultado.textContent.slice(0, -3);
  } else {
    conteinerResultado.textContent = conteinerResultado.textContent.slice(0, -1);
  }
  contadorOperacao = 0
  acertoEscrita()
});

//? uma constante que marca o bortão de apagar tudo
const apagaTudo = document.querySelector(".apagaTudo");

//? uma constante que marca o bortão de apagar tudo
apagaTudo.addEventListener("click", () => {
  //? esse if verifica se à algo na caixa se operações, se não tiver ele apaga até o armazem de numeros
  if (conteinerResultado.textContent == "") {
    armazemDeNumeros.textContent = ''
  }
  conteinerResultado.textContent = "";
  acertoEscrita()
  resultado = 0
  contadorOperacao = 0
});

//? funcition criada para quando der erro na escrita do usuario
function erroEscrita() {
  conteinerResultado.style.border = "2px solid rgba(255, 0, 0, 0.539)";
  conteiner.style.border = "2px solid rgba(255, 0, 0, 0.539)";
}

//? function criada para quando um evendo der certo
function acertoEscrita() {
  conteinerResultado.style.border = "none";
  conteiner.style.border = "none";
}

