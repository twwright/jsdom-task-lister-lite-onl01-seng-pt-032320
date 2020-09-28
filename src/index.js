document.addEventListener("DOMContentLoaded", taskSubmit());

function clickInterrupt(element) {
  document.querySelector("#")
}

function taskSubmit() {

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