// + Adição
// - Subtração
// * Multiplicação
// / Divisão
// % módulo
// ++ Incremento
// -- Decremento

var a = 19;
var b = 15;

var adicao = a + b;
var subtracao = a - b;
var mult = a * b;
var divisao = a / b;
var sobrasDaDivisao = a % b;

console.log(adicao);
console.log(subtracao);
console.log(mult);
console.log(divisao);
console.log(sobrasDaDivisao);

a = 30;
b = a--; //variavel 'a' é decrementado depois de ser armazenado
b = --a; //variavel 'a' é decrementado antes de ser armazenado

console.log(b);
console.log(a);