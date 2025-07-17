// ----------------- String e suas propriedades -----------------

var str = 'Valor qualquer' + " " + "Outro texto"
// str += "outro texto"
console.log(str)

var numero = 8
var str = 'Valor qualquer' + numero
console.log(str)

var numero = "8" * 2
var str = 'Valor qualquer ' * 2 //Error Nan(Not a Number)
console.log(numero)
console.log(str)

// ----------------- tranformando Strings em numeros -----------------

var a = "3.5";
var b = "5";

var c = parseInt (a + b);
console.log(c)

var c = parseFloat (a + b);
console.log(c)

