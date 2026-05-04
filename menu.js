import PromptSync from "prompt-sync";
import flashcards from "bancodedados.js"
import buscarperguntas from "buscadeperguntas.js"
import buscarID from "buscarID.js"
import baralhos from "flashcards.js"
import adicionarbaralho from "adicionarBaralho.js"
import adicionarFlashcard from "adicionarFlashcard.js"
import criarFlashcard from "create.js"
const prompt = PromptSync()

let option =""

do {console.log("1-Criar um flashcard novo")
console.log("2-Acessar flashcards")
console.log("3-Atualizar/Modificar flashcards")
console.log("4-Deletar flashcards")
console.log("5-Listar por baralho")
console.log("6-Listar todos os flashcards")
console.log("7-Sair")
    
option = prompt("Escolha a opção")

} while (option==="7");
