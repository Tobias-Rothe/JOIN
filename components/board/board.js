import {
  returnBoard,
  moveTaskToSlot,
  updateSubTaskStatus,
  checkAuth,
} from "../firebase.js";
import { returnTaskTemplate } from "./task-card/task-card.js";
import returnIcon from "../icons.js";
import showTaskDetails from "./task-details/task-details.js";
import openTaskMenu from "./task-details/task-details.js";
import { getAddTaskTemplate } from "./add-task/add-task.js";

window.openTaskMenu = openTaskMenu;
window.handleTask = handleTask;

export async function renderAddTaskBoard() {
  const taskSectionRef = document.querySelector(".content");
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal-container");
  modalContainer.innerHTML = /*html*/ `
    <div class="add-task-board">
      <div class="button">
        <svg onclick="handleTask()" class="x">${returnIcon("x")}</svg>
      </div>
      <div class="task-content"></div>
    </div>
  `;
  taskSectionRef.appendChild(modalContainer);
}

function handleTask() {
  document.querySelector(".modal-container").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", async () => {
  initializeBoard();
});

async function initializeBoard() {
  checkAuth();
  await renderBoardTemplate();
  await renderAddTaskBoard();

  await getAddTaskTemplate();

  const taskButton = document.getElementById("handleTask");
  const coveredButton = document.querySelector(".covered-btn");
  coveredButton.addEventListener("click", handleTask);
  taskButton.addEventListener("click", handleTask);
}
//! 2 ###########

let currentTaskId;

window.filterTasks = function () {
  const searchInput = document.querySelector(".search input");
  const allTasks = document.querySelectorAll(".task");
  allTasks.forEach((task) => {
    const taskTitle = task.querySelector(".heading span").textContent;
    const taskDescription = task.querySelector(".heading p").textContent;
    if (
      taskTitle.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      taskDescription.toLowerCase().includes(searchInput.value.toLowerCase())
    ) {
      task.classList.remove("d-none");
    } else {
      task.classList.add("d-none");
    }
  });
};

//! 3 ###########
window.showTaskDetails = showTaskDetails;
window.closeTaskDetails = () => {
  const subTasks = document.querySelectorAll(".subtask");
  const taskId = document
    .querySelector(".task-details")
    .getAttribute("data-task-id");
  const slot = document
    .querySelector(".task-details")
    .getAttribute("data-task-slot");

  subTasks.forEach(async (subTask) => {
    const subTaskId = subTask.querySelector("input").id;
    const isChecked = subTask.querySelector("input").checked;
    const title = subTask.querySelector("span").textContent;
    await updateSubTaskStatus(slot, taskId, subTaskId, isChecked, title);
  });

  // renderBoardTemplate();

  initializeBoard();
};
//! 3 ###########

window.allowDrop = function (event) {
  event.preventDefault();
};

window.moveTo = function (newStatus) {
  const taskElement = document.querySelector(
    `[data-task-id="${currentTaskId}"]`
  );
  document.getElementById(newStatus).appendChild(taskElement);
  removeAllHighlights();
  moveTaskToSlot(newStatus, currentTaskId);
};

window.startDragging = function (taskId) {
  currentTaskId = taskId;
  const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
  taskElement.classList.add("rotate-task");
};

window.addAllHighlights = function () {
  const allSlots = document.querySelectorAll(".slot-content");
  allSlots.forEach((slot) => slot.classList.add("drag-area-highlight"));
};

window.removeAllHighlights = function () {
  const allSlots = document.querySelectorAll(".slot-content");
  allSlots.forEach((slot) => slot.classList.remove("drag-area-highlight"));
};

window.endDragging = function () {
  const taskElement = document.querySelector(
    `[data-task-id="${currentTaskId}"]`
  );
  taskElement.classList.remove("rotate-task");

  removeAllHighlights();
};

window.updatePlaceholder = function () {
  const allSlots = document.querySelectorAll(".slot-content");
  allSlots.forEach((slot) => {
    if (slot.children.length > 1) {
      slot.querySelector(".placeholder").classList.add("d-none");
    } else {
      slot.querySelector(".placeholder").classList.remove("d-none");
    }
  });
};

