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
        let taskNameWindow = document.querySelector('#taskName')
        let indexOfThisTask = tr.id

        taskList[indexOfThisTask].taskName = taskNameWindow.value
        // taskList[indexOfThisTask].projectFolder = taskProjectFolderWindow.value 
        // taskList[indexOfThisTask].taskDescription = taskDecriptionWindow.value 
        // taskList[indexOfThisTask].dueDate = taskdueDateWindow.value
        // taskList[indexOfThisTask].priority = taskPriorityWindow.value
        // taskList[indexOfThisTask].taskNotes = taskNotesWindow.value

        // console.log(taskList[indexOfThisTask].taskName )

}
}

export {Tasks,taskList}
