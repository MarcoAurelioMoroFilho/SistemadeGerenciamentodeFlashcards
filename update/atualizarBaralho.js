import baralho from "bank/bancoBaralhos.js"
import PromptSync from "prompt-sync";
function atualizarBaralho(idRecebido, novoTitulo) {
    let novoTitulo = prompt("Digite o novo título do baralho:");

  let baralhoEncontrado = baralho.find(b => b.id === idRecebido);
  if (baralhoEncontrado) {
    baralhoEncontrado.titulo = novoTitulo;
    console.log("Baralho atualizado com sucesso!", baralhoEncontrado);
  } else {
    console.log("Baralho não encontrado.");
  }
}

export default atualizarBaralho
