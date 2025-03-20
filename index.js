function addTask() {
    const taskInput = document.getElementById('taskInput');
    const timeInput = document.getElementById('timeInput');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `${taskInput.value} <small> <em><b>at</b></em> ${timeInput.value || 'Anytime'}
    <input type="checkbox" class="checkbox" onclick="toggleDone(this)">
    </small> <button onclick="removeTask(this)">Remove</button>
    `;
    li.onclick = () => li.classList.toggle('done');
    taskList.appendChild(li);
    
    taskInput.value = '';
    timeInput.value = '';
}

function toggleDone(checkbox) {
    const taskItem = checkbox.parentElement;
    taskItem.classList.toggle('done');
}

function removeTask(button) {
    button.classList.add(`remove-btn`);
    const taskList = document.getElementById('taskList');
    taskList.removeChild(button.parentElement);
}

function resetTasks() {
    document.getElementById('taskList').innerHTML = '';
    document.getElementById('congratsMessage').style.display = 'none';
}