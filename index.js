

//promise creation

//creation -one 
const p1 = new Promise((resolve, reject) => {
 result = "my first promise"
 resolve(result) // ei value ta then or await er maje pabo
 reject("habla")// ei value ta catch er vetor
 //resolve reject function er khetre jake age pabe tare return korbe
})

// creation-1 er promise resolve
p1.then((result) => {
 console.log(result)
}).catch((result) => {
 console.log(result + "hhh")
})
console.log("end")



//creation -2 
const myFun = async () => {
 console.log("first myfun")
 return "hello"
}

//creation-2 er promise resolve
const myFun2 = async () => {
 console.log("hii")
 let result = await myFun();
 console.log(result)
 console.log("h2")
 return result;
}
myFun2();




const p3 = new Promise((resolve, reject) => {
 result = "my second promise"
 resolve(result) // ei value ta then
 //reject("habla")// ei value ta catch er vetor
 //resolve reject function er khetre jake age pabe tare return korbe
})

const myFun3 = async () => {
 try {
  let result = await p3;
  //resolve promise re chine
  console.log(result)
 } catch (error) {
  console.log(error)
 }



}
myFun3();



const p4 = new Promise((resolve, reject) => {
 result = "my second promise"
 //resolve(result) // ei value ta then
 reject("reject hoyle catch block e jabe")// ei value ta catch er vetor
 //resolve reject function er khetre jake age pabe tare return korbe
})

const myFun4 = async () => {
 try {
  let result = await p4;
  //resolve promise re chine
  console.log(result)
 } catch (error) {
  console.log(error)
 }

}
myFun4();

// const p1 = new Promise((resolve, rejeect) => {
//  resolve("my first promise");
// })



// const myFunWithPromis = async () => {
//  console.log("hi")
//  await myFun();
//  console.log("after")
//  let c = await p1;
//  console.log(c);
//  console.log("end")
//  return c;
// }
// let c = myFunWithPromis();
// console.log(c)
// console.log("last")




// const fullName = () => {
//  console.log("hello-1")
//  return "ramjan";
// }

// console.log("start")
// console.log(fullName())
// console.log("end")

//start
//hello-1
//ramjan
//end

// const fullName2 = async () => {
//  console.log("hello-start")
//   setTimeout(function () { console.log("Hello world") },1000);
//   console.log("hello-end")
//  return "ramjan";
// }

// console.log("start")
// console.log(fullName2())
// console.log("end")

//start
//hello-start
//end