
function horas(){

let h1 = document.getElementsByTagName("h1")[0]

let here = new Date()

let horario = here.getHours() + ":" + here.getMinutes() + ":" + here.getSeconds();

h1.innerHTML = horario
if(here.getSeconds() < 10){
    let horario = here.getHours() + ":" + here.getMinutes() + ":" + "0" + here.getSeconds();
    h1.innerHTML = horario
}
else if(here.getMinutes() < 10){
    let horario = here.getHours() + ":" + "0" + here.getMinutes() + ":" + "0" + here.getSeconds();

}


}


setInterval(horas, 1000)