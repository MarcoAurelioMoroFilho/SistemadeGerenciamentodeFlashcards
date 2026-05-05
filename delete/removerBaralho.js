import baralho from "bank/bancoBaralhos.js"
function removerBaralho(baralho){
    const index = baralho.findIndex((baralho) => baralho.id === id)

    if (index === -1) {
        return "Baralho não encontrado."
    }

    baralho.splice(index, 1)
    return "Baralho removido com sucesso."
}
export default removerBaralho
