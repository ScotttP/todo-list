import { Tasks } from "./todo.js"
import { Projects,projectList } from "./projects.js"

const todoPopUpWindow = () => {
    const windowDisplay = document.querySelector('#addTaskButton');
    const cancelDisplay = document.querySelector('#cancel');
    
    windowDisplay.addEventListener('click', () =>{
        document.getElementById('addTaskWindowContainer').style.display = 'block';
    })
    cancelDisplay.addEventListener('click', () =>{
        document.getElementById('addTaskWindowContainer').style.display = 'none';
    })

}

// const createProjectCard = (myProjectList) => {
//     const projectList = document.querySelector('.projectList');

//     for (let projects in myProjectList){
//         let addProj = document.createElement('li');
//         addProj.setAttribute('data-projectNum', '' )
//         for (let properties in myProjectList[projects]){
//             addProj.textContent = properties[0];
//         }
        
//         projectList.appendChild(addProj)
        
//     }
// }


const todoView = () => {

}

function loadProjectListOptions (projectValues) {
    const projectFolder = document.querySelector('#projectFolder');

    let option = document.createElement('option');
    option.value= projectValues.projectName;
    option.text = projectValues.projectName;
    projectFolder.appendChild(option)
    
}

export{todoPopUpWindow,loadProjectListOptions}
