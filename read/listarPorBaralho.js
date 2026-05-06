import baralho from "../bank/bancoBaralhos.js"
import flashcards from "../bank/bancoFlashcards.js"
import PromptSync from "prompt-sync";

function listarPorBaralho() {
    const prompt = PromptSync()
    let idBaralho = parseInt(prompt("Digite o ID do baralho que deseja listar os flashcards: "))
    const baralhoEncontrado = baralho.find((baralho) => baralho.id === idBaralho)

    if (!baralhoEncontrado) {
        return "Baralho não encontrado."
    }

    const flashcardsDoBaralho = flashcards.filter((flashcard) => flashcard.idBaralho === idBaralho)

    if (flashcardsDoBaralho.length === 0) {
        return "Nenhum flashcard encontrado para este baralho."
    }

    return flashcardsDoBaralho
}
export default listarPorBaralho
