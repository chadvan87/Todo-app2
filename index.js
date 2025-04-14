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
    // Check if the task is okay, but doesn't seem to check if it's a string, right?
    // Maybe we should add a stronger validation for the task input?
    if (todos.includes(task)) {
        console.log("Error: Task already exists.");
        return;
    }
    todos.push(task);  // We assume it's fine, but is it though? Could be an issue if the input isn't validated properly.
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

function askUserForTask() {
    rl.question("Enter a task (or 'list' to show tasks, 'exit' to quit): ", function (input) {
        if (input.toLowerCase() === "list") {
            listTodos();
        } else if (input.toLowerCase() === "exit") {
            rl.close();
            console.log("Exiting...");
        } else {
            addTaskToList(input);
        }
        // Should we maybe have a stop condition here? Otherwise, this might go on forever... Hmm.
        askUserForTask();  // Recursive call without any kind of exit check? Could this be a problem?
    });
}

// Start the app by asking the user
askUserForTask();
