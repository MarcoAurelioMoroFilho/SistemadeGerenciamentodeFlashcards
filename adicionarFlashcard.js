import baralhos from "./bancoBaralho.js"
import flashcards from "./adicionarFlashcard.js"

function adicionarFlashcard(perguntaRecebida, respostaRecebida, idDoBaralho) {
  let novoId = 1;
  if (flashcards.length > 0) {
    let ultimoFlashcard = flashcards[flashcards.length - 1];
    novoId = ultimoFlashcard.id + 1;
  }
  let novoFlashcard = {
    id: novoId,
    pergunta: perguntaRecebida,
    resposta: respostaRecebida,
    idBaralho: idDoBaralho
  };
  flashcards.push(novoFlashcard);
  console.log("Flashcard criado com sucesso!", novoFlashcard);
}