import PromptSync from "prompt-sync";
import flashcards from "./bancodedados.js"
import buscarperguntas from "./buscadeperguntas.js"
import buscarID from "./buscarID.js"
import baralhos from "./flashcards"
import adicionarbaralho from "./adicionarBaralho.js"
import adicionarFlashcard from "./adicionarFlashcard.js"
import criarFlashcard from "./create.js"
import atualizarFlashcard from "./atualizarFlashcard.js"
import atualizarBaralho from "./atualizarBaralho.js"
import deletarFlashcard from "./deletarFlashcard.js"
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
switch (option) {
    case "1":
        criarFlashcard();
        break;

    case "2":
        buscarperguntas();
        break;

    case "3":
        atualizarFlashcard(); 
        break;

    case "4":
        deletarFlashcard(); 
        break;

    case "5":
        buscarID();
        break;

    case "6":
        console.log(flashcards);
        break;

    case "7":
        console.log("Saindo...");
        break;

    default:
        console.log("Opção inválida!");
}

} while (option!=="7");
