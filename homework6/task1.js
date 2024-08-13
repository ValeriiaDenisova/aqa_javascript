// 1. Function Declaration
function squareRectangle1 (width, height) {
    return width * height
}
console.log(squareRectangle1(5, 10))


// 2. Function Expression
const squareRectangle2 = function (width, height) {
    return width * height
}
const square = squareRectangle2(5, 10)
console.log(square)


// 3. Arrow Function
const squareRectangle3 = (width, height) => width * height;

const area3 = squareRectangle3(5, 10);
console.log(area3);