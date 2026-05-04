function deletarFlashcard() {
    const id = parseInt(prompt("Digite o ID: "))

    const index = flashcards.findIndex(f => f.id === id)

    if (index === -1) {
        console.log("Não encontrado")
        return
    }

    flashcards.splice(index, 1)

    console.log("Deletado!")
}