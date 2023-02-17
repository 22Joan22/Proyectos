let dolar = []
let dineroEntregado = []
let papeles = 0
let div = 0
let dineroRequerido = 200
let mostrar = document.getElementById("cositas")
let boton = document.getElementById("boton")

class Billete
{
    constructor(valor, cantidad)
    {
        this.valor = valor
        this.cantidad = cantidad 
    }
}

let billete100 = new Billete(100, 3)
let billete50 = new Billete(50, 2)
let billete20 = new Billete(20, 3)
let billete10 = new Billete(10, 2)

dolar.push(billete100, billete50, billete20, billete10)

boton.addEventListener('click', algoritmo)

function algoritmo() {
    let t = document.getElementById("dineroCantidad")
    dineroRequerido = parseInt(t.value)

    dolar.forEach((dolar) => 
    {
        if (dineroRequerido > 0) 
        {
            div = Math.floor(dineroRequerido / dolar.valor)

            if (div > dolar.cantidad) {
                papeles = dolar.cantidad
            } else {
                papeles = div
            }

            dineroEntregado.push(new Billete(dolar.valor, papeles))

            dineroRequerido = dineroRequerido - (dolar.valor * papeles)

        }
   
    })

    if (dineroRequerido > 0) {
        mostrar.innerHTML = "Perdon pero no tengo esa cantidad"
    } else {
       dineroEntregado.forEach(dineroEntregado => 
        { 
            mostrar.innerHTML += dineroEntregado.cantidad + " Billetes de " + dineroEntregado.valor + "<br><br>"
        })
    }

}