dividir = (a, b) => {
    const resultado = a / b;

    return resultado;
}

//let resultado = dividir (10, 5);
//console.log("resultado da operação = " + resultado);
//resultado = dividir (10, 0);
//console.log("resultado da operação = " + resultado);

dividir = (a, b) => {
    return new Promise((resolve, reject) => {
        if (b > 0){
            //executa o calculo
            const resultado = a / b;

            return resolve(resultado);
        }
        else {
            //executa o erro
            return reject("Não é possível dividir por zero!");
        }
    })
}


let num1 = 10
let num2 = 0

dividir(num1, num2).then((resultado) => {
    console.log("resultado da operação: " + resultado);
}).catch((erro) => {
    console.log("ocorreu um erro: " + erro);
})



