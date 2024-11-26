// var i = 10 ;
// console.log(i);

// for(var i=0;i<10;i++)
// {
//     console.log(i);

// }

// console.log("value after loop", i);

// var sum ;
// sum = 10 ;
// function getSum(a,b)
// {
//     sum = a+b ;
//     console.log(sum);
//     var ss = 80 ;

// }
// getSum(10,20)
// console.log(sum);
// console.log(ss);

// let i = 90 ;
// for(let i=0;i<9;i++)
// {
//     console.log(i);

// }
// console.log(i);

// const a = 20 ;
// console.log(a);

//  a = 78 ;

// const myArray = [1,2,3,4]
// console.log(myArray);
// // myArray = [5,6,7,8]

// myArray.push(9);
// myArray.shift();
// console.log(myArray);

// let i = 10 ;
// if(i==10)
// {
//     let i = 5 ;
//     console.log(i);
// }
// console.log(i);

// var x = 0 ;
// function child(){
//     console.log(x);
//     var x = 1 ;
//     // let x = 1 ;
//     // const x = 1 ;
//     console.log(x);

// }
// child()

// console.log(i);
// let i = 90 ;

// Template literals
// let isMember = true ;
// const ex = `Your price is ${isMember ? "20rs" : "30rs"}`
// console.log(ex);

// Tagged literals
// let a = "hello"
// function func(str,str1)
// {
//     // console.log(str);
//     return str ;

// }
// // func("msg")
// let result = func`<l1>${a}</li>`
// console.log(result);

// function fucn1(){
//     return "Hello, from func1 "
// }

// const ex = `Rob jim bill ${()=>fucn1()}`
// console.log(ex);

// function func2(str, f)
// {
//     return str[0]+f
// }

// const toggle = func2`Rob bin jim ${fucn1()}`
// console.log(toggle);

// function updates and rest operator
// function getArea(x,y,s = 'r')    //default values
// {
//     if(s === 'r')
//     {
//         return x*y
//     }else if(s == 't'){
//         return (x*y)/2
//     }
// }

// const area = getArea(2,5, 't')
// console.log(area);

// rest and spread

//rest
// function func(numberList, ...restOfnums)
// {
//     console.log(numberList);
//     console.log(restOfnums);    //array

// }
// func(1,2,3,4,5,6)

// spread
// function func1(a,b,c,d,e,f)
// {
//     console.log(a,b,c,d,e,f);

// }
// let numbers = [1,2,3,4,5,6]
// func1(...numbers)           //array spreaded

// function Ball(radius, x, y)    //constructor function-->class
// {
//     this.radius = radius ;
//     this.x = x ;
//     this.y = y ;
// }

// let args = [10,20,30]
// const ball2 = new Ball(...args)   //created object and spred arguments
// console.log(ball2);

// const numbers = [1,2,3,4,6,7,8,9,45]
// console.log(Math.max(...numbers));

// const others = ['a','b','x']
// const myArray = [1,2,3,...others,4,5,6]
// console.log(myArray);

// let myArray = [1,2,3,4]
// // let myArray1 = myArray.slice()
// let myArray1 = [...myArray]     //to create copy of shallow copy of array
// myArray1.push(5)
// console.log(myArray1);
// console.log(myArray);

// let obj = {
//     a : "hello"
// }
// let func = ()=>{
//     console.log(this);

// }

// func()

// let newFunc = function func1(){
//     console.log(this);

// }
// newFunc()

// destructuring
function func({ name: myName, age, city }) {
  console.log(`my name is ${myName} and age is ${age} living in ${city}`);
}
let info = {
  name: "aniket",
  age: 10,
  city: "kolhapur",
};
func(info);
