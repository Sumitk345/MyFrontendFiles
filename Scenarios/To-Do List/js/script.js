let inputbox = document.getElementById('inputbox');
let addbtn = document.getElementById('add-btn');
let Neweditbtn = document.getElementById('edit-btn');
let todolist = document.getElementById('tasks');
let error = document.getElementById('error');
let countValue = document.querySelector('.count-value');

let taskCount = 0;

const updateCount = () => {
    let storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    let uncheckedTodos = storedTodos.filter(obj => {
        let key = Object.keys(obj)[0];
        return obj[key] === false;
    });
    countValue.innerHTML = uncheckedTodos.length;
}

const displayTasks = () => {
    todolist.innerHTML = "";
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    storedTodos.forEach((item, index) => {
        Object.keys(item).forEach(key => {
            const value = item[key];
            let taskItem = document.createElement('div');
            taskItem.classList.add('task');
            taskItem.innerHTML = `
                <label class="custom-checkbox">
                <input type="checkbox" class="task-check" ${value ? "checked" : ""} data-index="${index}">
                <span class="checkmark"></span>
                </label>
                <span class="taskname ${value}">${key}</span>
                <button class="edit ${value}"><i class="fa-solid fa-pen-to-square" data-index="${index}"></i></button>
                <button class="delete"><i class="fa-solid fa-trash"data-index="${index}"></i></button>
            `;
            todolist.appendChild(taskItem);
            

        });
    });
    inputbox.value = "";
    taskCount++;
    updateCount();

    document.querySelectorAll('.task-check').forEach(checkbox => {
        checkbox.addEventListener('change', (event) => {
            let index = event.target.getAttribute('data-index');
            let storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
            let key = Object.keys(storedTodos[index])[0];
            storedTodos[index][key] = event.target.checked;
            localStorage.setItem("todos", JSON.stringify(storedTodos));
            updateCount();
            displayTasks();
        });
    });

    document.querySelectorAll('.delete').forEach(deletebtn => {
        deletebtn.addEventListener('click', (event) => {
            let index = event.target.getAttribute('data-index');
            console.log(index);
            
            let storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
            console.log(storedTodos);

            var delitem = storedTodos.splice(index, 1)
            console.log(delitem);

            localStorage.setItem("todos", JSON.stringify(storedTodos));
            updateCount();
            displayTasks();
        });
    });

    document.querySelectorAll('.edit').forEach(editbtn => {
        editbtn.addEventListener('click', (event) => {
            console.log("click");
            var block = document.querySelector('.task:has(.edit:focus)')
            // console.log(block);
            block.classList.add('disable')

            Neweditbtn.style.zIndex = 1;
            let index = event.target.getAttribute('data-index');
            let storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
            let key = Object.keys(storedTodos[index])[0];
            inputbox.value = key;

            Neweditbtn.onclick = () => {
                let Newinputtext = inputbox.value.trim();
                if (Newinputtext.length > 0) {
                    let updatedTask = {};
                    updatedTask[Newinputtext] = storedTodos[index][key]; 

                    storedTodos.splice(index, 1, updatedTask);
                    localStorage.setItem("todos", JSON.stringify(storedTodos));
                    displayTasks(); 
                    updateCount();
                    Neweditbtn.style.zIndex = -1;
                } else {
                    error.style.display = "block";
                    setTimeout(() => {
                        error.style.display = "none";
                    }, 2000);
                    return;
                }
            };
        });
    });

}

const addtask = () => {
    let inputtext = inputbox.value.trim();
    if (inputtext.length == 0) {
        error.style.display = "block";
        setTimeout(() => {
            error.style.display = "none";
        }, 2000);
        return;
    } else {
        let storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        let newTask = {};
        newTask[inputtext] = false;
        storedTodos = [...storedTodos, newTask];
        localStorage.setItem("todos", JSON.stringify(storedTodos));
        inputbox.value = "";
        taskCount++;
        displayTasks();
        updateCount();
    }
}

window.onload = () => {
    displayTasks();
}

addbtn.addEventListener('click', addtask);
