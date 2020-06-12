import { Tasks,taskList } from "./todo.js"
import { Projects,projectList } from "./projects.js"
import {taskPopUpWindow,projectLoader,taskLoader,storage} from "./displayController.js"
import {taskDetailsWindow} from "./displayController.js"
const events = () => {

let newTask // this controls what

const submitProject = document.querySelector('#addProjectButton');
const projectForm = document.querySelector('#addProjectForm')
const submitTask = document.querySelector('#submitButton');
const saveTask = document.querySelector('#saveButton');
const allTasks = document.querySelector('#allTasks');
const windowDisplay = document.querySelector('#addTaskButton');
const cancelDisplay = document.querySelector('#cancel');
const taskWindow = taskPopUpWindow();
const projectLoad = projectLoader();//assigns the projectLoad factory function to a variable
const loadStorage = storage();


windowDisplay.addEventListener('click', () =>{//displays the task form
    newTask = true;
    taskWindow.display()
    taskWindow.buttonDisplay(newTask)//displays Create New Task button
    taskWindow.clearValues()

})
cancelDisplay.addEventListener('click', () =>{//closes the task form
    newTask = false;
    taskWindow.hide()
    taskWindow.clearValues()

})

submitProject.addEventListener('click', (e) => {//submits a project
   setProjectValues()
   console.log(e)
   
})
projectForm.addEventListener('keydown', (e) => {//submits a project
    if(e.keyCode === 13){
        setProjectValues()
        
    }
    
 })

submitTask.addEventListener('click', () => {//adds event listeners to the submit task button
    let taskValues = new Tasks (taskName.value,projectFolder.value,taskDescription.value, dueDate.value, priority.value, taskNotes.value);
    callDisplayFunctions(taskValues)
    //storage function
})

function setProjectValues () {
    let projectValues = new Projects (); //when a project add button clicked the property values are set
    
    if(projectValues.projectName !== ''){
        if (!projectList.includes(projectValues.projectName)){//ensures no project name is duplicated when executing the rest of the code.
            projectValues.addToProjectList(projectValues)
            projectLoad.loadProjectListOptions(projectList)
            projectLoad.renderProjectCard(projectValues,projectList)
            document.getElementById('addProjectForm').value = '';//clears input of projectForm  
        }else{
            alert(`Can't Duplicate Project Names`)
        }
    }
    
}
function callDisplayFunctions (taskValues) {//sets the task values and calls all listener functions

    const projectTasks = document.querySelectorAll('.projects');

    taskValues.addToTaskList(taskValues)//adds tasks to all tasks list.
    const taskLoad = taskLoader(taskList,taskValues);
    taskWindow.buttonDisplay(newTask)
    taskLoad.renderAllTasks(taskList);
    setAllTasksListener(taskLoad);
    setProjectTasksListener(projectTasks,taskLoad)
    setEditButtonListeners(taskList,taskValues,taskLoad,newTask)
    
    taskWindow.clearValues()
    taskWindow.hide()//hides the task displaysetNewTask()
   

}
function setAllTasksListener (taskLoad) {//this listener displays all of the projects on a click

    allTasks.addEventListener('click', () => {
        let display = true;
        taskLoad.clearOrDisplayTasks(display)
        //storage function
    })

}

function setProjectTasksListener (projectTasks,taskLoad){//this listener displays the tasks with a specified project folder name
    projectTasks.forEach((li) => {
        li.addEventListener('click', () => {
            taskLoad.renderProjectsTasks(taskList,li)
            
        })
    })
}

function setEditButtonListeners (taskList,taskValues,taskLoad,newTask) {//this listener allows you to view the task values in the form and submit edits.
    let editButton = document.querySelectorAll('[name="editButton"]')
    let indexOfThisTask ;
    editButton.forEach((button) => {
        
        const taskDetails = taskDetailsWindow(taskList)
        button.addEventListener('click', (e) => {
            indexOfThisTask = e.target.id
            taskWindowFormDisplay(taskDetails,taskWindow,indexOfThisTask)
            setSaveTaskListener(indexOfThisTask,taskValues,taskList,taskLoad,newTask)
        })
    })

}
function setSaveTaskListener(indexOfThisTask,taskValues,taskList,taskLoad,newTask){//adds the save button listener so the changes to the task are saved.
    
    saveTask.addEventListener('click', function saveTask() {
        renderChangedTasks(indexOfThisTask,taskValues,taskList,taskLoad,newTask)
        taskWindow.hide()
        this.removeEventListener('click', saveTask);//this immediately removes the listener. This is extremely important so that the only thing changed is the task clicked on.
         //storage function
    }) 
    
}

function taskWindowFormDisplay (taskDetails,taskWindow,indexOfThisTask) {//shows the values of the selected task in the taskWindow form dispaly
    newTask = false
    taskWindow.buttonDisplay(newTask)
    taskWindow.clearValues()
    taskDetails.setValues(indexOfThisTask)
    taskWindow.display()
}
function renderChangedTasks(indexOfThisTask,taskValues,taskList,taskLoad,newTask){
    taskValues.changeTask(taskList,indexOfThisTask)
    taskLoad.renderAllTasks(taskList)
    setEditButtonListeners(taskList,taskValues,taskLoad,newTask)
    taskWindow.hide()//hides the task displaysetNewTask()
}

}


export{events}