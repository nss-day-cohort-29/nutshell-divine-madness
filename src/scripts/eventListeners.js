import nomadData from "./nomadData";
import domComponents from "./domComponents";
import events from "./events";

const eventListeners = {
    modalDisplayAnimation(){
        let modal = document.getElementById("nomadModal");

        // target modal to open it
        let btn = document.getElementById("modalButton");

        // Get the <span> element that closes the modal
        let span = document.getElementsByClassName("close")[0];
        // When the user clicks the button, open the modal
        btn.onclick = function() {
        modal.style.display = "block";
        }
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal.style.display = "none";
        }
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        $(".message a").click(function(){
        $("form").animate({height: "toggle", opacity: "toggle"}, "slow")
        })
    },
    /*===============================================================================================================
    LOGIN FORM: user enters Username and Password. when User clicks login, the input field and NOMADS header disappear
    and the user will be displayed the "Dashboard" and the navigation bar. Upon login, sessionStorage is started. In the Console
    you will be able to see Who is logged in and what their userId is. ie. 1,2,3,4 etc.
    =================================================================================================================*/
    userLogin(){
        let logInVal = document.querySelector("#userNameVal").value
        let passwordVal = document.querySelector("#passwordVal").value
        //get to compare
        nomadData.connectToData({

        "dataSet" : "users",
        "fetchType" : "GET",
        "embedItem" : "?_embed=users"

    }).then(parsedUsers => {

        parsedUsers.forEach(user => {
              /*If login credentials match those in database.json. We want the user to be displayed their "dashboad"
              and navigation bar. So we need to set display to none and invoke the function - createNavBar()*/
            if(logInVal === user.userName && passwordVal === user.password) {
                    //hides NOMAD heading
                    $(".t-border").hide()
                    //hides the form
                    $(".form").hide()
                    //displays navigatin bar
                    domComponents.createNavBar()
                    //session storage
                    sessionStorage.setItem("userId", user.id)
                    let userId = sessionStorage.getItem("userId")
                    //console.log verifying that credentials match and user is logged in
                    console.log("logged in as" + " " + user.userName)
                    console.log("your user ID is: " + userId)
                
                }
            })
        })
    },
    userRegistration(){
        let regUserName = document.querySelector("#regUserName").value
        let regEmail = document.querySelector("#regEmail").value
        let regPassword = document.querySelector("#regPassword").value
        // let regConfirmPassword = document.querySelector("#regUserName").value

        nomadData.connectToData({

                "dataSet" : "users",
                "fetchType" : "POST",
                "dataBaseObject" : {
                    "userName": regUserName,
                    "email": regEmail,
                    "password": regPassword
                }
            })
                //hides NOMAD heading
                $(".t-border").hide()
                //hides the form
                $(".form").hide()
                //displays navigatin bar
                domComponents.createNavBar()
        },
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
        .then( () => {
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
        .then( () => {
            events.appendUserEvents();
        });
    },
    handleEventEditButton() {
        const idToEdit = event.target.id.split("--")[1];
        // const eventObject =
        domComponents.createEventEditInput(idToEdit, )
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
                userId : sessionStorage.getItem("userId"),
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
