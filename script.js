const input = document.getElementById('inpbt');
const addButton = document.getElementById('addbt');
const task = document.getElementById('ttt');
const deleteAllButton = document.getElementById('deleteAllbt');

function addTask() {
    let inputValue = input.value.trim();
    console.log(`Input value: '${inputValue}'`); // Debugging line
    if (inputValue.length > 0) {
        const div = document.createElement('div');
        div.classList.add('tasks');
        
        const h3 = document.createElement('h3');
        h3.innerHTML = inputValue;
        
        const remove = document.createElement('p');
        remove.classList.add('rem');
        remove.innerHTML = "X";
        
        remove.addEventListener('click', () => {
            task.removeChild(div);
        });
        
        div.appendChild(h3);
        div.appendChild(remove);
        task.appendChild(div);
        
        input.value = "";
    } else {
        alert("Write something to add");
    }
}

function deleteAllTasks() {
    while (task.firstChild) {
        task.removeChild(task.firstChild);
    }
}

addButton.addEventListener('click', addTask);

input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

deleteAllButton.addEventListener('click', deleteAllTasks);
