import nomadData from "./nomadData";
import domComponents from "./domComponents";
import eventListeners from "./eventListeners";

const tasks = {

    createTaskList() {

        let outputArticle = document.getElementById("output")

        //create display container
        let tasksContainer = domComponents.createDomElement({
            elementType : "section",
            cssClass : "tasksContainer",
            attributes : {
                id : "tasksContainer"
            }});

        nomadData.connectToData({

            dataSet : "tasks",
            fetchType : "GET",
            embedItem : "?_embed=users"

        }).then(tasks => {

            tasks.forEach(task => {

                // create the task label
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

                //append all elements, this order is necessary to have the checkbox to the left of the title
                tasksContainer.appendChild(taskLabel);
                taskLabel.appendChild(taskCheckbox);
                taskLabel.appendChild(taskTitle);
            });
        })

        outputArticle.appendChild(tasksContainer);

        // this.getTasks()
    },

    // getMessages() {

    //     //GET fetch & .then to build object(s) for createDomElement() using _expand to display UN: message
    //     nomadData.connectToData({

    //             dataSet : "messages",
    //             fetchType : "GET",
    //             embedItem : "?_expand=user"

    //     }).then(messages => {

    //         let messageContainer = document.getElementById("messagesContainer");
    //         let messageInput = document.getElementById("messageInput");

    //         //sort messages by timeStamp
    //         messages.sort(function(a,b){
    //             return new Date(a.timeStamp) - new Date(b.timeStamp);
    //         });

    //         //build DOM Component for each message and append
    //         messages.forEach(message => {
    //             let messageText = message.message;
    //             let userName = message.user.userName;
    //             let messageId = message.id;
    //             let messageTimeStamp = message.timeStamp;
    //             let messageUser = `${message.userId}`;
    //             let loggedInUser = sessionStorage.getItem('userId');

    //             let messageElement = domComponents.createDomElement({

    //                 elementType : "h3",
    //                 cssClass : "messageUserName",
    //                 content : `${userName}:`,
    //                 attributes : {
    //                     id: `message${messageId}`
    //                 }
    //             })

    //             let messageElement2 = domComponents.createDomElement({
    //                 elementType : "p",
    //                 cssClass : "messageText",
    //                 content : `${messageText}`,
    //                 attributes : {
    //                     id: messageId
    //                 }
    //             })
    //             if (messageUser === loggedInUser) {

    //                 let messageEditButton = domComponents.createDomElement({

    //                     elementType : "button",
    //                     cssClass : "messageEditButton",
    //                     content : "Edit",
    //                     attributes : {
    //                         id: `messageEditButton_${messageId}`,
    //                         name: messageTimeStamp
    //                     }
    //                 })
    //                 messageEditButton.addEventListener("click", eventListeners.editMessage, {once: true})
    //                 messageElement.appendChild(messageElement2)
    //                 messageElement.appendChild(messageEditButton)
    //                 messageContainer.insertBefore(messageElement, messageInput)
    //             } else {

    //                 messageElement.appendChild(messageElement2)
    //                 messageContainer.insertBefore(messageElement, messageInput)
    //             }
    //         });
    //     })
    // },
}

export default tasks;