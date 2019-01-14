import nomadData from "./nomadData";
import tasks from "./tasks";
import domComponents from "./domComponents"

const tasksEventListeners = {

    createNewTask() {

        let taskTitle = document.getElementById("taskTitleInput").value;
        let dueDateFieldValiue = document.getElementById("taskDateInput").value;
        let userId = Number(sessionStorage.getItem('userId'));

        let dueDateArray = dueDateFieldValiue.split("-")
        let dueDate = `${dueDateArray[1]} ${dueDateArray[2]} ${dueDateArray[0]}`;

        nomadData.connectToData({

            dataSet : "tasks",
            fetchType : "POST",
            dataBaseObject : {
                userId : userId,
                task : taskTitle,
                expectedCompletionDate : dueDate,
                complete : false
            }
        }).then(response => response.json())
        .then(shit => {
            console.log(shit)
            $("#output").empty()
            tasks.createTaskTables();
        })
    },

    markTaskComplete() {
        let taskToEditId = event.target.id.split("_")[1];

        nomadData.connectToData({

            dataSet : "tasks",
            fetchType : "GET",
            embedItem : `?&id=${taskToEditId}`
        }).then(parsedTasks => {


            let taskId = parsedTasks[0].id;
            let userId = parsedTasks[0].userId;
            let task = parsedTasks[0].task;
            let expectedCompletionDate = parsedTasks[0].expectedCompletionDate;
            let complete = parsedTasks[0].complete;

            console.log(taskId, userId, task, expectedCompletionDate, complete)

            if (complete) {
                complete = false;
            } else {
                complete = true;
            }


            nomadData.connectToData({
                putId : taskToEditId,
                dataSet : "tasks",
                fetchType : "PUT",
                dataBaseObject : {
                    id: taskId,
                    userId : userId,
                    task : task,
                    expectedCompletionDate: expectedCompletionDate,
                    complete: complete
                }
            }).then(shit => {
                console.log(shit)
                $("#output").empty()
                tasks.createTaskTables()
            })
        })
    },

    taskEditButton() {

        let number = event.currentTarget.id;
        let taskArray = number.split("_");
        let taskId = taskArray[1];

        let taskCellToEmpty = document.getElementById(`taskCell_${taskId}`);
        let taskLableToRemove = document.getElementById(`taskLabel_${taskId}`);
        let dueDateCellToEmpty = document.getElementById(`dueDateCell_${taskId}`);
        let dueDateToRemove = document.getElementById(`taskDueDate_${taskId}`);
        let taskEditCellToEmpty = document.getElementById(`taskEditCell_${taskId}`);
        let taskEditButtonToRemove = document.getElementById(`taskEditButton_${taskId}`);

        let taskToEditText = taskLableToRemove.innerText;
        console.log(taskToEditText)

        let taskToEditTitle = domComponents.createDomElement({
            elementType : "input",
            cssClass : "taskToEditTitle",
            attributes : {
                id : `taskToEditTitle_${taskId}`,
                value : `${taskToEditText}`
            }
        })

        let taskDueDateToEdit = domComponents.createDomElement({
            elementType : "input",
            cssClass : "taskDueDateToEdit",
            attributes : {
                id : `taskDueDateToEdit_${taskId}`,
                type : "date"
            }
        })

        let editedTaskSubmitButton = domComponents.createDomElement({
            elementType : "button",
            cssClass : "editedTaskSubmitButton",
            content : "Sumbit",
            attributes : {
                id : `editedTaskSubmitButton_${number}`,
                type : "button"
            }
        })

        taskCellToEmpty.removeChild(taskLableToRemove);
        taskCellToEmpty.appendChild(taskToEditTitle)
        dueDateCellToEmpty.removeChild(dueDateToRemove);
        dueDateCellToEmpty.appendChild(taskDueDateToEdit);
        taskEditCellToEmpty.removeChild(taskEditButtonToRemove);
        taskEditCellToEmpty.appendChild(editedTaskSubmitButton);
        editedTaskSubmitButton.addEventListener("click", tasksEventListeners.saveTaskEdit)

    },
    saveTaskEdit() {
        let taskNumber = event.currentTarget.id;
        let taskArray = taskNumber.split("_");
        let taskId = taskArray[2];
        let taskEditInput = document.getElementById(`taskToEditTitle_${taskId}`).value;
        let taskEditDate = document.getElementById(`taskDueDateToEdit_${taskId}`).value;

        let dueDateArray = taskEditDate.split("-")
        let dueDate = `${dueDateArray[1]} ${dueDateArray[2]} ${dueDateArray[0]}`;


        nomadData.connectToData({

            putId : taskId,
            dataSet : "tasks",
            fetchType : "PUT",
            dataBaseObject : {
                userId : Number(sessionStorage.getItem("userId")),
                task: taskEditInput,
                expectedCompletionDate: dueDate,
                complete : false
            }
        }).then(shit => {
            console.log(shit)
            $("#output").empty();
            tasks.createTaskTables();
        })
    }
}
export default tasksEventListeners;