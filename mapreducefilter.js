const CADASTRO ={
    descricao: "cadastro de pessoas",
    pessoas: [
        {
            nome: "joão da silva",
            idade: 25,
            profissao: "medico",
        },
        {
            nome: "bruno sacramento",
            idade: 28,
            profissao: "daytrader",
        },
        {
            nome: "thiago phelippe",
            idade: 26,
            profissao: "contador",
        }
    ]
}

const pessoas = CADASTRO.pessoas;

// mapeamento
pessoas.map((pessoa) => {
    console.log("nome da pessoa: " + pessoa.nome);
});

// filtragem
maioresQueVinte = pessoas.filter((pessoa) => pessoa.idade > 25);
maioresQueVinte.map((pessoa)=> {
    console.log("nome da pessoa maior que vinte> " + pessoa.nome);
})

// reducao
const somaIdade = pessoas.reduce((idadeAcumulada, pessoa) => {
    return idadeAcumulada + pessoa.idade
}, 0);

console.log("soma das idades: " + somaIdade);
