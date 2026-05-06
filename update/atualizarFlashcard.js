import baralhos from "../bank/bancoBaralhos.js";
import flashcards from "../bank/bancoFlashcards.js";
import PromptSync from "prompt-sync";

function atualizarFlashcard() {
    const prompt = PromptSync();
    
    const id = parseInt(prompt("Digite o ID: "))

    const index = flashcards.findIndex(f => f.id === id)

    if (index === -1) {
        console.log("Não encontrado")
        return
    }

    let novaPergunta = prompt("Nova pergunta: ").trim()
    let novaResposta = prompt("Nova resposta: ").trim()

    flashcards[index].pergunta = novaPergunta || flashcards[index].pergunta
    flashcards[index].resposta = novaResposta || flashcards[index].resposta

    console.log("Atualizado!")
}
export default atualizarFlashcard