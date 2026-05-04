import baralhos from ".bank/bancoBaralhos.js"
import flashcards from "./adicionarFlashcard.js"

function adicionarBaralho(tituloRecebido) {
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