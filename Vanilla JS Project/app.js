// Selectors
// The querySelector() method returns the first element that matches a CSS selector.

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
// const filterOption = document.querySelector('.filter-todo');

// console.log(todoInput);
// console.log(todoButton);
// console.log(todoList);

// ******************************************************************************************** 
// EventListeners
// The addEventListener() method attaches an event handler to an element.

 todoButton.addEventListener('click', addTodo);
 todoList.addEventListener('click', deleteCheck);

//  filterOption.addEventListener('click', filterTodo);
 
// ********************************************************************************************
// functions

function addTodo(event) {
    // Prevent form from submitting
    event.preventDefault();
    // Todo Div
    const todoDiv = document.createElement('div'); // create div element <div class="todo"> </div>
    todoDiv.classList.add('todo')


    // Create li element
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // Check Mark Button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);

    // Check Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    // Append to list
    todoList.appendChild(todoDiv);

    // Clear Input Value
    todoInput.value = "";
}

// Function deleteCheck 

function deleteCheck(e){
   const item = e.target;
   console.log(item);
    // Delete Todo
   if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        // Animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
        
   }

    //CHECK MARK
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
   }     s
}

// function filterTodo(e) {
//     const todos = todoList.childNodes;
//     todos.forEach(function(todo) {
//         switch (e.target.value) {
//             case "all": 
//             console.log('all');
//                 todo.style.display = "flex";
//                 break;
//             case "completed":
//                 console.log('completed');
//                 if(todo.classList.contains('completed')){ // error in 87 line due to todo.ClassList.contains(); 
//                     todo.style.display = "flex";
//                     console.log('completed');
//                 } else {
//                     todo.style.display = "none";
//                     console.log('uncompleted');
//                 }
//                 break;  
//             case "uncompleted":
//                 console.log("uncompleted");
//                 if(!todo.classList.contains('uncompleted')){
//                     todo.style.display = "flex";
//                 } else {
//                     todo.style.display = "none";
//                 }
//                 break;      
//         }
//     });
// }
