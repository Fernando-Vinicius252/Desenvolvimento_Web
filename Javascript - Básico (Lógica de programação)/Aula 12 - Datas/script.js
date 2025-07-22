//Date é um obejeto que contém metodos

// var d = new Date(year, month, day, hours, minutes, seconds, millseconds);

// var a = new Date(aaaa, m(0-11), dd);

// Data minima padrão: Wed Dec 31 1969 21:00:00 GMT-0300 (Horário Padrão de Brasília)

var a = new Date(); //Data atual
var b = new Date(0); //Data minima padrão
var c = new Date(2018, 1, 12);
var d = new Date(1000 * 60 * 60 * 24); //milisegundos a partir da data minima padrão
var e = new Date("sep 05 2017 23:25");
var f = new Date("02 05 2017 16:25:02");
var g = new Date("05/25/1999"); // 05-25-1999

console.log(g);
console.log(g.getFullYear());
console.log(g.getDate());
console.log(g.getDay());

/*
metodo "getDay()" pega os dias da semanas numerados de 0 a 6:
Domingo - 0
segunda - 1
Terça   - 2
Quarta  - 3
Quinta  - 4
Sexta   - 5
Sabado  - 6
*/

var dias = ["Dom","Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]

console.log(dias[g.getDay()]);

console.log(f);
console.log(f.getHours());
console.log(f.getMinutes());
console.log(f.getSeconds());
console.log(f.getMilliseconds());
console.log(f.getTime()) // retorna o valor de milisegundos a partir da data minima padrão

//usando os metodos "Set" você defini uma nova data modificando os valores da data definida anteriormente

console.log(f.setDate(27)) //modifica o dia
console.log(f);

console.log(f.setFullYear(2018)) //modifica o dia
console.log(f);

console.log(f.setFullYear(2018)) //modifica o dia
console.log(f);

