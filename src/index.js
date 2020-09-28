document.addEventListener("DOMContentLoaded", () => {
  
  const taskForm = document.getElementById("create-task-form");
  const taskDesc = document.getElementById("new-task-description");
  
  taskForm.addEventListener("submit", () => addNewItem(event, taskDesc));
});

function addNewItem(event, taskDesc) {
  event.preventDefault();
  
  const newItem = document.createElement("li");
  
  newItem.innerText = taskDesc.value;
  document.getElementById("tasks").appendChild(newItem);
}