const fs = require("fs")

imprimirDadosPessoais = (cadastro) => {
    const pessoas = cadastro.pessoas;

    let count = 1;
    for (const pessoa of pessoas){
        console.log("Pessoa #" + count + ": " + pessoa.nome + ", idade = " + pessoa.idade + ", profissão: " + pessoa.profissao);

        count++;
    }
}

carregarCadastro = (arquivo) => {
    fs.readFile(arquivo, (erro, dados) => {
        if(erro){
            console.error("Não foi possível carregar o arquivo!");
        }
        else {
            imprimirDadosPessoais(JSON.parse(dados));
        }
    });
}


carregarCadastro("./cadastro.json");