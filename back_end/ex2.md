1. O que é Node.js?

É um ambiente de execução que permite rodar JavaScript fora do navegador (no servidor).
Não é linguagem porque usa JavaScript — ele apenas fornece o ambiente para executá-la.

2. Diferença entre Node.js e JavaScript no navegador

Node.js roda no servidor; navegador roda no cliente.

Node.js acessa sistema de arquivos e banco de dados; navegador acessa DOM.

3. O que é o V8 Engine?

É o motor do Google Chrome que executa JavaScript.
O Node.js usa o V8 para interpretar e executar o código JS.

4. O que é I/O não bloqueante?

Operações (arquivos, banco, rede) não travam o programa enquanto executam.
Isso melhora o desempenho porque permite atender várias requisições ao mesmo tempo.

5. O que é Event Loop?

É o mecanismo que gerencia operações assíncronas.
Ele executa tarefas quando ficam prontas, sem bloquear o fluxo principal.

6. O que são módulos?

São arquivos reutilizáveis com funções/códigos.

Internos: já vêm com o Node.js (ex: fs).

Externos: instalados via npm (ex: Express).

Do desenvolvedor: criados no próprio projeto.

7. Para que serve o package.json?

Gerencia o projeto. Pode conter:

Nome e versão

Dependências

Scripts

Informações do projeto

8. O que é npm?

É o gerenciador de pacotes do Node.js.
Serve para instalar e gerenciar bibliotecas.

9. O que é API REST?

É uma API baseada em HTTP (GET, POST, PUT, DELETE).
Node.js pode criá-la usando frameworks como Express.

10. Vantagens e desvantagens

Vantagens:
✔ Alto desempenho
✔ Boa escalabilidade

Desvantagens:
✖ Não ideal para tarefas muito pesadas (CPU)
✖ Código pode ficar complexo com muitas operações assíncronas
