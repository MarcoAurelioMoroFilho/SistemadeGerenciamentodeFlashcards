import baralhos from "../bank/bancoBaralhos.js";
import flashcards from "../bank/bancoFlashcards.js";
import PromptSync from "prompt-sync";
function adicionarBaralho() {const prompt = PromptSync(); 
  let tituloRecebido = prompt("Digite o título do baralho: ").trim();
  
  let novoId = 1; 
  if (baralhos.length > 0) {
    let ultimoBaralho = baralhos[baralhos.length - 1];
    novoId = ultimoBaralho.id + 1;
  }
  let novoBaralho = {
    id: novoId,
    titulo: tituloRecebido
  };
  baralhos.push(novoBaralho);
  console.log("Baralho criado com sucesso!", novoBaralho);
}
export default adicionarBaralho