document.addEventListener("DOMContentLoaded", taskSubmit());

const task = document.getElementById("new-task-description").value;
const list = document.getElementById("list");

function clickInterrupt(element) {
  document.querySelector("#")
}

function taskSubmit(elemet) {
  document.querySelector(`${element}`).addEventListener("click", createTask(el), false);
}

function createTask(el) {
  el.preventDefault();
  const taskElement = document.createElement("li");
  taskElement.appendChild(document.createTextNode(task));
  list.appendChild(taskElement);
}




document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#submit-task").addEventListener(
    "click",
    function (e) {
      e.preventDefault();
      const task = document.getElementById("new-task-description").value;
      const list = document.getElementById("list");
      const addTask = document.createElement("li");
      addTask.appendChild(document.createTextNode(task));
      list.appendChild(addTask);
    },
    false
  );

  
});