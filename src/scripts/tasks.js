import nomadData from "./nomadData";
import domComponents from "./domComponents";
import tasksEventListeners from "./tasksEventListeners";
import tasksPopup from "./tasksPopup";
// import eventListeners from "./eventListeners"

const tasks = {

    createTaskTables() {
        $("#output").empty()

        let outputArticle = document.getElementById("output")

        //create display container
        let tasksContainer = domComponents.createDomElement({
            elementType : "section",
            cssClass : "tasksContainer",
            attributes : {
                id : "tasksContainer"
            }});

        //create tasks tables
        let activeTasksTable = domComponents.createDomElement({
            elementType : "table",
            cssClass : "activeTasksTable",
            attributes : {
                id : "activeTasksTable"
            }
        });

        let activeTasksTableTitle = domComponents.createDomElement({
            elementType : "caption",
            cssClass : "activeTasksTableTitle",
            content : "ACTIVE TASKS"
        });

        let completedTasksTable = domComponents.createDomElement({
            elementType : "table",
            cssClass : "completedTasksTable",
            attributes : {
                id : "completedTasksTable"
            }
        });

        let completedTasksTableTitle = domComponents.createDomElement({
            elementType : "caption",
            cssClass : "completedTasksTableTitle",
            content : "COMPLETED TASKS"
        })

        //create row with column headers
        let activeTasksHeaderRow = domComponents.createDomElement({
            elementType : "tr",
            cssClass : "activeTasksHeaderRow",
            attributes : {
                id : "activeTasksHeaderRow"
            }
        });

        let completedTasksHeaderRow = domComponents.createDomElement({
            elementType : "tr",
            cssClass : "completedTasksHeaderRow",
            attributes : {
                id : "completedTasksHeaderRow"
            }
        });

        //create column headers
        let activeTasksHeader = domComponents.createDomElement({
            elementType : "th",
            cssClass : "activeTasksHeader",
            content: "Task",
            attributes : {
                id : "activeTasksHeader"
            }
        });

        let activeTasksDueDateHeader = domComponents.createDomElement({
            elementType : "th",
            cssClass : "activeTasksDueDateHeader",
            content: "Due Date",
            attributes : {
                id : "activeTasksDueDateHeader"
            }
        });

        let completedTasksHeader = domComponents.createDomElement({
            elementType : "th",
            cssClass : "completedTasksHeader",
            content: "Task",
            attributes : {
                id : "completedTasksHeader"
            }
        });

        let completedTasksDueDateHeader = domComponents.createDomElement({
            elementType : "th",
            cssClass : "completedTasksDueDateHeader",
            content: "Due Date",
            attributes : {
                id : "completedTasksDueDateHeader"
            }
        });
        //create button to make new tasks
        let createTaskButton = domComponents.createDomElement({
            elementType : "button",
            cssClass : "createTaskButton",
            content : "Create New Task",
            attributes : {
                id : "createTaskButton",
                type : "button"
            }
        });

        //append header row to table and table to container
        activeTasksTable.appendChild(activeTasksTableTitle);
        completedTasksTable.appendChild(completedTasksTableTitle);
        activeTasksHeaderRow.appendChild(activeTasksHeader)
        activeTasksHeaderRow.appendChild(activeTasksDueDateHeader);
        activeTasksTable.appendChild(activeTasksHeaderRow);
        tasksContainer.appendChild(activeTasksTable);
        completedTasksHeaderRow.appendChild(completedTasksHeader)
        completedTasksHeaderRow.appendChild(completedTasksDueDateHeader);
        completedTasksTable.appendChild(completedTasksHeaderRow);
        tasksContainer.appendChild(completedTasksTable);
        createTaskButton.addEventListener("click", tasksPopup.createNewTaskForm);
        tasksContainer.appendChild(createTaskButton);
        outputArticle.appendChild(tasksContainer);

        this.getTasks();
    },

    getTasks() {

        let currentUser = Number(sessionStorage.getItem("userId"));

        //populate tasks
        nomadData.connectToData({

            dataSet : "tasks",
            fetchType : "GET",
            embedItem : "?_embed=users"

        }).then(tasks => {

            tasks.sort(function(a,b){
                return new Date(a.expectedCompletionDate) - new Date(b.expectedCompletionDate);
            });

            tasks.forEach(task => {

                if (task.userId === currentUser) {

                let status = task.complete;
                let activeTasksTable = document.getElementById("activeTasksTable");
                let completedTasksTable = document.getElementById("completedTasksTable");
                // create a new table row for each task
                let taskRow = domComponents.createDomElement({
                    elementType : "tr",
                    cssClass : "taskTableRow",
                    attributes : {
                        id : `taskTableRow_${task.id}`
                    }
                })

                //create cells to hold task and due date
                let taskCell = domComponents.createDomElement({
                    elementType : "td",
                    cssClass : "taskCell",
                    attributes : {
                        id : `taskCell_${task.id}`
                    }
                })

                let dueDateCell = domComponents.createDomElement({
                    elementType : "td",
                    cssClass : "dueDateCell",
                    attributes : {
                        id : `dueDateCell_${task.id}`
                    }
                })

                //create task checkbox and title
                let taskLabel = domComponents.createDomElement({
                    elementType : "label",
                    cssClass : "taskLabel",
                    attributes : {
                        id : `taskLabel_${task.id}`
                    }
                })
                //create task title
                let taskTitle = document.createTextNode(`${task.task}`);

                //create task checkbox
                let taskCheckbox = domComponents.createDomElement({
                    elementType : "input",
                    cssClass : "taskCheckbox",
                    attributes : {
                        id : `taskCheckbox_${task.id}`,
                        type : "checkbox",
                        value : `${task.task}`
                    }
                })
                //create task dute date
                let dueDateArray = new Date(task.expectedCompletionDate).toDateString().split(" ")
                let dueDate = `${dueDateArray[1]} ${dueDateArray[2]}, ${dueDateArray[3]}`

                let taskDueDate = domComponents.createDomElement({
                    elementType : "p",
                    cssClass : "taskDueDate",
                    content : dueDate,
                    attributes : {
                        id : `taskDueDate_${task.id}`
                    }
                })
                //append -- order is important for checkbox and label to ensure box in on the left
                taskCheckbox.addEventListener("change", tasksEventListeners.markTaskComplete)
                taskLabel.appendChild(taskCheckbox);
                taskLabel.appendChild(taskTitle);
                taskCell.appendChild(taskLabel);
                dueDateCell.appendChild(taskDueDate);
                taskRow.appendChild(taskCell);
                taskRow.appendChild(dueDateCell);

                if (status) {

                    completedTasksTable.appendChild(taskRow);
                    taskCheckbox.setAttribute("checked", "")

                } else {
                    activeTasksTable.appendChild(taskRow);
                }
            }});
        })
    }
}

export default tasks;
