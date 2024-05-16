//alert("Hola mundo");

let respuesta=document.getElementById("respuesta");


// Función para llamar a la API

function CallApiRequest()
{
    // Hacer una petición para un usuario con ID especifico
    axios.get('http://localhost/iot-car-control/back-end/apis/getRegistro.php')
    .then(function (response) {
    // manejar respuesta exitosa
    console.log(response);
    
    let respuestaaServidor = response.data == 'F'?"Adelante":response.data == 'B'?"Atras":response.data == 'R'?"Derecha":
    response.data == 'L'?"Izquierda": "Detener";
    respuesta.innerHTML="Respuesta: " + respuestaaServidor;
    })
    .catch(function (error) {
    // manejar error
    console.log(error);
    })
    .finally(function () {
    // siempre sera executado
    });
}

setInterval(CallApiRequest, 2000);