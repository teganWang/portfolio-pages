const addBtn = document.querySelector(".add-btn")
const taskInput = document.querySelector("#addContent")
const todoList = document.querySelector(".todo-list")
const finishBtn = document.querySelector(".finishBtn")
const editBtn = document.querySelector(".editBtn")
let todos =[]


//先決定編輯功能怎麼操作

// localStorage只能儲存字串，value是覆蓋不是加上。JSON.parse()可以幫忙將字串轉回陣列/物件
const saveTodos = () => {
    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    )
}

const renderTodos = () => {
    todoList.innerHTML = ""
    todos.forEach((todo) =>{
        const todoItem = `                <li class="todo-item" data-id="${todo.id}">
                    <button class="btn finishBtn">${todo.completed ? "已完成" : "完成"}</button>
                    <span class="item ${todo.completed ? "finished" : ""}">${todo.text}</span>
                    <button class="btn editBtn">修改</button>
                    <button class="btn closeBtn">清除</button>
                </li>`
        todoList.insertAdjacentHTML("afterbegin",todoItem)
    })
}

const loadTodos = () => {
    const savedTodos = localStorage.getItem("todos")
    todos = savedTodos? JSON.parse(savedTodos): []
    // 更簡單的寫法:=null || [] 的時候會直接等於[]因為null不存在
    // todos =JSON.parse(localStorage.getItem("todos"))|| []
    renderTodos()
}

// ? : 為三源運算子，表示"條件?true:false"
const createTaskItem = () => {
    const task = taskInput.value.trim()
    if (!task) return
    // 如果為空字串回傳
    const dataId = Date.now()
    todos.push({
        id: dataId,
        text: task,
        completed: false
    })
    saveTodos()
    renderTodos()
    taskInput.value = ""
    // 讓輸入的回到taskInput
    taskInput.focus()
}

const editItem = (target)=>{
    const todoItem = target.parentNode
    const id = Number(todoItem.dataset.id)
    const todo = todos.find(todo => todo.id === id)
    let taskEdit = prompt("請輸入新的待辦事項",todo.text)
    // 已經取消所以不用提醒沒有更新
    if (taskEdit === null) return
    const newText = taskEdit.trim()
    if (!newText) {
        alert("沒有更新待辦事項")
        return
    }
    todo.text = newText 
    saveTodos()
    renderTodos()
}
// 當我點完成的時候要把span的class加上完成的樣式，並且按鈕文字變成已完成
const finishItem = (target)=>{
    const item = target. nextElementSibling
    const todoItem = target.parentNode
    const id = Number(todoItem.dataset.id)
    // find需要一個function,令function是'回傳當todo.id === id的陣列'
    const todo = todos.find(todo => todo.id === id)
    item.classList.toggle("finished")
    todo.completed = !todo.completed
    saveTodos()
    renderTodos()
} 

const closeItem = (target) => {
    const todoItem = target.parentNode
    const id = todoItem.dataset.id
    todos = todos.filter(todo =>{
        return todo.id !=id
    })
    target.parentNode.remove()
    saveTodos()
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
    }else if (e.target.classList.contains("editBtn")) {
        editItem(e.target)
    }
})

loadTodos()