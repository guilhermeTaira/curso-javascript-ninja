/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var a = ['a','b','c',1,2];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArray(arrei){
    return arrei;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornaArray(a)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function funcao2(arrayValores, numero){
    return arrayValores[numero];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var novoArray = [1,'a',NaN, undefined, false]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
funcao2(novoArray,0);
funcao2(novoArray,1);
funcao2(novoArray,2);
funcao2(novoArray,3);
funcao2(novoArray,4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nome){
    var livro = {
        'html 5':{
            quantidadePaginas: 20,
            autor: 'eu',
            editora: 'google'
        },
        'doti net':{
            quantidadePaginas: 30,
            autor: 'tu',
            editora: 'bing'
        },
        'se charp':{
            quantidadePaginas: 70,
            autor: 'eles',
            editora: 'yahoo'
        },
    }

    return !nome ? livro : livro[nome]; 
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('o livro html5 tem ' + book('html 5').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('o autor do livro html5 é ' + book('html 5').autor);
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('o livro se charp foi publicado pela editora' + book('se charp').editora);
