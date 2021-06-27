somar = (a, b) => {
    const resultado = a + b;

    return resultado;

}

imprimir = (mensagem) => {
    const opcoes = {
        timeZone: "America/Fortaleza",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };
    const data = new Date().toLocaleDateString("pt-BR", opcoes);

    console.log("[" + data + "] " + mensagem)
}

imprimirSoma = (a, b) => {
    const resultado = somar(a, b);
    imprimir("resultado da soma: " + resultado);
}

imprimirSoma(3, 4);
imprimirSoma(10, 16);