import { Tasks,taskList } from "./todo.js"
import { Projects,projectList } from "./projects.js"
import {loadProjectListOptions,projectLoader,taskLoader} from "./displayController.js"
import {taskPopUpWindow} from "./displayController.js"

const taskWindow = taskPopUpWindow()
const events = () => {

const submitProject = document.querySelector('#addProjectButton');
const submitTask = document.querySelector('#submit');
const allTasks = document.querySelector('#allTasks');


submitProject.addEventListener('click', () => {
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
    

})

submitTask.addEventListener('click', () => {//adds event listeners to the submit task button
    const projectLoad = projectLoader();
    const projectTasks = document.querySelectorAll('.projects');
    setTask(projectLoad,projectTasks);//sets the task values
    taskWindow.hide()//hides the task display
    remove(projectLoad,projectTasks,submitTask)
})

function setTask (projectLoad,projectTasks) {
    let taskValues = new Tasks (taskName.value,projectFolder.value,taskDescription.value, dueDate.value, priority.value, taskNotes.value);
    taskValues.addToTaskList(taskValues)

    const taskLoad = taskLoader(taskList,taskValues);
    taskLoad.renderAllTasks(taskList,taskValues);

    allTasks.addEventListener('click', () => {
        taskLoad.renderAllTasks(taskList,taskValues);
    })
    
    projectTasks.forEach((li) => {
        
        li.addEventListener('click', (e) => {
            projectLoad.renderProjectsTasks(taskList,li,taskValues)
        })
        
    })

    
}

function remove (projectLoad,projectTasks,submitTask) {//this doesn't work

    projectTasks.forEach(li => {
        
        li.removeEventListener('click', () => {
            projectLoad.renderProjectsTasks(taskList,li)

        })
        
    })

}

}


export{events}