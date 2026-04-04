setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000);

function greet(name) {
    console.log("Hello, " + name + "!");
}

setTimeout(greet, 1000, "Gauraa");

setTimeout(() => {
    console.log("This is an arrow function setTimeout");
}, 1500);

setTimeout(() => {
    console.log("First timer - 1 second");
}, 1000);

setTimeout(() => {
    console.log("Second timer - 2 seconds");
}, 2000);

setTimeout(() => {
    console.log("Third timer - 0.5 seconds");
}, 500);

let timeoutId = setTimeout(() => {
    console.log("This will be cancelled");
}, 2000);

clearTimeout(timeoutId);

function countdown(seconds) {
    if (seconds > 0) {
        console.log(seconds);
        setTimeout(() => countdown(seconds - 1), 1000);
    } else {
        console.log("Blastoff! 🚀");
    }
}

countdown(5);

function delayedMessage(message, delay) {
    setTimeout(() => {
        console.log(message);
    }, delay);
}

delayedMessage("Welcome to JavaScript!", 1000);
delayedMessage("This is fun!", 2000);
delayedMessage("Keep learning!", 3000);

function showNotification(message, duration) {
    console.log("✓ " + message);
    setTimeout(() => {
        console.log("✗ Notification dismissed");
    }, duration);
}

showNotification("Operation successful!", 2000);

let timeoutId1;

function onInputChange(value) {
    clearTimeout(timeoutId1);
    
    timeoutId1 = setTimeout(() => {
        console.log("Search for: " + value);
    }, 1000);
}

onInputChange("Java");
onInputChange("JavaS");
onInputChange("JavaSc");
onInputChange("JavaScr");

function delayedFunction() {
    let count = 0;
    
    setTimeout(() => {
        count++;
        console.log("Count after 1 second:", count);
    }, 1000);
    
    setTimeout(() => {
        count++;
        console.log("Count after 2 seconds:", count);
    }, 2000);
    
    setTimeout(() => {
        count++;
        console.log("Count after 3 seconds:", count);
    }, 3000);
}

delayedFunction();

setTimeout(() => {
    console.log("Inside setTimeout (delayed)");
}, 0);

setTimeout(() => console.log("D"), 100);
setTimeout(() => console.log("E"), 100);
setTimeout(() => console.log("F"), 100);
