import nomadData from "./nomadData";
import domComponents from "./domComponents";
import events from "./events";

const eventListeners = {
    handleEventSaveButton() {
        const nameInputted = document.querySelector("#eventName").value;
        const dateInputted = document.querySelector("#eventDate").value;
        const timeInputted = document.querySelector("#eventTime").value;
        const locationInputted = document.querySelector("#eventLocation").value;

        const eventObject = {
            eventName: nameInputted,
            eventDate: dateInputted,
            eventTime: timeInputted,
            eventLocation: locationInputted
        };

        nomadData.connectToData({
            dataSet: "events",
            fetchType: "POST",
            dataBaseObject: {
                userId: sessionStorage.getItem("userId"),
                eventName: eventObject.eventName,
                eventDate: eventObject.eventDate,
                eventTime: eventObject.eventTime,
                eventLocation: eventObject.eventLocation
            }
        })
        .then(parsedResponse => {
            events.appendUserEvents();
        });
    },
    handleEventDeleteButton() {
        const idToDelete = event.target.id.split("--")[1];
        nomadData.connectToData({
            deleteId: idToDelete,
            dataSet: "events",
            fetchType: "DELETE",
            dataBaseObject: {
                userId: sessionStorage.getItem("userId")
            }
        })
        .then(parsedResponse => {
            events.appendUserEvents();
        });
    },
    handleEventEditButton() {
        const idToEdit = event.target.id.split("--")[1];


    },
    handleEventUpdateButton() {

    },
    postNewMessage() {

        let messageInput = document.getElementById("messageInput");
        let timeStamp = new Date();

        nomadData.connectToData({

            dataSet : "messages",
            fetchType : "POST",
            dataBaseObject : {
                userId : sessionStorage.getItem('userId'),
                message : messageInput.value,
                timeStamp : timeStamp
            }

        })

        location.reload(); //replace with DOM refresh function once built
    },
    editMessage() {
        let number = event.currentTarget.id;
        let messageArray = number.split("_");
        let messageId = messageArray[1];

        let messageToEdit = document.getElementById(`${messageId}`);
        let messageText = messageToEdit.innerHTML;
        let messageContainer = document.getElementById(`message${messageId}`);
        let messageTimeStamp = event.currentTarget.name;

        let messageEditForm = domComponents.createDomElement ({

            elementType : "form",
            cssClass : "messageEditForm",
            attributes : {
                id : "messageEditForm"
            }

        });

        let messageEditFieldset = domComponents.createDomElement({

            elementType : "fieldset",
            cssClass : "messageEditFieldset",
            attributes : {
                id : "messageEditFieldset"
            }
        });
        let messageEditInput = domComponents.createDomElement({

            elementType : "input",
            cssClass : "messageEditInput",
            attributes : {
                id : `messageEditInput_${messageId}`,
                value : `${messageText}`
            }
        });

        let messageEditSubmitButton = domComponents.createDomElement({

            elementType : "button",
            cssClass : "messageEditSubmitButton",
            content : "Submit",
            attributes : {
                id : `messageEditSubmitButton_${messageId}`,
                name: messageTimeStamp
            }
        });

        messageEditSubmitButton.addEventListener("click", eventListeners.handleEditSubmitButton)
        messageEditFieldset.appendChild(messageEditInput)
        messageEditFieldset.appendChild(messageEditSubmitButton)
        messageEditForm.appendChild(messageEditFieldset)
        messageContainer.appendChild(messageEditForm)
    },
    handleEditSubmitButton() {
        let number = event.currentTarget.id;
        let messageArray = number.split("_");
        let messageId = messageArray[1];
        let messageTimeStamp = `${event.currentTarget.name}`;
        let messageEditInput = document.getElementById(`messageEditInput_${messageId}`);

        nomadData.connectToData({

            putId : messageId,
            dataSet : "messages",
            fetchType : "PUT",
            dataBaseObject : {
                userId : Number(sessionStorage.getItem("userId")),
                message: `${messageEditInput.value}`,
                timeStamp: `${messageTimeStamp}`
            }
        })
    }
};

export default eventListeners;