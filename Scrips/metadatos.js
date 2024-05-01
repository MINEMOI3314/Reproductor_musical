console.log("hola mundo")



class Metadatos {
    constructor (nombre, artista, salida, duracionM, duracionS, portada, audio){
        this.nombre = nombre
        this.artista = artista
        this.salida = salida
        this.duracionM = duracionM
        this.duracionS = duracionS
        this.portada = portada
        this.audio = audio
    }
    hablar(){
        return `en ${this.salida} salió la cancion ${this.nombre} del artista ${this.artista}`
    }
}


var cancion = [
    new Metadatos("Enter sandman", "Metalica", 1991, 5, 31, "Media\\Cover\\The black album.jpg"), 
    new Metadatos ("Aca entre nos", "Vicente Fernades", 1992, 3, 16, "Media\\Cover\\Vicente Fernandes - Que raro tiene.jpg"), 
    new Metadatos ("Tu falta de querer", "Mon laferte", 2015, 4, 38, "Media\\Cover\\Mon Laferte - vol1.jpg"),
    new Metadatos ("fly me to the moon", "Franck Sinatra", 1964, 2, 27, "Media\\Cover\\Nothing but the best.jpg")
]

//console.log(cancion[0].hablar())

function prueba_b(){
    console.log(cancion[0].nombre);
    let change = document.getElementById("Cover_display");
    change.src = cancion[0].portada;

}

function bot1(){
    console.log(cancion[0].nombre);
    let change = document.getElementById("Cover_display");
    change.src = cancion[0].portada;
}
function bot2(){
    console.log(cancion[1].nombre);
    let change = document.getElementById("Cover_display");
    change.src = cancion[1].portada;
}
function bot3(){
    console.log(cancion[2].nombre);
    let change = document.getElementById("Cover_display");
    change.src = cancion[2].portada;
}
function bot4(){
    console.log(cancion[3].nombre);
    let change = document.getElementById("Cover_display");
    change.src = cancion[3].portada;
}
