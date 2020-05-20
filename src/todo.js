class Tasks {

    constructor (taskName,projectFolder, taskDescription, dueDate, priority, taskNotes){
        this.taskName = taskName
        this.projectFolder = projectFolder
        this.taskDescription = taskDescription
        this.dueDate = dueDate
        this.priority = priority
        this.taskNotes = taskNotes
    }

    test () {
        console.log(taskValues.priority.value)
    }
 
    

}

let taskValues = new Tasks (taskName,projectFolder, taskDescription, dueDate, priority, taskNotes)


export {taskValues}
