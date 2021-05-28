
var listItems = document.querySelectorAll("#list li");
for (let i = 0; i < listItems.length; i++) {
    var span = document.createElement("span");
    span.innerHTML = "x";
    span.className = "close";
    listItems[i].appendChild(span);
    listItems[i].addEventListener("click", (event) => {
        event.target.classList.toggle("checked");
    })
}

function newElement() {
    var task = document.getElementById("task").value;
    var textVal = document.createTextNode(task);

    if(task === "" || task.length == 0) {
        $(".error").toast("show");
    }
    else {
        $(".success").toast("show");
        var newTask = document.createElement("li");
        newTask.appendChild(textVal);
        document.getElementById("list").appendChild(newTask);
        var span = document.createElement("span");
        span.innerHTML = "x";
        span.className = "close";
        newTask.appendChild(span);
        newTask.addEventListener("click", (event) => {
            event.target.classList.toggle("checked");
        });
    }
    document.getElementById("task").value = "";
    var closeClass = document.querySelectorAll(".close");
    for (let i = 0; i < closeClass.length; i++) {
        closeClass[i].addEventListener("click", (event) => {
            
            event.target.parentNode.style.display = "none";
        });
        
    }
}

var closeClass = document.querySelectorAll(".close");
    for (let i = 0; i < closeClass.length; i++) {
        closeClass[i].addEventListener("click", (event) => {
            
            event.target.parentNode.style.display = "none";
        });
        
    }
