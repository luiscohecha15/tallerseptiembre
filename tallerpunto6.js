const medical = [];
var menu = 0
function programarCita(patientname, date, hour, doctor, day, month, number) {
    const nuevaCita = {};
    patientname=prompt("Ingresar nombre");
        nuevaCita["nombre"] = patientname;
        day= prompt("ingrese el Dia de la cita");
        month= prompt("Ingrese el mes de la cita");
        hour= prompt("Hora de la cita HH:MM");
        nuevaCita["hora"] = (hour+"pm");
        doctor= prompt("Nombre del medico");
        nuevaCita["Nombre del medico"] = doctor;
        date = new Date(2023, month - 1, day);
        nuevaCita["Fecha de la cita"] = date
        medical.push(nuevaCita);
        number=(medical.length)
        alert("Su numero de cita es: "+number)
        return patientname, date, hour, doctor, day, month, number
}

function eliminar(){

    if(menu==2){
        if(medical.length==0){
            alert("No hay citas para eliminar");
        }else{
            x= prompt("Que numero de cita quiere eliminar");
            medical.splice(x-1, 1)
        }
    }    
}
function verCita(){
    if(medical.length==0){
        alert("No hay citas para ver");
    }else{
        medical.sort((a, b) => a["Fecha de la cita"] - b["Fecha de la cita"]);
        for(var i=0; i <medical.length; i++){
            const cita = medical[i];
            console.log(cita);
        }
    }
}
do {

    menu=Number(prompt("Desea Ingresar una cita marque 1 , Desea cancelar una cita marque 2 , Desea ver citas marque 3"));
    switch(menu) {
        case 1: programarCita(); break;
        case 2: eliminar(); break;
        case 3: verCita(); break;
    }
    
    repeat=prompt("Si desea ingresar al menu marque 1, Desea salir marque 2"); 
    
}while(repeat==1);

console.log(medical);