let projectList = [];
class Projects {
    
    constructor (){
        this.projectName = document.getElementById('addProjectForm').value
        this.projectTasksList = [];
    }
    
    addToProjectList (projectValues) {
        projectList.push(projectValues.projectName)
        console.log(projectList)
        return projectList
    }
    

}
export {Projects,projectList}