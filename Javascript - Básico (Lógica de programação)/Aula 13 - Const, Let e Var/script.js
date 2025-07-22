//variaveis do tipo var, são variaveis globais

//variaveis do tipo let e const só existem dentro do bloco que é atribuida.

// variavel do tipo const ("Constant") pode ser modificada, porém não pode ser reatribuida. ou seja, podemos injetar/adicionar valores a essa variavel.

var numero1 = 4;
const numero3 = [4];

numero3.push(7);

{
    let numero2 = 5;

    console.log(numero2)
}

console.log(numero1)
// console.log(numero2) --> Error - Porque o let esta dentro de outro bloco
console.log(numero3)