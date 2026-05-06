import PromptSync from "prompt-sync";
import buscarperguntas from "./search/buscarPorPergunta.js"
import buscarID from "./search/buscarPorBaralho.js"
import adicionarBaralho from "./create/adicionarBaralho.js"
import adicionarFlashcard from "./create/adicionarFlashcard.js"
import atualizarFlashcard from "./update/atualizarFlashcard.js"
import atualizarBaralho from "./update/atualizarBaralho.js"
import removerFlashcard from "./delete/removerFlashcard.js"
import listarFlashcard from "./read/listarFlashcards.js";
import listarBaralhos from "./read/listarBaralho.js";
import removerBaralho from "./delete/removerBaralho.js";

const prompt = PromptSync()

let option =""

do {console.log("1-Criar um flashcard novo")
console.log("2-Acessar flashcards")
console.log("3-Atualizar/Modificar flashcards")
console.log("4-Deletar flashcards")
console.log("5-Listar por baralho")
console.log("6-Criar baralho")
console.log("7-Listar todos os flashcards")
console.log("8-Listar baralhos")
console.log("9-Atualizar baralho")
console.log("10-Deletar baralho")
console.log("11-Sair")
    
option = prompt("Escolha a opção: ")
console.log(option);
switch (option) {
    case "1":
        adicionarFlashcard();
        break;

    case "2":
         
    buscarperguntas();
        break;

    case "3":
        atualizarFlashcard(); 
        break;

    case "4":
           
    removerFlashcard(); 
        break;

    case "5":
       
            buscarID();
        break;

    case "6":
        adicionarBaralho();
        break;

    case "7":
        listarFlashcard();
        break;

    case "8":
         
    listarBaralhos();
        break;

    case "9":
        atualizarBaralho();
        break;

    case "10":
        removerBaralho();
        break;

    case "11":
        console.log("Saindo do programa...");
        break;

    default:
        console.log("Opção inválida!");
}

} while (option!=="11");
