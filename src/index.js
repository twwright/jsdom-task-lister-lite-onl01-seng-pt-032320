document.addEventListener("DOMContentLoaded", () => {
  
  const taskForm = document.getElementById("create-task-form");
  const taskDesc = document.getElementById("new-task-description");
  const addTaskItem = document.getElementById("tasks");
  
  taskForm.addEventListener("submit", () => addNewItem(event, taskDesc));
});

function addNewItem(event, taskDesc) {
  event.preventDefault();
  
  const newItem = document.createElement("li");
  
  newItem.innerText = taskDesc.value;
  addTaskItem.appendChild(newItem);
}




document.addEventListener("DOMContentLoaded", () => {

  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskUl = document.getElementById("tasks");

  newTaskForm.addEventListener("submit", () =>
    createNewTask(event, newTaskDescription)
  );
});

const createNewTask = (event, newTaskDescription) => {
  event.preventDefault();

  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};