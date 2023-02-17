let arreglo1 = [1]
let arreglo2 = []
let auxiliar = 1
let contador = 0
let apuntador1 = 0
let apuntador2 = 1
let x = 0
let numeroDeVueltas = document.getElementById('cantidad_vueltas')
let botonAccionar = document.getElementById('accion')
let imprimir = document.getElementById('mostrarEnDocumento')

botonAccionar.addEventListener('click', run)

function run() {
    numeroDeVueltas = parseInt(numeroDeVueltas.value)
    
    if (numeroDeVueltas > 0) {
        imprimir.innerHTML += arreglo1 + "<br><br>"
        do {
            while (contador < arreglo1.length) {
                if (arreglo1[apuntador1] == arreglo1[apuntador2]) {
                    auxiliar = auxiliar + 1
                    apuntador1 = apuntador1 + 1
                    apuntador2 = apuntador2 + 1
                } else if (arreglo1[apuntador1] != arreglo1[apuntador2]) {
                    arreglo2.push(auxiliar,arreglo1[apuntador1])
                    apuntador1 = apuntador1 + 1
                    apuntador2 = apuntador2 + 1
                    auxiliar = 1
                }
                contador = contador + 1
            } 
        
            imprimir.innerHTML += arreglo2 + "<br><br>"
            contador = 0
            apuntador1 = 0
            apuntador2 = 1
            auxiliar = 1
            arreglo1.splice(0, arreglo1.length)
        
            for (let i = 0; i < arreglo2.length; i++) {
                arreglo1.push(arreglo2[i])
            }
             
            arreglo2.splice(0,arreglo2.length)
            x = x + 1  
        } while (x < numeroDeVueltas - 1)
    } else {
       location.reload()
    }      
}

