z=0;
x=0;
y=0;
a=0;
c=0;

function info() {

    cc = prompt("Ingrese su cedula:"); 
    do{
        type = prompt("Tipo: 1:Terminal, 2:Asesoria")
    }while(type <1 || type >2);
    if (type == 2){
        z++;
        do{
            people = prompt(" Seleccione 1:estudiante o 2:directivo")
        }while(people < 1 || people > 2);
        if (people == 1){
        x++;
        }else{
        y++;
        }
        do{
            transfer = prompt("¿Desea trasferirse a terminal de llamada? No:1/Si:2");
        }while(transfer <1 || transfer > 2);
        if(transfer ==1){
            z==z
        }else{
            z--;
            c++;
        }
    }else{
        c++;
    }
return cc , type, z, x, y, c
}
do {
    a++
    info();
    repeat=prompt("¿Quiere hacer otro ingreso? Si: 1, No: 2"); 

}while(repeat==1);


console.log("Numero de asesorias",z," estudiantes ", x," directivos ",y);
console.log("Numero de terminal de llamadas ",c);
console.log("Numero de usuarios ",a)