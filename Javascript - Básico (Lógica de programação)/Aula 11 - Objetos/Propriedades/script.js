// ---------------- Primeira maneira ----------------

var aluno = { 
    nome:"igor", 
    notas: [7.5, 5.0]
}

var novaProp = "sobrenome";

aluno.matricula = 12354

aluno[novaProp] = "Oliveira";

console.log(aluno);

// ---------------- Segunda maneira ----------------

var aluno2 = new Object();

aluno2.nome = "Igor";
aluno2.notas = [8, 9];

console.log(aluno2)