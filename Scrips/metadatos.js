console.log("hola mundo")
//variable que indica que se esta reporducionedo
var index
class Reproduccion {
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
    //funcion que reproducirá y mostrará los metadatos en pantalla
    playThis(){
        console.log(this.nombre)
        let change = document.getElementById("Cover_display")
        change.src = this.portada
        change = document.getElementById("AudioPlay")
        change.src = this.audio
    }
}

var cancion = [
    new Reproduccion ("Enter sandman", "Metalica", 1991, 5, 31, "Media\\Cover\\The black album.jpg", "Media\\Audio\\Metalica - Enter Sandman.mp3"), 
    new Reproduccion ("Aca entre nos", "Vicente Fernades", 1992, 3, 16, "Media\\Cover\\Vicente Fernandes - Que raro tiene.jpg", "Media\\Audio\\Vicente Fernández - Acá Entre Nos.mp3"), 
    new Reproduccion ("Tu falta de querer", "Mon laferte", 2015, 4, 38, "Media\\Cover\\Mon Laferte - vol1.jpg", "Media\\Audio\\Mon Laferte - Tu Falta De Querer.mp3"),
    new Reproduccion ("Fly me to the moon", "Franck Sinatra", 1964, 2, 27, "Media\\Cover\\Nothing but the best.jpg", "Media\\Audio\\Franck Sinatra - Fly Me To The Moon.mp3")
]
function PlayPause(){
    console.log("pausado")
}
function Stop(){
    console.log("detenido")
}
function Next(){
    //agarra la cancion actual con el index y le suma uno
    console.log("siguiente")
    let siguienteCancion = index + 1
    cancion[siguienteCancion].playThis()
    index = siguienteCancion
    console.log(index)
}
function Prev(){
    //agarra la cancion actual con el index y le resta uno
    console.log("anterior")
    let siguienteCancion = index - 1
    cancion[siguienteCancion].playThis()
    index = siguienteCancion
    console.log(index)
}
function Shuffle(){
    //se selecciona aleatoriamente un numero de array de la variabla cancion
    let seleccionAzar = 0
    seleccionAzar = Math.floor(Math.random() * cancion.length)
    console.log (seleccionAzar)
    //se reproduce la cancion seleccionada en el bloque anterior
    cancion[seleccionAzar].playThis()
    index = seleccionAzar
}

//console.log(cancion[0].hablar())

//este es el modelo de funcion para reproducir una cancion
function prueba_b(){
    cancion[0].playThis()
    index = 0
}


//las funciones de los botones de las canciones
function bot1(){
    cancion[0].playThis()
    index = 0
}
function bot2(){
    cancion[1].playThis()
    index = 1
}
function bot3(){
    cancion[2].playThis()
    index = 2
}
function bot4(){
    cancion[3].playThis()
    index = 3
}
