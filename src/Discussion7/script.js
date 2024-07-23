document.getElementById('taskList').addEventListener('click', function(event) {
    if (event.target && event.target.matches('li.task')) {
        event.target.classList.toggle('completed');
    }
});
