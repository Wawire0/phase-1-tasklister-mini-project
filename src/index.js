
document.addEventListener('DOMContentLoaded', function () {
  const taskInput = document.getElementById('taskInput');
  const addTaskButton = document.getElementById('addTask');
  const taskList = document.getElementById('taskList');
  const clearCompletedButton = document.getElementById('clearCompleted');

  addTaskButton.addEventListener('click', function () {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
          
          const taskItem = document.createElement('li');
          taskItem.textContent = taskText;
          taskList.appendChild(taskItem);
          taskInput.value = '';
      }
  });

  taskList.addEventListener('click', function (event) {
      if (event.target.tagName === 'LI') {
          
          event.target.classList.toggle('completed');
      }
  });

  clearCompletedButton.addEventListener('click', function () {
      
      const completedTasks = taskList.getElementsByClassName('completed');
      while (completedTasks.length > 0) {
          completedTasks[0].remove();
      }
  });
});
