import { taskPopUpWindow } from "./displayController.js"
import { events } from "./eventController.js"
import { Projects } from "./projects.js"
let locallyStoredProjects = localStorage.getItem('savedProjectList')

const load = events()

function initialLoad (){
    
    let projectList = locallyStoredProjects.split(',')
    let projectFunctions = new Projects()
    projectFunctions.saveProjectList(projectList)
    load.projectLoad.loadProjectListOptions(projectList)
    load.projectLoad.renderProjectCard(projectFunctions,projectList)

}
initialLoad()


taskPopUpWindow()




