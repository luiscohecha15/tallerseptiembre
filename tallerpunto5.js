 function minus(posi, withdrawal){//funcion resta del stock

    shopping[posi].subtotal =+ (porduct[posi].price * withdrawal)
    shopping[posi].stock =+ withdrawal
    porduct[posi].stock =  porduct[posi].stock - withdrawal
    return;
}

function withdrawal(posi){ //funcion para pedir cuanto de cada producto
    do{
    withdrawal = Number(prompt(`EN STOCK: ${porduct[posi].stock}\n\nCuanto desea añadir al carro del producto (${porduct[posi].name}):`))
    }while(withdrawal < 1)
    return withdrawal
}
const shopping = [{ //objetos del carrito
    name: "bicicleta",
subtotal: 0,
stock:0},
{ name: "patines",
subtotal: 0,
stock:0},
{ name: "patineta",
subtotal: 0,
stock:0}]

const porduct = [{ //objetos de base de datos
    name: "bicicleta",
price: 150000,
stock:1},
{ name: "patines",
price: 80000,
stock:2},
{ name: "patineta",
price: 50000,
stock:3}]

alert("Bienvenido a mi tienda online")
do{ 
    do{
        welcome = Number(prompt(`---PRODUCTOS---\n\n1. ${porduct[0].name} = $${porduct[0].price}\nStock: ${porduct[0].stock}\n\n2. ${porduct[1].name} = $${porduct[1].price}\nStock: ${porduct[1].stock}\n\n3. ${porduct[2].name} = $${porduct[2].price}\nStock: ${porduct[2].stock}\n\nDigite 4 para salir\n\nQue desea agregar al carrito, seleccione la opcion:`))
    }while(welcome !==1 && welcome !==2 && welcome !==3 && welcome !==4)

    switch(welcome){
        case 1:
            if(porduct[0].stock > 0){
                withdrawal(0);
            }
            if(porduct[0].stock == 0){
                alert(`No hay mas stock del producto (${porduct[0].name})`)
            }else if(withdrawal > porduct[0].stock){
                alert("Excediste la el stock disponible, vuelve a selccionar")
            }else if((porduct[0].stock >= withdrawal)){
                
                minus(0,withdrawal);
            }
            
        break;
        case 2:
            if(porduct[1].stock > 0){
                withdrawal(1);
            }
            if(porduct[1].stock == 0){
                alert(`No hay mas stock del producto (${porduct[1].name})`)
            }else if(withdrawal > porduct[1].stock){
                alert("Excediste la el stock disponible, vuelve a selccionar")
            }else if((porduct[1].stock >= withdrawal)){
                minus(1,withdrawal);
            }            
        break;
        case 3:
            if(porduct[2].stock > 0){
                withdrawal(2);
            }
            if(porduct[2].stock == 0){
                alert(`No hay mas stock del producto (${porduct[2].name})`)
            }else if(withdrawal > porduct[2].stock){
                alert("Excediste la el stock disponible, vuelve a selccionar")
            }else if((porduct[2].stock >= withdrawal)){
                minus(2,withdrawal);
            }
        break;
        case 4:
            x = 1
        break;
    }
x = Number(prompt("Desea agregar mas productos? digite 0; si desea terminar y ver el total con productos digite 1:"))
}while(x !== 1)
console.log(shopping)
alert(`1. ${shopping[0].name}\nSubtotal = $${shopping[0].subtotal}\nStock: ${shopping[0].stock}\n\n2. ${shopping[1].name}\nSubtotal = $${shopping[1].subtotal}\nStock: ${shopping[1].stock}\n\n3. ${shopping[2].name}\nSubtotal = $${shopping[2].subtotal}\nStock: ${shopping[2].stock}\n\nTOTAL: $${shopping[0].subtotal+shopping[1].subtotal+shopping[2].subtotal}`)
