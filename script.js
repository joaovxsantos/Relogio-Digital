
function horas() {

    let h1 = document.getElementsByTagName("h1")[0]

    let here = new Date()

    let horario = corrigir(here.getHours()) + ":" + corrigir(here.getMinutes()) + ":" + corrigir(here.getSeconds());

    h1.innerHTML = horario
}


function corrigir(numero) {
    if (numero < 10) {
        numero = "0" + numero

    }
    return numero
}


horas()
setInterval(horas, 1000)