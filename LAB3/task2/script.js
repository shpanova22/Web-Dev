
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');


const myPhotoUrl = 'https://s1.iconbird.com/ico/0912/MetroUIDock/w512h5121347465086RecycleBinFull.png';


const createTodoItem = (text) => {
    const li = document.createElement('li');
    li.className = 'todo-item';

   
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        li.classList.toggle('completed');
    });

   
    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = text;

 
    const photoBtn = document.createElement('button');
    photoBtn.className = 'photo-box';
    
    const img = document.createElement('img');
    img.src = myPhotoUrl;
    img.alt = 'Удалить';
    
    photoBtn.appendChild(img);

   
    photoBtn.addEventListener('click', () => {
        todoList.removeChild(li);
    });

   
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(photoBtn);

    return li;
};


todoForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const taskText = todoInput.value.trim();
    
    if (taskText !== '') {
        const newItem = createTodoItem(taskText);
        todoList.appendChild(newItem);
        
        todoInput.value = ''; 
        todoInput.focus();    
    }
});