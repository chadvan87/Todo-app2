// Poor naming
function add_task_to_list(task) {
    if (!task) {
        console.log("Error: Task is required.");
        return;
    }
    todos.push(task); // Should check for duplicates
}

// Inefficient code: Using for loop instead of forEach
function list_todos() {
    for (let i = 0; i < todos.length; i++) {
        console.log(`${i + 1}. ${todos[i]}`);
    }
}

// Mixed logic: Asking for input directly inside the business logic
//test pr
function ask() {
    rl.question("Enter a task: ", function (input) {
        if (input === "list") {
            list_todos();
        } else {
            add_task_to_list(input);
        }
        ask();  // Recursive call without exit condition
    });
}
