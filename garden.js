const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

let currentStage = 1; // Starting stage

function cycleBlossoms() {
    currentStage++;
    if (currentStage > 7) {
        currentStage = 1;
    }
    const blossomImg = document.getElementById("blossom-img");
    blossomImg.src = `imgs/Cherry Blossem-${currentStage}.png.png`;
    blossomImg.alt = `Cherry blossom stage ${currentStage}`;
}

function addTask()  {

    const task = inputBox.value.trim();
    if (!task) {
        alert("Please write down a task");
        return; 
    }

    const li = document.createElement("li");
    li.innerHTML = `
         <label>
            <input type="checkbox">
            <span>${task}</span>
        </label>
        <span class="edit-btn">Edit</span>
        <span class="delete-btn">Delete</span>
    `;

    listContainer.appendChild(li);
    inputBox.value = "";
    const checkbox = li.querySelector("input");
    const editBtn = li.querySelector(".edit-btn");
    const taskSpan = li.querySelector("span");
    const deleteBtn = li.querySelector(".delete-btn");
    
    const completedCounter = document.getElementById("completed-counter");
    const uncompletedCounter = document.getElementById("uncompleted-counter");

    function updateCounters() {
        const completedTasks = document.querySelectorAll(".completed").length;
        const uncompletedTasks =
          document.querySelectorAll("li:not(.completed)").length;
      
        completedCounter.textContent = completedTasks;
        uncompletedCounter.textContent = uncompletedTasks;
      }
    
    checkbox.addEventListener("click", function () {
        li.classList.toggle("completed", checkbox.checked);
        updateCounters();
      });
    
    editBtn.addEventListener("click", function () {
        const update = prompt("Edit task:", taskSpan.textContent);
        if (update !== null) {
          taskSpan.textContent = update;
          li.classList.remove("completed");
        }
    });

    deleteBtn.addEventListener("click", function () {
        if (confirm("Are you sure you want to delete this task?")) {
          li.remove();
          updateCounters();
        }
      });
}

const checkbox = li.querySelector("input");
const editBtn = li.querySelector(".edit-btn");
const taskSpan = li.querySelector("span");
const deleteBtn = li.querySelector(".delete-btn");

checkbox.addEventListener("click", function () {
    li.classList.toggle("completed", checkbox.checked);
    updateCounters();
  });

editBtn.addEventListener("click", function () {
    const update = prompt("Edit task:", taskSpan.textContent);
    if (update !== null) {
      taskSpan.textContent = update;
      li.classList.remove("completed");
    }
});
