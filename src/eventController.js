import { Tasks } from "./todo.js"
import { Projects,projectList } from "./projects.js"
import {loadProjectListOptions,projectLoader,taskLoader} from "./displayController.js"
import {taskPopUpWindow} from "./displayController.js"

const events = () => {

const submitProject = document.querySelector('#addProjectButton');
const submitTask = document.querySelector('#submit');

submitProject.addEventListener('click', () => {
    let projectValues = new Projects (); //when a project add button clicked the property values are set
    const projectLoad = projectLoader(projectValues,projectList);//assigns the projectLoad factory function to a variable
    
    if(projectValues.projectName !== ''){
        if (!projectList.includes(projectValues.projectName)){//ensures no project name is duplicated when executing the rest of the code.
            projectValues.addToProjectList(projectValues)
            projectLoad.loadProjectListOptions(projectValues)
            projectLoad.renderProjectCard(projectValues,projectList)

            submitTask.addEventListener('click', () => {//adds event listeners to the submit task button
                let taskValues = new Tasks (taskName.value,projectFolder.value,taskDescription.value, dueDate.value, priority.value, taskNotes.value);
                pushTaskToProject (taskValues,projectValues);
                const taskLoad = taskLoader();
                taskLoad.renderTaskCard(taskValues);
            })
            document.getElementById('addProjectForm').value = '';//clears input of projectForm 

        }else{
            alert(`Can't Duplicate Project Names`)
        }
    }
})

function pushTaskToProject (taskValues,projectValues) {//adds task to the specified project
    if (taskValues.projectFolder === projectValues.projectName){
        projectValues.projectTasksList.push(taskValues)
    }
}


}

export{events}