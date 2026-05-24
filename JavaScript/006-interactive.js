const taskInput = document.querySelector("#taskInput")
const addBnt = document.querySelector("#addBtn")
const todoList = document.querySelector(".todo-list")

const createTaskItem = () => {
    const task = taskInput.value
    const todoItme = `<li class="todo-item">
                    <span class="item">${task}</span>
                    <button class="closeBtn">X</button>
                </li>`
    if (condition) {
        todoList.insertAdjacentHTML("afterbegin",todoItme)
    }
    todoList.insertAdjacentHTML("afterbegin",todoItme)
}

addBnt.addEventListener("click", () => {
    createTaskItem()
})