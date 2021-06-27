testarWhile = () => {
    i = 0;
    while (i <10 ){
        console.log("no while " + i);

        i++;
    }
}

testarFor = () => {
    for(i=0; i < 10; i++){
        console.log("no for " + i);
    }
}

//testarWhile();
//testarFor();

imprimirCores = (cores) => {
    for (i = 0; i < cores.length; i++){
        console.log(cores[i] + " é uma cor")
    }
}

const cores = ["branco", "preto", "vermelho", "amarelo", "azul", "verde"];
imprimirCores(cores);


console.log(" ");
console.log("Versão 2");
console.log(" ");
//Versão melhorada abaixo

imprimirCores = (cores) => {
    for (const cor of cores){
        console.log(cor+ " é uma cor")
    }
}

imprimirCores(cores);