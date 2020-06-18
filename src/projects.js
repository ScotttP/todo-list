let projectList = [];
class Projects {
    
    addToProjectList (name) {//adds project to list 
        projectList.push(name)
        localStorage.setItem('savedProjectList', projectList)
        return projectList
    }
    deleteFromProjectList (projectList,addProj){//deletes project from list
        let projectToDeleteIndex = projectList.indexOf(addProj.textContent);
        projectList.splice(projectToDeleteIndex,1);
        localStorage.setItem('savedProjectList', projectList)
        return projectList
    }
    

}
export {Projects,projectList}