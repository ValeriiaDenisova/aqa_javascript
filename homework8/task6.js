const numbersList = [1, 10, 14, 2, 4, 5, 43, 34]
const newArray = [...numbersList]

function compareNumbers(a, b) {
    return a - b;
}

newArray.sort(compareNumbers)
console.log(numbersList)
console.log(newArray)