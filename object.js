//let fruta = "Maça";  // CRIAÇÃO VARIAVEL
//
//let frutas = ["maça", "banana", "uva"]; //criação arrey
//
//let pessoa2 = {
//    nome: "João",
//    idade: 30,
//    profissao: "Desenvolvedor"
//}

//-------------------------------------------------------------------------------
//Exemplo de objeto dentro de objeto

//onst pessoa = {
//   nome: "João",
//   idade: 30,
//   endereco: {
//     rua: "Rua das Flores",
//     numero: 123,
//     cidade: "São Paulo",
//     estado: "SP"
//   }
// };
  
  // Acessando propriedades do objeto 'endereco'
 //console.log(pessoa.nome);          // João
 //console.log(pessoa.endereco.rua);  // Rua das Flores
 //console.log(pessoa.endereco.cidade); // São Paulo

  //arrey de objetos

 //const pessoas = [
 //  {
 //    nome: "Ana",
 //    idade: 28,
 //    profissao: "Engenheira"
 //  },
 //  {
 //    nome: "Carlos",
 //    idade: 35,
 //    profissao: "Professor"
 //  },
 //  {
 //    nome: "Maria",
 //    idade: 22,
 //    profissao: "Designer"
 //  }
 //];
  
  // Acessando os objetos no array
 //console.log(pessoas[0].nome); // Ana
 //console.log(pessoas[1].idade); // 35
 //console.log(pessoas[2].profissao); // Designer

  //arreys de arreys
  //exemplo cada filieal tem 3 vendas: frutas, bosas, canetas

  //vendaslojas = [
  //  [2000 , 3000 , 4000] , 
  //  [400 , 500 , 1000]
  //]
  //  console.log("As vendas de bolsas da primeira loja foram: " + vendaslojas[0][1])
  //  console.log("As vendas de canetas da segunda loja foram: " + vendaslojas[1][2])
  
//objeto contendo varios objetos
//    const empresa = {
//      funcionario1: { nome: "Ana", idade: 28, cargo: "Engenheira" },
//      funcionario2: { nome: "Carlos", idade: 35, cargo: "Professor" },
//      funcionario3: { nome: "Maria", idade: 22, cargo: "Designer" }
//    };
//    
//    // Acessando os objetos dentro do objeto 'empresa'
//    console.log(empresa.funcionario1.nome); // Ana       //usando notção ponto
//    console.log(empresa.funcionario2.cargo); // Professor
//    console.log(empresa.funcionario3.idade); // 22
//
//
//    console.log(empresa.funcionario3["nome"]);  //usando  notação colchetes
//
//
//    empresa.funcionario3.idade = 23;  //alterando o valor de um objto
//    console.log(empresa.funcionario3.idade);

//-------------------------------------------------------------------------

//const pessoa = {
//  nome: "Ana",
//  idade: 25
//};
//
//
//
//
//
//
//// Adicionando o objeto 'endereco' depois
//pessoa.endereco = {
//  rua: "Avenida Central",
//  numero: 456,
//  cidade: "Rio de Janeiro",
//  estado: "RJ"
//};
//
//console.log(pessoa.endereco.cidade); // Rio de Janeiro
//
//
////---------------------------------------------------------------
////Adicionando um novo objeto usando o push()
//
//const pessoas = [
//  {
//    nome: "Ana",
//    idade: 28,
//    profissao: "Engenheira"
//  },
//  {
//    nome: "Carlos",
//    idade: 35,
//    profissao: "Professor"
//  },
//];
//pessoas.push({
//  nome: "Pedro",
//  idade: 40,
//  profissao: "Médico"
//});
//
//console.log("\n\n---" + pessoas[2].nome + "---"); // Pedro

//-------------------------------------
//console.log("\n\n-------------")


//usando delet para remover um elemento do objeto
//const empresa = {
//  nome: "Tech Solutions",
//  fundacao: 2010,
//  endereco: {
//    rua: "Rua das Flores",
//    numero: 123,
//    cidade: "São Paulo",
//    estado: "SP"
//  }
//};

// Removendo o objeto 'endereco'
//elete empresa.endereco;
//
//onsole.log(empresa);
/*
Saída:
{
  nome: "Tech Solutions",
  fundacao: 2010
}
*/

//-----------------------------------------------
//console.log("\n\n-------------")
//
//
//const pessoa5 = {
//  nome: "João",
//  idade: 30
//};
//
//const novoEndereco = {
//  endereco: {
//    rua: "Rua das Palmeiras",
//    numero: 456,
//    cidade: "Rio de Janeiro"
//  }
//};

// Mesclando o novo objeto 'endereco' no objeto 'pessoa'
//Object.assign(pessoa5, novoEndereco);

//console.log(pessoa5);
/*
Saída:
{
  nome: "João",
  idade: 30,
  endereco: {
    rua: "Rua das Palmeiras",
    numero: 456,
    cidade: "Rio de Janeiro"
  }
}
*/

//-------------------
//console.log("\n\n-------------")
//
//const person = {
//  nome: 'John',
//  idade: 30,
//  cidade: 'New York',
//  estado: 'New york',
//  pais: 'USA'
//};
//const chaves = Object.keys(person);//cria arrey com as chaves
//const valores = Object.values(person);//cria um arrey cm os valores
//
//console.log(chaves[1]); 
//console.log("\n\n-------------");
//
//chaves.forEach(chave => {  console.log(chave)});//imprime as chaves do arrey
//console.log("------------------");
//valores.forEach(valor => {console.log(valor)});//imprime os valores do arrey



//---------------------------------------
//console.log("-------------\n");
//
//pessoa.email = "joao@email.com";
//console.log(pessoa); // { nome: 'João', idade: 30, email: 'joao@email.com' }


//----------------

//let pessoa = {
//  nome: "João",
//  idade: 30,
//};
//console.log("nome" in pessoa); // true
//console.log("sobrenome" in pessoa); // false
//
//array = [1,2,3,4];
//console.log("\n------------\n", 5 in array)
//
//console.log(pessoa.hasOwnProperty("idade")); // true

//--------------------------------------------
//console.log("-------------\n");
//
//let pessoa = {
//  nome: "João",
//  idade: 30,
//  profissao: "Desenvolvedor"
//};
//for (let chave in pessoa) {
//  console.log(chave + ": " + pessoa[chave]);
//}


//----------------------

