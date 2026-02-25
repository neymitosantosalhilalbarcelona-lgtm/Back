const readline = require('readline/promises');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function calcular() {
  try {

    const n1 = parseFloat(await rl.question('Primeiro número: '));
    const op = await rl.question('Operador (+, -, *, /, **, %, sqrt, ++, --): ');

    let n2;

    if (op !== 'sqrt') {
      n2 = parseFloat(await rl.question('Segundo número: '));
    }

    const operacoes = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => b !== 0 ? a / b : "Divisão por zero!",
      '**': (a, b) => a ** b,
      '%': (a, b) => a % b,
      'sqrt': (a) => a >= 0 ? Math.sqrt(a) : "Raiz de número negativo!"
    };

    // 🔹 Se for ++ ou --, faz apenas a contagem
    if (op === '++') {
      console.log("\nContagem crescente:");
      for (let i = n1; i <= n2; i++) {
        console.log(`Contagem: ${i}`);
      }
    } 
    
    else if (op === '--') {
      console.log("\nContagem regressiva:");
      for (let i = n1; i >= n2; i--) {
        console.log(`Contagem: ${i}`);
      }
    } 
    
    else {
      const resultado = operacoes[op]
        ? operacoes[op](n1, n2)
        : "Operador inválido";

      console.log(`\nResultado: ${resultado}`);
    }

  } catch (err) {
    console.error("Ocorreu um erro na leitura.");
  } finally {
    rl.close();
  }
}

calcular();
