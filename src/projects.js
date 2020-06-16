let projectList = [];
class Projects {
    
    addToProjectList (name) {//adds project to list 
        projectList.push(name)
        localStorage.setItem('savedProjectList', projectList)
        return projectList
    }
    
    saveProjectList (projectList) {
        
    }

    deleteFromProjectList (projectList,addProj){//deletes project from list
        let projectToDeleteIndex = projectList.indexOf(addProj.textContent);
        projectList.splice(projectToDeleteIndex,1);
        return projectList
    }
    

}
export {Projects,projectList}