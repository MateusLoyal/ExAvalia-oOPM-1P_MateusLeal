alert('Olá, mundo! Adivinha o número em que estou a pensar!')

let Pergunta1 = prompt('Insira um número!')

let numeroDaSorte = Math.random()
numeroDaSorte = Math.floor(numeroDaSorte * 100 + 1)

if (Pergunta1 <= 0) {
    alert('Demasiado baixo')
} else if (Pergunta1 >= 101) {
    alert('Demasiado alto')
} else if (Pergunta1 = numeroDaSorte) {
    alert(`O teu número da sorte é: ${numeroDaSorte}`)
}