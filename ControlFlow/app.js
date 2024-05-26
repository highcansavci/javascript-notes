// Exercise One
let password;
if (password === 8) {
    console.log("Welcome.");
} else if (password < 8) {
    console.log("Password is too short.");
} else if (password > 8) {
    console.log("Too Long Password.")
    console.log("Password should be 8 characters.")
} else {
    console.log("Please provide a password.");
}

// Exercise Two
let fruit = "Banana";
switch (fruit) {
    case "Banana":
        console.log("Banana is good!");
        break;
    case "Orange":
        console.log("I am not a fan of orange.");
        break;
    case "Apple":
        console.log("How do you like the apples?");
        break;
    default:
        console.log("I have never heard of that fruit.");
        break;
}

// Exercise Three
for (let i = 0; i < 1001; i++) {
    console.log("Can Savcı", i);
}

// Exercise Four
let idx = 10;
while (idx < 110) {
    console.log("Can Savcı");
    idx++;
}

// Exercise Five
let index = 20;
do {
    console.log("Can Savcı");
    index++;
} while (index < 420);

// AND -> &&
// OR -> ||
// NOT -> !
// Arrays -> 0 index based

// Exercise Six
const favSingers = ['Simge Sağın', 'Mabel Matiz', 'Hayko Cepkin'];
console.log(favSingers[0]);
const favNumbers = [12, 23, 36, 45];
console.log(favNumbers);
const mixedArr = ["Can", ["Can", "Savcı"], 123, true];
console.log(mixedArr[0]) // Can
console.log(mixedArr[1][0]) // Can
console.log(mixedArr[1][1]) // Savcı
console.log(mixedArr[2]) // 123
console.log(mixedArr[3]) // true

// Array Operations
const fruits = [
    "apples",
    "pomegranate",
    "mango",
    "strawberries",
    "pineapple",
    "grapefruit"
];

const moreFruits = [
    'lemon',
    'apple'
]

console.log(fruits); // apples, pomegranate, mango, strawberries, pineapple, grapefruit
fruits.push("banana");
console.log(fruits); // apples, pomegranate, mango, strawberries, pineapple, grapefruit, banana
console.log(fruits.length); // 7
fruits.pop();
console.log(fruits); // apples, pomegranate, mango, strawberries, pineapple, grapefruit
fruits.shift();
console.log(fruits); // pomegranate, mango, strawberries, pineapple, grapefruit
fruits.unshift("orange");
console.log(fruits) // orange, pomegranate, mango, strawberries, pineapple, grapefruit
const totalFruits = fruits.concat(moreFruits);
console.log(totalFruits); // orange, pomegranate, mango, strawberries, pineapple, grapefruit, lemon, apple
console.log(fruits.includes("mango")); // true
console.log(moreFruits.join("-")); // "lemon-apple"
console.log(moreFruits.reverse()); // "apple", "lemon"
console.log(fruits.slice(0, 2)); // "orange", "pomegranate"

const numbers = [3, 5, 1, 2, 4];
console.log(numbers.sort()); // 1, 2, 3, 4, 5

// Objects
const person = {
    firstName: "Can",
    lastName: "Savcı",
    age: 28,
    location: ["Planet", "Earth"],
    isProgrammer: true
};

console.log(person);
console.log(person.length); // undefined
console.log(typeof person); // object
console.log(person.firstName); // "Can"
console.log(person['lastName']); // "Savcı"
person.middleName = "Heval";
console.log(person["middleName"]); // "Heval"
person.favoriteCities = ["Ankara", "Izmir"];
console.log(person["favoriteCities"]) // ["Ankara", "Izmir"]
delete person.middleName;

// Exercise Seven
const car = {
    type: "Audi",
    model: 'A4',
    color: "black"
};

console.log(typeof car);
console.log(car.type)
car.type = "Toyota";
car.wheels = "Rounded";
console.log(car);

// Exercise Eight
function myFunction(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

const result = myFunction(20, 10);
console.log(result);

// Function Expression
const greetings = function (user) {
    console.log(`Hello ${user}`);
};

greetings("Can");

function showCallFunction(callFunction) {
    const value = 10;
    callFunction(value);
}

showCallFunction(function (value) {
    console.log(value);
});

function greet(name, cb) {
    console.log(`Hello ${name}`);
    cb();
}

function callback() {
    console.log("I am a callback function");
}

greet("Can", callback);

// Exercise Nine
function showCallFunc(fn) {
    const value = 10;
    fn(value);
}

showCallFunc(function (value) {
    console.log(value);
});

// Methods
const personWithMethod = {
    name: "Can",
    age: 28,
    greetMethod: function () {
        return `Hello, my name is ${personWithMethod.name} and I am ${personWithMethod.age} years old.`;
    }
}
console.log(personWithMethod.greetMethod());