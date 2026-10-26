/*
var= Permite que o valor seja atualizado em qualquer momento do código.
let= Permite que o valor altere somente quando esta fora do bloco de código
const= Não permite que o valor seja alterado


let nome = "vinícius" // String tem que acompanhar aspas ""
let idade = 16; // Número não precisa ter aspas.

console.log(nome);
console.log(idade);

{  //Tudo que está entre chaves {} é um bloco de código
let nome = "João";
let idade = 16;

console.log(nome);
console.log(idade);
}

console.log(nome)

let curso = "";
console.log(curso)

*/

function cadastrar(){
    let nome = document.getElementById("nome").value; //value atríbui o valor do id para varíavel

    let idade = document.getElementById("idade").value;

    let curso = document.getElementById("curso").value;

    if(nome == "" || idade == "" || curso == "") {
     
        alert("cadastro inválido");
     }

    else{

    alert("cadastro realizado com sucesso")
    document.getElementById("resultado").innerHTML =
    "Nome do aluno é " + nome
     + "<br> idade:" + idade + "anos."
     + "<br> Curso: " + curso;

     document.querySelector(".descricao").textContent =
     "informações do aluno";

  //display= none serve para ocultar um elemento html.
    document.getElementById("nome").style.display = "none";
    document.getElementById("idade").style.display = "none";
    document.getElementById("curso").style.display = "none";
    document.getElementById("cadastro").style.display = "none";

    //display = block serve para exibir um elemento html

    document.getElementById("resultado").style.display = "block"
    document.getElementById("novoAluno").style.display = "block"

    }
}


/*
 || = ou
alerta = é usado para dar um aviso
para o usuário em um caixa no navegador.

if (se) = caso seja verdadeiro a condição.
else (senão) = caso seja falso a condição.

= sinal de atribuição de valor.

== sinal de comparação entre
dois elementos ou valores.

+ concatenar (juntar informações).

*/
