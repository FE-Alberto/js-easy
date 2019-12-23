let now = new Date();
console.log(now);

let now = new Date('2019-1-23');
console.log(now);

let now = Date.parse('2012-01-26')
console.log(now);

let student = {
    name:"john",
    age:30,
    isAdmin:false,
    courses:['html','css','js'],
    wife:null
}

let json = JSON.stringify(student,null,4);

console.log(json);


let user = {
    name:"john smith",
    age:32
}
let user2 = JSON.parse(JSON.stringify(user));
console.log(user2);
