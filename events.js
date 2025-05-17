function newTask() {
    // Get the list element
    const listElement = document.querySelector('#todoList');
    // Get the value from the input
    const task = document.querySelector('#todo').value;
  
    // Only add task if input is not empty
    if (task.trim() !== '') {
      // Add the task to the list
      listElement.innerHTML += `
        <li> ${task}
          <div>
            <span data-function="delete">❎</span>
            <span data-function="complete">✅</span>
          </div>
        </li>`;
    }
  
    // Clear the input
    document.querySelector('#todo').value = '';
  }
  
  function manageTasks(e) {
    // Get the parent <li> of the clicked element
    const parent = e.target.closest('li');
  
    // Check which icon was clicked
    if (e.target.getAttribute('data-function') === 'delete') {
      parent.remove(); // Remove the task
    }
  
    if (e.target.getAttribute('data-function') === 'complete') {
      parent.classList.toggle('strike'); // Toggle the "strike" class
    }
  }
  
  // Add event listeners
  document.querySelector('#submitTask').addEventListener('click', newTask);
  document.querySelector('#todoList').addEventListener('click', manageTasks);  