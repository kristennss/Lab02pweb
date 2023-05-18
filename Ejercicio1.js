var numerDia;
var date=new Date();

function getDay(numerDia=date.getDay()){
    console.log(numerDia);  
    let day;
    switch(numerDia){
        case 0:
            day= "Domingo";
            break;
        case 1:
            day="Lunes";
            break;   
        case 2:
            day= "Martes";
            break;
        case 3:
            day="Miercoles";
            break;  
        case 4:
            day="Jueves";
            break;   
        case 5:
            day= "Viernes";
            break;
        case 6:
            day="Sabado";
            break;         

    }
    console.log(day);
    document.querySelector("#diadehoy").textContent=day;
}