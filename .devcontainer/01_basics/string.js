const name="vikash"
const repoCount=30
console.log(name+repoCount+"Value")
console.log('Hello my name is ${name} and my repoCount is ${repoCount}');

const gameName=new String('subwaysafar')

console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)

console.log(gameName.charAt(4))
console.log(gameName.indexOf('r'))

const newString=gameName.substring(0,5)
console.log(newString);

const anotherString=gameName.slice(-8,4)
console.log(anotherString);

const newStringone="  vikash"
console.log(newStringone);
console.log(newStringone.trim());

const url="https://vikash.com/vikash%20jaiswal"
console.log(url.replace('%20','-'));

