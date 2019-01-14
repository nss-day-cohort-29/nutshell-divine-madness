import domComponents from "./domComponents";
import tasksEventListeners from "./tasksEventListeners";

const tasksPopup = {

    createNewTaskForm() {
        let tasksContainer = document.getElementById("tasksContainer");
        let taskPopupDiv = domComponents.createDomElement({
            elementType : "div",
            cssClass : "taskPopupDiv",
            attributes : {
                id : "taskPopupDiv"
            }
        });

        let newTaskForm = domComponents.createDomElement({
            elementType : "div",
            cssClass : "newTaskForm",
            attributes : {
                id : "newTaskForm",
            }
        });

        let newTaskFormTitle = domComponents.createDomElement({
            elementType : "h2",
            cssClass : "newTaskFormTitle",
            content : "Create A New Task",
            attributes : {
                id : "newTaskFormTitle"
            }
        });

        let horizontalLine = domComponents.createDomElement ({
            elementType : "hr"
        });

        let taskTitleInput = domComponents.createDomElement ({
            elementType : "input",
            cssClass : "taskTitleInput",
            attributes : {
                id : "taskTitleInput",
                placeholder : "Enter new task title",
                type : "text"
            }
        });

        let taskDateInput = domComponents.createDomElement ({
            elementType : "input",
            cssClass : "taskDateInput",
            attributes : {
                id : "taskDateInput",
                type : "date"
            }
        });

        let submitNewTaskButton = domComponents.createDomElement ({
            elementType : "button",
            cssClass : "submitNewTaskButton",
            content : "Submit",
            attributes : {
                id : "submitNewTaskButton",
                // type : "submit"
            }
        });

        submitNewTaskButton.addEventListener("click", tasksEventListeners.createNewTask)
        newTaskForm.appendChild(newTaskFormTitle);
        newTaskForm.appendChild(horizontalLine);
        newTaskForm.appendChild(taskTitleInput);
        newTaskForm.appendChild(taskDateInput);
        newTaskForm.appendChild(submitNewTaskButton);
        taskPopupDiv.appendChild(newTaskForm);
        tasksContainer.appendChild(taskPopupDiv);
    }

}
export default tasksPopup;