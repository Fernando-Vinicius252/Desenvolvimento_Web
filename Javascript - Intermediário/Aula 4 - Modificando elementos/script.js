console.log(document);

/* ------------- executar via console no navegador -------------

let p1 = document.getElementById("p1") // atribui a variavel 'p1' o elemento que contem o id = "p1" dentro do document.

----------------------------------------------------------------

p1.innerHTML = "Novo conteúdo" //atribui a variavel 'p1' uma nova sintaxe HTML internamente no elemento que possui o id = "p1" dentro do document. 

p1.innerText = "conteúdo mais novo" //atribui a variavel 'p1' o texto vísivel (respeitando estilo) dentro do elemento que possui o id = "p1" no document.

p1.textContent = "Mais novo ainda" //atribui a variavel 'p1' um texto bruto (desconsiderando formatações) dentro do elemento que possui o id = "p1" no document.

---------------------------------------------------------------

p1.className = "" // modifica a class atribuindo nenhum valor a ela.

let meuAtt = p1.getAttribute("meuAtt") //atribui o valor do atributo "MeuAtt" contido no elemento da variavel p1.

meuAtt //Chama o valor da variavel diretamente.


---------- setAttribute(atributo, nome_do_atributo) ----------
 //defini ou modifica o atributo existente.


p1.setAttribute("meuAtt", "Outro nome") //modifica o atributo existente "meuAtt" contido no elemento da variavel p1.

p1.setAttribute("novoAtt", "Qualquer coisa") // difini um novo atributo "novoAtt" ao elemento da variavel p1.

*/