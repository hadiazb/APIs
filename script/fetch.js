var contenido = document.querySelector('#contenido')
function traer() {
    fetch('https://randomuser.me/api/')
    .then(res  => res.json())
    .then(data  =>{
        console.log(data.results['0'].email);
        
        contenido.innerHTML = `<img src="${data.results['0'].picture.large}" alt=""width="100" class="img-fluid rounded-circle">
        <p>Nombre:<span>   </span>${data.results['0'].name.first} <span>   </span> ${data.results['0'].name.last}</p>`
    })
} 

// var nombre = function (parametro) {
//     return parametro.propiedad >= mayor
// }

// var nombre = (parametro) => {
//     return parametro.propiedad >= mayor
// }

// const nombre = parametro => parametro.propiedad >= mayor;

// const nombre = ({propiedad}) => propiedad >= mayor;