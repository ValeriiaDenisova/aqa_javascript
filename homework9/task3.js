let car1 = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
}
let car2 = {
    brand: "Honda",
    model: "Civic",
    owner: "Maxim"
}
let car3 = {
    ...car1,
    ...car2
}
console.log(car3)
