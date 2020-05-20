import { taskValues } from "./todo.js"

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
        tasksDisplay()
        
    })
}

const tasksDisplay = () => {
    
}

export{todoPopUpWindow}
