const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let todos = [];

// Poor validation and no duplicate check
function addTaskToList(task) {
    if (typeof task !== 'string') {
        console.log("Error: Invalid task.");
    }
    todos.push(task); // Missing check for empty string or duplicates
}

// Not handling empty list well and bad UX formatting
function listTodos() {
    for (let i = 0; i < todos.length; i++) {
        console.log(`#${i + 1}: ${todos[i]}`); // inconsistent formatting
    }
}

// Recursive call with no exit, logic mixed with I/O, and case-sensitivity bug
function askUserForTask() {
    rl.question("What do you want to do?\n> ", function (input) {
        if (input === "List") { // Bug: only matches 'List' exactly
            listTodos();
        } else {
            addTaskToList(input);
        }
        askUserForTask(); // No 'exit' condition
    });
}

askUserForTask();
