

function validar() {

    let destino, numerodepasajeros, fechadesalida, email, numerotelefonico, comentario

    destino              = document.getElementById('destino').value
    numerodepasajeros    = document.getElementById('numerodepasajeros').value
    fechadesalida        = document.getElementById('fechadesalida').value
    email                = document.getElementById('email').value
    numerotelefonico     = document.getElementById('numerotelefonico').value
    comentario           = document.getElementById('comentario').value

    alert(destino + " " + numerodepasajeros + " " + fechadesalida + " " + email + " " + numerotelefonico + " " + comentario)
}


