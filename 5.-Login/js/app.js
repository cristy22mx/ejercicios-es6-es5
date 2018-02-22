// En este ejercicio deberas crear tu solción en ES5, asegurarte que funcione 

var password = 'laboratoria';

// declara el prompt

var inPassword = prompt('Escribe una contraseña');
 
// function user() {
//     if(inPassword === null){
//         console.log('falso')
//         return false;
//     } else if (password !== inPassword){
//         console.log('falso')
//         return false;
//     } else if(password === inPassword){
//     console.log('contraseña verdadera')
//     return true;
//     }
// }

// user()


// comenta todo lo anterior y escribelo en ES6


const user = () => {
    if(inPassword === null){
        console.log('falso')
        return false;
    } else if (password !== inPassword){
        console.log('falso')
        return false;
    } else if(password === inPassword){
    console.log('contraseña verdadera')
    return true;
    }

}

user()
