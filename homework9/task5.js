let users = [
    {name : "Маша", email: "masha@example.com", age: 25},
    {name : "Вова", email: "vova@example.com", age: 30},
    {name : "Петя", email: "petia@example.com", age: 40},
]

for (user of users) {
    let {name, email, age} = user
    console.log(name, email, age)
}