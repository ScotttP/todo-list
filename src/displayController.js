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

    function renderTaskCard (taskValues){
        
        let li = document.querySelectorAll('li');
        li.forEach(projects => {
            projects.addEventListener('click', () => {
                if (projects.id === taskValues.projectFolder){
                    console.log(taskValues.taskName)//need this to list all taskNames with the project folder of ...
                }
            })
        })
      
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
            addProj.className = 'projects';
            addProj.id = project;
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
