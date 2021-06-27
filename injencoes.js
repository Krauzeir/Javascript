alertar = () => {
    const date = Date();

    console.log("Estou te alertando agora em " + date);
}

const inicio = Date();
console.log("iniciando a execução em " + inicio);

setTimeout(() => {
    alertar();
}, 5000);

alertarAlmoco = () => {
    const date = Date();

    console.log("Você tem que almoçar agora em " + date);
}

alertarJantar = () => {
    const date = Date();

    console.log("Você tem que jantar agora em " + date);
}

temporizar = (funcaoAlerta, tempo) => {
    setTimeout(() => {
        funcaoAlerta();
    }, tempo);
}

temporizar(alertarAlmoco, 5000);
temporizar(alertarJantar, 10000);