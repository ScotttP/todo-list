let projectList = [];//sets to empty on initial load
class Projects {
    
    constructor (){
        this.projectName = document.getElementById('addProjectForm').value
        this.projectTasksList = [];
    }
    
    addToProjectList (projectValues) {//adds project to list 
        projectList.push(projectValues.projectName)
        return projectList
    }
    
    saveProjectList (projectList,projectValues) {
        localStorage.setItem('savedProjectList', projectList)
        localStorage.setItem('savedProjectValues', projectValues)
        
    }

    deleteFromProjectList (projectList,addProj){//deletes project from list
        let projectToDeleteIndex = projectList.indexOf(addProj.textContent);
        projectList.splice(projectToDeleteIndex,1);
        return projectList
    }
    

}
export {Projects,projectList}