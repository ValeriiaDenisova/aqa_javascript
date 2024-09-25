function greet (greeting, production) {
    console.log(greeting + ", " + this.name + production);
}
const person = { name : "Anna"}
const person2 = {name : "Misha"}
greet.call(person, "Hello", "!")
greet.call(person2, "Hello", "!")