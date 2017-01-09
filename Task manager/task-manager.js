window.onload = function () {
    var inputField = document.getElementById('taskField');
    var allSpan=document.getElementById('all');
    var activeSpan=document.getElementById('active');
    var completedSpan=document.getElementById('completed');
    
    inputField.addEventListener('keypress', function (e) {
        if (13 == e.keyCode) {
            AddTask();
            e.currentTarget.value = '';
        }
        SetTaskCounter();
    });

    allSpan.addEventListener('onclick',function(){
        ShowAllTasks();
    })

    activeSpan.addEventListener('onclick',function(){
        ShowActiveTasks();
    })
    
    completedSpan.addEventListener('onclick',function(){
        ShowCompletedTasks();
    })
}

var id = 0;
var counter = 0;

function ShowAllTasks(){

}

function ShowActiveTasks(){

}

function ShowCopmletedTasks(){

}

function SetTaskCounter() {
    var itemsLeft = document.getElementById('left-items');
    itemsLeft.innerText = counter + " items left";

}

function AddTask() {
    id++;
    counter++;
    var input = document.getElementById('taskField').value;
    var taskContainer = document.getElementById("task-container");
    var div = document.createElement('div');
    var checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', 'name');
    checkbox.setAttribute('id', id);
    var label = document.createElement('label');
    label.setAttribute('for', id);
    label.setAttribute('class', 'active');
    label.innerText = input;
    var closeSpan = document.createElement('span');
    closeSpan.setAttribute('class', 'close');
    closeSpan.innerText = 'X';
    closeSpan.addEventListener('click', function () {
        var elementToRemove = closeSpan.parentNode;
        
        if (elementToRemove.childNodes[1].classList.contains("active")) {
            counter--;
            SetTaskCounter();
        }

        elementToRemove.parentNode.removeChild(elementToRemove);
    })

    div.appendChild(checkbox);
    div.appendChild(label);
    div.appendChild(closeSpan);
    taskContainer.appendChild(div);
    checkbox.addEventListener('change', function () {
        
        if (checkbox.checked) {
            label.setAttribute('class', 'done');
            counter--;
            SetTaskCounter();
        }

        else {
            label.setAttribute('class', 'active');
            counter++;
            SetTaskCounter();
        }
    }, false);
}








