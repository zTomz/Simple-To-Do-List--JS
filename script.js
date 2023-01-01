const inputField = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

var todos = new Map();

inputField.onchange = function() {
    const content = inputField.value;
    inputField.value = "";
    todos.set(content, false);
    buildList(content);
}

function buildList(key) {
    let newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(key));
    newItem.setAttribute("class", "list-item");
    newItem.addEventListener("click", function() {
        let state = newItem.getAttribute("value");
        if(state === "done") {
            newItem.setAttribute("value", "");
            return;
        }
        newItem.setAttribute("value", "done");
    });

    todoList.appendChild(newItem);
}

