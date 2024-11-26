// const obj = {
//     "abc" : 120,
//     "xyz" : 23,
// }

// let contact = new Map();
// contact.set("abc",1234)
// contact.set("xyz",899);
// console.log(contact.get("abc"));
// console.log(contact.entries());

// size()    get() set() clear() entries() forEach() key() values()

// let map1 = new Map()
let abc = { name: "aniket" };
// map1.set(abc, "hello")
// console.log(map1.get(abc));
// abc = null ;
// console.log(map1.entries());

// let map2 = new WeakMap()
// map2.set(abc,"hieee")
// console.log(map2.get(abc));
// abc = null
// console.log(map2.get(abc));

// let func = ()=>{}
// let map4 = new WeakMap()
// // map4.set(4,5)
// // map4.set(2,3)
// // map4.set("abc",888)
// // console.log(map4.entries());
// map4.set(func,12)
// console.log(map4.get());

//Set
let emp = new Set([1, 2, 3, 2, 4, 1]);

console.log(emp);

emp.forEach((val) => {
  console.log(val);
});
// emp.add("aniket")
// console.log(emp);
// console.log(emp.size);
console.log(emp.entries()); //key value pair like map
const x = emp.entries();
console.log(x);

console.log(emp.values().next().value);
console.log(emp.keys());

// WeakSet
// let emp = {
//     name: "aniket",
//     age: 23
// }
// let emp2 = {
//     name:"dinga",
//     age : 24
// }
// let set1 = new WeakSet();
// set1.add(emp)
// set1.add(emp2)
// console.log(set1);
// console.log(set1.has(emp));
// // console.log(set1.get(emp));    //no
// // console.log(set1.entries());   //no

// Symbole datatype
// console.log(String("a")===String("a"));
// console.log(Number(10)===Number(10));     //=== compares data and datatype
// console.log(String("10")==Number(10));   //== ony compares data

// console.log({} === {} );                 //falase
// console.log(undefined === undefined);   //true

// console.log(Symbol("a")===Symbol("a"));   //false

// const a =Symbol()
// const b = Symbol()
// console.log(a == b);
// console.log(Symbol.for("a") === Symbol.for("a"));  //true

// usecaase of Symbol

const CARCOLOR = Symbol();
const CARMODEL = Symbol();
const CARNAME = Symbol();

class Car {
  constructor(color, model, name) {
    this[CARCOLOR] = color;
    this[CARMODEL] = model;
    this[CARNAME] = name;
    // this.color = color
    // this.model = model
    // this.name = name
  }
}
let obj = new Car("green", "A1", "Innova");
console.log(obj);
obj[CARCOLOR] = "blue";
console.log(obj);
