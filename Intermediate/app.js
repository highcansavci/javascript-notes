// Exercise One
let templateString = `The quick
brown fox
jumps over
the lazy dog`;
console.log(templateString);
let firstName = "Can";
let lastName = "Savcı"
console.log(`Hello, my full name is ${firstName} ${lastName}`);

// Exercise Two
const challenge = setTimeout(() => {
    console.log("Hello");
    setTimeout(() => {
        console.log("Hey");
        setTimeout(() => {
            console.log("Namaste");
            setTimeout(() => {
                console.log("Hi");
                setTimeout(() => console.log("Bonjour"), 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}, 2000);

// Exercise Three
const a = 1;
const b = 2;
const c = 3;
const obj = {
    a, b, c
};
console.log(obj);

const lib = {
    sum: (a, b) => a + b,
    mult: (a, b) => a * b
}
console.log(lib.sum(2, 3));
console.log(lib.mult(2, 3));

const getPerson = (name, age, height) => {
    return {name, age, height};
}
console.log(getPerson("Can", 28, 185));

// Exercise Four
const multiply = (a, b = 1) => a * b;
console.log(multiply(6));

// Exercise Five
let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr, ...arr2];
console.log(arr3);

const user = {
    name: "Jen",
    age: 22,
}
const cloneUser = {...user};
console.log(cloneUser);

// Exercise Six
const unlimitedParams = (...params) => console.log(params);
unlimitedParams("Can", "Savcı", 28, 185, "Kars");

// Exercise Seven
const [color1, color2, color3, ...color] = ["red", "green", "blue", "yellow", "orange"];
console.log(color1);
console.log(color2);
console.log(color3);

// Exercise Eight
const person = {
    name: "John Doe",
    age: 30,
    gender: "male",
    country: "USA"
};
const {name, age, country} = person;
console.log(name);
console.log(age);
console.log(country);

// Exercise Nine
const personNine = {
    name: "John Doe",
    age: 30,
    gender: "male",
    country: "USA"
};
const {name: personName, age:personAge, country:personCountry} = personNine;
console.log(personName);
console.log(personAge);
console.log(personCountry);

// Exercise Ten
let haveMoney = true;
haveMoney ? console.log("They can buy products") : console.log("They should bring money");

// Exercise Eleven
const object = {a: 1, b: 2, c: 3};
for (let key in object) {
    console.log(key, object[key]);
}

// Exercise Twelve
const array1 = ["a", "b", "c"];
for (const elem of array1) {
    console.log(elem);
}

// Exercise Thirteen
const arrNumbers = [10, 25, 35, 50, 70];
let sum = 0;
arrNumbers.forEach((number) => sum += number);
console.log(sum);

// Exercise Fourteen
const solution = arrNumbers.map(number => number * 10);
console.log(solution);

// Exercise Fifteen
const ages = [32, 33, 16, 40];
ages.filter(age => age > 18).forEach(age => console.log(age));
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
words.filter(word => word.length > 6).forEach(word => console.log(word));

// Exercise Sixteen
console.log(ages.find(age => age > 18));
let products = [
    { name: "Checkers", category: "Toys" },
    { name: "Harry Potter", category: "Books" },
    { name: "iPhone", category: "Electronics" },
    { name: "Learn PHP", category: "Books" }
]

console.log(products.find(product => product.category === "Books"))

// Exercise Seventeen
console.log(products.every(product => product.category === "Books"));
console.log(products.some(product => product.category === "Books"));

// Exercise Eighteen
const numbers = [2, 3, 5, 7];
console.log(numbers.reduce((p, c) => p * c, 1));

// Exercise Nineteen
const map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);
console.log(map.get("a"));
console.log(map.size);
map.delete(b);
console.log(map.size);

// Exercise Twenty
const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
for (const letter of letters) {
    console.log(letter);
}

// Exercise Twenty One
const foo = Symbol("foo");
console.log(typeof foo);
const obje = {
    firstName: "Can",
    lastName: "Savcı",
};
obje[foo] = "value 1";
console.log(obje);
for (let objeKey in obje) {
    console.log(objeKey);
}
