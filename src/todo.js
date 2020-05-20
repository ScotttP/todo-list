class Tasks {

    constructor (taskName,projectFolder, taskDescription, dueDate, priority, taskNotes){
        this.taskName = taskName
        this.projectFolder = projectFolder
        this.taskDescription = taskDescription
        this.dueDate = dueDate
        this.priority = priority
        this.taskNotes = taskNotes
    }

    addToTaskList (taskValues) {
       let myList = [];
        myList.push(taskValues);
        console.log(myList.length)
        console.log(myList)
    }
    
 
    

}
export {Tasks}
