const todoPopUpWindow = () => { //this should go into display.
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
        let stuff = new Tasks (name)
        console.log(stuff)
    })
}
class Tasks {

    constructor (){
        this.name = document.getElementById('taskName').value;
        // this.description = description
        // this.project = project
        // this.dueDate = dueDate
        // this.priority = priority
        // this.notes = notes
    }

}


export {todoPopUpWindow}
