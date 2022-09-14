const idadeText = prompt ('Digite sua idade');
const idade = Number (idadeText)

if (idade >= 10 && idade <= 14) {

    document.write('você pertence a categoria Infantil')

} else if ( idade >= 15 && idade <= 17 ) {

    document.write ('você pertence a categoria juvenil')
}
else if (idade >= 18 && idade <= 25){
    
    document.write ('você pertence a categoria adulta')
}



