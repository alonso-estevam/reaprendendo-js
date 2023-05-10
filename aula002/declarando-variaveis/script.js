// Instruções são chamadas de declarações e são separadas por ponto e vírgula
console.log("Isso é uma instrução/declaração");

// Declarando uma variável
var x; // nesse ponto, está undefined
console.log(x);

// Inicializando a variável
x = 1;
console.log(x);

// Nomes de variáveis são identificadores e seguem regras:
// deve começar com uma letra, underline(_) ou cifrão ($)
let _identificador = "Válido";
let $identificador = "Válido";
let identificador = "Válido também!";

/* Há três palavras-chave para declarar variáveis:
    - var -> escopo global
    - let -> escopo local
    - const -> escopo local e não pode ser reatribuída
*/

/* VAR
Variáveis de var podem ser declaradas de novo e atualizadas.
Isso significa que é possível fazer o seguinte dentro do mesmo escopo e não gerar um erro:
*/
var global = "global";
console.log(global);

var global = "geral"; // JS aceita
console.log(global);

/* LET
let pode ser atualizado, mas não declarado novamente:
*/
let local = "local";
console.log(local);

// Dá erro: Uncaught SyntaxError: Identifier 'local' has already been declared
// let local = "outro local"; // JS não aceita

/*
ATENÇÃO:
Diferente de var, que é inicializado como undefined, a palavra-chave let não é inicializada. Assim, se você tentar usar uma variável let antes de sua declaração, terá um Reference Error.
*/
console.log(nova);
let nova = "nova";
// Uncaught ReferenceError: Cannot access 'nova' before initialization

/* CONST
Não pode ser atualizado nem declarado novamente.
Isso significa que o valor de uma variável declarada com const se mantém o mesmo dentro do escopo.
const precisa ser inicializada durante a declaração.
 */
