let taskList = [];//sets to empty on initial load
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
        taskList.push(taskValues)
        return taskList
    }
    deleteFromTaskLIst (taskList,index){
        taskList.splice(index,1)
       return taskList
    }
    changeTask(tr,taskList){
        let indexOfThisTask = tr.id
        this.taskName = taskName.value
        taskList[indexOfThisTask].taskName = this.taskName
        console.log(taskList[indexOfThisTask].taskName )
        console.log(this.taskName)
        console.log(taskList)

}
}

export {Tasks,taskList}
