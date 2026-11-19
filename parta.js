const myName="gal";//1א
const age =17;
const isStudent = true;
const introduction=`My name is ${myName}, I am ${age} years old, student://1ב
${isStudent}`;

console.log(introduction);//1ג
console.log(typeof myName); 
console.log(typeof age); 
console.log(typeof isStudent); 

const course = "JavaScript";//1ד
let completedExercises;
const isReady = false;
console.log(typeof course);//string
console.log(typeof completedExercises);//
console.log(typeof isReady);//bool

let completedCount=0;//1ה
 completedCount=1;//let הוא משתנה לא קבוע שניתן להמיר בו ערכים 

const priceText = "120";
const quantityText = "3";
const orderNumber = 5021;
const numberPrice =Number(priceText);
const numberQuantity=Number(quantityText);
const totalPrice= numberPrice*numberQuantity;
console.log(totalPrice);
const orderidText=String(orderNumber);

const price = "120";
const quantity = 3;
let total = price + price + price;
console.log(total);//המחשב קולט את הערכים כסטרינג לכן יש טעות . יש להמיר לאינט 
const numprice=Number(price);
total=numprice+numprice+numprice;
console.log(total);//תיקון בעיה 
console.log(Number("8") + 2);//10
console.log(String(8) + 2);//82 
//שאלה 3
const my_age = 17; //גיל
const has_Permission = true; //אישור
const is_Registration_Open = true; //הרשמה פתוחה
const participant_Id = 24; //מספר משתתף

if( my_age >= 18 ||(has_Permission && is_Registration_Open)){
  console.log("eligible");  
}
else{
    console.log("eligible not"); 
}
console.log(participant_Id % 2 === 0);//short

if (participant_Id % 2 === 0) {//long
    console.log(true);
} else {
    console.log(false);
}

if (is_Registration_Open && participant_Id === 24) {//3ג
console.log("registered");
}
if (!is_Registration_Open){
console.log(closed);
}
else if(!has_Permission){
    console.log("waiting for approval");
}
else console.log("registered");
//4
const completed = true;
let status;
if (completed) {
status = "Done";
} else {
status = "In progress";
}
 status = completed ? "Done" : "In progress";
 const stock =1;
 const stockMessage=stock>0? "stock in":"stock of out";

const price1 = 750;
const label = price1>= 700 ? "Premium" : "Regular";
console.log(label);//הפלט יהיה premium

// we use ternary when the conditions selects between two valus and if/else when there are
//  more then two possible states or to perform different actions based on the condition.

