var contenido = document.querySelector('#contenido')
function traer() {
    fetch('texto.txt')
    .then(data  => data.text())
    .then(data  =>{
        // console.log(data)
        contenido.innerHTML = `${data}`
    })
} 

// var sistema = function (parametro) {
//     return parametro.nombre >= mayor
// }

// var sistema = (parametro) => {
//     return parametro.nombre >= mayor
// }

// const sistema = parametro => parametro.nombre;