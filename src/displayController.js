import { Tasks } from "./todo.js"
import { Projects,projectList } from "./projects.js"

const taskPopUpWindow = () => {
    const windowDisplay = document.querySelector('#addTaskButton');
    const cancelDisplay = document.querySelector('#cancel');
    
    windowDisplay.addEventListener('click', () =>{
        document.getElementById('addTaskWindowContainer').style.display = 'block';//displays window
    })
    cancelDisplay.addEventListener('click', () =>{
        document.getElementById('addTaskWindowContainer').style.display = 'none';//closes window
    })
}

const taskDetailsWindow = () => {//displays the details of the task

}

const taskLoader = () => {//loads tasks in the tasks area.

    function renderTaskCard (projectValues){
        
        let table = document.querySelector('.todoTasks')
        table.innerHTML = '';
        
        for (let properties in projectValues){
            if (typeof projectValues[properties] === 'object'){
                for (let task of projectValues[properties]){
                    let taskItem = document.createElement('tr')
                    
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
                    todoName.textContent = task.taskName
                
                    const todoDate = 
                    document.createElement('div')
                    todoDate.setAttribute('id', 'dueDate')
                    todoDate.textContent = task.dueDate
                
                    const todoPriority = 
                    document.createElement('div')
                    todoPriority.setAttribute('id', 'priority')
                    todoPriority.textContent = task.priority
                
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
                
                    taskItem.appendChild(td1)
                    taskItem.appendChild(td2)
                    taskItem.appendChild(td3)
                    taskItem.appendChild(td4)
                    taskItem.appendChild(td5)
            
                    table.appendChild(taskItem)
                }
            }
        }
        
    }
    
    return {
        renderTaskCard
    }
}

const projectLoader = (projectValues,projectList) => {//loads projets to the projects area

    function renderProjectCard () {//takes the projectList array and displays the project names on the page
        const projectListDiv = document.querySelector('.projectList');
        projectListDiv.innerHTML = '';//resets the display so all existing values aren't displayed
    
        for (let project of projectList){
            let addProj = document.createElement('li');
            addProj.value = project;
            addProj.textContent = project;
            projectListDiv.appendChild(addProj)
            addDeleteButtonAndListener(addProj,project)
        }
        
        
    }
    function loadProjectListOptions (projectValues) {//this loads the project name options in the task pop up window
        const projectFolder = document.querySelector('#projectFolder');
    
        let option = document.createElement('option');
        option.value= projectValues.projectName;
        option.text = projectValues.projectName;
        projectFolder.appendChild(option)
        
    }
    function addDeleteButtonAndListener (addProj,project) {//adds the delete button and listener with delete button.
        let deleteProjButton = document.createElement('i')
        deleteProjButton.setAttribute('class', 'fa fa-close')
        deleteProjButton.setAttribute('id','deleteProjButton')
        deleteProjButton.setAttribute('value', project)
        addProj.appendChild(deleteProjButton)

        deleteProjButton.addEventListener('click', () => {
            projectValues.deleteFromProjectList(projectList,addProj)//deletes from projectList array
            renderProjectCard(projectValues,projectList)//renders the new project list
         })
    }
    return {
        renderProjectCard,
        loadProjectListOptions
    }
    
}


export{taskPopUpWindow,projectLoader,taskLoader}
