function dataWithdrawal(posi, money){ //funcion retiro
    let flag = 4
    let y = 0
    do{
        withdrawal = Number(prompt("Cuantos billetes de $50.000 desea retirar:"))
        
    }while(withdrawal < 1)

    if (withdrawal > (money/50000)){
        alert("Fondos Insuficientes")
    }else{
        do{
            pin = Number(prompt("Ingrese su pin de acceso:"))
            flag--
                y = 1
                if(pin == data[posi].pin){
                    flag = 1
                    y = 0
                }else if(flag == 1){
                    pin = data[posi].pin
                }
        }while(pin !== data[posi].pin)

        if(y===1){
            alert("Se han acabado los 3 intentos de ingreso del pin!")
        }else{
            if(money == data[posi].profile.count1.amount){
                Newamount = (money - withdrawal*50000)
                data[posi].profile.count1.amount = Newamount;
                return alert(`Usted ha retirado $${withdrawal*50000} y su nuevo saldo es $${Newamount}`)
            }else{
                Newamount = (money - withdrawal*50000)
                data[posi].profile.count2.amount = Newamount;
                return alert(`Usted ha retirado $${withdrawal*50000} y su nuevo saldo es $${Newamount}`)
            }
        }
        
    }
}

function consign(pay, posi, money){ //funcion consignacion
    do{
        consign1 = Number(prompt("Cuanto desea condignar:"))
    }while(consign1 <= 0)

    if(money == data[posi].profile.count1.amount){
        Newamount = (money + consign1)
        data[posi].profile.count1.amount = Newamount;
    }else{
        Newamount = (money + consign1)
        data[posi].profile.count2.amount = Newamount;
    }
    if(pay == 1){
        w = "efectivo"
    }else{
        w = "cheque"
    }
    return alert(`Usted ha depositado $${consign1} en ${w} y su nuevo saldo es $${Newamount}`)
}

function transfer(posi, money){ //transferencia entre cuentas
    do{
        trans = Number(prompt("Cuanto desea transferir a su otra cuenta:"))
        z = 1
        if (trans > (money)){
            alert("Fondos Insuficientes")
            z = 0
        }
    }while(trans <= 0 || z !== 1)
    if(z == 1){
        if(money == data[posi].profile.count1.amount){
            Newamount1 = (data[posi].profile.count1.amount - trans)
            data[posi].profile.count1.amount = Newamount1;
            Newamount2 = (data[posi].profile.count2.amount + trans)
            data[posi].profile.count2.amount = Newamount2;
        }else{
            Newamount1 = (data[posi].profile.count1.amount + trans)
            data[posi].profile.count1.amount = Newamount1;
            Newamount2 = (data[posi].profile.count2.amount - trans)
            data[posi].profile.count2.amount = Newamount2;
        }
        return alert(`La transferencia fue exitosa\nNuevos Saldos\nCuenta1: $${Newamount1}\nCuenta2: $${Newamount2}`)
    }
}

function consult(posi, money){
    if(money == data[posi].profile.count1.amount){
        return alert(`El saldo de la cuenta es: $${money}`)
    }else{
        return alert(`El saldo de la cuenta es: $${money}`)
    }

}

//datos del usuario
let pin
const data = [{
    name: "user1",
    id:1111,
    pin: 9090,
    profile:{
        count1:{
            amount: 200000
        },
        count2:{
            amount: 150000
        }
        }
    },
    {
        name: "user2",
        id: 2222,
        pin: 1010,
        profile:{
            count1:{
                amount: 100000
            },
            count2:{
                amount: 50000
            }
            }
    }]


do{
    var x = 1
    var flag = 4
    let cc = Number(prompt("Ingrese su cedula: "))
    if(cc == data[0].id || cc == data[1].id){
        if(cc == data[0].id){
            do{
                selectAccount = Number(prompt("----CUENTAS----\n1.Cuenta numero 1\n2.Cuenta numero 2\nA que cuenta dese ingresar:"))
                if(selectAccount >= 3 || selectAccount <= 0){
                    alert("¡Introduzca una opcion valida!")
                }
            }while(selectAccount >= 3 || selectAccount <= 0)
            switch(selectAccount){
                case 1:
                    money = data[0].profile.count1.amount
                break;
                case 2:
                    money = data[0].profile.count2.amount
                break;
            }
        }else{
            do{
                selectAccount = Number(prompt("----CUENTAS----\n1.Cuenta numero 1\n2.Cuenta numero 2\nA que cuenta dese ingresar:"))
                if(selectAccount >= 3 || selectAccount <= 0){
                    alert("¡Introduzca una opcion valida!")
                }
            }while(selectAccount >= 3 || selectAccount <= 0)
                        switch(selectAccount){
                case 1:
                money = data[1].profile.count1.amount
                break;
                case 2:
                money = data[1].profile.count2.amount
                break;
            }
        }
        do{
            value = Number(prompt("1.Retiro\n2.Consignacion\n3.Transaccion a la otra cuenta\n4.Consultar Saldo\n5.Salir del cajero\n\nSelecciones la opcion deseada:"))
            if(value > 5 || value < 1){
                alert("¡Introduzca una opcion valida!")
            }
            }while(value > 5 || value < 1 )
            switch(value){
                case 1:
                    if(cc == data[0].id && money == data[0].profile.count1.amount){
                        dataWithdrawal(0,money)
                    }else if(cc == data[0].id && money == data[0].profile.count2.amount){
                        dataWithdrawal(0, money)
                    }else if( cc == data[1].id && money == data[1].profile.count1.amount){
                        dataWithdrawal(1, money)
                    }else if( cc == data[1].id && money == data[1].profile.count2.amount){
                        dataWithdrawal(1, money)
                    }
                break;
                case 2:
                    do{
                        consigValue = Number(prompt("1.Efectivo\n2.Cheque\nEn que formato es la consignacion:"))
                    }while(consigValue > 2 || consigValue < 1)
                    
                    if(cc == data[0].id && money == data[0].profile.count1.amount){
                        consign(consigValue, 0,money)
                    }else if(cc == data[0].id && money == data[0].profile.count2.amount){
                        consign(consigValue, 0, money)
                    }else if( cc == data[1].id && money == data[1].profile.count1.amount){
                        consign(consigValue, 1, money)
                    }else if( cc == data[1].id && money == data[1].profile.count2.amount){
                        consign(consigValue, 1, money)
                    }    
                break;
                case 3:
                    if(cc == data[0].id && money == data[0].profile.count1.amount){
                        transfer(0,money)
                    }else if(cc == data[0].id && money == data[0].profile.count2.amount){
                        transfer(0,money)
                    }else if( cc == data[1].id && money == data[1].profile.count1.amount){
                        transfer(1,money)
                    }else if( cc == data[1].id && money == data[1].profile.count2.amount){
                        transfer(1,money)
                    }
                break;
                case 4:
                    if(cc == data[0].id && money == data[0].profile.count1.amount){
                        consult(0,money)
                    }else if(cc == data[0].id && money == data[0].profile.count2.amount){
                        consult(0,money)
                    }else if( cc == data[1].id && money == data[1].profile.count1.amount){
                        consult(1,money)
                    }else if( cc == data[1].id && money == data[1].profile.count2.amount){
                        consult(1,money)
                    }
                break;
                case 5:
                    x = 0
                break;
                }
        }else{
            alert("¡No existe ese usuario en la base de datos!");
        }
}while(x == 1)