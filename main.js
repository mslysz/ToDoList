const form = document.querySelector('form');
const input = document.querySelector('input');
const taskNumber = document.querySelector('h2 span');
const ul = document.querySelector('ul');
const tasksList = document.getElementsByClassName('task');
const secondInput = document.getElementById('secondInput');


const removeTask = (e) => {
  e.target.parentNode.remove();
  taskNumber.textContent = tasksList.length;
}


const addTask = (e) => {
  e.preventDefault();
  const titleTask = input.value;
  if (titleTask === "") return;
  const task = document.createElement('li');
  task.className = 'task';
  task.innerHTML = titleTask + '<button>Delete</button>';
  ul.appendChild(task);
  taskNumber.textContent = tasksList.length;
  input.value = "";
  task.querySelector('button').addEventListener('click', removeTask)
}


const searchTask = (e) => {
  const searchText = e.target.value.toLowerCase();
  let tasks = [...tasksList];
  if (searchText === "") {
    tasks.forEach(task => task.style.display = 'block');
  } else {
    tasks.forEach(task => {
      if (task.textContent.toLowerCase().includes(searchText)) {
        task.style.display = "block";
      } else {
        task.style.display = "none"
      }
    })
  }

}

form.addEventListener('submit', addTask)
secondInput.addEventListener('input', searchTask)