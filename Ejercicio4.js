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
}