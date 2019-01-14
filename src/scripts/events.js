// Author: Cole Bryant / Purpose:

import nomadData from "./nomadData";
import domComponents from "./domComponents";
import eventPageListeners from "./eventPageListeners";


//createEventInput and createEventItem will be added to this object. so dombuilder.
const events = {
  showEventForm () {
    $("#output").empty()
    const output = document.querySelector("#output");
    const eventsForm = this.createEventInput();
    output.appendChild(eventsForm)
    const eventLog = document.createElement("article")
    eventLog.setAttribute("id", "eventLog");
    output.appendChild(eventLog);
  },
  addShowButton() {
    const output = document.querySelector("#output");
    const showButton = domComponents.createDomElement({elementType: "button", content: "Create a New Event", attributes: {type: "button", id: "showForm"}});
    showButton.addEventListener("click", eventPageListeners.handleShowButton);
    output.insertBefore(showButton, output.firstChild);
  },
  appendUserAndFriendEvents() {
    const eventLog = document.querySelector("#eventLog");
    const eventHolder = [];
    const userHolder = [Number(sessionStorage.getItem("userId"))];
    nomadData.connectToData({
      dataSet: "friends",
      fetchType: "GET",
      dataBaseObject: "",
      embedItem: "?_embed=events"
    })
    .then(parsedResponse => {
      parsedResponse.forEach(response => {
        if(response.userId === Number(sessionStorage.getItem("userId"))) {
          userHolder.push(response.otherFriendId);
        };
      })
      userHolder.forEach(userId => {
        nomadData.connectToData({
          dataSet: "events",
          fetchType: "GET",
          dataBaseObject: "",
          embedItem: `?_userId=${userId}`
        })
        .then(parsedResponse => {
          parsedResponse.forEach(response => {
            if (response.userId === userId) {
              eventHolder.push(response);
            };
          });
          const sortedEvents = eventHolder.sort( (a, b) => {
            return new Date(a.eventDate) - new Date(b.eventDate);
          });
          const docuFrag = document.createDocumentFragment();
          sortedEvents.forEach(event => {
            while (eventLog.firstChild) {
              eventLog.removeChild(eventLog.firstChild)
            };
            const eventItem = this.createEventItem(event);
            docuFrag.appendChild(eventItem);
          });
          eventLog.appendChild(docuFrag);
        });
      });
    });
  },
  createEventInput() {

    const formContainer = document.querySelector("#output")
    const formHeader = domComponents.createDomElement({elementType: "h2", content: "Add a New Event:"});
    formContainer.appendChild(formHeader);
    const eventForm = domComponents.createDomElement({elementType: "form", attributes: {class: "eventInput"}});
    const nameFieldset = domComponents.createDomElement({elementType: "fieldset"});
    const nameLabel = domComponents.createDomElement({elementType: "label", content: "Event Name:", attributes: {for: "eventName"}});
    const nameInput = domComponents.createDomElement({elementType: "input", attributes: {type: "text", name: "eventName", id: "eventName"}});
    nameFieldset.appendChild(nameLabel);
    nameFieldset.appendChild(nameInput);

    const dateFieldset = domComponents.createDomElement({elementType: "fieldset"});
    const dateLabel = domComponents.createDomElement({elementType: "label", content: "Event Date:", attributes: {for: "eventDate"}});
    const dateInput = domComponents.createDomElement({elementType: "input", attributes: {type: "date", name: "eventDate", id: "eventDate"}});
    dateFieldset.appendChild(dateLabel);
    dateFieldset.appendChild(dateInput);

    const timeFieldset = domComponents.createDomElement({elementType: "fieldset"});
    const timeLabel = domComponents.createDomElement({elementType: "label", content: "Event Time:", attributes: {for: "eventTime"}});
    const timeInput = domComponents.createDomElement({elementType: "input", attributes: {type: "time", name: "eventTime", id: "eventTime"}});
    timeFieldset.appendChild(timeLabel);
    timeFieldset.appendChild(timeInput);

    const locationFieldset = domComponents.createDomElement({elementType: "fieldset"});
    const locationLabel = domComponents.createDomElement({elementType: "label", content: "Enter Location:", attributes: {for: "eventLocation"}});
    const locationInput = domComponents.createDomElement({elementType: "input", attributes: {type: "text", name: "eventLocation", id: "eventLocation"}});
    locationFieldset.appendChild(locationLabel);
    locationFieldset.appendChild(locationInput);

    const saveButton = domComponents.createDomElement({elementType: "button", content: "Save", attributes: {type: "button", id: "saveEvent"}});
    saveButton.addEventListener("click", eventPageListeners.handleSaveButton);

    const hideButton = domComponents.createDomElement({elementType: "button", content: "Hide Event Input", attributes: {type: "button", id: "hideEvent"}});
    hideButton.addEventListener("click", eventPageListeners.handleHideButton);
    formContainer.appendChild(eventForm)
    eventForm.appendChild(nameFieldset);
    eventForm.appendChild(dateFieldset);
    eventForm.appendChild(timeFieldset);
    eventForm.appendChild(locationFieldset);
    eventForm.appendChild(saveButton);
    eventForm.appendChild(hideButton);
    // formContainer.appendChild(eventForm)
    return eventForm;
  },
  createEventItem (eventObject) {
    const eventItem = domComponents.createDomElement({elementType: "article", attributes: {class: "eventItem", id: `eventItem--${eventObject.id}`}});
    const eventHeader = domComponents.createDomElement({elementType: "h2", content: eventObject.eventName});

    const date = new Date(eventObject.eventDate);
    const datify = () => {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      const day = date.getDate();
      const monthIndex = date.getMonth();
      const year = date.getFullYear();
      return `${monthNames[monthIndex]} ${day}, ${year}`;
    };

    const longDate = datify();

    const eventDateTime = domComponents.createDomElement({elementType: "p", content: `At ${eventObject.eventTime} on ${longDate}`});
    const eventLocation = domComponents.createDomElement({elementType: "p", content: `Location: ${eventObject.eventLocation}`});

    eventItem.appendChild(eventHeader);
    eventItem.appendChild(eventDateTime);
    eventItem.appendChild(eventLocation);

    if (eventObject.userId === Number(sessionStorage.getItem("userId"))) {
      const editButton = domComponents.createDomElement({elementType: "button", content: "Edit", attributes: {type: "button", id: `editEvent--${eventObject.id}`}});
      editButton.addEventListener("click", eventPageListeners.handleEditButton);
      const deleteButton = domComponents.createDomElement({elementType: "button", content: "Delete", attributes: {type: "button", id: `deleteEvent--${eventObject.id}`}});
      deleteButton.addEventListener("click", eventPageListeners.handleDeleteButton);
      eventItem.appendChild(editButton);
      eventItem.appendChild(deleteButton);
    };

    return eventItem;
  },
  createEventEditInput(containerId, eventObject) {
    const formContainer = domComponents.createDomElement({elementType: "form", attribues: {class: "eventEdit"}});
    const eventHeader = domComponents.createDomElement({elementType: "h2", content: eventObject.eventName});
    formContainer.appendChild(eventHeader);

    const nameFieldset = domComponents.createDomElement({elementType: "fieldset"});
    const nameLabel = domComponents.createDomElement({elementType: "label", content: "Edit Name:", attributes: {for: "eventName"}});
    const nameInput = domComponents.createDomElement({elementType: "input", attributes: {type: "text", name: "eventName", id: `editName--${containerId}`, value: eventObject.eventName}});
    nameFieldset.appendChild(nameLabel);
    nameFieldset.appendChild(nameInput);

    const dateFieldset = domComponents.createDomElement({elementType: "fieldset"});
    const dateLabel = domComponents.createDomElement({elementType: "label", content: "Edit Date:", attributes: {for: "eventDate"}});
    const dateInput = domComponents.createDomElement({elementType: "input", attributes: {type: "date", name: "eventDate", id: `editDate--${containerId}`, value: eventObject.eventDate}});
    dateFieldset.appendChild(dateLabel);
    dateFieldset.appendChild(dateInput);

    const timeFieldset = domComponents.createDomElement({elementType: "fieldset"});
    const timeLabel = domComponents.createDomElement({elementType: "label", content: "Edit Time:", attributes: {for: "eventTime"}});
    const timeInput = domComponents.createDomElement({elementType: "input", attributes: {type: "time", name: "eventTime", id: `editTime--${containerId}`, value: eventObject.eventTime}});
    timeFieldset.appendChild(timeLabel);
    timeFieldset.appendChild(timeInput);

    const locationFieldset = domComponents.createDomElement({elementType: "fieldset"});
    const locationLabel = domComponents.createDomElement({elementType: "label", content: "Edit Location:", attributes: {for: "eventLocation"}});
    const locationInput = domComponents.createDomElement({elementType: "input", attributes: {type: "text", name: "eventLocation", id: `editLocation--${containerId}`, value: eventObject.eventLocation}});
    locationFieldset.appendChild(locationLabel);
    locationFieldset.appendChild(locationInput);

    const updateButton = domComponents.createDomElement({elementType: "button", content: "Update", attributes: {type: "button", id: `submitEdits--${containerId}`}});
    updateButton.addEventListener("click", eventPageListeners.handleUpdateButton);

    formContainer.appendChild(nameFieldset);
    formContainer.appendChild(dateFieldset);
    formContainer.appendChild(timeFieldset);
    formContainer.appendChild(locationFieldset);
    formContainer.appendChild(updateButton);

    let currentContainer = document.querySelector(`#eventItem--${containerId}`);
    while (currentContainer.firstChild) {
      currentContainer.removeChild(currentContainer.firstChild);
    };
    currentContainer.appendChild(formContainer);
  }

};

export default events;