// Author: Cole Bryant / Purpose:

import nomadData from "./nomadData";
import domComponents from "./domComponents";
import eventListeners from "./eventListeners";

const events = {
  showEventForm () {
    const output = document.querySelector("#output");
    const eventForm = domComponents.createEventInput();
    output.appendChild(eventForm);
    const eventLog = document.createElement("article")
    eventLog.setAttribute("id", "eventLog");
    output.appendChild(eventLog);
  },
  appendUserEvents() {
    const eventLog = document.querySelector("#eventLog");
    nomadData.connectToData({
      dataSet: "events",
      fetchType: "GET",
      dataBaseObject: {
        userId: sessionStorage.getItem("userId")
        },
      embedItem: "?_embed=events"
    })
    .then(parsedResponse => {
      let docuFrag = document.createDocumentFragment();
      parsedResponse.forEach(event => {
        while (eventLog.firstChild) {
          eventLog.removeChild(eventLog.firstChild)
        };
        const eventItem = domComponents.createEventItem(event);
        docuFrag.appendChild(eventItem);
      });
      eventLog.appendChild(docuFrag);
    });
  },
  deleteEvent() {
    const saveButton = document.querySelector("#saveEvent");
    saveButton.addEventListener("click", eventListeners.handleEventSaveButton);
  },
  editEvent() {
    const
  }
};

events.showEventForm();
events.appendUserEvents();
events.deleteEvent();

export default events;