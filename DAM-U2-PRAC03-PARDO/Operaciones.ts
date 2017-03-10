export class Operaciones {
    
    constructor(){

    }

    add(num1:number, num2:number):number{

        return num1 + num2;
    }

    sub(num1:number, num2:number):number{
        return num1 - num2;
    }

    isPrime(num:number):boolean{
        if(num < 2) return false;
        for (let i = 2; i < num; i++){
            if(num % i == 0){
                return false;
            }
        }
        return true;
    }

    factorial(num:number):number{
        let fact:number = 1;
        for (let i = 1; i<num; i++, fact*=i){}
        return fact;
    }   
}