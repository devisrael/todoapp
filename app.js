const ui = new UI();

// calls
// ////////////////////////////////////////////////////
ui.openModal();
ui.openSettings();
amount();

document.addEventListener("DOMContentLoaded", getTasks);
ui.form.addEventListener("submit", addTask);
ui.ul.addEventListener("click", removeTask);

function amount() {
  let tasks;
  if (localStorage.getItem("tasks") === null) tasks = [];
  else tasks = JSON.parse(localStorage.getItem("tasks"));
  ui.uncheckedTodo.innerText = tasks.length;
}

// Get Tasks from LS
function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function(task) {
    // created element
    let li = document.createElement("li");
    let value = document.createElement("span");
    let cta = document.createElement("div");
    let del = document.createElement("span");
    let done = document.createElement("span");
    let element = ui.ul;
    // create values
    li.classList.add("main__item");
    value.classList.add("main__value");
    cta.classList.add("cta");
    del.classList.add("del");
    done.classList.add("done");
    value.appendChild(document.createTextNode(task));
    del.innerHTML = "&times;";
    done.innerHTML = "&check;";
    // appending
    cta.appendChild(del);
    cta.appendChild(done);
    li.appendChild(value);
    li.appendChild(cta);
    element.appendChild(li);
  });
  amount();
}

// Store Task
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) tasks = [];
  else tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
// Remove from LS
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function(task, index) {
    if (taskItem.textContent == task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add Task
function addTask(e) {
  e.preventDefault();

  // check if user inputs any value
  if (ui.input.value !== "") {
    // check if value is grater that 30 words
    if (
      ui.input.value.length > 50 ||
      ui.input.value.trim().split(" ").length > 10
    )
      alert("VALUE IS TOO LONG");
    else {
      // created element
      let li = document.createElement("li");
      let value = document.createElement("span");
      let cta = document.createElement("div");
      let del = document.createElement("span");
      let done = document.createElement("span");
      let element = ui.ul;
      // create values
      li.classList.add("main__item");
      value.classList.add("main__value");
      cta.classList.add("cta");
      del.classList.add("del");
      done.classList.add("done");
      value.innerText = ui.input.value;
      del.innerHTML = "&times;";
      done.innerHTML = "&check;";
      // appending
      cta.appendChild(del);
      cta.appendChild(done);
      li.appendChild(value);
      li.appendChild(cta);
      element.appendChild(li);
      storeTaskInLocalStorage(ui.input.value);
    }
  } else alert("ENTER A VALUE");
  // Clear input
  ui.input.value = "";
  amount();
}

// Remove Task
function removeTask(e) {
  if (e.target.className === "del") {
    if (ui.hideChecked.checked != true) {
      ui.alert.style.display = "block";
      ui.btnYes.addEventListener("click", () => {
        if (true) {
          e.target.parentElement.parentElement.remove();
          removeTaskFromLocalStorage(
            e.target.parentElement.parentElement.firstElementChild
          );
          ui.alert.style.display = "none";
        }
      });
    } else {
      e.target.parentElement.parentElement.remove();
      removeTaskFromLocalStorage(
        e.target.parentElement.parentElement.firstElementChild
      );
    }
    ui.btnNo.addEventListener("click", () => {
      if (true) ui.alert.style.display = "none";
    });
  } else {
    if (e.target.className === "done") {
      e.target.parentElement.parentElement.firstElementChild.classList.toggle(
        "done"
      );
    }
  }
  amount();
}
