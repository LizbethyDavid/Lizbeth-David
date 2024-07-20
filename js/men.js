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
    mensaje = `https://api.whatsapp.com/send?phone=524651095580&text=Hola,%20soy%20${datoNombre.value}%20confirmo%20mi%20asistencia
%20con%20${datoMensaje.value}%20personas.`;
    btnEnviar.href= mensaje;
}
