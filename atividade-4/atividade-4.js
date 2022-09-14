const numeroText = prompt ('Digite um número');
const numero = Number (numeroText)

if (numero % 2 == 0) {
    document.write(`O numero é par, a raiz quadrada desse numero é: ${Math.sqrt(numero)}`);
} else {
    document.write(`O número é ímpar e a potência do número é: ${Math.pow(numero,2)}`);
}