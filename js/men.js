/*https://api.whatsapp.com/send?phone=(codigo pais)(codigo de area)(numero sin el 15)&text=*/
/* Espacio : %20  ``*/


/* Traer los inputs */
/* Crear funcion añadiendo el valor correspondiente a la variable mensaje */


const datoNombre = document.querySelector('#datoNombre');
const datoMensaje = document.querySelector('#datoMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

var mensaje;

function enviar (){
    console.log('llego');
    mensaje = `https://api.whatsapp.com/send?phone=524651095580&text=Hola%20,te%20asesoramos%20por
%20whatsapp%20gestiona%20tu%20compra%20por%20este%20canal`;
    btnEnviar.href= mensaje;
}
