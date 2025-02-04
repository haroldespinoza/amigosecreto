let amigos = []; //declara variable amigos, array
let amigosSorteados = new Set(); // declara variable amigos sorteados del conjunto de amigos ingresado

function agregarAmigo() {
    let input = document.getElementById("amigo"); //captura nombre de amigos ingresados
    let amigo = input.value.trim(); //elimina espacios en blanco

    function esTextoValido(texto) {
        return /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(texto); //valida caracteres del nombre, excluyendo numeros
    }

    if (amigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (!esTextoValido(amigo)) {
        alert("Solo se permiten letras y espacios. No ingreses números o caracteres especiales.");
        return;
    }
 amigos.push(amigo);
    input.value = "";
    mostrarLista();
}
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