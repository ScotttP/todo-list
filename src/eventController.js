import { Tasks,taskList } from "./todo.js"
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

            const projectSelection = document.querySelectorAll('.projects');

            submitTask.addEventListener('click', () => {//adds event listeners to the submit task button
                let taskValues = new Tasks (taskName.value,projectFolder.value,taskDescription.value, dueDate.value, priority.value, taskNotes.value);
                taskValues.addToTaskList(taskValues)
                const taskLoad = taskLoader(taskList,taskValues);
                taskLoad.renderTaskCard();

                projectSelection.forEach(li => {
                    console.log(li)
                    li.addEventListener('click', () => {
                        projectLoad.showProjectsTasks(taskValues,taskList,li)
                    })
                })
                removeShowTasks(projectSelection)
            })
            document.getElementById('addProjectForm').value = '';//clears input of projectForm 
            removeSubmitTask (submitTask)   
        }else{
            alert(`Can't Duplicate Project Names`)
        }
    
    }
    

})

function removeSubmitProject () {
    
}
function removeSubmitTask () {
 
}
function removeShowTasks(projectSelection) {

}

}


export{events}