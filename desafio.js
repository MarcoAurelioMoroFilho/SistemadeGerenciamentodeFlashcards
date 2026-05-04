let produtos = [
  { nome: "Teclado", preco: 120, categoria: "eletronico" },
  { nome: "Mouse", preco: 80, categoria: "eletronico" },
  { nome: "Caderno", preco: 30, categoria: "papelaria" },
  { nome: "Monitor", preco: 900, categoria: "eletronico" }
]
let vamo = produtos.filter(p=>p.categoria==="eletronico").filter(p=>p.preco>100).map(p=>p.nome)
console.log(vamo)

let existe = vamo.includes("Monitor")

console.log(existe)