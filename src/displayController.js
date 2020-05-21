import { Tasks,myTaskList } from "./todo.js"
import { Projects,myProjectList } from "./projects.js"

const todoPopUpWindow = () => {
    const windowDisplay = document.querySelector('#addTaskButton');
    const cancelDisplay = document.querySelector('#cancel');
    const submitTask = document.querySelector('#submit');
    const submitProject = document.querySelector('#addProjectButton')



    windowDisplay.addEventListener('click', () =>{
        document.getElementById('addTaskWindowContainer').style.display = 'block';
        
    })
    cancelDisplay.addEventListener('click', () =>{
        document.getElementById('addTaskWindowContainer').style.display = 'none';
    })
    submitTask.addEventListener('click', () => {
        let taskValues = new Tasks (taskName.value,projectFolder.value,taskDescription.value, dueDate.value, priority.value, taskNotes.value);
        taskValues.addtoTaskList(myTaskList,taskValues);
        // createToDoCard(taskValues);
        console.log(myTaskList)
        console.log(myProjectList);
    })

    
    submitProject.addEventListener('click', () => {
        let projectValues = new Projects ();
        let taskValues = new Tasks (taskName.value,projectFolder.value,taskDescription.value, dueDate.value, priority.value, taskNotes.value);
        projectValues.addToProjectList(myProjectList,projectValues);
        //createProjectCard(projectValues)
        console.log(myProjectList);
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
// const createToDoCard = (taskValues) => {
    
    
//     const table = document.querySelector('.todoTasks')

//     const todoItem = 
//     document.createElement('tr')
//     todoItem.setAttribute('class', 'todoItem')

//     const td1 = 
//     document.createElement('td')
//     const td2 = 
//     document.createElement('td')
//     const td3 = 
//     document.createElement('td')
//     const td4 = 
//     document.createElement('td')
//     const td5 = 
//     document.createElement('td')


//     const checkBox =
//     document.createElement('input')
//     checkBox.setAttribute('type', 'checkbox')
//     checkBox.setAttribute('id', 'checkBox')

//     const todoName = 
//     document.createElement('div')
//     todoName.setAttribute('id', 'todoName')
//     todoName.textContent = taskValues.taskName

//     const todoDate = 
//     document.createElement('div')
//     todoDate.setAttribute('id', 'dueDate')
//     todoDate.textContent = taskValues.dueDate

//     const todoPriority = 
//     document.createElement('div')
//     todoPriority.setAttribute('id', 'priority')
//     todoPriority.textContent = taskValues.priority

//     const deleteButton = 
//     document.createElement('button')
//     deleteButton.setAttribute('id', 'deleteButton')
//     deleteButton.setAttribute('type', 'button')
//     deleteButton.textContent = 'DELETE'

//     td1.appendChild(checkBox)
//     td2.appendChild(todoName)
//     td3.appendChild(todoDate)
//     td4.appendChild(todoPriority)
//     td5.appendChild(deleteButton)

//     todoItem.appendChild(td1)
//     todoItem.appendChild(td2)
//     todoItem.appendChild(td3)
//     todoItem.appendChild(td4)
//     todoItem.appendChild(td5)

//     table.appendChild(todoItem)

// }

const todoView = () => {

}

export{todoPopUpWindow}
