const task1 = new ToDo('Compra il latte ', ToDo.PRIORITY.Medium, ['spesa', 'frigo']);

const task2 = new ToDo('Compra la focaccia', ToDo.PRIORITY.Low, ['spesa', 'casa']);

const task3 = new DeadLineToDo('Fai gli auguri a Nonna', new Date(2022, 6, 10), ToDo.PRIORITY.High, ['famiglia', 'compleanni']);

const task4 = new DeadLineToDo('Chiama Marco');

const task5 = new DeadLineToDo('Vai a allenamento', null, ToDo.PRIORITY.High, ['Salute', 'Dieta', 'Surf']);


const toDoList = [task1, task2, task3, task4, task5];

function displayByTemplate() {

    const template = ` 
 <div id="todo-list-container" class="todo-list-container red-border">
    <div class="todo-container red-border">
        <div class="title-container red-border">#TITLECONTAINER</div>
        <span class="tag-container red-border"></span>
         <span class="date-container red-border">#DATE</span>
        <button class="done-button red-border">Done</button>
    </div>

</div>
`
const todoListContainer = document.getElementById('todo-list-container');

for (let i = 0; i < toDoList.length; i++) {
    const todo = toDoList[i];

    const div = document.createElement('div');

    todoTemplate = template.replace('#TITLECONTAINER', todo.name)
                             .replace('#DATE', todo.creationDate.toISOString())

    div.innerHTML = todoTemplate
    todoListContainer.appendChild(div);

    const todoContainer = div.querySelector('.todo-container')
    todoContainer.style.backgroundColor = todo.priority.color;

    if (todo.deadLineDate) {
        // const dateContainer = div.getElementsByClassName('date-container')[0];
        const dateContainer = div.querySelector('.date-container')
        const dateSpan = document.createElement('span');
        const dateNode = document.createTextNode(todo.deadLineDate.toISOString());
        dateSpan.appendChild(dateNode);
        dateContainer.appendChild(dateSpan);
    }

    const tagContainer = div.querySelector('.tag-container')
    for (const tag of todo.tags) {
        const tagSpan = document.createElement('span');
        tagSpan.classList.add('tag')
        const node = document.createTextNode(tag);
        tagSpan.appendChild(node);
        tagContainer.appendChild(tagSpan)
    }
}
}

displayByTemplate()

