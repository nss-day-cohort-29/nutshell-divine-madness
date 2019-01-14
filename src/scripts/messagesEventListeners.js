import nomadData from "./nomadData";
import domComponents from "./domComponents";
import messages from "./messages";
// import friendsEventsListener from "./friendsEventsListener.js";

const messagesEventListeners = {

    postNewMessage() {

        let messageInput = document.getElementById("messageInput");
        let timeStamp = new Date();

        nomadData.connectToData({

            dataSet : "messages",
            fetchType : "POST",
            dataBaseObject : {
                userId : Number(sessionStorage.getItem("userId")),
                message : messageInput.value,
                timeStamp : timeStamp
            }
        }).then(shit => {
            console.log(shit)
            $("#output").empty();
            messages.createMessageBoard();
        })
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
                name: messageTimeStamp,
                type : "submit"
            }
        });

        messageEditSubmitButton.addEventListener("click", messagesEventListeners.handleEditSubmitButton)
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
        }).then(shit => {
            console.log(shit)
            $("#output").empty();
            messages.createMessageBoard();
        })
    }
}
export default messagesEventListeners;