import baralhos from "./flashcards.js";
import flashcards from "./bancodedados.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

function buscarID() {
    const pergunta = parseInt(prompt("Digite o ID da matéria desejada: "))

    const materia = baralhos.find(b => b.id === pergunta)

    if (!materia) {
        console.log("Matéria não encontrada")
        return
    }

    const resultado = flashcards.filter(f => f.idBaralho === pergunta)

    console.log(`\nMatéria: ${materia.nome}`)

    resultado.forEach(f => {
        console.log(`Pergunta: ${f.pergunta}`)
        console.log(`Resposta: ${f.resposta}\n`)
    })
}

buscarID()
