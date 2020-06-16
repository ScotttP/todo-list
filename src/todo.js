let taskList = JSON.parse(localStorage.getItem('savedTaskList'));
  
//taskList = localStorage.getItem('savedTaskList')

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
        console.log(taskList)
        taskList.push(taskValues)
        localStorage.setItem('savedTaskList', JSON.stringify(taskList))
        return taskList
    }
    saveTaskList (taskList) {
        
    }
    deleteFromTaskLIst (taskList,index){
        taskList.splice(index,1)
       return taskList
    }
    changeTask(taskList,indexOfThisTask){
        let taskNameWindow = document.getElementById('taskName')
        let taskProjectFolderWindow = document.getElementById('projectFolder')
        let taskDecriptionWindow = document.getElementById('taskDescription')
        let taskdueDateWindow = document.getElementById('dueDate')
        let taskPriorityWindow = document.getElementById('priority')
        let taskNotesWindow = document.getElementById('taskNotes')

        taskList[indexOfThisTask].taskName = taskNameWindow.value
        taskList[indexOfThisTask].projectFolder = taskProjectFolderWindow.value 
        taskList[indexOfThisTask].taskDescription = taskDecriptionWindow.value 
        taskList[indexOfThisTask].dueDate = taskdueDateWindow.value
        taskList[indexOfThisTask].priority = taskPriorityWindow.value
        taskList[indexOfThisTask].taskNotes = taskNotesWindow.value

    }
}

export {Tasks,taskList}
