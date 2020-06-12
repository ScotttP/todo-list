import { Tasks, taskList } from "./todo.js"
import { Projects,projectList } from "./projects.js"


let taskNameWindow = document.getElementById('taskName')
let taskProjectFolderWindow = document.getElementById('projectFolder')
let taskDecriptionWindow = document.getElementById('taskDescription')
let taskdueDateWindow = document.getElementById('dueDate')
let taskPriorityWindow = document.getElementById('priority')
let taskNotesWindow = document.getElementById('taskNotes')

const taskPopUpWindow = () => {

    function display () {
        document.getElementById('addTaskWindowContainer').style.display = 'block';//displays window
    }
    function hide () {
        document.getElementById('addTaskWindowContainer').style.display = 'none';//closes window
       
    }
    function clearValues () {//clears the task form
        taskNameWindow.value = '';
        taskDecriptionWindow.value = '';
        taskdueDateWindow.value = '';
        taskNotesWindow.value = '';
    }
    function buttonDisplay (newTask){//displays which button based on if the user is editing or creating a new task
        
        if (newTask === false){
            document.getElementById('saveButton').style.display = 'block';
            document.getElementById('submitButton').style.display = 'none';
        }else if (newTask === true){
            document.getElementById('saveButton').style.display = 'none';
            document.getElementById('submitButton').style.display = 'block';
        }
    }
    

    return {
        display,
        hide,
        clearValues,
        buttonDisplay
    }
}

const taskDetailsWindow = (td,taskList) => {//displays the details of the task in the taskForm
    function setValues (indexOfThisTask) {
    
        taskNameWindow.value = taskList[indexOfThisTask].taskName
        taskProjectFolderWindow.value = taskList[indexOfThisTask].projectFolder
        taskDecriptionWindow.value = taskList[indexOfThisTask].taskDescription
        taskdueDateWindow.value = taskList[indexOfThisTask].dueDate
        taskPriorityWindow.value = taskList[indexOfThisTask].priority
        taskNotesWindow.value = taskList[indexOfThisTask].taskNotes


    }
    return {setValues}
}

const taskLoader = (taskList,taskValues) => {//loads tasks in the tasks area.
    const tBody = document.querySelector('#tbody');

    function renderAllTasks (taskList){
        tBody.innerHTML = '';

        for (let index in taskList){
            
            let tr = document.createElement('tr')
            tr.className = "todoItem"
            tr.id = `${index}` //index of the task in the taskList
            tr.setAttribute('name', `${taskList[index].projectFolder}TableCard`)

            let edit = document.createElement('button')
            edit.classList = 'editButton'
            edit.id = `${index}`
            edit.textContent = 'Edit this task'
        
            let checkTd = document.createElement('td')
            let checkBox = document.createElement('input')
            checkBox.setAttribute('type','checkbox')
            tr.appendChild(edit)
            checkTd.appendChild(checkBox)
            tr.appendChild(checkTd)
            

            for (let tasks in taskList[index]){
                let td = document.createElement('td')
                td.className = `${tasks}CardDisplay`
                td.textContent = `${taskList[index][tasks]}`
                tr.appendChild(td)
                //this renders all of the properties but i only 3 of the properties. need to figure out logic to achieve that.
                if (td.className === 'projectFolderCardDisplay' || td.className === 'taskDescriptionCardDisplay' || td.className === 'taskNotesCardDisplay' ){
                    tr.removeChild(td)
                }
            }
            addDeleteTaskAndListener(tr,index)
            tBody.appendChild(tr)
            
        } 
        
    }
    function clearOrDisplayTasks (display) {
        let allTaskCards = document.getElementsByClassName('todoItem')
        if (display === false){//if the display is set to false, hide all of the tasks.
            for (let i = 0; i<allTaskCards.length;++i){
                allTaskCards[i].style.display = 'none'
            }
        }else if (display === true){// if the display is true show all of the tasks.
            for (let i = 0; i<allTaskCards.length;++i){
                allTaskCards[i].style.display = 'block'
            }
        }

    }
    function renderProjectsTasks (taskList,li) {//based on which project name is clicked, it displays all the tasks with that specific project folder
        let display = false
        clearOrDisplayTasks(display)

        for (let index in taskList){   
            let project = document.getElementsByName(`${taskList[index].projectFolder}TableCard`)
            if (taskList[index].projectFolder === li.id){
                for (let i = 0; i<project.length;++i){
                    project[i].style.display = 'flex'
                }
            }
        }
    
    }
    function addDeleteTaskAndListener (tr,index) { //adds the delete button and listener which deletes the specific task in task list
        let deleteTd = document.createElement('td')
        let deleteTask = document.createElement('button')
        deleteTask.setAttribute('type','button')
        deleteTask.setAttribute('id','deleteTask')
        deleteTask.setAttribute('data-index',`${index}`)
        deleteTask.textContent = 'Delete'
        deleteTask.addEventListener('click', () => {
            taskValues.deleteFromTaskLIst(taskList,index)
            renderAllTasks(taskList)
        })
        deleteTd.appendChild(deleteTask)
        tr.appendChild(deleteTd)
    }
    return {
        renderAllTasks,
        renderProjectsTasks,
        clearOrDisplayTasks
    }
}

const projectLoader = () => {//loads projets to the projects area

    function renderProjectCard (projectValues,projectList) {//takes the projectList array and displays the project names on the page
        const projectListDiv = document.querySelector('.projectList');
        const home = document.querySelector('#allTasks')
        
        projectListDiv.innerHTML = '';//resets the display so all existing values aren't displayed
        projectListDiv.appendChild(home)

        for (let project of projectList){
            let addProj = document.createElement('li');
            addProj.className = 'projects';
            addProj.id = project;
            addProj.textContent = project;
            projectListDiv.appendChild(addProj)
            addDeleteButtonAndListener(addProj,project,projectValues)
        }
    }
    function loadProjectListOptions (projectList) {//this loads the project name options in the task pop up window 
        //need to refactor is so it comes from the project list
        const projectFolder = document.querySelector('#projectFolder');
        projectFolder.innerHTML = '';
        
        for (let projects of projectList){
            let option = document.createElement('option');
            option.value= projects;
            option.text = projects;
            projectFolder.appendChild(option)
        }
    }
    function addDeleteButtonAndListener (addProj,project,projectValues) {//adds the delete button and listener with delete button.
        let deleteProjButton = document.createElement('i')
        deleteProjButton.setAttribute('class', 'fa fa-close')
        deleteProjButton.setAttribute('id','deleteProjButton')
        deleteProjButton.setAttribute('value', project)
        addProj.appendChild(deleteProjButton)

        deleteProjButton.addEventListener('click', () => {
            projectValues.deleteFromProjectList(projectList,addProj)//deletes from projectList array
            renderProjectCard(projectValues,projectList)//renders the new project list
            loadProjectListOptions(projectList)
         })
    }
    return {
        renderProjectCard,
        loadProjectListOptions
        
    }
    
}


export{taskPopUpWindow,projectLoader,taskLoader,taskDetailsWindow}
