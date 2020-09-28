// document.addEventListener("DOMContentLoaded", () => {
  
//   const taskForm = document.getElementById("create-task-form");
//   const taskDesc = document.getElementById("new-task-description");
//   const addTaskItem = document.getElementById("tasks");
  
//   taskForm.addEventListener("submit", () => addNewItem(event, taskDesc));
// });

// function addNewItem(event, taskDesc) {
//   event.preventDefault();
  
//   const newItem = document.createElement("li");
  
//   newItem.innerText = taskDesc.value;
//   addTaskItem.appendChild(newItem);
// }




document.addEventListener("DOMContentLoaded", () => {
  //grab all the necessary DOM elements

  //form and relevant input fields
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");

  //ul where new tasks will live on the DOM
  const newTaskUl = document.getElementById("tasks");

  //attach event listeners
  newTaskForm.addEventListener("submit", () =>
    createNewTask(event, newTaskDescription)
  );
});

const createNewTask = (event, newTaskDescription) => {
  //stop form from trying to submit
  event.preventDefault();

  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};