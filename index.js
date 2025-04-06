const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

let todos = [];

// Issue: The function name is unclear and the error handling is poor.
function add_task_to_list(t) {
    if (!t) {
        console.log("You must provide a task!");
        return; // Should throw an error or handle it more properly.
    }
    todos.push(t);
}

// Issue: Not returning the value, no separation of concerns.
function list_todos() {
    for (let i = 0; i < todos.length; i++) {
        console.log(`${i + 1}. ${todos[i]}`);
    }
}

// Issue: This function mixes input/output logic with business logic.
function ask() {
    rl.question("Enter a task (or type 'list'): ", function (input) {
        if (input === "list") {
            list_todos();
        } else {
            add_task_to_list(input); // Could be abstracted out
        }
        ask(); // Issue: Recursively calling ask() can lead to stack overflow with many tasks.
    });
}

ask();
