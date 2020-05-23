import { Tasks } from "./todo.js"
import { Projects,projectList } from "./projects.js"

const taskPopUpWindow = () => {
    const windowDisplay = document.querySelector('#addTaskButton');
    const cancelDisplay = document.querySelector('#cancel');
    
    windowDisplay.addEventListener('click', () =>{
        document.getElementById('addTaskWindowContainer').style.display = 'block';
    })
    cancelDisplay.addEventListener('click', () =>{
        document.getElementById('addTaskWindowContainer').style.display = 'none';
    })
}

const taskDetailsWindow = () => {

}

const taskLoader = () => {
    
}

const projectLoader = (projectValues,projectList) => {

    function createProjectCard () {
        const projectListDiv = document.querySelector('.projectList');

        let addProj = document.createElement('li');
        addProj.value = projectValues.projectName
        addProj.textContent = projectValues.projectName;
        projectListDiv.appendChild(addProj)

        let deleteProjButton = document.createElement('i')
        deleteProjButton.setAttribute('class', 'fa fa-close')
        deleteProjButton.setAttribute('id','deleteProjButton')
        deleteProjButton.setAttribute('value', `${projectValues.projectName}`)
        addProj.appendChild(deleteProjButton)
    }
    function loadProjectListOptions (projectValues) {
        const projectFolder = document.querySelector('#projectFolder');
    
        let option = document.createElement('option');
        option.value= projectValues.projectName;
        option.text = projectValues.projectName;
        projectFolder.appendChild(option)
        
    }
    return {
        createProjectCard,
        loadProjectListOptions
    }
    
}


export{taskPopUpWindow,projectLoader}
