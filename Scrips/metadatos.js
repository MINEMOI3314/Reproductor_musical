console.clear;
console.log("hola mundo");

//variable que indica que se esta reporducionedo
var index;
class Reproduccion {
    constructor (nombre, artista, salida, duracionM, duracionS, portada, audio){
        this.nombre = nombre;
        this.artista = artista;
        this.salida = salida;
        this.duracionM = duracionM;
        this.duracionS = duracionS;
        this.portada = portada;
        this.audio = audio;
    }
    hablar(){
        return `en ${this.salida} salió la cancion ${this.nombre} del artista ${this.artista}`;
    }
    //funcion que reproducirá y mostrará los metadatos en pantalla
    playThis(){
        console.log(this.nombre);
        let change
        change = document.getElementById("songName");
        change.textContent = this.nombre;
        change = document.getElementById("artistName");
        change.textContent = "De: " + this.artista;
        change = document.getElementById("año_salida");
        change.textContent = "Del año: " + this.salida;
        change = document.getElementById("duracion");
        change.textContent = this.duracionM + ":" + this.duracionS;
        change = document.getElementById("Cover_display");
        change.src = this.portada;
        change = document.getElementById("AudioPlay");
        change.src = this.audio;
    }
}

var cancion = [
    new Reproduccion ("Enter sandman", "Metalica", 1991, 5, 31, "Media\\Cover\\The black album.jpg", "Media\\Audio\\Metalica - Enter Sandman.mp3"), 
    new Reproduccion ("Aca entre nos", "Vicente Fernades", 1992, 3, 16, "Media\\Cover\\Vicente Fernandes - Que raro tiene.jpg", "Media\\Audio\\Vicente Fernández - Acá Entre Nos.mp3"), 
    new Reproduccion ("Tu falta de querer", "Mon Laferte", 2015, 4, 38, "Media\\Cover\\Mon Laferte - vol1.jpg", "Media\\Audio\\Mon Laferte - Tu Falta De Querer.mp3"),
    new Reproduccion ("Fly me to the moon", "Franck Sinatra", 1964, 2, 27, "Media\\Cover\\Nothing but the best.jpg", "Media\\Audio\\Franck Sinatra - Fly Me To The Moon.mp3"),
    new Reproduccion ("This is what slow dancing feels like", "JVKE", 2024, 2, 25, "Media\\Cover\\this is what slow dancing feels like.jpg", "Media\\Audio\\JVKE - this is what slow dancing feels like.mp3"),
    new Reproduccion ("Room", "Kevian Kraemer", 2024, 2, 56, "Media\\Cover\\Room.jpg", "Media\\Audio\\Kevian Kraemer - Room.mp3"),
    new Reproduccion ("Time", "Pink Floyd", 2007, 6, 54, "Media\\Cover\\the dark side of the moon.jpg", "Media\\Audio\\Time.mp3"),
    new Reproduccion ("NIGHT DANCER", "Imase", 2022, 3, 31, "Media\\Cover\\night dancer.jpg", "Media\\Audio\\NIGHT DANCER.mp3"),
    new Reproduccion ("Oshakashama", "Radwimps", 2009, 3, 48, "Media\\Cover\\radwimps.jpg", "Media\\Audio\\Oshakashama.mp3"),
    new Reproduccion ("Asi no te amara jamas", "Amanda Miguel", 1981, 2, 51, "Media\\Cover\\amanda miguel.jpg", "Media\\Audio\\Así No Te Amará Jamás.mp3"),
    new Reproduccion ("Bling Bang Bang Born", "Creepy Nuts", 2024, 2, 48, "Media\\Cover\\bling bang.jpg", "Media\\Audio\\Bling-Bang-Bang-Born.mp3"),
    new Reproduccion ("Million years ago", "Adele", 2015, 3, 47, "Media\\Cover\\adele.jpg", "Media\\Audio\\Million Years Ago.mp3"),
    new Reproduccion ("Break stuff", "Limp Bizkit", 2000, 2, 47, "Media\\Cover\\break stuf.jpg", "Media\\Audio\\Break Stuff.mp3"),
    new Reproduccion ("Wake up", "Rage Against The Machine", 1992, 6, "04", "Media\\Cover\\rage against the machine.jpg", "Media\\Audio\\Rage Against The Machine - Wake Up.mp3"),
    new Reproduccion ("Wake me up", "Avicii", 2013, 4, "07", "Media\\Cover\\avicii.jpg", "Media\\Audio\\Wake Me Up.mp3")
]
const sonido = document.getElementById("AudioPlay");


function PlayPause(){
    console.log("play/pause");
    if (sonido.paused){
        sonido.play();
    }else{
        sonido.pause();
    }
}
function Stop(){
    console.log("detenido")
    sonido.load();
    sonido.pause();
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
sonido.addEventListener('ended', function(){
    Next();
})



//este es el modelo de funcion para reproducir una cancion
function prueba_b(){
    cancion[0].playThis()
    index = 0
}


//las funciones de los botones de las canciones
function bot1(){
    cancion[0].playThis();
    index = 0;
}
function bot2(){
    cancion[1].playThis();
    index = 1;
}
function bot3(){
    cancion[2].playThis();
    index = 2;
}
function bot4(){
    cancion[3].playThis();
    index = 3;
}
function bot5(){
    cancion[4].playThis();
    index = 4;
}
function bot6(){
    cancion[5].playThis();
    index = 5;
}
function bot7(){
    cancion[6].playThis();
    index = 6;
}
function bot8(){
    cancion[7].playThis();
    index = 7;
}
function bot9(){
    cancion[8].playThis();
    index = 8;
}
function bot10(){
    cancion[9].playThis();
    index = 9;
}
function bot11(){
    cancion[10].playThis();
    index = 10;
}
function bot12(){
    cancion[11].playThis();
    index = 11;
}
function bot13(){
    cancion[12].playThis();
    index = 12;
}
function bot14(){
    cancion[13].playThis();
    index = 13;
}
function bot15(){
    cancion[14].playThis();
    index = 14;
}
cancion[0].playThis()
    index = 0