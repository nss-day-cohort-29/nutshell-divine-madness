import nomadData from "./nomadData";
import events from "./events";
// import domComponents from "./domComponents";

const eventPageListeners = {
    handleShowButton() {
        const output = document.querySelector("#output");
        const showButton = document.querySelector("#showForm");
        output.removeChild(showButton);
        const eventForm = events.createEventInput();
        output.insertBefore(eventForm, output.firstChild);
    },
    handleSaveButton() {
        const nameInputted = document.querySelector("#eventName").value;
        const dateInputted = document.querySelector("#eventDate").value;
        const timeInputted = document.querySelector("#eventTime").value;
        const locationInputted = document.querySelector("#eventLocation").value;

        if (nameInputted === "" || dateInputted === "" || timeInputted === "" || locationInputted === "") {
            alert("Please input information in all fields")
        } else {
            nomadData.connectToData({
                dataSet: "events",
                fetchType: "POST",
                dataBaseObject: {
                    userId: Number(sessionStorage.getItem("userId")),
                    eventName: nameInputted,
                    eventDate: dateInputted,
                    eventTime: timeInputted,
                    eventLocation: locationInputted
                }
            })
            .then( () => {
                events.appendUserAndFriendEvents();
            });
        };
    },
    handleHideButton() {
        const output = document.querySelector("#output");
        const formContainer = document.querySelector(".eventInput");
        output.removeChild(formContainer);
        events.addShowButton();
    },
    handleDeleteButton() {
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
            events.appendUserAndFriendEvents();
        });
    },
    handleEditButton() {
        const idToEdit = event.target.id.split("--")[1];
        nomadData.connectToData({
            dataSet: "events",
            fetchType: "GET",
            dataBaseObject: {
            userId: Number(sessionStorage.getItem("userId")),
            },
            embedItem: `/${idToEdit}`
// Above is a bit of a hacky solution in order to get a specific event. Maybe need to add specific get function to nomadData
        })
        .then(parsedResponse => {
        events.createEventEditInput(idToEdit, parsedResponse);
        });
    },
    handleUpdateButton() {
        const editedId = event.target.id.split("--")[1];

        const editedName = document.querySelector(`#editName--${editedId}`).value;
        const editedDate = document.querySelector(`#editDate--${editedId}`).value;
        const editedTime = document.querySelector(`#editTime--${editedId}`).value;
        const editedLocation = document.querySelector(`#editLocation--${editedId}`).value;

        if (editedName === "" || editedDate === "" || editedTime === "" || editedLocation === "") {
            alert("Please do not leave edit fields blank")
        } else {
            nomadData.connectToData({
                putId: editedId,
                dataSet: "events",
                fetchType: "PUT",
                dataBaseObject: {
                    id: editedId,
                    userId: Number(sessionStorage.getItem("userId")),
                    eventName: editedName,
                    eventDate: editedDate,
                    eventTime: editedTime,
                    eventLocation: editedLocation
                }
            })
            .then( () => {
                events.appendUserAndFriendEvents();
            });
        }
    }
};

export default eventPageListeners;