const message = "I am doctor.";
const number = 5;

console.log("message.length==12 ? I predict true");
console.log(message.length==12);

console.log("message.length!=12 ? I predict false");
console.log(message.length!=12);

console.log("message.toLowerCase().search('doctor')>=0 ? I predict true");
console.log(message.toLowerCase().search('doctor')>=0);

console.log("message.toLowerCase().search('engineer')>=0 ? I predict false");
console.log(message.toLowerCase().search('engineer')>=0);

console.log("number>9 ? I predict false");
console.log(number>9);

console.log("number<9 ? I predict true");
console.log(number<9);

console.log("number==9 ? I predict false");
console.log(number==9);

console.log("number!=9 ? I predict true");
console.log(number!=9);

console.log("number>=9 ? I predict false");
console.log(number>=9);

console.log("number<=9 ? I predict true");
console.log(number<=9);

console.log("(number==9 || number>9) ? I predict false");
console.log((number==9 || number>9));

console.log("(number<9 && number>3) ? I predict true");
console.log((number<9 && number>3));

console.log("!([5,6,9,7].includes(number)) ? I predict true");
console.log(!([3,6,9,7].includes(number)));