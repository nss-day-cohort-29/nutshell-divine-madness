import nomadData from "./nomadData";
import events from "./events";

// let thing = document.querySelector("#eventName").value;
// console.log(thing);

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
    }
};

export default eventListeners