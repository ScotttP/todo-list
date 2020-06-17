import { taskPopUpWindow, taskLoader } from "./displayController.js"
import { events } from "./eventController.js"
import { Projects } from "./projects.js"
import { taskList, Tasks } from "./todo.js"

let locallyStoredProjects = localStorage.getItem('savedProjectList')
let locallyStoredTasksList = JSON.parse(localStorage.getItem('savedTaskList'))

const load = events()

function localStorageLoad (){
    
    if(localStorage.getItem('savedProjectList')){
        
        let projectList = locallyStoredProjects.split(',')
        let projectFunctions = new Projects()

        load.projectLoad.loadProjectListOptions(projectList)
        load.projectLoad.renderProjectCard(projectFunctions,projectList)
    }
    if(JSON.parse(localStorage.getItem('savedTaskList'))){
        for (let index in locallyStoredTasksList){
            taskName.value = locallyStoredTasksList[index].taskName
            projectFolder.value = locallyStoredTasksList[index].projectFolder
            taskDescription.value = locallyStoredTasksList[index].taskDescription
            dueDate.value = locallyStoredTasksList[index].dueDate
            priority.value = locallyStoredTasksList[index].priority
            taskNotes.value = locallyStoredTasksList[index].taskNotes
            let taskValues = new Tasks (taskName.value,projectFolder.value,taskDescription.value, dueDate.value, priority.value, taskNotes.value);
            load.callDisplayFunctions(taskValues)
        }
        
        
    }else{
        console.log('no storage')
    }
    
    // for (let index in taskList){
            
    //     console.log(localStorage.getItem('savedTaskList'+index, JSON.stringify(taskList)))
    // }

    
}
localStorageLoad()


taskPopUpWindow()




