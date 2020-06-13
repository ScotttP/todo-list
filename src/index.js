import { taskPopUpWindow } from "./displayController.js"
import { events } from "./eventController.js"
import { Projects } from "./projects.js"
import { Tasks } from "./todo.js"
let locallyStoredProjects = localStorage.getItem('savedProjectList')

const load = events()

function localStorageLoad (){
    
    let projectList = locallyStoredProjects.split(',')
    let projectFunctions = new Projects()

    projectFunctions.saveProjectList(projectList)
    load.projectLoad.loadProjectListOptions(projectList)
    load.projectLoad.renderProjectCard(projectFunctions,projectList)

    //let taskList = locallyStoredTasks
    for (let i=0 ;i<=localStorage.length;i++){
        let getTasks = JSON.parse(localStorage.getItem('savedTaskList'+i))
        console.log(getTasks[i].taskName)
    }//this doenst work need to fix.
    
}
localStorageLoad()


taskPopUpWindow()




