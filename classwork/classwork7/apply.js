function greet(greeting, production) {
    console.log(greeting + ", " + this.name + production)
}

const person = { name : "Bob"}
greet.apply(person, ['Hi', '.'])