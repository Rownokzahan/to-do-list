const taskList = document.querySelector('ul');
const addForm = document.getElementById('add-form');
const updateForm = document.getElementById('update-form');

taskList.addEventListener('click', function (e) {
    const taskContainer = e.target.closest('li div.flex');
    if (!taskContainer) {
        return;
    }
    taskContainer.classList.toggle('line-through');

    const icon = taskContainer.querySelector('div .bi');
    icon.classList.toggle('bi-circle');
    icon.classList.toggle('bi-check-circle-fill');

    const buttons = taskContainer.parentNode.querySelectorAll('button');
    for (const button of buttons) {
        button.classList.toggle('hidden');
    }
});

document.getElementById('new-task-btn').addEventListener('click', function () {
    addForm.classList.toggle('hidden');
});

// Remove Task
taskList.addEventListener('click', function (e) {
    const removeIcon = e.target.closest('.remove-icon');
    if (!removeIcon) {
        return;
    }
    taskList.removeChild(e.target.closest('li'));
});

