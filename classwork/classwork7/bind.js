function greet(greeting, production) {
    console.log(greeting + ", " + this.name + production)
}

const person = { name : "Charly"}
const greetCharly = greet.bind(person, 'Hey')
greetCharly("!")