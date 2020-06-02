import { Tasks, taskList } from "./todo.js"
import { Projects,projectList } from "./projects.js"

const taskPopUpWindow = () => {
    const windowDisplay = document.querySelector('#addTaskButton');
    const cancelDisplay = document.querySelector('#cancel');

    function display () {
        document.getElementById('addTaskWindowContainer').style.display = 'block';//displays window
    }
    function hide () {
        document.getElementById('addTaskWindowContainer').style.display = 'none';//closes window
    }
    
    windowDisplay.addEventListener('click', () =>{
        display()
    })
    cancelDisplay.addEventListener('click', () =>{
        hide()
    })
    return {
        display,
        hide
    }
}

const taskDetailsWindow = () => {//displays the details of the task

}

const taskLoader = (taskList,taskValues) => {//loads tasks in the tasks area.
    const tBody = document.querySelector('#tbody');

    function renderAllTasks (taskList){
        tBody.innerHTML = '';
        
        for (let index in taskList){
            
            let taskItem = document.createElement('tr')
            taskItem.className = "todoItem"
            taskItem.id = `${index}`
        
            let checkTd = document.createElement('td')
            let checkBox = document.createElement('input')
            checkBox.setAttribute('type','checkbox')
            checkTd.appendChild(checkBox)
            taskItem.appendChild(checkTd)

            for (let tasks in taskList[index]){
                let td = document.createElement('td')
                td.id = `${tasks}CardDisplay`
                td.textContent = `${taskList[index][tasks]}`
                taskItem.appendChild(td)
                //this renders all of the properties but i only 3 of the properties. need to figure out logic to achieve that.
                if (td.id === 'projectFolderCardDisplay' || td.id === 'taskDescriptionCardDisplay' || td.id === 'taskNotesCardDisplay' ){
                    taskItem.removeChild(td)
                }
            }
            
            addDeleteTaskAndListener(taskItem,index)
            tBody.appendChild(taskItem)
        } 
        
    }
    function renderProjectsTasks () {

    }
    function addDeleteTaskAndListener (taskItem,index) {
        let deleteTd = document.createElement('td')
        let deleteTask = document.createElement('button')
        deleteTask.setAttribute('type','button')
        deleteTask.setAttribute('id','deleteTask')
        deleteTask.setAttribute('data-index',`${index}`)
        deleteTask.textContent = 'Delete'
        deleteTask.addEventListener('click', () => {
            taskValues.deleteFromTaskLIst(taskList,index)
            renderAllTasks(taskList)
        })
        deleteTd.appendChild(deleteTask)
        taskItem.appendChild(deleteTd)
    }
    return {
        renderAllTasks
    }
}

const projectLoader = (projectValues,projectList) => {//loads projets to the projects area

    function renderProjectCard () {//takes the projectList array and displays the project names on the page
        const projectListDiv = document.querySelector('.projectList');
        const home = document.querySelector('#allTasks')
        
        projectListDiv.innerHTML = '';//resets the display so all existing values aren't displayed
        projectListDiv.appendChild(home)

        for (let project of projectList){
            let addProj = document.createElement('li');
            addProj.className = 'projects';
            addProj.id = project;
            addProj.textContent = project;
            projectListDiv.appendChild(addProj)
            addDeleteButtonAndListener(addProj,project)
        }
        
        
        
    }
    function showProjectsTasks (taskValues,taskList,li) {
        console.log('hi')
        // if (li.id === taskValues.projectFolder){
        //     for (let values in taskValues){
        //         console.log(taskValues[values])
        //     }
        // }
        
        
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
            console.log(projectValues)
         })
    }
    return {
        renderProjectCard,
        loadProjectListOptions,
        showProjectsTasks
    }
    
}


export{taskPopUpWindow,projectLoader,taskLoader}