export async function renderBoardTemplate() {
  let contentRef;
  while ((contentRef = document.querySelector(".content")) === null) {
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  contentRef.innerHTML = /*html*/ `
        <div class="board-container">
            <div class="board-heading">
            <div class="board-header">
                <h2>Board</h2>
                <button class="covered-btn">${returnIcon("plus")}</button>
                </div>
                <div >
                  <div class="search"><input type="text" placeholder="Find Task" oninput="filterTasks()"><span>${returnIcon(
    "search"
  )}</span></div>
                  <button id="handleTask" >Add task${returnIcon(
    "plus"
  )}</button>
                </div> 
            </div>
            <div class="board ">
              <div class="slots">
                <div class="slots-header">
                  <h2>To do</h2>
                  <button class="btn">${returnIcon("plus")}</button>
                </div>
                <div class="slot-content" id="todo-tasks" ondrop="moveTo('todo-tasks'); updatePlaceholder();" ondragover="allowDrop(event);" ondragstart="addAllHighlights()"><div class="placeholder d-none"><p>No tasks To do</p></div></div>
              </div>

              <div class="slots">
                <div class="slots-header">
                  <h2>In Progress</h2>
                  <button class="btn">${returnIcon("plus")}</button>
                </div>
                <div class="slot-content" id="inProgress-tasks" ondrop="moveTo('inProgress-tasks'); updatePlaceholder();" ondragover="allowDrop(event);" ondragstart="addAllHighlights()"><div class="placeholder d-none"><p>No tasks To do</p></div></div>
              </div>

              <div class="slots">
                <div class="slots-header">
                  <h2>Await feedback</h2>
                  <button class="btn">${returnIcon("plus")}</button>
                </div>
                <div class="slot-content" id="awaitFeedback-tasks" ondrop="moveTo('awaitFeedback-tasks'); updatePlaceholder();" ondragover="allowDrop(event);" ondragstart="addAllHighlights()">
                  <div class="placeholder d-none"><p>No tasks To do</p></div>
                </div>
              </div>

              <div class="slots">
                <div class="slots-header"><h2>Done</h2></div>
                <div class="slot-content" id="done-tasks" ondrop="moveTo('done-tasks'); updatePlaceholder();" ondragover="allowDrop(event);" ondragstart="addAllHighlights()"><div class="placeholder d-none"><p>No tasks To do</p></div></div>
              </div>
            </div>
        </div>
              
    `;

  renderTasks();
}

export async function renderTasks() {
  const slots = {
    todo: document.getElementById("todo-tasks"),
    inProgress: document.getElementById("inProgress-tasks"),
    awaitFeedback: document.getElementById("awaitFeedback-tasks"),
    done: document.getElementById("done-tasks"),
  };

  const boardData = await returnBoard();
  for (let status in boardData) {
    for (let task of boardData[status]) {
      const taskTemplate = await returnTaskTemplate(task, status);
      slots[status].innerHTML += taskTemplate;
    }
  }

  document.querySelectorAll(".task").forEach((taskElement) => {
    taskElement.ondragstart = () =>
      startDragging(taskElement.getAttribute("data-task-id"));
    taskElement.ondragend = endDragging;
  });

  document.querySelectorAll(".slot-content").forEach((slot) => {
    if (slot.children.length <= 1) {
      slot.querySelector(".placeholder").classList.remove("d-none");
    }
  });
}

function isMobile() {
  return window.innerWidth <= 768;
}

if (!isMobile()) {
  window.allowDrop = function (event) {
    event.preventDefault();
  };

  window.dragTask = function (event, taskId) {
    currentTaskId = taskId;
    event.dataTransfer.setData("text", taskId);
  };
  window.dropTask = function (event, newStatus) {
    event.preventDefault();
    const taskId = event.dataTransfer.getData("text");
    moveTaskToSlot(taskId, newStatus);
    renderBoardTemplate();
  };
} else {
  window.allowDrop = function () { };
  window.dragTask = function () { };
  window.dropTask = function () { };
}
function toggleDragAndDrop() {
  if (window.innerWidth <= 768) {
    window.allowDrop = () => { };
    window.dragTask = () => { };
    window.dropTask = () => { };
  } else {
    window.allowDrop = (e) => e.preventDefault();
    window.dragTask = (e, taskId) => {
      currentTaskId = taskId;
      e.dataTransfer.setData("text", taskId);
    };
    window.dropTask = (e, newStatus) => {
      e.preventDefault();
      moveTaskToSlot(e.dataTransfer.getData("text"), newStatus);
      renderBoardTemplate();
    };
  }
}

window.addEventListener("resize", toggleDragAndDrop);
toggleDragAndDrop();
