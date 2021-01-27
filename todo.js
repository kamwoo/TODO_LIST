const todoform = document.querySelector(".js-todoform"),
    todoInput = todoform.querySelector("input"),
    todolist = document.querySelector(".js-todolist");

const todo_ls = "todos";
let todos = [];

function deletetodo(event){
    const btn = event.target;
    const li = btn.parentNode;
    todolist.removeChild(li);
    const cleantodos = todos.filter(function(todo){
        return todo.id !== parseInt(li.id);
    });
        // todos에서 li아이디 값이 없으면 거르고 cleantodos에 넣는다.
    todos = cleantodos;
    savetodos();
}

function savetodos(){
    localStorage.setItem(todo_ls, JSON.stringify(todos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delbt = document.createElement("button");
    const span = document.createElement("span");
    const newId = todos.length + 1;
    delbt.value = "x";
    delbt.addEventListener("click",deletetodo);
    span.innerHTML = text;
    li.appendChild(span);
    li.appendChild(delbt);
    todolist.appendChild(li);
    li.id = newId;
    const todoobj = {
        text : text,
        id : newId
    };
    todos.push(todoobj);
    savetodos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    paintToDo(currentValue);
    todoInput.value = "";
}

function something(todo){
    paintToDo(todo.text);
}

function loadtodos(){
    const todos = localStorage.getItem(todo_ls);
    if (todos !== null){
        const parsedtodos = JSON.parse(todos);
        parsedtodos.forEach(something);
    }
}

function init(){
    loadtodos();
    todoform.addEventListener("submit",handleSubmit);
}

init();