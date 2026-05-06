import baralho from "../bank/bancoBaralhos.js";
import baralhos from "../bank/bancoBaralhos.js";
import flashcards from "../bank/bancoFlashcards.js";
import PromptSync from "prompt-sync";

function adicionarFlashcard() {
 const prompt = PromptSync();
   let perguntaRecebida = prompt("Digite a pergunta do flashcard:")
   let respostaRecebida = prompt("Digite a resposta do flashcard:")
    let Ibaralho = parseInt(prompt("Digite o ID do baralho ao qual este flashcard pertence:"))
  let novoId = 1;
  if (flashcards.length > 0) {
    let ultimoFlashcard = flashcards[flashcards.length - 1];
    novoId = ultimoFlashcard.id + 1;
  }

  let novoFlashcard = {
    id: novoId,
    pergunta:perguntaRecebida ,
    resposta:respostaRecebida ,
    idBaralho:Ibaralho
  };
  const index = baralho.findIndex(f => f.id === novoFlashcard.idBaralho)
  if(index<0){
    console.log("Baralho não encontrado, flashcard criado sem associação a um baralho.")
      return
  }
    else{
      flashcards.push(novoFlashcard);
    }
    
  console.log("Flashcard criado com sucesso!", novoFlashcard);
}
export default adicionarFlashcard;