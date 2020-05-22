import { Tasks } from "./todo.js"
import { Projects,projectList } from "./projects.js"
import {loadProjectListOptions} from "./displayController.js"

const events = () => {

const submitProject = document.querySelector('#addProjectButton')
const submitTask = document.querySelector('#submit');
    
submitProject.addEventListener('click', () => {
    let projectValues = new Projects ();
    projectValues.addToProjectList(projectValues)
    loadProjectListOptions(projectValues)
    

    submitTask.addEventListener('click', () => {
        let taskValues = new Tasks (taskName.value,projectFolder.value,taskDescription.value, dueDate.value, priority.value, taskNotes.value);
        pushTaskToProject (taskValues,projectValues);
        
    })
    
})

function pushTaskToProject (taskValues,projectValues) {
    if (taskValues.projectFolder === projectValues.projectName){
        projectValues.projectTasksList.push(taskValues)
    }
    console.log(projectValues.projectTasksList)
}



}

export{events}