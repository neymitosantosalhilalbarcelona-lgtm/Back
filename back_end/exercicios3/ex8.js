// Importa o módulo readline, usado para ler dados do teclado no terminal
const readline = require('readline');

// Cria a interface de leitura e escrita (entrada e saída padrão)
const rl = readline.createInterface({
  input: process.stdin,   // Entrada: teclado
  output: process.stdout  // Saída: terminal
});

// Exibe o título da calculadora
console.log("---Contagem---");

// Solicita o primeiro número ao usuário
rl.question('Digite o número que irá começar:', (num1) => {
rl.question('Digite o número que irá parar: ', (num2) => {
rl.question('Digite o incremento: ', (num3) => {

for (let i = num1; i >= num2; i-=num3) {
    // i++ é o incremento que evita o loop infinito
    console.log(`Contagem: ${i}`);
}
if(num1 < num2) {
   for (let i = num2; i >= num1; i-=num3) {
    // i++ é o incremento que evita o loop infinito
    console.log(`Contagem: ${i}`);
} 
}else{
    console.log(`Contagem invalida!`)
}
      rl.close();
    });
});
 });
