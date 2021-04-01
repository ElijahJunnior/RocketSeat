
/* number to string convertion and string to number convertion

    let numericValue = 14.7;
    let stringText = String(numericValue);

    console.log(numericValue);
    console.log(stringText);


    let stringText = '14.7';
    let numericValue = Number(stringText);

    console.log(stringText);
    console.log(numericValue);

*/

/* FUNÇOES UTEIS

// contando os caracteres de uma variavel string

let text = 'Texto de exemplo';

console.log(text.length)


// fixando o numero de casas decimais de um valor numerico

let numVal = 15.77890989;

console.log(numVal.toFixed(2));


// alterando um determinado caractere

let textVal = '15.78';

console.log(textVal.replace('.', ','));


// Transformando todos os caracteres em maiusculo

let text = 'Texto de exemplo';

console.log(text.toUpperCase());


// Transformando todos os caracteres em minusculo

let text = 'TEXTO DE Exemplo';

console.log(text.toLowerCase());


// Retorna um valor booleano indicando se uma frase especifica
    esta contida em outra. Essa função diferencia caracteres
    maiúsculos  de minúsculos.

let text = 'Texto de exemplo para teste da função includes';

console.log(text.includes('Texto de exemplo'));


// Transforma um texto em um novo Array dividindo-o usando um
    determinado caractere com base.

let text = 'Pedro, Thiago, João';

console.log(text.split(', '));


// Transformando um array em uma string separando os item
    por um determinado valor.

let listaNome = ['Pedro', 'Thiago', 'João'];

console.log(listaNome.join(', '));

// Criando um Array com construtor

var listaNomes = new Array('Pedro', 'Thiago', 'João');


// Criando um Array com construtor informando somento o comprimento

var listaVazia = new Array(10);


// Contando a quantidade de elementos de um Array

var listaNomes = new Array('Pedro', 'Thiago', 'João');

console.log(listaNomes.length)


// Adicionando um elemento no final de um Array

var listaNomes = new Array('Pedro', 'Thiago');

listaNomes.push('João')


// Adicionando um elemento no final de um Array

var listaNomes = new Array('Thiago', 'João');

listaNomes.unshift('Pedro');


// Removendo um elemento do final de um Array

var listaNomes = new Array('Pedro', 'Thiago', 'João', 'João2');

listaNomes.pop();


// Removendo um elemento do início de um Array

var listaNomes = new Array('Pedro2', 'Pedro', 'Thiago', 'João');

listaNomes.shift();


// Criar um novo Array. Deve ser informado a posição
   do primeiro e do ultimo elemento. Não remove os
   elementos da lista antiga.

let listaNomesGrande = new Array('Pedro2', 'Pedro', 'Thiago', 'João', 'João2');

let listaNomes = listaNomesGrande.slice(1, 4);


// Criar um novo Array partindo de em elemento
   e trazendo uma quantidade especifica de elementos.
   Os elementos que forem inseridos na nova
   lista serão removidos da antiga.

let listaNomesGrande = new Array('Pedro2', 'Pedro', 'Thiago', 'João', 'João2');

let listaNomes = listaNomesGrande.splice(1, 3);


// Busca o índice de um determinado elemento de um Array.

let listaNomes = new Array('Pedro', 'Thiago', 'João');

console.log(listaNomes.indexOf('Thiago'));


*/