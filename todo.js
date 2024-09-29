document.addEventListener('DOMContentLoaded', function () {
    const username = sessionStorage.getItem('loggedInUser');
    if (!username) {
        window.location.href = 'index.html';
    }

    document.getElementById('user-name').textContent = username;

    const taskList = JSON.parse(localStorage.getItem(username + '_tasks')) || [];

    function renderTasks() {
        const taskListElement = document.getElementById('task-list');
        taskListElement.innerHTML = '';
        taskList.forEach((task, index) => {
            const li = document.createElement('li');
            li.textContent = task;
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'X';
            removeBtn.addEventListener('click', function () {
                taskList.splice(index, 1);
                localStorage.setItem(username + '_tasks', JSON.stringify(taskList));
                renderTasks();
            });
            li.appendChild(removeBtn);
            taskListElement.appendChild(li);
        });
    }

    renderTasks();

    document.getElementById('add-task-btn').addEventListener('click', function () {
        const newTask = document.getElementById('new-task').value;
        if (newTask) {
            taskList.push(newTask);
            localStorage.setItem(username + '_tasks', JSON.stringify(taskList));
            document.getElementById('new-task').value = '';
            renderTasks();
        }
    });

    document.getElementById('logout-btn').addEventListener('click', function () {
        sessionStorage.removeItem('loggedInUser');
        window.location.href = 'index.html';
    });
});
