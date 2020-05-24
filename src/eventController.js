import { Tasks } from "./todo.js"
import { Projects,projectList } from "./projects.js"
import {loadProjectListOptions,projectLoader} from "./displayController.js"
import {taskPopUpWindow} from "./displayController.js"

const events = () => {


const submitProject = document.querySelector('#addProjectButton');
const submitTask = document.querySelector('#submit');

    
submitProject.addEventListener('click', () => {
    let projectValues = new Projects ();
    projectValues.addToProjectList(projectValues)

    const projectLoad = projectLoader(projectValues,projectList);
    projectLoad.loadProjectListOptions(projectValues)
    projectLoad.renderProjectCard(projectValues,projectList)

    submitTask.addEventListener('click', () => {
        let taskValues = new Tasks (taskName.value,projectFolder.value,taskDescription.value, dueDate.value, priority.value, taskNotes.value);
        pushTaskToProject (taskValues,projectValues);
        
    })

    const deleteProject = document.querySelectorAll('#deleteProjButton');//doesnt take the project out of array correctly.
    
    deleteProject.forEach(i => {
        i.addEventListener('click', () => {
            projectValues.deleteFromProjectList(projectList)
            projectLoad.renderProjectCard(projectValues,projectList)
        })
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