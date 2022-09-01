const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// al boton le agregar un escuchador de eventos
// en el parentesis requiere dos valores
// el primero es elevento que queremos que suceda para ejecutar la accion
// el segundo es la funcion que queremos que se ejecute
// la funcino a ejecutar NUNCA lleva parentesis a diferencia del onlick en html
//btn.addEventListener('click', btnOnClick);

//creamos el evento de enviar form con submit
form.addEventListener('submit', btnOnClick);

function btnOnClick(event) {

    //eviatmos que la web se recarge
    event.preventDefault();

    let resultado = Number(input1.value) + Number(input2.value);
    pResult.innerHTML = "";
    pResult.innerText = "El resultado es: " + resultado;
    //pResult.append('El resultado es: ' + resultado);
}