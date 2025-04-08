const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let todos = [];

function addTaskToList(task) {
    if (!task) {
        console.log("Error: Task is required.");
        return;
    }
    todos.push(task);
}

function listTodos() {
    if (todos.length === 0) {
        console.log("No tasks to display.");
        return;
    }
    todos.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}

function promptUser() {
    rl.question("Enter a task (or 'list' to show tasks, 'exit' to quit): ", function (input) {
        if (input.toLowerCase() === "list") {
            listTodos();
        } else if (input.toLowerCase() === "exit") {
            rl.close();
            console.log("Exiting...");
        } else {
            addTaskToList(input);
        }
        promptUser();  // Recursive call after processing input
    });
}

// Start the app by asking the user
promptUser();
