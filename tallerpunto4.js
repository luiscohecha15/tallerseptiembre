queue = []
register = []
x = 0
function generator(x) {
    return queue.push(x)
}

do{
    client = Number(prompt("----CLIENTE----\n1. Si\n2. No\nDesea tomar un turno:"))
    if(client == 1){
        x++
        generator(x);
        alert(`Turno numero ${x} generado`)
    }
}while( client !== 2)

if(client == 2 && (queue.length > 0)){
    console.log(queue)
}
if(queue.length > 0){
    do{
        turn = queue[0]
        register.push(`${queue[0]}`);
        queue.shift();
        alert(`----TURNO NUMERO: ${turn} ATENDIDO----\n\n----COLA DE ESPERA: ${queue}----\n\n----TURNOS TOMADOS HASTA EL MOMENTO: ${register}----`)
    }while(queue.length !== 0)
}
alert("No hay turnos por atender")