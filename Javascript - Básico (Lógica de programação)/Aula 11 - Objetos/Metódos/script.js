function calcMedia (n1, n2){
        return (this.notas[0] + this.notas[1]) /2;
    }

var aluno = {
    nome: "Igor",
    notas: [7,8],

    media: calcMedia
}

var aluno1 = {
    nome: "João",
    notas: [6,8],

    media: calcMedia
}

console.log(aluno.nome)
console.log(aluno.media())


console.log(aluno1.nome)
console.log(aluno1.media())