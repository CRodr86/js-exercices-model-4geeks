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
    for(let i = 0; i < cleanedArray.length-1; i++) { //El array es recorrido dos veces
        for(let j = 0; j < cleanedArray.length-1; j++) {
            if(cleanedArray[j] > cleanedArray[j+1]) { //Si un valor es mayor que el siguiente
            let aux = cleanedArray[j];
            cleanedArray[j] = cleanedArray[j+1]; //Se intercambian las posiciones de los valores
            cleanedArray[j+1] = aux;
            }
        }
    }
    return cleanedArray;
}
console.log(ascendingOrder(sequence)) //console.log para testar la función ascendingOrder

/* EJERCICIO 2 */
//La función decendingOrder utiliza el método Bubble Sort para ordenar los valores numéricos de un array de mayor a menor
const descendingOrder = (array) => {
    let cleanedArray = cleanArray(array);
    for(let i = 0; i < cleanedArray.length-1; i++) { //El array es recorrido dos veces
        for(let j = 0; j < cleanedArray.length-1; j++) {
            if(cleanedArray[j] < cleanedArray[j+1]) { //Si un valor es menor que el siguiente
            let aux = cleanedArray[j];
            cleanedArray[j] = cleanedArray[j+1]; //Se intercambian las posiciones de los valores
            cleanedArray[j+1] = aux;
            }
        }
    }
    return cleanedArray;
}
console.log(descendingOrder(sequence)) //console.log para testar la función descendingOrder

/* EJERCICIO 3 */
//La función arrayAverage retorna la media aritmética de los valores numérico de un array dado
const arrayAverage = (array) => {
    let cleanedArray = cleanArray(array);
    let total = 0;
    for (let i in cleanedArray){ //El array es recorrido
        total += cleanedArray[i]; //Se suman todos los valores del array
    }
    return total/cleanedArray.length; //Se retorna la división de la suma entre la longitud del array 
}
console.log(arrayAverage(sequence)) //console.log para testar la función arrayAverage

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
console.log(checkDni(5544778, "T")) //console.log para testar la función checkDni
