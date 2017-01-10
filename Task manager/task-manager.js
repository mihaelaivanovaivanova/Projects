window.onload = function () {
    var inputField = document.getElementById('taskField');
    var allSpan = document.getElementById('all');
    var activeSpan = document.getElementById('active');
    var completedSpan = document.getElementById('completed');

    inputField.addEventListener('keypress', function (e) {
        if (13 == e.keyCode) {
            AddTask();
            e.currentTarget.value = '';
        }
        SetTaskCounter();
    });
    allSpan.addEventListener('click', function () {
        ShowAllTasks();
    })

    activeSpan.addEventListener('click', function () {
        ShowActiveTasks();
    })

    completedSpan.addEventListener('click', function () {
        ShowCompletedTasks();
    })
}

var id = 0;
var counter = 0;

function ShowAllTasks() {
    var divs = document.getElementsByTagName('div');
    for (var div of divs) {
        if (div.style.display == 'none') {
            div.style.display = 'block';
        }
    }
    var spans=document.getElementsByTagName('span');
    for(var span of spans){
        span.style.border='none';
    }
    var spanAll = document.getElementById('all');
    spanAll.style.border = '1px solid #cc9a9a';
}

function ShowActiveTasks() {
    var doneDivs = document.getElementsByClassName('hidden');
    var notDoneDivs = document.getElementsByClassName('visible');
    for (var div of notDoneDivs) {
        if (div.style.display == 'none') {
            div.style.display = 'block';
        }
    }
    for (var div of doneDivs) {
        if (div.style.display !== 'none') {
            div.style.display = 'none';
        }
    }
    var spans=document.getElementsByTagName('span');
    for(var span of spans){
        span.style.border='none';
    }
    var spanActive = document.getElementById('active');
    spanActive.style.border = '1px solid #cc9a9a';
}

function ShowCompletedTasks() {
    var doneDivs = document.getElementsByClassName('hidden');
    var notDoneDivs = document.getElementsByClassName('visible');
    for (var div of notDoneDivs) {
        if (div.style.display !== 'none') {
            div.style.display = 'none';
        }
    }
    for (var div of doneDivs) {
        if (div.style.display == 'none') {
            div.style.display = 'block';
        }
    }
    var spans=document.getElementsByTagName('span');
    for(var span of spans){
        span.style.border='none';
    }
    var spanComplete = document.getElementById('completed');
    spanComplete.style.border = '1px solid #cc9a9a';
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
    div.setAttribute('class', 'visible');
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
    closeSpan.innerText = '✖';
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
            checkbox.parentNode.setAttribute('class', 'hidden')
        }

        else {
            label.setAttribute('class', 'active');
            counter++;
            SetTaskCounter();
            checkbox.parentNode.setAttribute('class', 'visible')
        }
    }, false);
}








