import flashcards from "bank/bancoFlashcards.js"
function atualizarFlashcard(id, novaPergunta, novaResposta) {
    const flashcard = flashcards.find((flashcard) => flashcard.id === id)

    if (!flashcard) {
        return "Flashcard não encontrado."
    }

    flashcard.pergunta = novaPergunta
    flashcard.resposta = novaResposta

    return "Flashcard atualizado com sucesso."
}
export default atualizarFlashcard
