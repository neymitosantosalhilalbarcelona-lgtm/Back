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
rl.question('Digite o número inteiro e positivo: ', (num1) => {
// Iteração simples de 0 a 4
for (let i = 0; i <= num1; i++) {
    // i++ é o incremento que evita o loop infinito
    console.log(`Contagem: ${i}`);
}
console.log('Acabou!')
      rl.close();
    });
