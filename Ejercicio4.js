var input
let parameters
let url = ""
let codigo= ""

function returnCodigo(){
    let box = document.getElementById("box-content")
    input = document.getElementById("input")
    url = input.value
    input.value = ""
    let expresion = /(https:\/\/)?(meet.google.com\/)(...)-(....)-(...)(.+)?/i
    parameters = url.match(expresion)
    if(parameters != null) {
        
        codigo = `${parameters[3]}${parameters[4]}${parameters[5]}`
        box.innerHTML = 
        `<h1>El código es: ${codigo}</h1>
        <div>
        <button onclick='location.reload()'>Volver</button>
        </div>`
    }


}