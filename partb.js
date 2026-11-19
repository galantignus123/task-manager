function calculateOrderTotal(unitPrice, quantity) {
return unitPrice * quantity;
}
const orderTotal = calculateOrderTotal(35, 4);
console.log(orderTotal); // 140
console.log(calculateOrderTotal(3, 21));
//function calculateOrderTotal(unitPrice, quantity) {
//console.log(unitPrice * quantity);!טעות 
//return unitPrice * quantity;: תיקון
//}
//const result = calculateOrderTotal(20, 3);
//console.log(result);
//שאלה 6
function getLetterGrade(grade) {
    if (grade < 0 || grade > 100) {
        return "Invalid grade";
    } else if (grade >= 90) {
        return "A";
    } else if (grade >= 80) {
        return "B";
    } else if (grade >= 70) {
        return "C";
    } else if (grade >= 60) {
        return "D";
    } else {
        return "F";
    }
}
console.log(getLetterGrade(95));
console.log(getLetterGrade(83));
console.log(getLetterGrade(70));
console.log(getLetterGrade(48));
console.log(getLetterGrade(101));
//שאלה 7
//function greet(name) {
//return `Hello, ${name}`;
//}
const greet = (name) => `Hello, ${name}`;//short

//function calculateFinalPrice(price, discountPercent) {
//const discount = price * discountPercent / 100;
//const finalPrice = price - discount;
//return finalPrice;
//}
const calculateFinalPrice = (price, discountPercent) => {
    const discount = price * discountPercent / 100;
    const finalPrice = price - discount;
    return finalPrice;
};
const n=greet("gal");
console.log(n);
const p=calculateFinalPrice(160,18);
console.log(p);
//שאלה 8
const calculatePrice=(price1,price2)=>{
    if(price1<price2){return price1*0.5+price2;}
    else return price1+price2*0.5;
}
const isExpensive=(price)=>{price>500?true:false;}

//const square = number => {
//number * number;
//};חסר return או שאפשר להוריד את הסוגריים המסולסלים 
//תרגיל 9
const product = {
    id: 1,
    name: "Laptop",
    price: 999,
    inStock: true
};

// א
function getProductSummary(product) {
    return `${product.name} - ${product.price} NIS`;
}

// ב
function getAvailability(product) {
    return product.inStock ? "Available" : "Unavailable";
}

// ג
const summary = getProductSummary(product);
const availability = getAvailability(product);

console.log(summary);
console.log(availability);
//ד
//It is better to pass product as an argument
//  because it makes the function independent 
// and reusable. 
// The function can work with different products 
// without depending on an external variable.

