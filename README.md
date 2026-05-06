# Sistema de Gerenciamento de Flashcards
INTEGRANTES:
MARCO AURÉLIO MORO FILHO
PEDRO GABRIEL BUENO VALGAS
CAIO MIGUEL MARTINS CARMONA PEREIRA


Projeto desenvolvido em JavaScript com Node.js para gerenciamento de flashcards e baralhos diretamente pelo terminal.

O sistema permite criar, listar, buscar, atualizar e remover flashcards, além de organizar os cards por baralhos de estudo.

## Funcionalidades

- Criar novos flashcards
- Buscar flashcards por pergunta
- Atualizar flashcards existentes
- Remover flashcards
- Criar novos baralhos
- Listar todos os baralhos
- Listar todos os flashcards
- Buscar flashcards por baralho
- Atualizar baralhos
- Remover baralhos

## Tecnologias utilizadas

- JavaScript
- Node.js
- Prompt Sync

## Estrutura do projeto

```bash
SistemadeGerenciamentodeFlashcards/
│
├── bank/
│   ├── bancoBaralhos.js
│   └── bancoFlashcards.js
│
├── create/
│   ├── adicionarBaralho.js
│   └── adicionarFlashcard.js
│
├── delete/
│   ├── removerBaralho.js
│   └── removerFlashcard.js
│
├── read/
│   ├── listarBaralho.js
│   └── listarFlashcards.js
│
├── search/
│   ├── buscarPorBaralho.js
│   └── buscarPorPergunta.js
│
├── update/
│   ├── atualizarBaralho.js
│   └── atualizarFlashcard.js
│
├── menu.js
├── package.json
└── README.md
Como executar o projeto
1. Clone o repositório
git clone https://github.com/MarcoAurelioMoroFilho/SistemadeGerenciamentodeFlashcards.git
2. Acesse a pasta do projeto
cd SistemadeGerenciamentodeFlashcards
3. Instale as dependências
npm install

Caso a dependência prompt-sync não seja instalada automaticamente, execute:

npm install prompt-sync
4. Execute o sistema
node menu.js
Como usar

Ao executar o projeto, será exibido um menu no terminal com as opções disponíveis:

1 - Criar um flashcard novo
2 - Acessar flashcards
3 - Atualizar/Modificar flashcards
4 - Deletar flashcards
5 - Listar por baralho
6 - Criar baralho
7 - Listar todos os flashcards
8 - Listar baralhos
9 - Atualizar baralho
10 - Deletar baralho
11 - Sair

Basta digitar o número da opção desejada e seguir as instruções exibidas no terminal.

Exemplos de baralhos

O sistema já possui alguns baralhos cadastrados, como:

Matemática
JavaScript
História
Filosofia
Geografia
Biologia
Química
Exemplos de flashcards

Exemplo de flashcard cadastrado:

{
  id: 1,
  pergunta: "Quanto é 3x9?",
  resposta: "27",
  idBaralho: 1
}

Cada flashcard possui:

id: identificador único do flashcard
pergunta: pergunta do flashcard
resposta: resposta do flashcard
idBaralho: identificador do baralho ao qual o flashcard pertence
Objetivo do projeto

O objetivo deste projeto é praticar conceitos fundamentais de JavaScript, como:

Modularização de arquivos
Arrays e objetos
Funções
Estrutura de menus
Entrada de dados pelo terminal
Operações de CRUD
Organização de código em pastas
Autor

Desenvolvido por Marco Aurélio Moro Filho.

Licença

Este projeto está sob a licença ISC.


