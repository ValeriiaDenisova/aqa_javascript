function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Division by zero");
    }
    if (!Number.isInteger(numerator) || !Number.isInteger(denominator)) {
        throw new Error("Not a number");
    }
    return numerator / denominator;
}

function testDivide(numerator, denominator) {
    try {
        const result = divide(numerator, denominator);
        console.log("Result: " + result);
    } catch (error) {
        console.error(error.message);
    } finally {
        console.log("Робота завершена");
    }
}

testDivide(10, 2)
testDivide(10, 0)
testDivide("a", "b")
