/*let numeros = [];

numeros[0] = prompt();
numeros[1] = prompt();
numeros[2] = prompt();
numeros[3] = prompt();
numeros[4] = 90;

for (let x =0; x < numeros.length; x++) {
    console.log(numeros[x]);
}

console.log(numeros.length);*/

//==============================================================================

/*let estados = [
    "Roraima",
    "Acre",
    "Tocantis",
    "Bahia"
];

//Ordenar o vetor por ordem alfabética
//estados.sort();

console.log(estados);

console.log( estados.indexOf("Acre") );

console.log("========================================================================");

                        //aqui retorna o numero do indice
console.log( estados [estados.indexOf("Acre") ] );
 //imprime               //dentro do colchete localiza o indice exemplo 1

                //vetor estados acha o elemento da posição 1

===============================================================================*/

let produtos = [
    "Tomate",
    "Abacaxi",
    "Cebola",
    "Salsicha de Soja",
    "mosca"
];

let cores = [
    "verde",
    "amarelo",
    "azul",
    "branco"
];

let sistemas = [
    "Android",
    "iOS",
    "macOS",
    "Linux",
    "Windows"
];

//For iterar (varrer,percorrer) as posições do vetor (array);
//produtos é o vetor
//item variável temporária que recebe as posições do vetor
/*for (item of produtos){
    console.log(item);
};*/

/*console.log(produtos.length);

//For iterar (varrer,percorrer) as posições do vetor (array);
for (let i = 0; i < produtos.length; i++){
    console.log( produtos[i] );
};

console.log("========================================================================");*/

//Atividade criar funções com os exemplos:
//esqueleto da função
//1- coloca um nome sugestivo
//2- colocar dentro da função
//3- laço para percorrer o vetor
//4- transformar a função em dinâmica passando o vetor(qualquer vetor)

function imprimeVetorProdutos(){

    for (item of produtos){
        console.log(item);
    };
};

function imprimeVetorCores(){
    for (item of cores){
        console.log(item);
    };
}

function imprimeVetorSistemas(){
    for (item of sistemas){
        console.log(item);
    };
}


//imprimeVetor(cores);
//imprimeVetor(produtos);

console.log("========================================================================");

function adicionaNoFinal(vetor, elemento){
    vetor.push(elemento);
};

adicionaNoFinal(cores, "Rosa");
imprimeVetorCores(cores);

console.log("========================================================================");

function adicionaNoInicio(vetor, elemento){
    vetor.unshift(elemento);
};

adicionaNoInicio(produtos, "Chocolate");
imprimeVetorProdutos(produtos);

console.log("========================================================================");

function RemoveNoInicio(vetor, elemento){
    vetor.shift(elemento);
};

RemoveNoInicio(sistemas);
imprimeVetorSistemas(sistemas);
