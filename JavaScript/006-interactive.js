const addBtn = document.querySelector(".add-btn")
const taskInput = document.querySelector("#addContent")
const todoList = document.querySelector(".todo-list")
let todos =[]
const finishBtn = document.querySelector(".finishBtn")

const renderTodos = () => {
    todos.forEach((todo) =>{
        const todoItem = `                <li class="todo-item" data-id="${todo.id}">
                    <button class="btn finishBtn">${todo.completed ? "已完成" : "完成"}</button>
                    <span class="item${todo.completed ? "finished" : ""}">${todo.text}</span>
                    <button class="btn closeBtn">清除</button>
                </li>`
        todoList.insertAdjacentHTML("afterbegin",todoItem)
    })
}

// ? : 為三源運算子，表示"條件?true:false"
const createTaskItem = () => {
    const task = taskInput.value.trim()
    if (!task) return
    // 如果為空字串回傳
    const dataId = Date.now()
    const todoItem = `                <li class="todo-item" data-id="${dataId}">
                    <button class="btn finishBtn">完成</button>
                    <span class="item">${task}</span>
                    <button class="btn closeBtn">清除</button>
                </li>`

    todos.push({
        id: dataId,
        text: task,
        completed: false
    })
    todoList.insertAdjacentHTML("afterbegin",todoItem)
    taskInput.value = ""
    // 讓輸入的回到taskInput
    taskInput.focus()
}
// 當我點完成的時候要把span的class加上完成的樣式，並且按鈕文字變成已完成
const finishItem = (target)=>{
    const item = target. nextElementSibling
    item.classList.toggle("finished")
    if (item.classList.contains("finished")) {
        target.textContent = "已完成"
    }else{
        target.textContent = "完成"
    }
    todos.completed = !todos.completed
} 


const closeItem = (target) => {
    const todoItem = target.parentNode
    const id = todoItem.dataset.id
    todos = todos.filter(todo =>{
        return todo.id !=id
    })
    target.parentNode.remove()
}

addBtn.addEventListener("click", () => {
    createTaskItem()
})

taskInput.addEventListener("keydown", (e) =>{
    if (e.key === "Enter") {
        createTaskItem()
    }
})

todoList.addEventListener("click",(e)=>{
    if (e.target.classList.contains("closeBtn")) {
        closeItem(e.target)
    }else if (e.target.classList.contains("finishBtn")) {
        finishItem(e.target)
    }
    
})

