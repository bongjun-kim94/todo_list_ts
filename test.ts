// interface Person {
//     firstName: String;
//     lastName: String;
// }

// function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }

// let user = { firstName:"bongjun", lastName: "kim" };

// document.querySelector('#root').innerHTML = greeter(user);


// let isDone: boolean = false;

// let decimal: number = 6;
// let hex: number = 0xf00d;
// let binary: number = 0b1010;
// let octal: number = 0o744;

// let list: number[] = [1, 2, 3];
// let list: Array<number> = [1, 2, 3];

// let x: [string, number];

// x = ["hello", 10]; // success
// x = [10, "hello"]; // error

// interface Point {
//     readonly x: number;
//     readonly y: number;
// }

// // 기명함수
// function add(x, y) {
//     return x + y;
// }

// // 익명함수
// let myAdd = function(x ,y) { return x + y };

// // 변수캡처
// let z = 100;

// function addToZ(x, y) {
//     return x + y + z;
// }

// function add(x: number, y: number): number {
//     return x + y;
// }

// let myAdd = function (x: number, y: number): number { return x + y };