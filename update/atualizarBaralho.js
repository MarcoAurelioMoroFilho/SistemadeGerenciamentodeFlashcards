import baralhos from "../bank/bancoBaralhos.js";
import flashcards from "../bank/bancoFlashcards.js";
import PromptSync from "prompt-sync";

function atualizarBaralho( ) {
  
  const prompt = PromptSync();
  let idRecebido =parseInt(prompt("Digite o ID do baralho que deseja atualizar:"))

    let baralhoEncontrado = baralhos.find(b => b.id === idRecebido);
  if (baralhoEncontrado) {
    baralhoEncontrado.titulo = prompt("Digite o novo título do baralho:");;
    console.log("Baralho atualizado com sucesso!", baralhoEncontrado);
  } else {
    console.log("Baralho não encontrado.");
  }
}

export default atualizarBaralho
