import nomadData from "./nomadData";
import domComponents from "./domComponents";

const messages = {

    createMessageBoard() {

        let outputArticle = document.getElementById("output")

        //create display container
        let messagesContainer = domComponents.createDomElement({
            "elementType" : "div",
            "cssClass" : "messagesContainer",
            "attributes" : {
                id : "messagesContainer"
            }});

        //create message input field
        let messageInput = domComponents.createDomElement({
            "elementType" : "input",
            "cssClass" : "messageInput",
            "attributes" : {
                id : "messageInput",
                placeholder: "Enter Message Here"
            }});
        //create submit button for input field

        let messageSubmitButton = domComponents.createDomElement({
            "elementType" : "button",
            "cssClass" : "messageSubmitButton",
            "content" : "Submit",
            "attributes" : {
                id : "messageSubmitButton"
            }});

        messagesContainer.appendChild(messageInput);
        messagesContainer.appendChild(messageSubmitButton);
        outputArticle.appendChild(messagesContainer);

        this.getMessages()

    },

    getMessages() {

        //GET fetch & .then to build object(s) for createDomElement() using _expand to display UN: message
        nomadData.connectToData({

                "dataSet" : "messages",
                "fetchType" : "GET",
                "embedItem" : "?_expand=user"

        }).then(parsedMessages => {

            let messageContainer = document.getElementById("messagesContainer");
            let messageInput = document.getElementById("messageInput");

            parsedMessages.forEach(message => {
                let messageText = message.message;
                let userName = message.user.userName;
                let timeStamp = message.timeStamp;

                messageContainer.insertBefore(domComponents.createDomElement({

                    "elementType" : "p",
                    "cssClass" : "message",
                    "content" : `${userName}:  ${messageText}`

                }), messageInput)
            });
        })
    },

    postNewMessage() {

        //called by eventListener on submit button
        //perform POST fetch
        //call domRefresh function
    },

    editMessage() {

        //bring up message in a prepopulated form
        //for contains a submit button (same one as in postNewMessage()?)
        //allow edits
        //do PUT fetch
    },


}

export default messages;