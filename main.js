console.log("Hello js");

let score;
score = 32;

// data types: string, numbers, Boolean, null, undefined

// const name = 'John';
// const age = 30;
const rating = 4.5;
const isCool = true;
// const x = null;
const y = undefined;
let z; //undefined

//console.log(typeof x)

const name = 'John';
const age = 30;

// Template String
const intro = (`my name is ${name} and I am ${age} years old`);

//console.log(intro)


const s = 'tech, computers, code, IT';

// console.log(s.split(', '))


// Arrays - variables that hold multiple values

const fruits = ['Apples', 'oranges', 'pears'];

// console.log(fruits[1])

fruits.push('grapes');
fruits.unshift('strawberries');
fruits.pop();

// console.log(fruits)


const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
person.email = 'john@gmail.com'
// console.log(person)


// Arrays of objects

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true  
    },
    {
        id: 2,
        text: 'Write code',
        isCompleted: true  
    },
    {
        id: 3,
        text: 'Meeting with Boss',
        isCompleted: false  
    }
];
// console.log(todos[2].text);

// convert todos to JSON

const todoJSON = JSON.stringify(todos);

// console.log(todoJSON);

//For

// for(let i = 0; i < 10; i++) {
//     // console.log(`${i}`);
// }

// // while
// let i = 0;
// while(i < 10) {
//     // console.log(`${i}`);
//     i++;
// }

// Looping through an array
for(let todo of todos) {
    // console.log(todo.text);
}

// High order array methods
// forEach, map, filter

// forEach

todos.forEach(function(todo) {
    // console.log(todo.text);
});

// map
const todoText = todos.map(function(todo) {
    return todo.text;
});

// console.log(todoText)

const completeTodo = todos.filter(function(todo) {
    return todo.isCompleted == true;
});

// console.log(completeTodo);

//chaining on high order array methods

const incompleteTodo = todos.filter(function(todo) {
    return todo.isCompleted == false;
}).map(function(todo) {
    return todo.text;
})

// console.log(incompleteTodo);



// conditionals

// if statement
const x = 9;

if(x === 10) {
    // console.log('x is 10');
} else if(x > 10) {
    // console.log('x is greater than 10');
} else {
    // console.log('x is less than 10');
};


// ternary operator

const m = 7;
const color = m > 10 ? 'red' : 'blue';
// console.log(color);


//switch

// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('Color is blue');
//         break;
//     default:
//         console.log('color is not red or blue');
//         break;
// }



// functions
// function addNums(num1 = 1, num2 = 1) {
//     return num1 + num2;
// }

// console.log(addNums(10, 5));


//Arrow fumctiona

const addNums = (num1 = 1, num2 = 2) => {
    return num1 + num2;
}
// console.log(addNums());



// OOP

//constructor function

function Person(fname, lname, dob) {
    this.firstName= fname;
    this.lasttName = lname;
    this.dob = (dob);
    this.fullName = function(){
        return `${this.firstName} ${this.lasttName}`;
    }
}

// Instantiate object
const person1 = new Person('John', 'Doe', '10-3-1998');
const person2 = new Person('Mary', 'Jane', '26-5-2000');

// console.log(person1, person2)

console.log(person1.fullName());