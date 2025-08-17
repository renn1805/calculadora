let number = ''
let resultado = 0
const armazemDeNumeros = document.querySelector('.armazemDeNumeros')
function ArmazenarNumero() {
    armazemDeNumeros.textContent = resultado
    conteinerResultado.textContent = ''

}

function Soma(numCaracteres) {
    for (let i = numCaracteres - 1; i >= 0; i--) {
        if (conteinerResultado.textContent[i] != ' ') {
            number += conteinerResultado.textContent[i]
        } else {
            break
        }
    }
    number = number.split('').reverse().join('')
    resultado += parseInt(number)
    // console.log(resultado)
    number = ''
    ArmazenarNumero()
}

function Sub(numCaracteres) {
    for (let i = numCaracteres - 1; i >= 0; i--) {
        if (conteinerResultado.textContent[i] != ' ') {
            number += conteinerResultado.textContent[i]
        } else {
            break
        }
    }
    number = number.split('').reverse().join('')
    resultado += parseInt(number)
    // console.log(resultado)
    number = ''
    ArmazenarNumero()

}