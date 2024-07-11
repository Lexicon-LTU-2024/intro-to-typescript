document.querySelector("#app")!.innerHTML = "<h1>This is my first Vite App</h1>";

// ########## Variables #########

// TS can infer types for us, just give any variable a type.
let phoneNumber = 2345678;
phoneNumber = "2345678"; // Won't work.

// Most of the times you want to explicitly type your stuff. Just create your variable, then add a colon and then the type.
let firstName: string = "Niklas";

// If we just want to declare a variable but not assign a value we can do that:
let lastName: string;
lastName = 10; // Won't work.
lastName = "Fähnrich";

// Same with boolens
let isCorrect = true; // Inferred type to a boolean
let isNotCorrect: boolean = false;

// The number type can be both integers and decimals.
let age = 22.5; // Inferred type to number.

// What if I want a variable to be able to be different types. Then we use something called a UNION type.
let id: number | string;
id = 130;
id = "12h4-nk34-$jhet";
id = true; // Not allowed.

// ########## Arrays #########

// With arrays it works the same way we just need to specify that it is an array. We don't with '[]'-brackets.
const numbers: number[] = [1, 2, 3];
numbers.push(4);
numbers.push("5"); // Won't work.

// Inferred types works the same with arrays.
const names = ["Niklas", "Henrik", "Erik", "Sofia"]; // Inferred type: string[]

// We can mix values and still infer a correct type.
const ids = [1, 45, "jklasg"]; // Inferred type: (number | string)[].

// We can also explicitly create a union type array
const boolsAndString: (boolean | string)[] = [true, false, "someString"];

let ids1: number[] | string[] = [1, 2, 3, 4];
ids1 = ["Niklas", "Henrik", "Erik", "Sofia"];

// Nested arrays work the same way, just add another set of brackets to the type.
const twoDArray: (string | number)[][] = [["Niklas"], ["Henrik"], [10, 20]];

// ########## Objects #########

// Objectgs is slighlty more complicated. We neet another tool for that but first, let's just create a simple object.

const house = {
  color: " red",
  size: "200kvm2",
  address: "Gatan",
  number: 43,
  isInsured: false,
  occupants: ["Niklas", "Henrik"],
};

// In this case, TS infers the type, but the type as no name, it's just an object with specific attributes of specific types.

house.color = "green"; // Works, same type
house.size = 200; // Won't work, number is not a string
house.floors = 2; // Won't work, there is no attribute with that name in the type.
house.colour = "blue";

// ########## Interfaces #########

// How to we explicitly create types for our objects? Say hi to INTERFACES! Let's create an interface for the house above. Some naming conventions here. Always use PascalCase and always start with a capital "I".
interface IHouse {
  color: string;
  size: string;
  address: string;
  number: number;
  isInsured: boolean;
  occupants?: string[];
}

const anotherHouse: IHouse = {
  address: "address",
  color: "red",
  isInsured: false,
  number: 55,
  size: "200",
  occupants: ["Niklas"],
};

// Interfaces is a special kind tool in TS that allows us to restrict the shape and size of an object. We can with an interface tell TS exactly how many attributes on what data types those value should have beforehand.

// Interfaces also have the added functionlity that it can extend other interfaces.

interface IAnimal {
  color: string;
  age: number;
  name: string;
}

interface IDog extends IAnimal {
  breed: string;
}

const dog: IDog = {
  color: "Brown",
  age: 10,
  name: "Buster",
  breed: "Big dog",
};

// ########## Arrays containing objects #########

// Works the same way as with simple data types, just add the name of the interface and a set of arraybrackets.

const theGoodStreet: IHouse[] = [anotherHouse];

// ########## Functions #########

// Arrow function, the types of the arguments are placed inside the parenthesis, and the return value is place after a colon after the argument list.
const add = (number1: number, number2: number): number => {
  return number1 + number2;
};

// Function keyword, same as arrow function.
function subtract(number1: number, number2: number): number {
  return number1 - number2;
}

// Anonymous function
const greeting = function (name: string, age: number): boolean {
  const string = `Hi, my name is ${name}, and I am ${age} years old`;
  return true; // Doens't make sense here but fullfills the type requirements.
};

// To invokes the function
add(5, 10);
subtract(1, 2);
greeting("Niklas", 30);

// Let's add a function inside an interface. It should just run some code, no arguments and no return value (return void), how would it look like?

interface IPerson {
  name: string;
  age: number;
  sayHi: () => void;
}

const somePerson: IPerson = {
  name: "Niklas",
  age: 20,
  sayHi: () => {
    console.log("Hi");
  },
  // sayHi: function () {
  //   console.log("Hi");
  // }, // Works, fullfills the interface
};

somePerson.sayHi();
