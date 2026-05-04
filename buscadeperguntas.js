import baralhos from "./flashcards.js";
import flashcards from "./bancodedados.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync()
const pergunta1 = prompt("Digite a palavra chave").trim()

function buscarperguntas() {
return flashcards.filter(flashcards => flashcards.pergunta.includes(pergunta1))
}
console.log(buscarperguntas())

export default buscarperguntas
