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
        const eventObject =
        domComponents.createEventEditInput(idToEdit, )
    },
    handleEventUpdateButton() {

    }
};

export default eventListeners;