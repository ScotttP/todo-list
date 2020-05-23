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

    deleteFromProjectList (projectList){
        let projToDelete = document.getElementById('deleteProjButton').getAttribute('value');
        let projectToDeleteIndex = projectList.indexOf(projToDelete);
        projectList.splice(projectToDeleteIndex,1);
        console.log(projectList)
    }
    

}
export {Projects,projectList}