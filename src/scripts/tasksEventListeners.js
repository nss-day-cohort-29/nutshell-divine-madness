import nomadData from "./nomadData";
import tasks from "./tasks";

const tasksEventListeners = {

    createNewTask() {

        let taskTitle = document.getElementById("taskTitleInput").value;
        let dueDate = document.getElementById("taskDateInput").value;
        let userId = Number(sessionStorage.getItem("userId"));

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
            tasks.createTaskTables()
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
    }
}
export default tasksEventListeners;