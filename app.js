// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;

    if (amigo === null || amigo === "") {
        return alert("Por favor, inserte un nombre.");
    }
    amigos.push(amigo);

    document.getElementById("amigo").value = "";

    actualizarVista();
}

function actualizarVista() {
    let listaAmigos = document.getElementById("listaAmigos");
    //Para evitar duplicados
    listaAmigos.innerHTML = "";

    for (a of amigos) {
        let item = document.createElement("li");
        item.textContent = a;

        listaAmigos.appendChild(item);
    }

}

function sortearAmigo() {
    if (amigos === null || amigos == []) {
        return alert("Por favor, ingresa nombres para poder sortearlos.");
    }

    let indiceAleatorio = Math.floor((Math.random() * amigos.length));

    let valorAleatorio = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = valorAleatorio;


}