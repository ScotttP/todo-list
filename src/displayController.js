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

    function renderProjectCard () {
        const projectListDiv = document.querySelector('.projectList');
        let projectListIndex = 0;
        projectListDiv.innerHTML = '';
    
        for (let project of projectList){
            let addProj = document.createElement('li');
            addProj.value = project;
            addProj.textContent = project;
            projectListDiv.appendChild(addProj)

            let deleteProjButton = document.createElement('i')
            deleteProjButton.setAttribute('class', 'fa fa-close')
            deleteProjButton.setAttribute('id','deleteProjButton')
            deleteProjButton.setAttribute('value', `${projectListIndex}`)
            addProj.appendChild(deleteProjButton)
            projectListIndex++
        }

        
    }
    function loadProjectListOptions (projectValues) {
        const projectFolder = document.querySelector('#projectFolder');
    
        let option = document.createElement('option');
        option.value= projectValues.projectName;
        option.text = projectValues.projectName;
        projectFolder.appendChild(option)
        
    }
    return {
        renderProjectCard,
        loadProjectListOptions
    }
    
}


export{taskPopUpWindow,projectLoader}
