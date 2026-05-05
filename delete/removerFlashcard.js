import flashcard from "bank/bancoFlashcards.js"
function removerFlashcard(id) {
    const index = flashcard.findIndex((flashcard) => flashcard.id === id)

    if (index === -1) {
        return "Flashcard não encontrado."
    }

    flashcard.splice(index, 1)
    return "Flashcard removido com sucesso."
}
export default removerFlashcard
