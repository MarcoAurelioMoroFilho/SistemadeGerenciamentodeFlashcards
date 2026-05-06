import baralhos from "../bank/bancoBaralhos.js";
import flashcards from "../bank/bancoFlashcards.js";
import PromptSync from "prompt-sync";
function removerBaralho(){
    const prompt = PromptSync();
    let id = parseInt(prompt("Digite o ID do baralho que deseja remover: "))
    const index = baralhos.findIndex((baralhos) => baralhos.id === id)

    if (index === -1) {
        return "Baralho não encontrado."
    }

    baralhos.splice(index, 1)
    return "Baralho removido com sucesso."
}
export default removerBaralho
