const n1Text = prompt ('Digite o primeiro número');
const n1 = Number (n1Text)

const n2Text = prompt ('Digite o segundo número');
const n2 = Number (n2Text)

const n3Text = prompt ('Digite o terceiro número');
const n3 = Number (n3Text)

if (n1 > n2 && n1 > n3) {

    console.log (`O maior número digitado foi: ${n1}`)

} else if (n2 > n3 && n2 > n1) {

    console.log (`O maior número digitado foi: ${n2}`)

} else {
    console.log (`O maior número digitado foi: ${n3} `)
}





