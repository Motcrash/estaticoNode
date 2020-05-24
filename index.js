//importa la libreria express
const express = require('express');
//Generar objeto con express
const app = express();
//especificar directorio publico
app.use(express.static(__dirname + '/public'));
//crea la carpeta public
// vamos a arrancar el server
app.listen(3000, () =>{
 console.log('Escuchando el puerto tcp 3000')
})