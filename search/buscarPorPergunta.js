
import flashcards from "../bank/bancoFlashcards.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync()

function buscarperguntas() {
const pergunta1 = prompt("Digite a palavra chave").trim()
return flashcards.filter(flashcards => flashcards.pergunta.includes(pergunta1))
}


export default buscarperguntas
