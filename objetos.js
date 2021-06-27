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


imprimirDadosPessoais = (cadastro) => {
    const pessoas = cadastro.pessoas;

    let count = 1;
    for (const pessoa of pessoas){
        console.log("Pessoa #" + count + ": " + pessoa.nome + ", idade = " + pessoa.idade + ", profissão: " + pessoa.profissao);

        count++;
    }
}

imprimirDadosPessoais(CADASTRO);