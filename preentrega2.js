console.log("Se inicia el programa con la bienvenida")
alert("Bienvenido/a 'DE USA A TU CASA'");




class Envio{
    constructor (nombre , flete ,impuestos){
        this.nombre = nombre;
        this.flete = flete;       
        this.impuestos = impuestos;
        this.totalEnvio = 0;
    }


    calcularTotal (){
        this.totalEnvio = this.flete + this.impuestos; 
    }


    getDatosEnvio (){
        console.log("<----ENVÍO---->");
        console.log("Cliente: ", this.nombre);
        console.log("Flete: ", this.flete);
        console.log("Impuestos: ", this.impuestos);
        console.log("Total: ", this.totalEnvio);
        console.log()
    }
}


function precioEnvio (peso) {
    if (peso <= 10000) {
        alert("Tu envío será por avión y te saldrá en " + (peso * 0.02));
        return peso * 0.02;
    } else if (peso >= 10001 && peso < 50001) {
        alert("Tu envío será por barco y te saldrá en " + (peso * 0.015));
        return peso * 0.015;
    } 
    else if (peso >= 50001) {
        alert("No es posible enviar tu producto, ya que supera el peso permitido por la aerolínea");
        return 0;
    } 
    else {
        alert("Los datos ingresados son incorrectos (No son números)");
        alert("Gracias por usar nuestros servicios, Inténtalo nuevamente");
    }
}


function precioImpuestos(precio) {
        if (precio <= 200) {
            alert("El costo de tus impuestos será de 0");
            alert("Gracias por usar nuestros servicios, ten un lindo día");
            return 0;
        } else if (precio >= 201 && precio <= 5000) {
            alert("El costo de tus impuestos serán de " +  (precio * 0.10));
            return precio * 0.10;
        } 
        else if (precio >= 5001 && precio <= 9999) {
            alert("El costo de tus impuestos serán de " +  (precio * 0.20));
            return precio * 0.20;
        } 
        else if (precio >= 10000) {
            alert("No es posible enviar tu producto, ya que supera el monto permitido por la aduana para personas naturales");
            alert("Gracias por usar nuestros servicios, Inténtalo nuevamente");
            return 0;

        } 
        else {
            alert("Los datos ingresados son incorrectos (No son números)");
            alert("Gracias por usar nuestros servicios, Inténtalo nuevamente");
            return 0;
        }
    }


function filtrarEnvios (objEnvio){ 
    return objEnvio.nombre === cliente;
}


let nombre = "";
// let peso = "";
let listaEnvios = []; ///ESTA VA A ESTAR UNIDAS AL OBJETO ENVIO




while (nombre !== "salir") {
    console.log("Se pide el nombre al cliente")
    nombre = prompt("Ingresa tu nombre para cotizar tu envío,  o ingresa 'salir' para cerrar el sistema");

    if (nombre !== "salir") {
        let peso = prompt ("Ingresa el peso en gramos del producto que deseas enviar")
        peso = parseInt(peso);
        let flete = precioEnvio(peso)
        // precioEnvio(peso); 

        let precioProducto = prompt("Ingresa el monto en USD del producto que deseas enviar")
        precio = parseInt(precioProducto);
        let impuestos = precioImpuestos(precio);
        // precioImpuestos(precio);

/////// CREAR UN OBJETO ENVIO
        let objEnvio = new Envio (nombre, flete, impuestos);
        objEnvio.calcularTotal ()
        listaEnvios.push(objEnvio);
        alert("El total del costo por peso + el costo de impuestos es: $" + objEnvio.totalEnvio);
        console.log("Se da el total del servicio");
        console.log("El total del costo por peso + el costo de impuestos es: $" + objEnvio.totalEnvio);
        alert("Gracias por usar nuestros servicios, ten un lindo día");
    }
    
    
    else {
        alert("Gracias por usar nuestros servicios, ten un lindo día");
    }
}

console.log (listaEnvios);


let opcion = prompt("1) Ver todos los envíos solicitados 2) Ver tus envíos");

let cliente;

if (opcion === "1"){
    console.log ("HISTORIAL DE ENVIOS");
    for( let envio of listaEnvios){
        envio.getDatosEnvio();
    }
}

else if( opcion === "2"){
    cliente = prompt("Ingrese el nombre del cliente que desea buscar");
    let resultadoFilter = listaEnvios.filter(filtrarEnvios);
}

else {alert("Opción no válida. El sistema se cerrará.");
}


alert("Gracias por usar nuestros servicios, ten un lindo día");