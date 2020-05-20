import { taskValues } from "./todo.js"

let myList = [];

const todoPopUpWindow = () => {
    const windowDisplay = document.querySelector('#addTaskButton');
    const cancelDisplay = document.querySelector('#cancel');
    const submitTask = document.querySelector('#submit');

    windowDisplay.addEventListener('click', () =>{
        document.getElementById('addTaskWindowContainer').style.display = 'block';
        
    })
    cancelDisplay.addEventListener('click', () =>{
        document.getElementById('addTaskWindowContainer').style.display = 'none';
    })
    submitTask.addEventListener('click', () => {
        projectDisplay();
        
    })
    
}

// const tasksDisplay = () => {
//     //todo item from page load module will be available here.
    
//         // const todoItem = 
//         // document.createElement('tr');
//         // todoItem.setAttribute('class', 'todoItem');
//         // todoItem.setAttribute('data', 'todoIdNum');
//         // todoItem.querySelector('.todoItem');



// }

function projectDisplay () {
    console.log(taskValues.taskName.value)
}

export{todoPopUpWindow}
