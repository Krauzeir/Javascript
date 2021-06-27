iguais =  (a, b) => {
    if (a==b){
        console.log("A é igual a B!");
    }
    else{
        console.log("A não é igual a B!");
    }
}

iguais(10, 10);
iguais(10, 5);
iguais(10, "10");


iguais =  (a, b, c) => {
    if ((a===b) && (b===c)){
        console.log("A, B e C são iguais!");
    }
    else{
        console.log("A, B e C não são iguais!");
    }
}

iguais(10, 10, 10);
iguais(10, 10, "10");