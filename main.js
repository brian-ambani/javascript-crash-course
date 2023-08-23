console.log("Hello js");

let score;
score = 32;

// data types: string, numbers, Boolean, null, undefined

// const name = 'John';
// const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
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