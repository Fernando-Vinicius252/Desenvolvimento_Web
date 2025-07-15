// && e
// || ou
// ! Negativo

// ------------------------- && -----------------------
var a = true;
var b = true;

var c = a && b; // verifica se as duas variaveis são verdadeiras

console.log(c);



//  ------------------------- || -----------------------
var idade =30;

var meno10 = idade <= 10;
var maior65 = idade >= 65;

var gratuidade = meno10 || maior65; // verifica se uma das duas variaveis são verdadeiras.

console.log(idade);

console.log("Maior que 65", maior65);
console.log("Menor que 10", meno10);

console.log("tem direito a gratuidade", gratuidade);



// ------------------------- ! -----------------------

var idade = 15;

var maior20 = idade >=20;
var menor20 = !maior20;

console.log("Maior que vinte", maior20);
console.log("Menor que vinte", menor20);

console.log(!false)