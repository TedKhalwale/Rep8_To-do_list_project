// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;
    

    if (taskText !== ''){
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(taskText));
        document.getElementById().appendChild(li);
    }
    
    for (let i = start; i <= end; i++) {
        const listItem = document.createElement('div');
        listItem.classList.add('text')
        listItem.textContent = i;
    }

    // if ()
}

// Event Listener

document.getElementById('listForm').addEventListener('submit', function(Event) {
    Event.preventDefault();
    const container = document.getElementById('container');
    container.innerHTML = '';
    taskInput.value = '';
});