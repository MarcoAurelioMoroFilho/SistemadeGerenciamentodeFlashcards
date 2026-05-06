import baralhos from "../bank/bancoBaralhos.js";
import flashcards from "../bank/bancoFlashcards.js";
import PromptSync from "prompt-sync";


function buscarID() {
    const prompt = PromptSync();
    
    const pergunta = parseInt(prompt("Digite o ID da matéria desejada: "));

    const materia = baralhos.find(b => b.id === pergunta)

    if (!materia) {
        console.log("Matéria não encontrada")
        return
    }

    const resultado = flashcards.filter(f => f.idBaralho === pergunta)

    console.log(`\nMatéria: ${materia.titulo}`)

    resultado.forEach(f => {
        console.log(`Pergunta: ${f.pergunta}`)
        console.log(`Resposta: ${f.resposta}\n`)
    })
}

export default buscarID;