document.addEventListener("DOMContentLoaded", taskSubmission());

const task = document.getElementById("new-task-description").value;
const list = document.getElementById("list");
const newTaskElement = document.createElement("li");

function taskSubmission(element) {
  document.querySelector(`${element}`).addEventListener("click", createTask(action), false);
}

function createTask(action) {
  action.preventDefault();
  newTaskElement.appendChild(document.createTextNode(task));
  list.appendChild(taskElement);
}




// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelector("#submit-task").addEventListener(
//     "click",
//     function (e) {
//       e.preventDefault();
//       const task = document.getElementById("new-task-description").value;
//       const list = document.getElementById("list");
//       const addTask = document.createElement("li");
//       addTask.appendChild(document.createTextNode(task));
//       list.appendChild(addTask);
//     },
//     false
//   );

  
// });