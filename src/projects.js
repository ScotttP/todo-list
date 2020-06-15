let projectList = localStorage.getItem('savedProjectList').split(',')
class Projects {
    
    addToProjectList (name) {//adds project to list 
        projectList.push(name)
        return projectList
    }
    
    saveProjectList (projectList) {
        console.log(projectList)
        localStorage.setItem('savedProjectList', projectList)

    }

    deleteFromProjectList (projectList,addProj){//deletes project from list
        let projectToDeleteIndex = projectList.indexOf(addProj.textContent);
        projectList.splice(projectToDeleteIndex,1);
        return projectList
    }
    

}
export {Projects,projectList}