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

const m = 10;
const color = x > 10 ? 'red' : 'blue';
console.log(color);