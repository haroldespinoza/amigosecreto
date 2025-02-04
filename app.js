let amigos = []; //declara variable amigos, array
let amigosSorteados = new Set(); // declara variable amigos sorteados del conjunto de amigos ingresado

function agregarAmigo() {
    let input = document.getElementById("amigo"); //captura nombre de amigos ingresados
    let amigo = input.value.trim(); //elimina espacios en blanco

    function esTextoValido(texto) {
        return /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(texto); //valida caracteres del nombre, excluyendo numeros
    }

    if (amigo === "") {
        alert("Por favor, ingresa un nombre válido."); //muestra mensaje de alerta si el campo esta vacio y detiene la función
        return;
    }

    if (!esTextoValido(amigo)) {
        alert("Solo se permiten letras y espacios. No ingreses números o caracteres especiales.");
        return; // alerta de ingreso de nombres
    }
 amigos.push(amigo);
    input.value = ""; //limpia el campo de texto
    mostrarLista(); // llama a la función mostrar lista
}
// esta función muestra la lista de amigos que han sido ingresados.

function mostrarLista() {
    let lista = document.getElementById("listaAmigos"); 
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        li.className = "amigo-item";
        lista.appendChild(li);
    });
}

// permite hacer el sorteo de los amigos, hasta que todos hayan sido sorteados
//muestra el nombre del amigo sorteado
function sortearAmigo() {
    let amigosDisponibles = amigos.filter(amigo => !amigosSorteados.has(amigo));
    
    if (amigosDisponibles.length === 0) {
        alert("Todos los nombres han sido sorteados.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigosDisponibles.length);
    let ganador = amigosDisponibles[indiceAleatorio];
    amigosSorteados.add(ganador);
    document.getElementById("resultado").textContent = "El amigo secreto es: " + ganador;
}