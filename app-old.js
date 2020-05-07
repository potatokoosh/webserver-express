const http = require('http');//este paquete no hay que hacer install porque viene por defecto con node

http.createServer((req,res) =>{

    res.writeHead(200,{'Content-Type': 'application/json'});

    let salida = {
      nombre: 'Jose',
      edad: 32,
      url: req.url
    }

    res.write(JSON.stringify(salida));
    //res.write("Hola Mundo");
    res.end();//este comando es para indicar que ya termino el proceso de res

})
.listen(8080);

console.log('Escuchando el puerto 8080');