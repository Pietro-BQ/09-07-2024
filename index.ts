import { log } from "console"

// tipos de variaveis:
const variavel1 // variavel constante
let variavel2 // variavel mutavel
var variavel3 // variavel global obs: pouco utilizado
// Conceito de local e Global

const nome = 'João'  //Variavel constante não permite trocar valor
let namel = 'Batista' //Variavel mutavel permite trocar valor
var name = 'Batista' //Variavel global permite trocar valor
nome0 = 'Pedro'
nome1 = 'João'

function funcao0 () {
  const test0 = 'teste0'// varivel constante local.
  return {test0 = 'teste1'}
}

function funcao1 (){
  const test0 = 'teste0'// varivel constante local.
  return {test0 = 'teste1'}
}

// Codicionais

if(0 < 2){
  console.log('0 é menor que 2')
}

if(0 < -2){
  console.log('0 é menor que -2')
} else {
  console.log('0 não é menor que -2')
}

if(0 < -2){
  console.log('false')
} else if(0 < 2){

  console.log('verdadeiro')
} else {
  console,log('Else verdadeiro')
}
