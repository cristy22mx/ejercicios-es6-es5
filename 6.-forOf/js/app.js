                            // ES5

// declara la variable


// escribe tu funcion

// array = [10, 20, 30, 20, 30, 40, 60];

// function computeSumOfAllElements(element){
//     total = element.reduce(function(a, b){
//         return a + b;
//     }, 0);
//     return 'El promedio de este arreglo es: ' + (total / element.length);
// }
// console.log(computeSumOfAllElements(array))





                              //ES6
// Comenta todo lo anterior y escribelo en ES6


// declara la variable


// escribe tu funcion

array = [10, 20, 30, 20, 30, 40, 60];

const computeSumOfAllElements = array => {

    let element = 0;
    for(let num of array){
        element = element + num;
    }
    return `El promedio de este arreglo es: ${element / array.length}`

}


console.log(computeSumOfAllElements(array))