const todoPopUpWindow = () => {
    const windowDisplay = document.querySelector('#addTaskButton');
    const cancelDisplay = document.querySelector('#cancel');
    const submitTask = document.querySelector('#submit');

    windowDisplay.addEventListener('click', () =>{
        document.getElementById('addTaskWindowContainer').style.display = 'block';
        
    })
    cancelDisplay.addEventListener('click', () =>{
        document.getElementById('addTaskWindowContainer').style.display = 'none';
    })
    submitTask.addEventListener('click', () => {
        let userTasks = new Tasks (name.value,description.value,dueDate.value,priority.value,notes.value)
        let projectList = []
        addTasksToArray(userTasks);
        console.log(projectList)
    })

}
const todoProject = () => {
    
    const addProjectButton = document.querySelector('#addProjectButton')

    addProjectButton.addEventListener('click', () => {
      
    })


}


    
class Tasks {

    constructor (name,description,dueDate,priority,notes){
        this.name = name
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.notes = notes
    }
    addTasksToArray (userTasks) {


        projectList.push(userTasks)
    }
}


export {todoPopUpWindow,Tasks,todoProject}
