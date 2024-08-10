function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();

    if (taskText !== '') {
        let taskList = document.getElementById('taskList');
        
        // Insert the new task directly into the innerHTML of the taskList
        taskList.innerHTML += `
            <li>
                <span>${taskText}</span>
                <button class="edit" onclick="editTask(this)">Edit</button>
                <button class="delete" onclick="deleteTask(this)">Delete</button>
            </li>
        `;

        taskInput.value = ''; // Clear the input field
    }
}

function editTask(button) {
    let span = button.parentElement.querySelector('span');
    let newTaskText = prompt('Edit Task:', span.textContent);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        span.textContent = newTaskText.trim();
    }
}

function deleteTask(button) {
    let li = button.parentElement;
    li.remove(); // Remove the task directly
}
