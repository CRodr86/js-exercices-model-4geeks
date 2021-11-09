// declaración de datos iniciales
let undefined;
const sequence = [10, 4, 8, 27.4, 500, null, undefined, 100, 25, 40, 31, 20, 17, 1890, 13, 42];
const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];


//La función cleanArray filtra un array dado y retorna un nuevo array solamente con los valores numéricos 
const cleanArray = (array) => {
    let validArray = [];
    for(let i in array) {
        if(typeof array[i] == "number") {
            validArray.push(array[i])
        }
    }
    return validArray;
}

/* EJERCICIO 1 */
//La función ascendingOrder utiliza el método Bubble Sort para ordenar los valores numéricos de un array de menor a mayor
const ascendingOrder = (array) => {
    let cleanedArray = cleanArray(array);
    //El array es recorrido dos veces
    for(let i = 0; i < cleanedArray.length-1; i++) {
        for(let j = 0; j < cleanedArray.length-1; j++) {
            //Si un valor es mayor que el siguiente
            if(cleanedArray[j] > cleanedArray[j+1]) {
            let aux = cleanedArray[j];
            //Se intercambian las posiciones de los valores
            cleanedArray[j] = cleanedArray[j+1];
            cleanedArray[j+1] = aux;
            }
        }
    }
    return cleanedArray;
}
//console.log para testar la función ascendingOrder
console.log(ascendingOrder(sequence))


/* EJERCICIO 2 */
//La función decendingOrder llama a la función ascendingOrder y invierte su resultado con la utilización del método array.reverse()
const descendingOrder = (array) => {
    let ascendingArray = ascendingOrder(array);
    return ascendingArray.reverse();
}
//console.log para testar la función descendingOrder
console.log(descendingOrder(sequence))


/* EJERCICIO 3 */
//La función arrayAverage retorna la media aritmética de los valores numérico de un array dado
const arrayAverage = (array) => {
    let cleanedArray = cleanArray(array);
    let total = 0;
    //El array es recorrido
    for (let i in cleanedArray){
        //Se suman todos los valores del array
        total += cleanedArray[i];
    }
    //Se retorna la división de la suma entre la longitud del array
    return total/cleanedArray.length; 
}
//console.log para testar la función arrayAverage
console.log(arrayAverage(sequence))


/* EJERCICIO 4 */
//La función checkDni verifica si el número de DNI indicado es válido y luego verifica si la letra indicada corresponde con el número
const checkDni = (dniNumber, dniLetter) => {
    if(dniNumber < 0 || dniNumber > 99999999) { 
        return "El número indicado no es válido";
    }
    else {
        let correctLetter = letrasDNI[dniNumber % 23];
        if (dniLetter != correctLetter) {
            return "La letra indicada no es correcta";
        }
        else {
            return "El DNI es correcto";
        }
    }
}
//console.log para testar la función checkDni
console.log(checkDni(5544778, "V")) 
