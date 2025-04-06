//Primitive dataType

// 7 types : string ,number boolean, null,, undefined,symbol,BigInt

const score=100
const scoreValue =100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail
const id=Symbol('2333')
const anotherid=Symbol('2333')
console.log(id==anotherid)

//Reference (non primitive)

//Array , obejects,functions
const heros=["shaktiman","virat"];
const Mycode={
    name:"vikash",
    age:22,
    
}
const myfunction=function(){
    console.log("Hello javascript")
}
console.log(typeof myfunction)



// stack(primitive) ; Heap(Non-Primitive)

let mycollegeName="iitg"

let anotherName=mycollegeName
anotherName="indian institute of infomation techonology"
console.log(mycollegeName)
console.log(anotherName)

let user1={
    email:"vikash.kumar@iit",
    upi:"user@ybl",
}
let user2=user1

user2.email="vikash.google@"
console.log(user1)