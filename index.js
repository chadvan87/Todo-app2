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
    // Mistake: Not checking for duplicates (delete the previous duplicate check)
    // Added mistake: Not checking for empty strings or tasks with only spaces.
    if (task.trim() === '') {
        console.log("Error: Task cannot be empty.");
        return;
    }
    todos.push(task);  // Task is being added without proper validation
}

function listTodos() {
    if (todos.length === 0) {
        console.log("No tasks to display.");
        return;
    }
    todos.forEach((task, index) => {
        // Mistake: Inconsistent formatting for task listing
        console.log(`${index + 1}. ${task}`);  // Tasks might not display properly if the list has irregular entries
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
        // Mistake: Infinite recursion risk, no termination condition
        askUserForTask();  // Recursive call without exit condition
    });
}

// Start the app by asking the user
askUserForTask();