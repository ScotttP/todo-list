class Projects {
    
    constructor (){
        this.projectName = document.getElementById('addProjectForm').value
        
    }
    
    addToProjectList (myProjectList,projectValues){
        myProjectList.push(projectValues);
        let projectTasks = [];
        console.log(projectTasks)
        
    }
    

}
let myProjectList = [];
export {Projects, myProjectList}