const categories = ["Electronics", "Fashion", "Books", "Home"];//10
console.log(categories[0]);
console.log(categories[categories.length-1]);

console.log(categories.includes("Books"));

categories.indexOf("Fashion");//1
categories.indexOf("Sports");//-1

categories.push("Sports");
const removed = categories.pop();
console.log(categories);
console.log(removed);

categories.splice(1, 1, "Games");
console.log(categories);
//push, pop, splice
//11
const stockAmounts = [4, 0, 7, 3, 0];
function calculateTotalStock(array) {
    let total = 0;
    for (const amount of array) {
        total += amount;
    }
    return total;
}

function countOutOfStock(array) {
    let count = 0;
    for (const amount of array) {
        if (amount === 0) {
            count++;
        }
    }
    return count;
}
const totalStock = calculateTotalStock(stockAmounts);
const outOfStock = countOutOfStock(stockAmounts);
console.log(totalStock);
console.log(outOfStock);

function calculateTotalStockWithIndex(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}
console.log(calculateTotalStockWithIndex(stockAmounts));
//כשרוצים לפשוט לעבור על המערך נשתמש בקונסט אופ ושרוצים לדעת
//  גם את האינדקס נשתמש בפור ארוך
//12

const user = {
    id: 1,
    firstName: "Dana",
    lastName: "Levi",
    age: 17
};
console.log(user.firstName);
console.log(user.age);
user.age = 18;
user.email = "dana@example.com";
console.log(`Hello, my name is ${user.firstName} ${user.lastName}, I am ${user.age} years old, and my email is ${user.email}.`);
console.log(user.firstName);
//13

const post = {
    id: 101,
    content: "JavaScript practice day",
    author: {
        id: 7,
        name: "Noa",
        username: "@noa_dev"
    },
    comments: [
        { id: 1, user: "@amit", text: "Good luck!" },
        { id: 2, user: "@lior", text: "Nice post" }
    ]
};
console.log(post.author.name);
console.log(post.author.username);
console.log(post.comments[0].text);
console.log(post.comments.length);
post.comments.push({
    id: 3,
    user: "@dana",
    text: "Thank you!"
});
console.log(post.comments.length);
console.log(post.author.name);
console.log(post.comments[1].user);
//14

const products = [
    { id: 1, name: "Laptop", price: 999, category: "Electronics", inStock: true },
    { id: 2, name: "Phone", price: 699, category: "Electronics", inStock: false },
    { id: 3, name: "Shoes", price: 120, category: "Fashion", inStock: true },
    { id: 4, name: "Backpack", price: 80, category: "Fashion", inStock: true }
];

for (const product of products) {
    console.log(product.id, product.name, product.price);
}

function countAvailableProducts(products) {
    let count = 0;

    for (const product of products) {
        if (product.inStock === true) {
            count++;
        }
    }

    return count;
}

console.log(countAvailableProducts(products));
function getProductNameById(products, id) {
    for (const product of products) {
        if (product.id === id) {
            return product.name;
        }
    }

    return "Product not found";
}
console.log(getProductNameById(products, 3));
console.log(getProductNameById(products, 99));


