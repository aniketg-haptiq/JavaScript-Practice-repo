// setTimeout(()=>{
//     console.log("time 1 executed")
    
// },10)
// console.log("I am executed");
// setTimeout(() => {
//     console.log("time 2 executed");
    
// }, 1000);

// for(let i=0;i<100000;i++)
// {
//     if(i==1000)
//     {
//         console.log("loop executed");
        
//     }
// }


// callback
// function func(arg1){
//     console.log("Hieee");
//     arg1()
// }

// function func1(){
// console.log("Hellooo");

// }
// func(func1)


// function func(x){
//     console.log(x);
    
//     return function(y)
//     {
//         console.log(y);
        
//     }
// }

// func(3)(4)


// Promise syntax
// console.log("Hello");

// let myPromise = new Promise((resolve, reject)=>{

//     console.log("I am running");      //it will run at all
//     console.log("I am also running");
    
    
// })

// console.log(myPromise);  



// then()   catch()

let myPromise = new Promise((resolve,reject)=>{
    console.log("I am running yaaar");
    // reject("I am not done")
    resolve("I am done hey");
    // reject()
    
})
console.log(myPromise);

myPromise.then((msg)=>{     //executed at last
    console.log(msg);
})
myPromise.catch((msg)=>{
    console.log(msg);
    
})
console.log("Hello i am aniket");
// console.log(myPromise);

