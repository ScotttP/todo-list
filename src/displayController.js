import { Tasks } from "./todo.js"

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

        let taskValues = new Tasks (taskName.value,projectFolder.value,taskDescription.value, dueDate.value, priority.value, taskNotes.value);
        taskValues.addToTaskList(taskValues);
    })
    
}


export{todoPopUpWindow}
