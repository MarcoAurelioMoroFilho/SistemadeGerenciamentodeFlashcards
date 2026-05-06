import baralhos from "../bank/bancoBaralhos.js";
import flashcard from "../bank/bancoFlashcards.js";
import PromptSync from "prompt-sync";


function removerFlashcard() {
    const prompt = PromptSync();
    let id = parseInt(prompt("Digite o ID do flashcard que deseja remover: "))
    
    const index = flashcard.findIndex((flashcard) => flashcard.id === id)

    if (index === -1) {
        return "Flashcard não encontrado."
    }

    flashcard.splice(index, 1)
    return "Flashcard removido com sucesso."
}
export default removerFlashcard