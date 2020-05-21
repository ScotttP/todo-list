class Tasks {

    constructor (taskName,projectFolder, taskDescription, dueDate, priority, taskNotes){
        this.taskName = taskName
        this.projectFolder = projectFolder
        this.taskDescription = taskDescription
        this.dueDate = dueDate
        this.priority = priority
        this.taskNotes = taskNotes
    }

    addtoTaskList (myTaskList,taskValues) {
        myTaskList.push(taskValues)
    }

}
let myTaskList = [];
export {Tasks,myTaskList}