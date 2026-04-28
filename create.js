import flashcards from "./flashcards.js";
import baralhos from "./baralhos.js";

function criarFlashcard(pergunta, resposta, idBaralho) {
  const baralhoExiste = baralhos.find(b => b.id === idBaralho);

  if (!baralhoExiste) {
    console.log("Baralho não encontrado.");
    return;
  }

  const novoId = flashcards.length > 0
    ? flashcards[flashcards.length - 1].id + 1
    : 1;

  const novoFlashcard = {
    id: novoId,
    pergunta,
    resposta,
    idBaralho
  };

  flashcards.push(novoFlashcard);

  console.log("Flashcard criado com sucesso!");
}
export default criarFlashcard;