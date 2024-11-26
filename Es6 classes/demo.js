// ES5
// function Hero(a,b,c)
// {
//     this.a = a ;
//     this.b = b ;
//     this.c = c ;
// }
// let obj1 = new Hero(10,20,30)
// console.log(obj1);


// ES6
class Hero{
    constructor(a,b,c,d){
        this._a=a;                //private variable
        this._b=b;
        this._c=c;
        this._d = d ;
    }
    powerUp(){
        this._d  += 5 ;
    }
    get a(){                            //getter methid
        console.log("Getting a"); 
        return this._a ;
    }
    set a(a){                            //setter methid
        this._a = a ;
    }
    static goodHero()                   //static method
    {
        return true
    }
}
// let arr = [10,20,30,40]
// let obj1 = new Hero(...arr)
// console.log(obj1);
// obj1.powerUp()
// console.log(obj1);

// obj1.a = 1000 ;
// console.log(obj1);
// console.log(obj1.a);
// console.log(Hero.goodHero());



class Human extends Hero{
    constructor(x,y,z,...variablesOfParent)   //rest
    {
        super(...variablesOfParent)           //spred
        this.x=x
        this.y=y
        this.z=z
    }
    powerUp(){                              //overrides 
        this.x += 100 ;
    }
}

let variables = [10,20,30,40]
let obj = new Human(500,600,700,...variables)    //spred
console.log(obj);
obj.powerUp();
console.log(obj);



