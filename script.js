var submit = document.getElementById("submit");
var input = document.getElementById("input");
var ul = document.querySelector("ul");
var tasks = document.getElementById("tasks");

checkTasks();

function checkTasks() {
    if (document.querySelector("li") == null) {
        var p = document.createElement("p");
        p.innerHTML = "No Tasks";
        p.className = "text-secondary m-0";
        p.setAttribute("id", "empty");
        tasks.appendChild(p);
    }
}

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    var span = document.createElement("span");
    li.appendChild(span);
    span.innerHTML = input.value;
    li.className =
        "d-flex justify-content-between align-items-center list-group-item";
    ul.appendChild(li);

    li.addEventListener("click", () => {
        var checked = span.classList.toggle("checked");
        var btn = document.createElement("button");
        btn.className = "btn btn-danger";

        if (checked) {
            li.appendChild(btn);
            btn.innerHTML = "Delete";
            btn.addEventListener("click", () => {
                btn.parentElement.remove();
            });
        } else {
            li.getElementsByClassName("btn")[0].remove();
            checkTasks();
        }
    });

    input.value = null;

    var element = document.getElementById("empty");
    if (element) {
        element.remove();
    }
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

submit.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
