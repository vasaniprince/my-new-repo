//Dates

let myDate=new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

let myCreateDate=new Date("01-14-2023")

// console.log(myCreateDate.toDateString());

let myTimeStamp=Date.now()

// console.log(myTimeStamp);

// console.log(myCreateDate.getTime());

// console.log(Math.floor(Date.now()/1000))

let newDate=new Date()

console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"Long"
})



