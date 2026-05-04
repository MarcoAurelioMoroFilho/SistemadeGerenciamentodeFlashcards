let pessoas = [
  { nome: "Pedro", idade: 17 },
  { nome: "Ana", idade: 22 },
  { nome: "Lucas", idade: 19 }
]
let mudar = pessoas.filter(p =>p.idade>18).map(p=>p.nome)
console.log(mudar)