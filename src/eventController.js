import { Tasks,taskList } from "./todo.js"
import { Projects,projectList } from "./projects.js"
import {projectLoader,taskLoader,taskDetailsWindow} from "./displayController.js"
import {taskPopUpWindow} from "./displayController.js"



const events = () => {

let newTask

const submitProject = document.querySelector('#addProjectButton');
const submitTask = document.querySelector('#submitButton');
const saveTask = document.querySelector('#saveButton');
const allTasks = document.querySelector('#allTasks');
const windowDisplay = document.querySelector('#addTaskButton');
const cancelDisplay = document.querySelector('#cancel');
const taskWindow = taskPopUpWindow()


windowDisplay.addEventListener('click', () =>{//displays the task form
    newTask = true;
    taskWindow.display()
    taskWindow.buttonDisplay(newTask)
    taskWindow.clearValues()

})
cancelDisplay.addEventListener('click', () =>{//closes the task form
    newTask = false;
    taskWindow.hide()
    taskWindow.clearValues()
})

submitProject.addEventListener('click', () => {//submits a project
   setProjectValues()
})

submitTask.addEventListener('click', () => {//adds event listeners to the submit task button
    let taskValues = new Tasks (taskName.value,projectFolder.value,taskDescription.value, dueDate.value, priority.value, taskNotes.value);
    setTaskValues(taskValues)
    
    
})

function setProjectValues () {
    let projectValues = new Projects (); //when a project add button clicked the property values are set
    const projectLoad = projectLoader(projectValues,projectList);//assigns the projectLoad factory function to a variable
    
    if(projectValues.projectName !== ''){
        if (!projectList.includes(projectValues.projectName)){//ensures no project name is duplicated when executing the rest of the code.
            projectValues.addToProjectList(projectValues)
            projectLoad.loadProjectListOptions(projectValues)
            projectLoad.renderProjectCard(projectValues,projectList)
            document.getElementById('addProjectForm').value = '';//clears input of projectForm  
        }else{
            alert(`Can't Duplicate Project Names`)
        }

    }
}
function setTaskValues (taskValues) {//sets the task values and calls all listener functions

    const projectTasks = document.querySelectorAll('.projects');

    taskValues.addToTaskList(taskValues)
    const taskLoad = taskLoader(taskList,taskValues);
    taskWindow.buttonDisplay(newTask)
    taskLoad.renderAllTasks(taskList);
    setAllTasksListener(taskLoad);
    setTrListeners(taskList,taskValues,taskLoad,newTask)
    setProjectTasksListener(projectTasks,taskLoad)
    taskWindow.clearValues()
    taskWindow.hide()//hides the task displaysetNewTask()
   

}
function setAllTasksListener (taskLoad) {//this listener displays all of the projects on a click

    allTasks.addEventListener('click', () => {
        let display = true;
        taskLoad.clearOrDisplayTasks(display)
    })

}

function setProjectTasksListener (projectTasks,taskLoad){//this listener displays the tasks with a specified project folder name
    projectTasks.forEach((li) => {
        li.addEventListener('click', () => {
            taskLoad.renderProjectsTasks(taskList,li)
        })
        
    })
}

function setTrListeners (taskList,taskValues,taskLoad,newTask) {//this listener allows you to view the task values in the form and submit edits.
    let todoItem = document.querySelectorAll('.todoItem')
    
    todoItem.forEach(tr => {
        const taskDetails = taskDetailsWindow(tr,taskList)
        tr.addEventListener('click', () => {
            let indexOfThisTask = tr.id
            trFunctions(taskDetails,tr,taskWindow,taskList,taskValues,taskLoad,todoItem,indexOfThisTask)
            saveTask.addEventListener('click', () => {
                index (indexOfThisTask,taskValues,taskList,taskLoad,newTask,todoItem)
                removeListeners (taskList,taskValues,taskLoad,todoItem)
            }) 
        })
        
    })


}
function trFunctions (taskDetails,tr,taskWindow,taskList,taskValues,taskLoad,todoItem,indexOfThisTask) {
    newTask = false
    taskWindow.buttonDisplay(newTask)
    taskWindow.clearValues()
    index(indexOfThisTask,taskValues,taskList,taskLoad,newTask,todoItem)
    taskDetails.setValues(indexOfThisTask)
    taskWindow.display()
}
function index (indexOfThisTask,taskValues,taskList,taskLoad,newTask,todoItem){
    taskValues.changeTask(taskList,indexOfThisTask)
    taskLoad.renderAllTasks(taskList)
    setTrListeners(taskList,taskValues,taskLoad,newTask)
    taskWindow.hide()//hides the task displaysetNewTask()
}

function removeListeners (taskList,taskValues,taskLoad,todoItem) {//this removes the listeners from the tr elements and save task button
    todoItem.forEach(tr => {
        const taskDetails = taskDetailsWindow(tr,taskList)
        tr.addEventListener('click', () => {
            let indexOfThisTask = tr.id
            trFunctions(taskDetails,tr,taskWindow,taskList,taskValues,taskLoad,todoItem,indexOfThisTask)
            saveTask.addEventListener('click', () => {
                index (indexOfThisTask,taskValues,taskList,taskLoad,newTask,todoItem)
                removeListeners (taskList,taskValues,taskLoad,todoItem)
            }) 
        })
        
    })
    submitProject.removeEventListener('click', () => {//submits a project
        setProjectValues()
     })
     
     submitTask.removeEventListener('click', () => {//adds event listeners to the submit task button
         let taskValues = new Tasks (taskName.value,projectFolder.value,taskDescription.value, dueDate.value, priority.value, taskNotes.value);
         setTaskValues(taskValues)
         
         
     })
}


}


export{events}