let numero = prompt('Escriba un numero entero y que sea positivo');
let i = 1;
while (i <= numero) {

    if (i % 3 == 0 && i % 5 !=0) {

        console.log('🚀', i);

    }else if (i % 5 == 0 && i % 3 != 0) {

        console.log('🍔', i);

    }else if (i % 5 == 0 && i % 3 == 0) {

        console.log('🍺', i);

    }else{
        console.log(i);
    }  
    i++;
}