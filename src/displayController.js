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
        createToDoCard(taskValues)
        let myTaskList = [];
        myTaskList.push(taskValues)
        console.log(myTaskList)
    })

    
    
}

const createToDoCard = (taskValues) => {
    
    
    const table = document.querySelector('.todoTasks')

    const todoItem = 
    document.createElement('tr')
    todoItem.setAttribute('class', 'todoItem')

    const td1 = 
    document.createElement('td')
    const td2 = 
    document.createElement('td')
    const td3 = 
    document.createElement('td')
    const td4 = 
    document.createElement('td')
    const td5 = 
    document.createElement('td')


    const checkBox =
    document.createElement('input')
    checkBox.setAttribute('type', 'checkbox')
    checkBox.setAttribute('id', 'checkBox')

    const todoName = 
    document.createElement('div')
    todoName.setAttribute('id', 'todoName')
    todoName.textContent = taskValues.taskName

    const todoDate = 
    document.createElement('div')
    todoDate.setAttribute('id', 'dueDate')
    todoDate.textContent = taskValues.dueDate

    const todoPriority = 
    document.createElement('div')
    todoPriority.setAttribute('id', 'priority')
    todoPriority.textContent = taskValues.priority

    const deleteButton = 
    document.createElement('button')
    deleteButton.setAttribute('id', 'deleteButton')
    deleteButton.setAttribute('type', 'button')
    deleteButton.textContent = 'DELETE'

    td1.appendChild(checkBox)
    td2.appendChild(todoName)
    td3.appendChild(todoDate)
    td4.appendChild(todoPriority)
    td5.appendChild(deleteButton)

    todoItem.appendChild(td1)
    todoItem.appendChild(td2)
    todoItem.appendChild(td3)
    todoItem.appendChild(td4)
    todoItem.appendChild(td5)

    table.appendChild(todoItem)

}

const todoView = () => {

}

export{todoPopUpWindow}
