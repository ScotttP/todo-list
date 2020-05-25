let projectList = [];//sets to empty on initial load
class Projects {
    
    constructor (){
        this.projectName = document.getElementById('addProjectForm').value
        this.projectTasksList = [];
    }
    
    addToProjectList (projectValues) {//adds project to list 
        projectList.push(projectValues.projectName)
        console.log(projectList)
        return projectList
    }

    deleteFromProjectList (projectList,addProj){//deletes project from list
        let projectToDeleteIndex = projectList.indexOf(addProj.textContent);
        projectList.splice(projectToDeleteIndex,1);
        console.log(projectList)
        return projectList
    }
    

}
export {Projects,projectList}