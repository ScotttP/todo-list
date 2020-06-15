import { taskPopUpWindow } from "./displayController.js"
import { events } from "./eventController.js"
import { Projects } from "./projects.js"
import { taskList } from "./todo.js"

let locallyStoredProjects = localStorage.getItem('savedProjectList')
let locallyStoredTasks = taskList

const load = events()

function localStorageLoad (){
    
    if (locallyStoredProjects !== ''){
        let projectList = locallyStoredProjects.split(',')
        let projectFunctions = new Projects()

        projectFunctions.saveProjectList(projectList)
        load.projectLoad.loadProjectListOptions(projectList)
        load.projectLoad.renderProjectCard(projectFunctions,projectList)
    }
    console.log(locallyStoredTasks)
    // for (let index in taskList){
            
    //     console.log(localStorage.getItem('savedTaskList'+index, JSON.stringify(taskList)))
    // }

    
}
localStorageLoad()


taskPopUpWindow()




