const d = document.getElementById("dibujote")
const text = document.getElementById("texto")
const boton = document.getElementById("botoncito")
let lienzo = d.getContext("2d")
let yi = 0
let xf = 0
let ancho = d.width

boton.addEventListener("click", botonClick)

function dibujar(color, xInicial, yInicial, xFinal, yFinal) {
    lienzo.beginPath()
    lienzo.strokeStyle = color
    lienzo.moveTo(xInicial, yInicial)
    lienzo.lineTo(xFinal, yFinal)
    lienzo.stroke()
    lienzo.closePath()
}

function botonClick() {
    let lineas = parseInt(text.value)
    let l = 0
    let espacio = ancho / lineas

    for (l = 0; l < lineas; l++) {
        yi = espacio * l
        xf = espacio * (l + 1)
        dibujar("red", 0, yi, xf, 300)
    }

    dibujar("red", 1,1,1,299);
    dibujar("red", 1,299,299,299);
}