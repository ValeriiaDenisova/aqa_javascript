function division(a, b) {
    if (b === 0) {
        throw new Error("ERROR")
    }
    return a / b
}

try {
    console.log(division(4, 1))
} catch (e) {
    console.error(e)
}

function doNothing() {

}
let result = doNothing
console.log(result)

function a(x) {
    return function (y) {
        return x * y
    }
}

let double = a(5)
console.log(double(6))

function square(x) {
    return x * x
}

// function sumSquare(a, b) {
//     return square(a) + square(b)
// }
//
// console.log(sumSquare(3, 4))

// let mul = function (a, b) {
//     return a * b
// }
// console.log(mul(3, 5))

(function () {
    console.log("Anonymous function");
})();

const functionName = (a) => {
    
}
