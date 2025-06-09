const name="prince"

const repoCount=56

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String("Prince-pv")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));

const newString=gameName.substring(0,4)

console.log(newString);

const anotherString=gameName.slice(-8,4)

console.log(anotherString);

const newstring1="  prince  "
console.log(newstring1);
console.log(newstring1.trim());

const url="https://prince.com/prince%20vasani"

console.log(url.replace("%20","-"))

console.log(gameName.split('-'));

console.log(gameName);




