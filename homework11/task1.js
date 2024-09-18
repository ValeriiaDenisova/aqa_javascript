function printTextAfterDelay(text, milliseconds) {
    setTimeout(function() {
        console.log(text);
    }, milliseconds);
}

printTextAfterDelay("Did something", 5000);