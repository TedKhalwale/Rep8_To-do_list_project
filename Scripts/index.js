document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addBtn = document.getElementById("addBtn");
    const deleteBtn = document.getElementById("deleteBtn");
    const taskList = document.getElementById("taskList");

    addBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.textContent = taskText;
            taskList.appendChild(li);
            taskInput.value = "";
        }
    });

    deleteBtn.addEventListener("click", function() {
        const selectedTasks = taskList.querySelectorAll("li");
        selectedTasks.forEach(task => {
            if (task.classList.contains("selected")) {
                task.remove();
            }
        });
    });

    taskList.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("selected");
        }
    });
});