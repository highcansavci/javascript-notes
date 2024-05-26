const obj = {
    firstName: "Can",
    lastName:  "Savcı",
    fullName: function () {
        return this;
    }
}

const res = obj.fullName();
console.log(res); // obj (owner)


const objWindow = {
    firstName: "Can",
    lastName:  "Savcı",
    fullName: () => {
        return this;
    }
}

const resWindow = objWindow.fullName();
console.log(resWindow); // window

// Exercise One
const person = {
    name: "Can",
    age: 28,
    greetRegular: function () {
        return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    },
    greetArrow: () => {
        return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    }
}

const personObj = person.greetRegular();
const windowObj = person.greetArrow();
console.log(personObj);
console.log(windowObj);

// Exercise Two
function vehicleFactory(type, brand, model, year) {
    return {
        type: type,
        brand: brand,
        model: model,
        year: year,
        features: function () {
            console.log(`Type: ${this.type}, Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
        }
    };
}

const vehicle = vehicleFactory("Car", "Audi", "A4", 1995);
vehicle.features();

// Exercise Three
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.info = function () {
        console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
    }
}

const can = new Person("Can", 28, "Male");
const hazal = new Person("Hazal", 30, "Female");
can.info();
hazal.info();
console.log(`${can.name} and ${hazal.name} are siblings.`);

// Exercise Four
function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.year = year;
    this.start = function () {
        return `Starting the ${this.make} ${this.model}...`;
    };
    this.stop = function () {
        return `Stopping the ${this.make} ${this.model}...`;
    }
}

const firstCar = new Car("Toyota", "Camry", 1995, "black");
const secondCar = new Car("Honda", "CR-V", 1997, "red");
console.log(firstCar.start());
console.log(secondCar.stop());

// Exercise Five
class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
    greet() {
        return `Greetings, ${this.name} with ${this.level} level.`;
    };
}

const hero = new Hero("Super Mario", 8);
console.log(hero.greet());

class Witcher extends Hero {
    constructor(name, level, spell) {
        super(name, level);
        this.spell = spell;
    }
    greet() {
        return super.greet() + `Use the spell ${this.spell} to level up quickly.`;
    }
}

const witcher = new Witcher("Geralt of Rivia", 30, "Igni");
console.log(witcher.greet());

// Exercise Six
console.log("Start");
function getUserDataFromDB(name, callback) {
    setTimeout(() => {
        console.log("Getting User Name...");
        callback(name);
    }, 2000);
}

function getUserHobbies(name, callback) {
    setTimeout(() => {
        console.log("Getting User Hobbies...");
        callback(["Reading", "Esports", "Programming"]);
    }, 2000);
}

getUserDataFromDB("Can", (data) => {
    console.log(data);
    getUserHobbies(data, (hobby) => {
        console.log(hobby);
    });
});
console.log("End");

// Exercise Seven
console.log("Start");
function getUserDataFromDBPromise(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Getting User Name...");
            resolve(name);
        }, 2000);
    });
}

function getUserHobbiesPromise(name) {
    return new Promise((resolve) => {
        console.log(name);
        setTimeout(() => {
            console.log("Getting User Hobbies...");
            resolve(["Reading", "Esports", "Programming"]);
        }, 2000);
    });
}

getUserDataFromDBPromise("Can")
.then(name => getUserHobbiesPromise(name))
.then(hobbies => console.log(hobbies))
    .catch(err => console.log(err));

console.log("End");

// Exercise Eight
async function exerciseEight() {
    const data = await getUserDataFromDBPromise("Can");
    const hobbies = await getUserHobbiesPromise(data);
    console.log(hobbies);
}

console.log("Start");
exerciseEight().catch((err) => console.log(err));
console.log("End");

