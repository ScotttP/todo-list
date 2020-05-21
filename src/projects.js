class Projects {
    
    constructor (myTasksList){
        this.projectName = document.getElementById('addProjectForm').value
        this.taskList = myTasksList
    }
    
    addToProjectList (myProjectList,projectValues){
        myProjectList.push(projectValues);
        
    }
}
let myProjectList = [];
export {Projects, myProjectList}