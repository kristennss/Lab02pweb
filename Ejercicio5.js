let numElementos;
let miTabla = "<div><table><tr>";
let sumatoria = 0;
const numerosTabla = [];

function generarTabla(){
    numElementos = document.getElementById("numElemntos").value;
    console.log(numElementos);
    for (let i = 0; i < numElementos; i++) {
      numerosTabla[i] = Math.floor(Math.random() * 200);
    }
    console.log(numerosTabla); 
    let j = 0;
}

function sumar(){

}