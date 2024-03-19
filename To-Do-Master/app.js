// Function to update total task count
function updateTaskCount() {
  var taskCount = document.querySelectorAll("#myUL li").length;
  document.getElementById("taskCount").textContent =
    "Total Tasks: " + taskCount;
}

// Function to add a new task
function newElement() {
  var inputValue = document.getElementById("myInput").value;
  var priorityValue = document.getElementById("prioritySelect").value;
  var dueDateValue = document.getElementById("dueDateInput").value;

  if (inputValue.trim() !== "") {
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "taskCheckbox";

    var taskDetails =
      "<span class='task-name'>" +
      inputValue +
      "</span>" +
      "<span class='priority " +
      priorityValue +
      "'>" +
      priorityValue.charAt(0).toUpperCase() +
      "</span>" +
      "<span class='due-date'>" +
      dueDateValue +
      "</span>" +
      "<button class='editBtn' onclick='editTask(this)'>Edit</button>" +
      "<button class='deleteBtn' onclick='deleteTask(this)'>Delete</button>";

    li.innerHTML = taskDetails;
    li.appendChild(checkbox);

    document.getElementById("myUL").appendChild(li);

    checkbox.addEventListener("change", function () {
      if (this.checked) {
        li.classList.add("checked");
      } else {
        li.classList.remove("checked");
      }
      updateTaskCount();
    });

    updateTaskCount();
  } else {
    alert("You must write something!");
  }

  document.getElementById("myInput").value = "";
  document.getElementById("prioritySelect").value = "low";
  document.getElementById("dueDateInput").value = "";
}

// Function to delete a task
function deleteTask(element) {
  var li = element.parentElement;
  li.remove();
  updateTaskCount();
}

// Function to edit a task
function editTask(element) {
  var li = element.parentElement;
  var taskName = li.querySelector(".task-name").textContent;
  var priority = li.querySelector(".priority").classList[1]; // Get the priority class
  var dueDate = li.querySelector(".due-date").textContent;

  // Populate the form fields with task details
  document.getElementById("myInput").value = taskName;
  document.getElementById("prioritySelect").value = priority;
  document.getElementById("dueDateInput").value = dueDate;

  deleteTask(element);
}

// Function to clear all tasks
document.getElementById("clearAllBtn").onclick = function () {
  var ul = document.getElementById("myUL");
  ul.innerHTML = "";
  updateTaskCount();
};
