import { Tasks,taskList } from "./todo.js"
import { Projects,projectList } from "./projects.js"
import {projectLoader,taskLoader,taskDetailsWindow} from "./displayController.js"
import {taskPopUpWindow} from "./displayController.js"

const taskWindow = taskPopUpWindow()
const taskDetails = taskDetailsWindow()
const events = () => {

let newTask

const submitProject = document.querySelector('#addProjectButton');
const submitTask = document.querySelector('#submit');
const allTasks = document.querySelector('#allTasks');
const windowDisplay = document.querySelector('#addTaskButton');
const cancelDisplay = document.querySelector('#cancel');

windowDisplay.addEventListener('click', () =>{
    taskWindow.display()
    taskWindow.clearValues()
    newTask = true;
    console.log(newTask)
})
cancelDisplay.addEventListener('click', () =>{
    taskWindow.hide()
    taskWindow.clearValues()
    
})


submitProject.addEventListener('click', () => {
   setProjects()

})

submitTask.addEventListener('click', () => {//adds event listeners to the submit task button
    const projectTasks = document.querySelectorAll('.projects');
    
    if (newTask = true){
        console.log(newTask)
        let taskValues = new Tasks (taskName.value,projectFolder.value,taskDescription.value, dueDate.value, priority.value, taskNotes.value);
        taskValues.addToTaskList(taskValues)
        setListeners(projectTasks,taskValues);//sets the task values
        taskWindow.clearValues()
        taskWindow.hide()//hides the task displaysetNewTask()
    }else if (newTask = false){
        console.log(newTask)
        console.log('hi bitchets')
        taskDetails.setValues(tr,taskList) //if they are just clicking on it to view details, then i need to make a seperate function in which the values in the todo object are changed.
        taskWindow.clearValues()
        taskWindow.hide()//hides the task displaysetNewTask()
    }
})




function setProjects () {
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
// function setNewTask () {

//     return taskValues
// }
function setListeners (projectTasks,taskValues) {

    const taskLoad = taskLoader(taskList,taskValues);
    taskLoad.renderAllTasks(taskList,taskValues);

    allTasks.addEventListener('click', () => {
        let display = true;
        taskLoad.clearOrDisplayTasks(display)
    })
    
    projectTasks.forEach((li) => {
        
        li.addEventListener('click', (e) => {
            taskLoad.renderProjectsTasks(taskList,li)
        })
        
    })

    const task = document.querySelectorAll('.taskNameCardDisplay')
    
    task.forEach(td => {
        
        td.addEventListener('click', () => {
            newTask = false;
            taskWindow.display()
            setDetailListeners(taskList)
            console.log(newTask)
    
        })
    })


}

function setDetailListeners (taskList) {
    let todoItem = document.querySelectorAll('.todoItem')
    todoItem.forEach(tr => {
        tr.addEventListener('click', () => {
            taskDetails.setValues(tr,taskList)
        })
    })

}

}


export{events}