// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; //declara variable amigos
let amigosSorteados = new Set();

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let amigo = input.value.trim();

    function esTextoValido(texto) {
        return /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(texto);
    }

    if (amigo === "") {
        alert("Por favor, ingresa un nombre válido");
        return;
    }

    if (!esTextoValido(amigo)) {
        alert("solo se permite letras y espacios. No ingreses números ni caracteres especiales");
        return;

    }
    amigos.push(amigo);
    input.value = "";
    mostrarLista();
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHtml = "";
    amigos.forEach(amigo => {
        let li =document.createElement("li");
        li.textContent = amigo;
        li.className = "amigo-item";
        lista.appendChild(li);
    });
}
