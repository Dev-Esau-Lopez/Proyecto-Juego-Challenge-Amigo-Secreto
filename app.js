// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la 
// lógica para resolver el problema.
//Declarando Variables
let listaAmigos = [];

// Funcion agregar amigos
function agregarAmigo() {

    let nombreAmigo = document.getElementById('amigo').value.trim();
        
    if (nombreAmigo.length === "") {
        alert('Por favor, inserte un nombre');
        return;
    }

    document.querySelector('#amigo').value = '';
    listaAmigos.push(nombreAmigo);
    actualizarLista(listaAmigos);
   // console.log(listaAmigos);

}

//función para actualizar la lista de amigos
function actualizarLista(amigos) {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let indice = 0; indice < amigos.length; indice++) {
        let li = document.createElement("li"); 
        li.textContent = amigos[indice]; 
        lista.appendChild(li); 
        
    }
    return;

}

//Funcion para sortear Amigos
function sortearAmigo() {
    let indiceAleatorio;
    let amigoSorteado;
    if (listaAmigos.length === 0) {
        document.getElementById('resultado').innerHTML = "No hay amigos en la lista.";
        return;

    }else{
        indiceAleatorio = Math.floor(Math.random()*listaAmigos.length)*1;
        amigoSorteado = listaAmigos[indiceAleatorio];
        document.getElementById('resultado').innerHTML = `🎉 El amigo sorteado es: ${amigoSorteado}`;
        document.getElementById('reiniciar').removeAttribute('disabled', 'true');
        //console.log(amigoSorteado);
    }
}
//Funcion para reiniciar el juego
function resetearJuego() {
   listaAmigos = [];
   document.getElementById('amigo').value = '';
   document.getElementById('resultado').innerHTML = '';
   actualizarLista(listaAmigos);  
}
//Inicializando la funcion
agregarAmigo();