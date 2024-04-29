console.log("hola mundo")

function prueba_b(){
    console.log ("me haz presionado")
}

class Metadatos {
    constructor (nombre, artista, salida){
        this.nombre = nombre
        this.artista = artista
        this.salida = salida
    }
    hablar(){
        return `en ${this.salida} salió la cancion ${this.nombre} del artista ${this.artista}`
    }
}


var cancion = [
    new Metadatos("Enter sandman", "Metalica", 1991), 
    new Metadatos ("Aca entre nos", "Vicente Fernades", 1992), 
    new Metadatos ("Tu falta de querer", "Mon laferte", 2015)
]

console.log(cancion[0].hablar())

function bot1(){
    alert (cancion[0].hablar())
}
function bot2(){
    alert (cancion[1].hablar())
}
function bot3(){
    alert (cancion[2].hablar())
}
