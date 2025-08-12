const nome = "Eduardo"
let idade = 21
let profissao = "Cientista"
let cidade = "Uberlândia"
let anoAtual = 2025
let anoNascimento = anoAtual - idade
let salario = 6000
let bonus = 1500
let salarioMes = salario + bonus
let salarioAno = salarioMes * 12
let anoTotal = salarioAno * 2


alert(`========= RELATÓRIO DO USUÁRIO =========
Nome: ${nome}
Idade: ${idade}
Ano de nascimento: ${anoNascimento}
Cidade: ${cidade}
Profissão: ${profissao}

Salário base: U$${salario}
Bônus: U$${bonus}
Total mensal: U$${salarioMes}
Total ano: U$${salarioAno}
Total anual (salário dobrado): U$${anoTotal}
========================================= `)