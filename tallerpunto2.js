booking =[]
users = {}
x = 0
y = 1
do{
    x++
    do{
        people = prompt("¿Cuantas personas son?");  
    }while(people <1 || people>6)
    
    users["reservacion"] = x
    users["people"]= people
    
    do{
        smoke = prompt("Las personas  fuman? Si:1/No:2");
    }while(smoke<1 || smoke>2);
    
    if(smoke == 1){
        smoke = true;
    }else{
        smoke = false    
    }
    users["smoke"] = smoke;
    
    do{
        pets = prompt("Las personas tienen mascotas? Si:1/No:2");
    }while(pets<1 || pets>2);
    
    if(pets == 1){
        pets = true;
    }else{
        pets = false    
    }
    users["pets"] = pets;
    
    if(people <= 2 && pets == false ){
        do{
            room = prompt(" Tipo de habitaciones 1: Individual, 2: Doble, 3:Familiar");
        }while(room<1 || room>3);
        
        if(room==1){
            room = "individual";
        
        }else if(room==2){
            room = "doble";
    
        }else{
            room = "familiar";
        }
    }else if(people<=4 && pets==false){
        do{
            room = prompt(" Tipo de habitaciones 1: Doble, 2:Familiar");  
        }while(room<1 || room>2);
        if(room==1){
            room = "doble";
            }else{
                room = "familiar";
            }
        }else{
            do{
                room = prompt(" Tipo de habitacion 1:Familiar");  
            }while(room>1);
            room = "familiar";
        }
    users["type"] = room;
    names = prompt("Ingresar nombre");
    users["name"] = names
    country = prompt("Ingrese el pais de origen");
    users["country"] = country

    do{
        day = prompt("Cuantos dias se va a hospedar");
    }while(day<=1)
    users["days"] = day
    booking.push(users)

    do{

        a = prompt("¿Quiere hacer otra reserva? Si: 1, No:2");
        if(a==1){
            y=1
        }else{
            y=2
        }

    }while(a<1 || a>2)

}while(y==1)
console.log(booking)
alert("Hay "+ booking.length+" reservaciones")
console.log("Hay "+ booking.length+" reservaciones");