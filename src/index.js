document.addEventListener("DOMContentLoaded", () => {
  const task = document.getElementById("new-task-description").value;
  const list = document.getElementById("list");
  const newTaskElement = document.createElement("li");

  function taskSubmission(element) {
    document.querySelector(`${element}`).addEventListener("click", createTask(event), false);
  }

  function createTask(event) {
    event.preventDefault();
    newTaskElement.appendChild(document.createTextNode(task));
    list.appendChild(taskElement);
  }

});


document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const taskForm = document.querySelector("#create-task-form")
   const tasklist = document.querySelector("#tasks")
  taskForm.addEventListener("submit", function(c){
       c.preventDefault()
      const newTask = document.querySelector("#new-task-description").value
     const taskItem = document.createElement("li")
     taskItem.innerText = newTask

     tasklist.appendChild(taskItem)
     taskForm.reset()

     
      
  })
  
});