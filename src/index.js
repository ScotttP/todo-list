import { taskPopUpWindow } from "./displayController.js"
import { events } from "./eventController.js"
import { Projects } from "./projects.js"
let locallyStoredProjects = localStorage.getItem('savedProjectList')
let locallyStoredProjectValues = localStorage.getItem('savedProjectValues')
const load = events()

function initialLoad (){
    let projectList = locallyStoredProjects.split(',')
    let projectValues = new Projects()
    load.projectLoad.renderProjectCard(projectValues,projectList)
    //load.projectLoad.renderProjectCard(locallyStoredProjects,locallyStoredProjectValues)
}

initialLoad()


taskPopUpWindow()




