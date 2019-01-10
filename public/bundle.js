(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _eventListeners = _interopRequireDefault(require("./eventListeners"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const domComponents = {
  createDomElement({
    elementType,
    content = null,
    cssClass,
    attributes = {}
  }) {
    const element = document.createElement(elementType);
    element.textContent = content;

    if (cssClass) {
      element.classList.add(cssClass);
    }

    for (let key in attributes) {
      element.setAttribute(key, attributes[key]);
    }

    return element;
  },

  createEventInput() {
    const formContainer = this.createDomElement({
      elementType: "form",
      attribues: {
        class: "eventInput"
      }
    });
    const formHeader = this.createDomElement({
      elementType: "h1",
      content: "Add a New Event:"
    });
    formContainer.appendChild(formHeader);
    const nameFieldset = this.createDomElement({
      elementType: "fieldset"
    });
    const nameLabel = this.createDomElement({
      elementType: "label",
      content: "Event Name:",
      attributes: {
        for: "eventName"
      }
    });
    const nameInput = this.createDomElement({
      elementType: "input",
      attributes: {
        type: "text",
        name: "eventName",
        id: "eventName"
      }
    });
    nameFieldset.appendChild(nameLabel);
    nameFieldset.appendChild(nameInput);
    const dateFieldset = this.createDomElement({
      elementType: "fieldset"
    });
    const dateLabel = this.createDomElement({
      elementType: "label",
      content: "Event Date:",
      attributes: {
        for: "eventDate"
      }
    });
    const dateInput = this.createDomElement({
      elementType: "input",
      attributes: {
        type: "date",
        name: "eventDate",
        id: "eventDate"
      }
    });
    dateFieldset.appendChild(dateLabel);
    dateFieldset.appendChild(dateInput);
    const timeFieldset = this.createDomElement({
      elementType: "fieldset"
    });
    const timeLabel = this.createDomElement({
      elementType: "label",
      content: "Event Time:",
      attributes: {
        for: "eventTime"
      }
    });
    const timeInput = this.createDomElement({
      elementType: "input",
      attributes: {
        type: "time",
        name: "eventTime",
        id: "eventTime"
      }
    });
    timeFieldset.appendChild(timeLabel);
    timeFieldset.appendChild(timeInput);
    const locationFieldset = this.createDomElement({
      elementType: "fieldset"
    });
    const locationLabel = this.createDomElement({
      elementType: "label",
      content: "Enter Location:",
      attributes: {
        for: "eventLocation"
      }
    });
    const locationInput = this.createDomElement({
      elementType: "input",
      attributes: {
        type: "text",
        name: "eventLocation",
        id: "eventLocation"
      }
    });
    locationFieldset.appendChild(locationLabel);
    locationFieldset.appendChild(locationInput);
    const saveButton = this.createDomElement({
      elementType: "button",
      content: "Save",
      attributes: {
        type: "button",
        id: "saveEvent"
      }
    });
    formContainer.appendChild(nameFieldset);
    formContainer.appendChild(dateFieldset);
    formContainer.appendChild(timeFieldset);
    formContainer.appendChild(locationFieldset);
    formContainer.appendChild(saveButton);
    return formContainer;
  },

  createEventItem(eventObject) {
    const eventItem = this.createDomElement({
      elementType: "article",
      attributes: {
        class: "eventItem"
      }
    });
    const eventHeader = this.createDomElement({
      elementType: "h2",
      content: eventObject.eventName
    });
    const eventDateTime = this.createDomElement({
      elementType: "p",
      content: `At ${eventObject.eventTime} on ${eventObject.eventDate}`
    });
    const eventLocation = this.createDomElement({
      elementType: "p",
      content: `Location: ${eventObject.eventLocation}`
    });
    const editButton = this.createDomElement({
      elementType: "button",
      content: "Edit",
      attributes: {
        type: "button",
        id: `editEvent--${eventObject.id}`
      }
    });
    editButton.addEventListener("click", _eventListeners.default.handleEventEditButton);
    const deleteButton = this.createDomElement({
      elementType: "button",
      content: "Delete",
      attributes: {
        type: "button",
        id: `deleteEvent--${eventObject.id}`
      }
    });
    deleteButton.addEventListener("click", _eventListeners.default.handleEventDeleteButton);
    eventItem.appendChild(eventHeader);
    eventItem.appendChild(eventDateTime);
    eventItem.appendChild(eventLocation);
    eventItem.appendChild(editButton);
    eventItem.appendChild(deleteButton);
    return eventItem;
  },

  createEventEditInput(eventId, eventObject) {
    const formContainer = this.createDomElement({
      elementType: "form",
      attribues: {
        class: "eventEdit"
      }
    });
    formContainer.appendChild(formHeader);
    const nameFieldset = this.createDomElement({
      elementType: "fieldset"
    });
    const nameLabel = this.createDomElement({
      elementType: "label",
      content: "Edit Name:",
      attributes: {
        for: "eventName"
      }
    });
    const nameInput = this.createDomElement({
      elementType: "input",
      attributes: {
        type: "text",
        name: "eventName",
        value: eventObject.eventName
      }
    });
    nameFieldset.appendChild(nameLabel);
    nameFieldset.appendChild(nameInput);
    const dateFieldset = this.createDomElement({
      elementType: "fieldset"
    });
    const dateLabel = this.createDomElement({
      elementType: "label",
      content: "Edit Date:",
      attributes: {
        for: "eventDate"
      }
    });
    const dateInput = this.createDomElement({
      elementType: "input",
      attributes: {
        type: "date",
        name: "eventDate",
        value: eventObject.eventDate
      }
    });
    dateFieldset.appendChild(dateLabel);
    dateFieldset.appendChild(dateInput);
    const timeFieldset = this.createDomElement({
      elementType: "fieldset"
    });
    const timeLabel = this.createDomElement({
      elementType: "label",
      content: "Edit Time:",
      attributes: {
        for: "eventTime"
      }
    });
    const timeInput = this.createDomElement({
      elementType: "input",
      attributes: {
        type: "time",
        name: "eventTime",
        value: eventObject.eventTime
      }
    });
    timeFieldset.appendChild(timeLabel);
    timeFieldset.appendChild(timeInput);
    const locationFieldset = this.createDomElement({
      elementType: "fieldset"
    });
    const locationLabel = this.createDomElement({
      elementType: "label",
      content: "Edit Location:",
      attributes: {
        for: "eventLocation"
      }
    });
    const locationInput = this.createDomElement({
      elementType: "input",
      attributes: {
        type: "text",
        name: "eventLocation",
        value: eventObject.eventLocation
      }
    });
    locationFieldset.appendChild(locationLabel);
    locationFieldset.appendChild(locationInput);
    const updateButton = this.createDomElement({
      elementType: "button",
      content: "Update",
      attributes: {
        type: "button",
        id: "submitEdits"
      }
    }); // updateButton.addEventListener("click", eventListeners.handleEventDeleteButton);

    formContainer.appendChild(nameFieldset);
    formContainer.appendChild(dateFieldset);
    formContainer.appendChild(timeFieldset);
    formContainer.appendChild(locationFieldset);
    formContainer.appendChild(submitButton);
    return formContainer;
  }

};
var _default = domComponents;
exports.default = _default;

},{"./eventListeners":3}],2:[function(require,module,exports){
"use strict";

var _events = _interopRequireDefault(require("./events"));

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _messages = _interopRequireDefault(require("./messages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// messages.createMessageBoard();
function userLogin() {
  let userName = "Hernando";
  let password = "yomama";

  _nomadData.default.connectToData({
    "dataSet": "users",
    "fetchType": "GET",
    "embedItem": "?_embed=events"
  }).then(parsedUsers => {
    parsedUsers.forEach(user => {
      if (userName === user.userName && password === user.password) {
        sessionStorage.setItem('userId', user.id);
      }
    });
  });

  let userId = sessionStorage.getItem('userId');
  loadDashboard(userId); // console.log("UserId = ", sessionStorage.getItem('userId'))
}

userLogin();

function loadDashboard(userId) {
  console.log(`Thanks for passing the userId.  The userId is ${userId}`);
}

},{"./events":4,"./messages":5,"./nomadData":6}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _events = _interopRequireDefault(require("./events"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    _nomadData.default.connectToData({
      dataSet: "events",
      fetchType: "POST",
      dataBaseObject: {
        userId: sessionStorage.getItem("userId"),
        eventName: eventObject.eventName,
        eventDate: eventObject.eventDate,
        eventTime: eventObject.eventTime,
        eventLocation: eventObject.eventLocation
      }
    }).then(parsedResponse => {
      _events.default.appendUserEvents();
    });
  },

  handleEventDeleteButton() {
    const idToDelete = event.target.id.split("--")[1];

    _nomadData.default.connectToData({
      deleteId: idToDelete,
      dataSet: "events",
      fetchType: "DELETE",
      dataBaseObject: {
        userId: sessionStorage.getItem("userId")
      }
    }).then(parsedResponse => {
      _events.default.appendUserEvents();
    });
  }

};
var _default = eventListeners;
exports.default = _default;

},{"./events":4,"./nomadData":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _domComponents = _interopRequireDefault(require("./domComponents"));

var _eventListeners = _interopRequireDefault(require("./eventListeners"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Author: Cole Bryant / Purpose:
const events = {
  showEventForm() {
    const output = document.querySelector("#output");

    const eventForm = _domComponents.default.createEventInput();

    output.appendChild(eventForm);
    const eventLog = document.createElement("article");
    eventLog.setAttribute("id", "eventLog");
    output.appendChild(eventLog);
  },

  appendUserEvents() {
    const eventLog = document.querySelector("#eventLog");

    _nomadData.default.connectToData({
      dataSet: "events",
      fetchType: "GET",
      dataBaseObject: {
        userId: sessionStorage.getItem("userId")
      },
      embedItem: "?_embed=events"
    }).then(parsedResponse => {
      let docuFrag = document.createDocumentFragment();
      parsedResponse.forEach(event => {
        while (eventLog.firstChild) {
          eventLog.removeChild(eventLog.firstChild);
        }

        ;

        const eventItem = _domComponents.default.createEventItem(event);

        docuFrag.appendChild(eventItem);
      });
      eventLog.appendChild(docuFrag);
    });
  },

  deleteEvent() {
    const saveButton = document.querySelector("#saveEvent");
    saveButton.addEventListener("click", _eventListeners.default.handleEventSaveButton);
  },

  editEvent() {}

};
events.showEventForm();
events.appendUserEvents();
events.deleteEvent();
var _default = events;
exports.default = _default;

},{"./domComponents":1,"./eventListeners":3,"./nomadData":6}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _domComponents = _interopRequireDefault(require("./domComponents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const messages = {
  createMessageBoard() {
    let outputArticle = document.getElementById("output"); //create display container

    let messagesContainer = _domComponents.default.createDomElement({
      "elementType": "div",
      "cssClass": "messagesContainer",
      "attributes": {
        id: "messagesContainer"
      }
    }); //create message input field


    let messageInput = _domComponents.default.createDomElement({
      "elementType": "input",
      "cssClass": "messageInput",
      "attributes": {
        id: "messageInput",
        placeholder: "Enter Message Here"
      }
    }); //create submit button for input field


    let messageSubmitButton = _domComponents.default.createDomElement({
      "elementType": "button",
      "cssClass": "messageSubmitButton",
      "content": "Submit",
      "attributes": {
        id: "messageSubmitButton"
      }
    });

    messagesContainer.appendChild(messageInput);
    messagesContainer.appendChild(messageSubmitButton);
    outputArticle.appendChild(messagesContainer);
    this.getMessages();
  },

  getMessages() {
    //GET fetch & .then to build object(s) for createDomElement() using _expand to display UN: message
    _nomadData.default.connectToData({
      "dataSet": "messages",
      "fetchType": "GET",
      "embedItem": "?_expand=user"
    }).then(parsedMessages => {
      let messageContainer = document.getElementById("messagesContainer");
      let messageInput = document.getElementById("messageInput");
      parsedMessages.forEach(message => {
        let messageText = message.message;
        let userName = message.user.userName;
        let timeStamp = message.timeStamp;
        messageContainer.insertBefore(_domComponents.default.createDomElement({
          "elementType": "p",
          "cssClass": "message",
          "content": `${userName}:  ${messageText}`
        }), messageInput);
      });
    });
  },

  postNewMessage() {//called by eventListener on submit button
    //perform POST fetch
    //call domRefresh function
  },

  editMessage() {//bring up message in a prepopulated form
    //for contains a submit button (same one as in postNewMessage()?)
    //allow edits
    //do PUT fetch
  }

};
var _default = messages;
exports.default = _default;

},{"./domComponents":1,"./nomadData":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const nomadData = {
  connectToData(fetchObject) {
    let dataSet = fetchObject.dataSet;
    let embedItem = fetchObject.embedItem;
    let fetchType = fetchObject.fetchType;
    let dataBaseObject = fetchObject.dataBaseObject;
    let putId = fetchObject.putId;
    let deleteId = fetchObject.deleteId;

    if (fetchType == "GET") {
      return fetch(`http://localhost:8088/${dataSet}${embedItem}`).then(response => response.json()); // parses response to JSON
    } else if (fetchType === "POST") {
      // Default options are marked with *
      return fetch(`http://localhost:8088/${dataSet}`, {
        method: `${fetchType}`,
        // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json; charset=utf-8" // "Content-Type": "application/x-www-form-urlencoded",

        },
        // referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(dataBaseObject) // body data type must match "Content-Type" header

      });
    } else if (fetchType === "PUT") {
      return fetch(`http://localhost:8088/${dataSet}/${putId}`, {
        method: `${fetchType}`,
        // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json; charset=utf-8" // "Content-Type": "application/x-www-form-urlencoded",

        },
        // referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(dataBaseObject) // body data type must match "Content-Type" header

      });
    } else if (fetchType === "DELETE") {
      return fetch(`http://localhost:8088/${dataSet}/${deleteId}`, {
        method: `${fetchType}`,
        // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json; charset=utf-8" // "Content-Type": "application/x-www-form-urlencoded",

        } // referrer: "no-referrer", // no-referrer, *client

      });
    } else {
      console.log("YOU SCREWED IT UP");
    }
  }

};
var _default = nomadData;
exports.default = _default;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RvbUNvbXBvbmVudHMuanMiLCIuLi9zY3JpcHRzL2RvbVJlbmRlcmVyLmpzIiwiLi4vc2NyaXB0cy9ldmVudExpc3RlbmVycy5qcyIsIi4uL3NjcmlwdHMvZXZlbnRzLmpzIiwiLi4vc2NyaXB0cy9tZXNzYWdlcy5qcyIsIi4uL3NjcmlwdHMvbm9tYWREYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBOzs7O0FBRUEsTUFBTSxhQUFhLEdBQUc7QUFDcEIsRUFBQSxnQkFBZ0IsQ0FBQztBQUFFLElBQUEsV0FBRjtBQUFlLElBQUEsT0FBTyxHQUFHLElBQXpCO0FBQStCLElBQUEsUUFBL0I7QUFBeUMsSUFBQSxVQUFVLEdBQUc7QUFBdEQsR0FBRCxFQUE2RDtBQUMzRSxVQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixXQUF2QixDQUFoQjtBQUNBLElBQUEsT0FBTyxDQUFDLFdBQVIsR0FBc0IsT0FBdEI7O0FBRUEsUUFBSSxRQUFKLEVBQWM7QUFDWixNQUFBLE9BQU8sQ0FBQyxTQUFSLENBQWtCLEdBQWxCLENBQXNCLFFBQXRCO0FBQ0Q7O0FBRUQsU0FBSyxJQUFJLEdBQVQsSUFBZ0IsVUFBaEIsRUFBNEI7QUFDMUIsTUFBQSxPQUFPLENBQUMsWUFBUixDQUFxQixHQUFyQixFQUEwQixVQUFVLENBQUMsR0FBRCxDQUFwQztBQUNEOztBQUNELFdBQU8sT0FBUDtBQUNELEdBYm1COztBQWNwQixFQUFBLGdCQUFnQixHQUFHO0FBQ2pCLFVBQU0sYUFBYSxHQUFHLEtBQUssZ0JBQUwsQ0FBc0I7QUFBQyxNQUFBLFdBQVcsRUFBRSxNQUFkO0FBQXNCLE1BQUEsU0FBUyxFQUFFO0FBQUMsUUFBQSxLQUFLLEVBQUU7QUFBUjtBQUFqQyxLQUF0QixDQUF0QjtBQUNBLFVBQU0sVUFBVSxHQUFHLEtBQUssZ0JBQUwsQ0FBc0I7QUFBQyxNQUFBLFdBQVcsRUFBRSxJQUFkO0FBQW9CLE1BQUEsT0FBTyxFQUFFO0FBQTdCLEtBQXRCLENBQW5CO0FBQ0EsSUFBQSxhQUFhLENBQUMsV0FBZCxDQUEwQixVQUExQjtBQUVBLFVBQU0sWUFBWSxHQUFHLEtBQUssZ0JBQUwsQ0FBc0I7QUFBQyxNQUFBLFdBQVcsRUFBRTtBQUFkLEtBQXRCLENBQXJCO0FBQ0EsVUFBTSxTQUFTLEdBQUcsS0FBSyxnQkFBTCxDQUFzQjtBQUFDLE1BQUEsV0FBVyxFQUFFLE9BQWQ7QUFBdUIsTUFBQSxPQUFPLEVBQUUsYUFBaEM7QUFBK0MsTUFBQSxVQUFVLEVBQUU7QUFBQyxRQUFBLEdBQUcsRUFBRTtBQUFOO0FBQTNELEtBQXRCLENBQWxCO0FBQ0EsVUFBTSxTQUFTLEdBQUcsS0FBSyxnQkFBTCxDQUFzQjtBQUFDLE1BQUEsV0FBVyxFQUFFLE9BQWQ7QUFBdUIsTUFBQSxVQUFVLEVBQUU7QUFBQyxRQUFBLElBQUksRUFBRSxNQUFQO0FBQWUsUUFBQSxJQUFJLEVBQUUsV0FBckI7QUFBa0MsUUFBQSxFQUFFLEVBQUU7QUFBdEM7QUFBbkMsS0FBdEIsQ0FBbEI7QUFDQSxJQUFBLFlBQVksQ0FBQyxXQUFiLENBQXlCLFNBQXpCO0FBQ0EsSUFBQSxZQUFZLENBQUMsV0FBYixDQUF5QixTQUF6QjtBQUVBLFVBQU0sWUFBWSxHQUFHLEtBQUssZ0JBQUwsQ0FBc0I7QUFBQyxNQUFBLFdBQVcsRUFBRTtBQUFkLEtBQXRCLENBQXJCO0FBQ0EsVUFBTSxTQUFTLEdBQUcsS0FBSyxnQkFBTCxDQUFzQjtBQUFDLE1BQUEsV0FBVyxFQUFFLE9BQWQ7QUFBdUIsTUFBQSxPQUFPLEVBQUUsYUFBaEM7QUFBK0MsTUFBQSxVQUFVLEVBQUU7QUFBQyxRQUFBLEdBQUcsRUFBRTtBQUFOO0FBQTNELEtBQXRCLENBQWxCO0FBQ0EsVUFBTSxTQUFTLEdBQUcsS0FBSyxnQkFBTCxDQUFzQjtBQUFDLE1BQUEsV0FBVyxFQUFFLE9BQWQ7QUFBdUIsTUFBQSxVQUFVLEVBQUU7QUFBQyxRQUFBLElBQUksRUFBRSxNQUFQO0FBQWUsUUFBQSxJQUFJLEVBQUUsV0FBckI7QUFBa0MsUUFBQSxFQUFFLEVBQUU7QUFBdEM7QUFBbkMsS0FBdEIsQ0FBbEI7QUFDQSxJQUFBLFlBQVksQ0FBQyxXQUFiLENBQXlCLFNBQXpCO0FBQ0EsSUFBQSxZQUFZLENBQUMsV0FBYixDQUF5QixTQUF6QjtBQUVBLFVBQU0sWUFBWSxHQUFHLEtBQUssZ0JBQUwsQ0FBc0I7QUFBQyxNQUFBLFdBQVcsRUFBRTtBQUFkLEtBQXRCLENBQXJCO0FBQ0EsVUFBTSxTQUFTLEdBQUcsS0FBSyxnQkFBTCxDQUFzQjtBQUFDLE1BQUEsV0FBVyxFQUFFLE9BQWQ7QUFBdUIsTUFBQSxPQUFPLEVBQUUsYUFBaEM7QUFBK0MsTUFBQSxVQUFVLEVBQUU7QUFBQyxRQUFBLEdBQUcsRUFBRTtBQUFOO0FBQTNELEtBQXRCLENBQWxCO0FBQ0EsVUFBTSxTQUFTLEdBQUcsS0FBSyxnQkFBTCxDQUFzQjtBQUFDLE1BQUEsV0FBVyxFQUFFLE9BQWQ7QUFBdUIsTUFBQSxVQUFVLEVBQUU7QUFBQyxRQUFBLElBQUksRUFBRSxNQUFQO0FBQWUsUUFBQSxJQUFJLEVBQUUsV0FBckI7QUFBa0MsUUFBQSxFQUFFLEVBQUU7QUFBdEM7QUFBbkMsS0FBdEIsQ0FBbEI7QUFDQSxJQUFBLFlBQVksQ0FBQyxXQUFiLENBQXlCLFNBQXpCO0FBQ0EsSUFBQSxZQUFZLENBQUMsV0FBYixDQUF5QixTQUF6QjtBQUVBLFVBQU0sZ0JBQWdCLEdBQUcsS0FBSyxnQkFBTCxDQUFzQjtBQUFDLE1BQUEsV0FBVyxFQUFFO0FBQWQsS0FBdEIsQ0FBekI7QUFDQSxVQUFNLGFBQWEsR0FBRyxLQUFLLGdCQUFMLENBQXNCO0FBQUMsTUFBQSxXQUFXLEVBQUUsT0FBZDtBQUF1QixNQUFBLE9BQU8sRUFBRSxpQkFBaEM7QUFBbUQsTUFBQSxVQUFVLEVBQUU7QUFBQyxRQUFBLEdBQUcsRUFBRTtBQUFOO0FBQS9ELEtBQXRCLENBQXRCO0FBQ0EsVUFBTSxhQUFhLEdBQUcsS0FBSyxnQkFBTCxDQUFzQjtBQUFDLE1BQUEsV0FBVyxFQUFFLE9BQWQ7QUFBdUIsTUFBQSxVQUFVLEVBQUU7QUFBQyxRQUFBLElBQUksRUFBRSxNQUFQO0FBQWUsUUFBQSxJQUFJLEVBQUUsZUFBckI7QUFBc0MsUUFBQSxFQUFFLEVBQUU7QUFBMUM7QUFBbkMsS0FBdEIsQ0FBdEI7QUFDQSxJQUFBLGdCQUFnQixDQUFDLFdBQWpCLENBQTZCLGFBQTdCO0FBQ0EsSUFBQSxnQkFBZ0IsQ0FBQyxXQUFqQixDQUE2QixhQUE3QjtBQUVBLFVBQU0sVUFBVSxHQUFHLEtBQUssZ0JBQUwsQ0FBc0I7QUFBQyxNQUFBLFdBQVcsRUFBRSxRQUFkO0FBQXdCLE1BQUEsT0FBTyxFQUFFLE1BQWpDO0FBQXlDLE1BQUEsVUFBVSxFQUFFO0FBQUMsUUFBQSxJQUFJLEVBQUUsUUFBUDtBQUFpQixRQUFBLEVBQUUsRUFBRTtBQUFyQjtBQUFyRCxLQUF0QixDQUFuQjtBQUVBLElBQUEsYUFBYSxDQUFDLFdBQWQsQ0FBMEIsWUFBMUI7QUFDQSxJQUFBLGFBQWEsQ0FBQyxXQUFkLENBQTBCLFlBQTFCO0FBQ0EsSUFBQSxhQUFhLENBQUMsV0FBZCxDQUEwQixZQUExQjtBQUNBLElBQUEsYUFBYSxDQUFDLFdBQWQsQ0FBMEIsZ0JBQTFCO0FBQ0EsSUFBQSxhQUFhLENBQUMsV0FBZCxDQUEwQixVQUExQjtBQUVBLFdBQU8sYUFBUDtBQUNELEdBcERtQjs7QUFxRHBCLEVBQUEsZUFBZSxDQUFFLFdBQUYsRUFBZTtBQUM1QixVQUFNLFNBQVMsR0FBRyxLQUFLLGdCQUFMLENBQXNCO0FBQUMsTUFBQSxXQUFXLEVBQUUsU0FBZDtBQUF5QixNQUFBLFVBQVUsRUFBRTtBQUFDLFFBQUEsS0FBSyxFQUFFO0FBQVI7QUFBckMsS0FBdEIsQ0FBbEI7QUFDQSxVQUFNLFdBQVcsR0FBRyxLQUFLLGdCQUFMLENBQXNCO0FBQUMsTUFBQSxXQUFXLEVBQUUsSUFBZDtBQUFvQixNQUFBLE9BQU8sRUFBRSxXQUFXLENBQUM7QUFBekMsS0FBdEIsQ0FBcEI7QUFDQSxVQUFNLGFBQWEsR0FBRyxLQUFLLGdCQUFMLENBQXNCO0FBQUMsTUFBQSxXQUFXLEVBQUUsR0FBZDtBQUFtQixNQUFBLE9BQU8sRUFBRyxNQUFLLFdBQVcsQ0FBQyxTQUFVLE9BQU0sV0FBVyxDQUFDLFNBQVU7QUFBcEYsS0FBdEIsQ0FBdEI7QUFDQSxVQUFNLGFBQWEsR0FBRyxLQUFLLGdCQUFMLENBQXNCO0FBQUMsTUFBQSxXQUFXLEVBQUUsR0FBZDtBQUFtQixNQUFBLE9BQU8sRUFBRyxhQUFZLFdBQVcsQ0FBQyxhQUFjO0FBQW5FLEtBQXRCLENBQXRCO0FBQ0EsVUFBTSxVQUFVLEdBQUcsS0FBSyxnQkFBTCxDQUFzQjtBQUFDLE1BQUEsV0FBVyxFQUFFLFFBQWQ7QUFBd0IsTUFBQSxPQUFPLEVBQUUsTUFBakM7QUFBeUMsTUFBQSxVQUFVLEVBQUU7QUFBQyxRQUFBLElBQUksRUFBRSxRQUFQO0FBQWlCLFFBQUEsRUFBRSxFQUFHLGNBQWEsV0FBVyxDQUFDLEVBQUc7QUFBbEQ7QUFBckQsS0FBdEIsQ0FBbkI7QUFDQSxJQUFBLFVBQVUsQ0FBQyxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyx3QkFBZSxxQkFBcEQ7QUFDQSxVQUFNLFlBQVksR0FBRyxLQUFLLGdCQUFMLENBQXNCO0FBQUMsTUFBQSxXQUFXLEVBQUUsUUFBZDtBQUF3QixNQUFBLE9BQU8sRUFBRSxRQUFqQztBQUEyQyxNQUFBLFVBQVUsRUFBRTtBQUFDLFFBQUEsSUFBSSxFQUFFLFFBQVA7QUFBaUIsUUFBQSxFQUFFLEVBQUcsZ0JBQWUsV0FBVyxDQUFDLEVBQUc7QUFBcEQ7QUFBdkQsS0FBdEIsQ0FBckI7QUFDQSxJQUFBLFlBQVksQ0FBQyxnQkFBYixDQUE4QixPQUE5QixFQUF1Qyx3QkFBZSx1QkFBdEQ7QUFFQSxJQUFBLFNBQVMsQ0FBQyxXQUFWLENBQXNCLFdBQXRCO0FBQ0EsSUFBQSxTQUFTLENBQUMsV0FBVixDQUFzQixhQUF0QjtBQUNBLElBQUEsU0FBUyxDQUFDLFdBQVYsQ0FBc0IsYUFBdEI7QUFDQSxJQUFBLFNBQVMsQ0FBQyxXQUFWLENBQXNCLFVBQXRCO0FBQ0EsSUFBQSxTQUFTLENBQUMsV0FBVixDQUFzQixZQUF0QjtBQUVBLFdBQU8sU0FBUDtBQUNELEdBdEVtQjs7QUF1RXBCLEVBQUEsb0JBQW9CLENBQUMsT0FBRCxFQUFVLFdBQVYsRUFBdUI7QUFDekMsVUFBTSxhQUFhLEdBQUcsS0FBSyxnQkFBTCxDQUFzQjtBQUFDLE1BQUEsV0FBVyxFQUFFLE1BQWQ7QUFBc0IsTUFBQSxTQUFTLEVBQUU7QUFBQyxRQUFBLEtBQUssRUFBRTtBQUFSO0FBQWpDLEtBQXRCLENBQXRCO0FBQ0EsSUFBQSxhQUFhLENBQUMsV0FBZCxDQUEwQixVQUExQjtBQUVBLFVBQU0sWUFBWSxHQUFHLEtBQUssZ0JBQUwsQ0FBc0I7QUFBQyxNQUFBLFdBQVcsRUFBRTtBQUFkLEtBQXRCLENBQXJCO0FBQ0EsVUFBTSxTQUFTLEdBQUcsS0FBSyxnQkFBTCxDQUFzQjtBQUFDLE1BQUEsV0FBVyxFQUFFLE9BQWQ7QUFBdUIsTUFBQSxPQUFPLEVBQUUsWUFBaEM7QUFBOEMsTUFBQSxVQUFVLEVBQUU7QUFBQyxRQUFBLEdBQUcsRUFBRTtBQUFOO0FBQTFELEtBQXRCLENBQWxCO0FBQ0EsVUFBTSxTQUFTLEdBQUcsS0FBSyxnQkFBTCxDQUFzQjtBQUFDLE1BQUEsV0FBVyxFQUFFLE9BQWQ7QUFBdUIsTUFBQSxVQUFVLEVBQUU7QUFBQyxRQUFBLElBQUksRUFBRSxNQUFQO0FBQWUsUUFBQSxJQUFJLEVBQUUsV0FBckI7QUFBa0MsUUFBQSxLQUFLLEVBQUUsV0FBVyxDQUFDO0FBQXJEO0FBQW5DLEtBQXRCLENBQWxCO0FBQ0EsSUFBQSxZQUFZLENBQUMsV0FBYixDQUF5QixTQUF6QjtBQUNBLElBQUEsWUFBWSxDQUFDLFdBQWIsQ0FBeUIsU0FBekI7QUFFQSxVQUFNLFlBQVksR0FBRyxLQUFLLGdCQUFMLENBQXNCO0FBQUMsTUFBQSxXQUFXLEVBQUU7QUFBZCxLQUF0QixDQUFyQjtBQUNBLFVBQU0sU0FBUyxHQUFHLEtBQUssZ0JBQUwsQ0FBc0I7QUFBQyxNQUFBLFdBQVcsRUFBRSxPQUFkO0FBQXVCLE1BQUEsT0FBTyxFQUFFLFlBQWhDO0FBQThDLE1BQUEsVUFBVSxFQUFFO0FBQUMsUUFBQSxHQUFHLEVBQUU7QUFBTjtBQUExRCxLQUF0QixDQUFsQjtBQUNBLFVBQU0sU0FBUyxHQUFHLEtBQUssZ0JBQUwsQ0FBc0I7QUFBQyxNQUFBLFdBQVcsRUFBRSxPQUFkO0FBQXVCLE1BQUEsVUFBVSxFQUFFO0FBQUMsUUFBQSxJQUFJLEVBQUUsTUFBUDtBQUFlLFFBQUEsSUFBSSxFQUFFLFdBQXJCO0FBQWtDLFFBQUEsS0FBSyxFQUFFLFdBQVcsQ0FBQztBQUFyRDtBQUFuQyxLQUF0QixDQUFsQjtBQUNBLElBQUEsWUFBWSxDQUFDLFdBQWIsQ0FBeUIsU0FBekI7QUFDQSxJQUFBLFlBQVksQ0FBQyxXQUFiLENBQXlCLFNBQXpCO0FBRUEsVUFBTSxZQUFZLEdBQUcsS0FBSyxnQkFBTCxDQUFzQjtBQUFDLE1BQUEsV0FBVyxFQUFFO0FBQWQsS0FBdEIsQ0FBckI7QUFDQSxVQUFNLFNBQVMsR0FBRyxLQUFLLGdCQUFMLENBQXNCO0FBQUMsTUFBQSxXQUFXLEVBQUUsT0FBZDtBQUF1QixNQUFBLE9BQU8sRUFBRSxZQUFoQztBQUE4QyxNQUFBLFVBQVUsRUFBRTtBQUFDLFFBQUEsR0FBRyxFQUFFO0FBQU47QUFBMUQsS0FBdEIsQ0FBbEI7QUFDQSxVQUFNLFNBQVMsR0FBRyxLQUFLLGdCQUFMLENBQXNCO0FBQUMsTUFBQSxXQUFXLEVBQUUsT0FBZDtBQUF1QixNQUFBLFVBQVUsRUFBRTtBQUFDLFFBQUEsSUFBSSxFQUFFLE1BQVA7QUFBZSxRQUFBLElBQUksRUFBRSxXQUFyQjtBQUFrQyxRQUFBLEtBQUssRUFBRSxXQUFXLENBQUM7QUFBckQ7QUFBbkMsS0FBdEIsQ0FBbEI7QUFDQSxJQUFBLFlBQVksQ0FBQyxXQUFiLENBQXlCLFNBQXpCO0FBQ0EsSUFBQSxZQUFZLENBQUMsV0FBYixDQUF5QixTQUF6QjtBQUVBLFVBQU0sZ0JBQWdCLEdBQUcsS0FBSyxnQkFBTCxDQUFzQjtBQUFDLE1BQUEsV0FBVyxFQUFFO0FBQWQsS0FBdEIsQ0FBekI7QUFDQSxVQUFNLGFBQWEsR0FBRyxLQUFLLGdCQUFMLENBQXNCO0FBQUMsTUFBQSxXQUFXLEVBQUUsT0FBZDtBQUF1QixNQUFBLE9BQU8sRUFBRSxnQkFBaEM7QUFBa0QsTUFBQSxVQUFVLEVBQUU7QUFBQyxRQUFBLEdBQUcsRUFBRTtBQUFOO0FBQTlELEtBQXRCLENBQXRCO0FBQ0EsVUFBTSxhQUFhLEdBQUcsS0FBSyxnQkFBTCxDQUFzQjtBQUFDLE1BQUEsV0FBVyxFQUFFLE9BQWQ7QUFBdUIsTUFBQSxVQUFVLEVBQUU7QUFBQyxRQUFBLElBQUksRUFBRSxNQUFQO0FBQWUsUUFBQSxJQUFJLEVBQUUsZUFBckI7QUFBc0MsUUFBQSxLQUFLLEVBQUUsV0FBVyxDQUFDO0FBQXpEO0FBQW5DLEtBQXRCLENBQXRCO0FBQ0EsSUFBQSxnQkFBZ0IsQ0FBQyxXQUFqQixDQUE2QixhQUE3QjtBQUNBLElBQUEsZ0JBQWdCLENBQUMsV0FBakIsQ0FBNkIsYUFBN0I7QUFFQSxVQUFNLFlBQVksR0FBRyxLQUFLLGdCQUFMLENBQXNCO0FBQUMsTUFBQSxXQUFXLEVBQUUsUUFBZDtBQUF3QixNQUFBLE9BQU8sRUFBRSxRQUFqQztBQUEyQyxNQUFBLFVBQVUsRUFBRTtBQUFDLFFBQUEsSUFBSSxFQUFFLFFBQVA7QUFBaUIsUUFBQSxFQUFFLEVBQUU7QUFBckI7QUFBdkQsS0FBdEIsQ0FBckIsQ0E1QnlDLENBNkJ6Qzs7QUFFQSxJQUFBLGFBQWEsQ0FBQyxXQUFkLENBQTBCLFlBQTFCO0FBQ0EsSUFBQSxhQUFhLENBQUMsV0FBZCxDQUEwQixZQUExQjtBQUNBLElBQUEsYUFBYSxDQUFDLFdBQWQsQ0FBMEIsWUFBMUI7QUFDQSxJQUFBLGFBQWEsQ0FBQyxXQUFkLENBQTBCLGdCQUExQjtBQUNBLElBQUEsYUFBYSxDQUFDLFdBQWQsQ0FBMEIsWUFBMUI7QUFFQSxXQUFPLGFBQVA7QUFDRDs7QUE3R21CLENBQXRCO2VBZ0hlLGE7Ozs7OztBQ2xIZjs7QUFDQTs7QUFDQTs7OztBQUdBO0FBRUEsU0FBUyxTQUFULEdBQXNCO0FBRWxCLE1BQUksUUFBUSxHQUFHLFVBQWY7QUFDQSxNQUFJLFFBQVEsR0FBRyxRQUFmOztBQUVBLHFCQUFVLGFBQVYsQ0FBd0I7QUFFcEIsZUFBWSxPQUZRO0FBR3BCLGlCQUFjLEtBSE07QUFJcEIsaUJBQWM7QUFKTSxHQUF4QixFQU1HLElBTkgsQ0FNUSxXQUFXLElBQUk7QUFFbkIsSUFBQSxXQUFXLENBQUMsT0FBWixDQUFvQixJQUFJLElBQUk7QUFFeEIsVUFBSSxRQUFRLEtBQUssSUFBSSxDQUFDLFFBQWxCLElBQThCLFFBQVEsS0FBSyxJQUFJLENBQUMsUUFBcEQsRUFBOEQ7QUFFMUQsUUFBQSxjQUFjLENBQUMsT0FBZixDQUF1QixRQUF2QixFQUFpQyxJQUFJLENBQUMsRUFBdEM7QUFDSDtBQUNKLEtBTkQ7QUFPSCxHQWZEOztBQWdCQSxNQUFJLE1BQU0sR0FBRyxjQUFjLENBQUMsT0FBZixDQUF1QixRQUF2QixDQUFiO0FBQ0EsRUFBQSxhQUFhLENBQUMsTUFBRCxDQUFiLENBdEJrQixDQXVCbEI7QUFDSDs7QUFFRCxTQUFTOztBQUVULFNBQVMsYUFBVCxDQUF3QixNQUF4QixFQUFnQztBQUM1QixFQUFBLE9BQU8sQ0FBQyxHQUFSLENBQWEsaURBQWdELE1BQU8sRUFBcEU7QUFDSDs7Ozs7Ozs7OztBQ3JDRDs7QUFDQTs7OztBQUVBO0FBQ0E7QUFFQSxNQUFNLGNBQWMsR0FBRztBQUNuQixFQUFBLHFCQUFxQixHQUFHO0FBQ3BCLFVBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFlBQXZCLEVBQXFDLEtBQTFEO0FBQ0EsVUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsWUFBdkIsRUFBcUMsS0FBMUQ7QUFDQSxVQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixZQUF2QixFQUFxQyxLQUExRDtBQUNBLFVBQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDLEtBQWxFO0FBRUEsVUFBTSxXQUFXLEdBQUc7QUFDaEIsTUFBQSxTQUFTLEVBQUUsWUFESztBQUVoQixNQUFBLFNBQVMsRUFBRSxZQUZLO0FBR2hCLE1BQUEsU0FBUyxFQUFFLFlBSEs7QUFJaEIsTUFBQSxhQUFhLEVBQUU7QUFKQyxLQUFwQjs7QUFPQSx1QkFBVSxhQUFWLENBQXdCO0FBQ3BCLE1BQUEsT0FBTyxFQUFFLFFBRFc7QUFFcEIsTUFBQSxTQUFTLEVBQUUsTUFGUztBQUdwQixNQUFBLGNBQWMsRUFBRTtBQUNaLFFBQUEsTUFBTSxFQUFFLGNBQWMsQ0FBQyxPQUFmLENBQXVCLFFBQXZCLENBREk7QUFFWixRQUFBLFNBQVMsRUFBRSxXQUFXLENBQUMsU0FGWDtBQUdaLFFBQUEsU0FBUyxFQUFFLFdBQVcsQ0FBQyxTQUhYO0FBSVosUUFBQSxTQUFTLEVBQUUsV0FBVyxDQUFDLFNBSlg7QUFLWixRQUFBLGFBQWEsRUFBRSxXQUFXLENBQUM7QUFMZjtBQUhJLEtBQXhCLEVBV0MsSUFYRCxDQVdNLGNBQWMsSUFBSTtBQUNwQixzQkFBTyxnQkFBUDtBQUNILEtBYkQ7QUFjSCxHQTVCa0I7O0FBNkJuQixFQUFBLHVCQUF1QixHQUFHO0FBQ3RCLFVBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsRUFBYixDQUFnQixLQUFoQixDQUFzQixJQUF0QixFQUE0QixDQUE1QixDQUFuQjs7QUFDQSx1QkFBVSxhQUFWLENBQXdCO0FBQ3BCLE1BQUEsUUFBUSxFQUFFLFVBRFU7QUFFcEIsTUFBQSxPQUFPLEVBQUUsUUFGVztBQUdwQixNQUFBLFNBQVMsRUFBRSxRQUhTO0FBSXBCLE1BQUEsY0FBYyxFQUFFO0FBQ1osUUFBQSxNQUFNLEVBQUUsY0FBYyxDQUFDLE9BQWYsQ0FBdUIsUUFBdkI7QUFESTtBQUpJLEtBQXhCLEVBUUMsSUFSRCxDQVFNLGNBQWMsSUFBSTtBQUNwQixzQkFBTyxnQkFBUDtBQUNILEtBVkQ7QUFXSDs7QUExQ2tCLENBQXZCO2VBNkNlLGM7Ozs7Ozs7Ozs7O0FDakRmOztBQUNBOztBQUNBOzs7O0FBSkE7QUFNQSxNQUFNLE1BQU0sR0FBRztBQUNiLEVBQUEsYUFBYSxHQUFJO0FBQ2YsVUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjs7QUFDQSxVQUFNLFNBQVMsR0FBRyx1QkFBYyxnQkFBZCxFQUFsQjs7QUFDQSxJQUFBLE1BQU0sQ0FBQyxXQUFQLENBQW1CLFNBQW5CO0FBQ0EsVUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBakI7QUFDQSxJQUFBLFFBQVEsQ0FBQyxZQUFULENBQXNCLElBQXRCLEVBQTRCLFVBQTVCO0FBQ0EsSUFBQSxNQUFNLENBQUMsV0FBUCxDQUFtQixRQUFuQjtBQUNELEdBUlk7O0FBU2IsRUFBQSxnQkFBZ0IsR0FBRztBQUNqQixVQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixXQUF2QixDQUFqQjs7QUFDQSx1QkFBVSxhQUFWLENBQXdCO0FBQ3RCLE1BQUEsT0FBTyxFQUFFLFFBRGE7QUFFdEIsTUFBQSxTQUFTLEVBQUUsS0FGVztBQUd0QixNQUFBLGNBQWMsRUFBRTtBQUNkLFFBQUEsTUFBTSxFQUFFLGNBQWMsQ0FBQyxPQUFmLENBQXVCLFFBQXZCO0FBRE0sT0FITTtBQU10QixNQUFBLFNBQVMsRUFBRTtBQU5XLEtBQXhCLEVBUUMsSUFSRCxDQVFNLGNBQWMsSUFBSTtBQUN0QixVQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsc0JBQVQsRUFBZjtBQUNBLE1BQUEsY0FBYyxDQUFDLE9BQWYsQ0FBdUIsS0FBSyxJQUFJO0FBQzlCLGVBQU8sUUFBUSxDQUFDLFVBQWhCLEVBQTRCO0FBQzFCLFVBQUEsUUFBUSxDQUFDLFdBQVQsQ0FBcUIsUUFBUSxDQUFDLFVBQTlCO0FBQ0Q7O0FBQUE7O0FBQ0QsY0FBTSxTQUFTLEdBQUcsdUJBQWMsZUFBZCxDQUE4QixLQUE5QixDQUFsQjs7QUFDQSxRQUFBLFFBQVEsQ0FBQyxXQUFULENBQXFCLFNBQXJCO0FBQ0QsT0FORDtBQU9BLE1BQUEsUUFBUSxDQUFDLFdBQVQsQ0FBcUIsUUFBckI7QUFDRCxLQWxCRDtBQW1CRCxHQTlCWTs7QUErQmIsRUFBQSxXQUFXLEdBQUc7QUFDWixVQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixZQUF2QixDQUFuQjtBQUNBLElBQUEsVUFBVSxDQUFDLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLHdCQUFlLHFCQUFwRDtBQUNELEdBbENZOztBQW1DYixFQUFBLFNBQVMsR0FBRyxDQUVYOztBQXJDWSxDQUFmO0FBd0NBLE1BQU0sQ0FBQyxhQUFQO0FBQ0EsTUFBTSxDQUFDLGdCQUFQO0FBQ0EsTUFBTSxDQUFDLFdBQVA7ZUFFZSxNOzs7Ozs7Ozs7OztBQ2xEZjs7QUFDQTs7OztBQUVBLE1BQU0sUUFBUSxHQUFHO0FBRWIsRUFBQSxrQkFBa0IsR0FBRztBQUVqQixRQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixRQUF4QixDQUFwQixDQUZpQixDQUlqQjs7QUFDQSxRQUFJLGlCQUFpQixHQUFHLHVCQUFjLGdCQUFkLENBQStCO0FBQ25ELHFCQUFnQixLQURtQztBQUVuRCxrQkFBYSxtQkFGc0M7QUFHbkQsb0JBQWU7QUFDWCxRQUFBLEVBQUUsRUFBRztBQURNO0FBSG9DLEtBQS9CLENBQXhCLENBTGlCLENBWWpCOzs7QUFDQSxRQUFJLFlBQVksR0FBRyx1QkFBYyxnQkFBZCxDQUErQjtBQUM5QyxxQkFBZ0IsT0FEOEI7QUFFOUMsa0JBQWEsY0FGaUM7QUFHOUMsb0JBQWU7QUFDWCxRQUFBLEVBQUUsRUFBRyxjQURNO0FBRVgsUUFBQSxXQUFXLEVBQUU7QUFGRjtBQUgrQixLQUEvQixDQUFuQixDQWJpQixDQW9CakI7OztBQUVBLFFBQUksbUJBQW1CLEdBQUcsdUJBQWMsZ0JBQWQsQ0FBK0I7QUFDckQscUJBQWdCLFFBRHFDO0FBRXJELGtCQUFhLHFCQUZ3QztBQUdyRCxpQkFBWSxRQUh5QztBQUlyRCxvQkFBZTtBQUNYLFFBQUEsRUFBRSxFQUFHO0FBRE07QUFKc0MsS0FBL0IsQ0FBMUI7O0FBUUEsSUFBQSxpQkFBaUIsQ0FBQyxXQUFsQixDQUE4QixZQUE5QjtBQUNBLElBQUEsaUJBQWlCLENBQUMsV0FBbEIsQ0FBOEIsbUJBQTlCO0FBQ0EsSUFBQSxhQUFhLENBQUMsV0FBZCxDQUEwQixpQkFBMUI7QUFFQSxTQUFLLFdBQUw7QUFFSCxHQXRDWTs7QUF3Q2IsRUFBQSxXQUFXLEdBQUc7QUFFVjtBQUNBLHVCQUFVLGFBQVYsQ0FBd0I7QUFFaEIsaUJBQVksVUFGSTtBQUdoQixtQkFBYyxLQUhFO0FBSWhCLG1CQUFjO0FBSkUsS0FBeEIsRUFNRyxJQU5ILENBTVEsY0FBYyxJQUFJO0FBRXRCLFVBQUksZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsbUJBQXhCLENBQXZCO0FBQ0EsVUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBbkI7QUFFQSxNQUFBLGNBQWMsQ0FBQyxPQUFmLENBQXVCLE9BQU8sSUFBSTtBQUM5QixZQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsT0FBMUI7QUFDQSxZQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsSUFBUixDQUFhLFFBQTVCO0FBQ0EsWUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQXhCO0FBRUEsUUFBQSxnQkFBZ0IsQ0FBQyxZQUFqQixDQUE4Qix1QkFBYyxnQkFBZCxDQUErQjtBQUV6RCx5QkFBZ0IsR0FGeUM7QUFHekQsc0JBQWEsU0FINEM7QUFJekQscUJBQWEsR0FBRSxRQUFTLE1BQUssV0FBWTtBQUpnQixTQUEvQixDQUE5QixFQU1JLFlBTko7QUFPSCxPQVpEO0FBYUgsS0F4QkQ7QUF5QkgsR0FwRVk7O0FBc0ViLEVBQUEsY0FBYyxHQUFHLENBRWI7QUFDQTtBQUNBO0FBQ0gsR0EzRVk7O0FBNkViLEVBQUEsV0FBVyxHQUFHLENBRVY7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFuRlksQ0FBakI7ZUF3RmUsUTs7Ozs7Ozs7OztBQzNGZixNQUFNLFNBQVMsR0FBRztBQUVkLEVBQUEsYUFBYSxDQUFDLFdBQUQsRUFBYztBQUV6QixRQUFJLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBMUI7QUFDQSxRQUFJLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBNUI7QUFDQSxRQUFJLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBNUI7QUFDQSxRQUFJLGNBQWMsR0FBRyxXQUFXLENBQUMsY0FBakM7QUFDQSxRQUFJLEtBQUssR0FBRyxXQUFXLENBQUMsS0FBeEI7QUFDQSxRQUFJLFFBQVEsR0FBRyxXQUFXLENBQUMsUUFBM0I7O0FBRUUsUUFBSSxTQUFTLElBQUksS0FBakIsRUFBd0I7QUFFeEIsYUFBTyxLQUFLLENBQUUseUJBQXdCLE9BQVEsR0FBRSxTQUFVLEVBQTlDLENBQUwsQ0FDRixJQURFLENBQ0csUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBRGYsQ0FBUCxDQUZ3QixDQUdlO0FBRXRDLEtBTEQsTUFLTyxJQUFJLFNBQVMsS0FBSyxNQUFsQixFQUF5QjtBQUVoQztBQUNBLGFBQU8sS0FBSyxDQUFFLHlCQUF3QixPQUFRLEVBQWxDLEVBQXFDO0FBQzdDLFFBQUEsTUFBTSxFQUFHLEdBQUUsU0FBVSxFQUR3QjtBQUNyQjtBQUN4QixRQUFBLE9BQU8sRUFBRTtBQUNMLDBCQUFnQixpQ0FEWCxDQUVMOztBQUZLLFNBRm9DO0FBTTdDO0FBQ0EsUUFBQSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQUwsQ0FBZSxjQUFmLENBUHVDLENBT1A7O0FBUE8sT0FBckMsQ0FBWjtBQVVDLEtBYk0sTUFhQSxJQUFHLFNBQVMsS0FBSyxLQUFqQixFQUF1QjtBQUM5QixhQUFPLEtBQUssQ0FBRSx5QkFBd0IsT0FBUSxJQUFHLEtBQU0sRUFBM0MsRUFBOEM7QUFDdEQsUUFBQSxNQUFNLEVBQUcsR0FBRSxTQUFVLEVBRGlDO0FBQzlCO0FBQ3hCLFFBQUEsT0FBTyxFQUFFO0FBQ0wsMEJBQWdCLGlDQURYLENBRUw7O0FBRkssU0FGNkM7QUFNdEQ7QUFDQSxRQUFBLElBQUksRUFBRSxJQUFJLENBQUMsU0FBTCxDQUFlLGNBQWYsQ0FQZ0QsQ0FPaEI7O0FBUGdCLE9BQTlDLENBQVo7QUFTQyxLQVZNLE1BVUEsSUFBSSxTQUFTLEtBQUssUUFBbEIsRUFBNEI7QUFDbkMsYUFBTyxLQUFLLENBQUUseUJBQXdCLE9BQVEsSUFBRyxRQUFTLEVBQTlDLEVBQWlEO0FBQ3pELFFBQUEsTUFBTSxFQUFHLEdBQUUsU0FBVSxFQURvQztBQUNqQztBQUN4QixRQUFBLE9BQU8sRUFBRTtBQUNMLDBCQUFnQixpQ0FEWCxDQUVMOztBQUZLLFNBRmdELENBTXpEOztBQU55RCxPQUFqRCxDQUFaO0FBUUMsS0FUTSxNQVNBO0FBQ0gsTUFBQSxPQUFPLENBQUMsR0FBUixDQUFhLG1CQUFiO0FBQ0g7QUFDSjs7QUFuRGEsQ0FBbEI7ZUFzRGlCLFMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnNcIjtcclxuXHJcbmNvbnN0IGRvbUNvbXBvbmVudHMgPSB7XHJcbiAgY3JlYXRlRG9tRWxlbWVudCh7IGVsZW1lbnRUeXBlLCBjb250ZW50ID0gbnVsbCwgY3NzQ2xhc3MsIGF0dHJpYnV0ZXMgPSB7fSB9KSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XHJcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcclxuXHJcbiAgICBpZiAoY3NzQ2xhc3MpIHtcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBrZXkgaW4gYXR0cmlidXRlcykge1xyXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9LFxyXG4gIGNyZWF0ZUV2ZW50SW5wdXQoKSB7XHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJmb3JtXCIsIGF0dHJpYnVlczoge2NsYXNzOiBcImV2ZW50SW5wdXRcIn19KTtcclxuICAgIGNvbnN0IGZvcm1IZWFkZXIgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImgxXCIsIGNvbnRlbnQ6IFwiQWRkIGEgTmV3IEV2ZW50OlwifSk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1IZWFkZXIpO1xyXG5cclxuICAgIGNvbnN0IG5hbWVGaWVsZHNldCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZmllbGRzZXRcIn0pO1xyXG4gICAgY29uc3QgbmFtZUxhYmVsID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJsYWJlbFwiLCBjb250ZW50OiBcIkV2ZW50IE5hbWU6XCIsIGF0dHJpYnV0ZXM6IHtmb3I6IFwiZXZlbnROYW1lXCJ9fSk7XHJcbiAgICBjb25zdCBuYW1lSW5wdXQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImlucHV0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcInRleHRcIiwgbmFtZTogXCJldmVudE5hbWVcIiwgaWQ6IFwiZXZlbnROYW1lXCJ9fSk7XHJcbiAgICBuYW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcclxuICAgIG5hbWVGaWVsZHNldC5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xyXG5cclxuICAgIGNvbnN0IGRhdGVGaWVsZHNldCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZmllbGRzZXRcIn0pO1xyXG4gICAgY29uc3QgZGF0ZUxhYmVsID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJsYWJlbFwiLCBjb250ZW50OiBcIkV2ZW50IERhdGU6XCIsIGF0dHJpYnV0ZXM6IHtmb3I6IFwiZXZlbnREYXRlXCJ9fSk7XHJcbiAgICBjb25zdCBkYXRlSW5wdXQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImlucHV0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcImRhdGVcIiwgbmFtZTogXCJldmVudERhdGVcIiwgaWQ6IFwiZXZlbnREYXRlXCJ9fSk7XHJcbiAgICBkYXRlRmllbGRzZXQuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcclxuICAgIGRhdGVGaWVsZHNldC5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xyXG5cclxuICAgIGNvbnN0IHRpbWVGaWVsZHNldCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZmllbGRzZXRcIn0pO1xyXG4gICAgY29uc3QgdGltZUxhYmVsID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJsYWJlbFwiLCBjb250ZW50OiBcIkV2ZW50IFRpbWU6XCIsIGF0dHJpYnV0ZXM6IHtmb3I6IFwiZXZlbnRUaW1lXCJ9fSk7XHJcbiAgICBjb25zdCB0aW1lSW5wdXQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImlucHV0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcInRpbWVcIiwgbmFtZTogXCJldmVudFRpbWVcIiwgaWQ6IFwiZXZlbnRUaW1lXCJ9fSk7XHJcbiAgICB0aW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQodGltZUxhYmVsKTtcclxuICAgIHRpbWVGaWVsZHNldC5hcHBlbmRDaGlsZCh0aW1lSW5wdXQpO1xyXG5cclxuICAgIGNvbnN0IGxvY2F0aW9uRmllbGRzZXQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcclxuICAgIGNvbnN0IGxvY2F0aW9uTGFiZWwgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImxhYmVsXCIsIGNvbnRlbnQ6IFwiRW50ZXIgTG9jYXRpb246XCIsIGF0dHJpYnV0ZXM6IHtmb3I6IFwiZXZlbnRMb2NhdGlvblwifX0pO1xyXG4gICAgY29uc3QgbG9jYXRpb25JbnB1dCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiaW5wdXRcIiwgYXR0cmlidXRlczoge3R5cGU6IFwidGV4dFwiLCBuYW1lOiBcImV2ZW50TG9jYXRpb25cIiwgaWQ6IFwiZXZlbnRMb2NhdGlvblwifX0pO1xyXG4gICAgbG9jYXRpb25GaWVsZHNldC5hcHBlbmRDaGlsZChsb2NhdGlvbkxhYmVsKTtcclxuICAgIGxvY2F0aW9uRmllbGRzZXQuYXBwZW5kQ2hpbGQobG9jYXRpb25JbnB1dCk7XHJcblxyXG4gICAgY29uc3Qgc2F2ZUJ1dHRvbiA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsIGNvbnRlbnQ6IFwiU2F2ZVwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJidXR0b25cIiwgaWQ6IFwic2F2ZUV2ZW50XCJ9fSk7XHJcblxyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lRmllbGRzZXQpO1xyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlRmllbGRzZXQpO1xyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lRmllbGRzZXQpO1xyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbkZpZWxkc2V0KTtcclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoc2F2ZUJ1dHRvbik7XHJcblxyXG4gICAgcmV0dXJuIGZvcm1Db250YWluZXI7XHJcbiAgfSxcclxuICBjcmVhdGVFdmVudEl0ZW0gKGV2ZW50T2JqZWN0KSB7XHJcbiAgICBjb25zdCBldmVudEl0ZW0gPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImFydGljbGVcIiwgYXR0cmlidXRlczoge2NsYXNzOiBcImV2ZW50SXRlbVwifX0pO1xyXG4gICAgY29uc3QgZXZlbnRIZWFkZXIgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImgyXCIsIGNvbnRlbnQ6IGV2ZW50T2JqZWN0LmV2ZW50TmFtZX0pO1xyXG4gICAgY29uc3QgZXZlbnREYXRlVGltZSA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwicFwiLCBjb250ZW50OiBgQXQgJHtldmVudE9iamVjdC5ldmVudFRpbWV9IG9uICR7ZXZlbnRPYmplY3QuZXZlbnREYXRlfWB9KTtcclxuICAgIGNvbnN0IGV2ZW50TG9jYXRpb24gPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcInBcIiwgY29udGVudDogYExvY2F0aW9uOiAke2V2ZW50T2JqZWN0LmV2ZW50TG9jYXRpb259YH0pO1xyXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsIGNvbnRlbnQ6IFwiRWRpdFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJidXR0b25cIiwgaWQ6IGBlZGl0RXZlbnQtLSR7ZXZlbnRPYmplY3QuaWR9YH19KTtcclxuICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50TGlzdGVuZXJzLmhhbmRsZUV2ZW50RWRpdEJ1dHRvbik7XHJcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImJ1dHRvblwiLCBjb250ZW50OiBcIkRlbGV0ZVwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJidXR0b25cIiwgaWQ6IGBkZWxldGVFdmVudC0tJHtldmVudE9iamVjdC5pZH1gfX0pO1xyXG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudExpc3RlbmVycy5oYW5kbGVFdmVudERlbGV0ZUJ1dHRvbik7XHJcblxyXG4gICAgZXZlbnRJdGVtLmFwcGVuZENoaWxkKGV2ZW50SGVhZGVyKTtcclxuICAgIGV2ZW50SXRlbS5hcHBlbmRDaGlsZChldmVudERhdGVUaW1lKTtcclxuICAgIGV2ZW50SXRlbS5hcHBlbmRDaGlsZChldmVudExvY2F0aW9uKTtcclxuICAgIGV2ZW50SXRlbS5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcclxuICAgIGV2ZW50SXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xyXG5cclxuICAgIHJldHVybiBldmVudEl0ZW07XHJcbiAgfSxcclxuICBjcmVhdGVFdmVudEVkaXRJbnB1dChldmVudElkLCBldmVudE9iamVjdCkge1xyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZm9ybVwiLCBhdHRyaWJ1ZXM6IHtjbGFzczogXCJldmVudEVkaXRcIn19KTtcclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUhlYWRlcik7XHJcblxyXG4gICAgY29uc3QgbmFtZUZpZWxkc2V0ID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJmaWVsZHNldFwifSk7XHJcbiAgICBjb25zdCBuYW1lTGFiZWwgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImxhYmVsXCIsIGNvbnRlbnQ6IFwiRWRpdCBOYW1lOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50TmFtZVwifX0pO1xyXG4gICAgY29uc3QgbmFtZUlucHV0ID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwiZXZlbnROYW1lXCIsIHZhbHVlOiBldmVudE9iamVjdC5ldmVudE5hbWV9fSk7XHJcbiAgICBuYW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcclxuICAgIG5hbWVGaWVsZHNldC5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xyXG5cclxuICAgIGNvbnN0IGRhdGVGaWVsZHNldCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZmllbGRzZXRcIn0pO1xyXG4gICAgY29uc3QgZGF0ZUxhYmVsID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJsYWJlbFwiLCBjb250ZW50OiBcIkVkaXQgRGF0ZTpcIiwgYXR0cmlidXRlczoge2ZvcjogXCJldmVudERhdGVcIn19KTtcclxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiaW5wdXRcIiwgYXR0cmlidXRlczoge3R5cGU6IFwiZGF0ZVwiLCBuYW1lOiBcImV2ZW50RGF0ZVwiLCB2YWx1ZTogZXZlbnRPYmplY3QuZXZlbnREYXRlfX0pO1xyXG4gICAgZGF0ZUZpZWxkc2V0LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XHJcbiAgICBkYXRlRmllbGRzZXQuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcclxuXHJcbiAgICBjb25zdCB0aW1lRmllbGRzZXQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcclxuICAgIGNvbnN0IHRpbWVMYWJlbCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFZGl0IFRpbWU6XCIsIGF0dHJpYnV0ZXM6IHtmb3I6IFwiZXZlbnRUaW1lXCJ9fSk7XHJcbiAgICBjb25zdCB0aW1lSW5wdXQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImlucHV0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcInRpbWVcIiwgbmFtZTogXCJldmVudFRpbWVcIiwgdmFsdWU6IGV2ZW50T2JqZWN0LmV2ZW50VGltZX19KTtcclxuICAgIHRpbWVGaWVsZHNldC5hcHBlbmRDaGlsZCh0aW1lTGFiZWwpO1xyXG4gICAgdGltZUZpZWxkc2V0LmFwcGVuZENoaWxkKHRpbWVJbnB1dCk7XHJcblxyXG4gICAgY29uc3QgbG9jYXRpb25GaWVsZHNldCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZmllbGRzZXRcIn0pO1xyXG4gICAgY29uc3QgbG9jYXRpb25MYWJlbCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFZGl0IExvY2F0aW9uOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50TG9jYXRpb25cIn19KTtcclxuICAgIGNvbnN0IGxvY2F0aW9uSW5wdXQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImlucHV0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcInRleHRcIiwgbmFtZTogXCJldmVudExvY2F0aW9uXCIsIHZhbHVlOiBldmVudE9iamVjdC5ldmVudExvY2F0aW9ufX0pO1xyXG4gICAgbG9jYXRpb25GaWVsZHNldC5hcHBlbmRDaGlsZChsb2NhdGlvbkxhYmVsKTtcclxuICAgIGxvY2F0aW9uRmllbGRzZXQuYXBwZW5kQ2hpbGQobG9jYXRpb25JbnB1dCk7XHJcblxyXG4gICAgY29uc3QgdXBkYXRlQnV0dG9uID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJidXR0b25cIiwgY29udGVudDogXCJVcGRhdGVcIiwgYXR0cmlidXRlczoge3R5cGU6IFwiYnV0dG9uXCIsIGlkOiBcInN1Ym1pdEVkaXRzXCJ9fSk7XHJcbiAgICAvLyB1cGRhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50TGlzdGVuZXJzLmhhbmRsZUV2ZW50RGVsZXRlQnV0dG9uKTtcclxuXHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVGaWVsZHNldCk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVGaWVsZHNldCk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVGaWVsZHNldCk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uRmllbGRzZXQpO1xyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG5cclxuICAgIHJldHVybiBmb3JtQ29udGFpbmVyO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZG9tQ29tcG9uZW50cyIsImltcG9ydCBldmVudHMgZnJvbSBcIi4vZXZlbnRzXCI7XHJcbmltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XHJcbmltcG9ydCBtZXNzYWdlcyBmcm9tIFwiLi9tZXNzYWdlc1wiO1xyXG5cclxuXHJcbi8vIG1lc3NhZ2VzLmNyZWF0ZU1lc3NhZ2VCb2FyZCgpO1xyXG5cclxuZnVuY3Rpb24gdXNlckxvZ2luICgpIHtcclxuXHJcbiAgICBsZXQgdXNlck5hbWUgPSBcIkhlcm5hbmRvXCI7XHJcbiAgICBsZXQgcGFzc3dvcmQgPSBcInlvbWFtYVwiO1xyXG5cclxuICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuXHJcbiAgICAgICAgXCJkYXRhU2V0XCIgOiBcInVzZXJzXCIsXHJcbiAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXHJcbiAgICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1ldmVudHNcIlxyXG5cclxuICAgIH0pLnRoZW4ocGFyc2VkVXNlcnMgPT4ge1xyXG5cclxuICAgICAgICBwYXJzZWRVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKHVzZXJOYW1lID09PSB1c2VyLnVzZXJOYW1lICYmIHBhc3N3b3JkID09PSB1c2VyLnBhc3N3b3JkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndXNlcklkJywgdXNlci5pZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIGxldCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcclxuICAgIGxvYWREYXNoYm9hcmQodXNlcklkKVxyXG4gICAgLy8gY29uc29sZS5sb2coXCJVc2VySWQgPSBcIiwgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJykpXHJcbn1cclxuXHJcbnVzZXJMb2dpbigpO1xyXG5cclxuZnVuY3Rpb24gbG9hZERhc2hib2FyZCAodXNlcklkKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgVGhhbmtzIGZvciBwYXNzaW5nIHRoZSB1c2VySWQuICBUaGUgdXNlcklkIGlzICR7dXNlcklkfWApXHJcbn0iLCJpbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xyXG5pbXBvcnQgZXZlbnRzIGZyb20gXCIuL2V2ZW50c1wiO1xyXG5cclxuLy8gbGV0IHRoaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldmVudE5hbWVcIikudmFsdWU7XHJcbi8vIGNvbnNvbGUubG9nKHRoaW5nKTtcclxuXHJcbmNvbnN0IGV2ZW50TGlzdGVuZXJzID0ge1xyXG4gICAgaGFuZGxlRXZlbnRTYXZlQnV0dG9uKCkge1xyXG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dHRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnROYW1lXCIpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dHRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnREYXRlXCIpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRpbWVJbnB1dHRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnRUaW1lXCIpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uSW5wdXR0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V2ZW50TG9jYXRpb25cIikudmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnN0IGV2ZW50T2JqZWN0ID0ge1xyXG4gICAgICAgICAgICBldmVudE5hbWU6IG5hbWVJbnB1dHRlZCxcclxuICAgICAgICAgICAgZXZlbnREYXRlOiBkYXRlSW5wdXR0ZWQsXHJcbiAgICAgICAgICAgIGV2ZW50VGltZTogdGltZUlucHV0dGVkLFxyXG4gICAgICAgICAgICBldmVudExvY2F0aW9uOiBsb2NhdGlvbklucHV0dGVkXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xyXG4gICAgICAgICAgICBkYXRhU2V0OiBcImV2ZW50c1wiLFxyXG4gICAgICAgICAgICBmZXRjaFR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBkYXRhQmFzZU9iamVjdDoge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpLFxyXG4gICAgICAgICAgICAgICAgZXZlbnROYW1lOiBldmVudE9iamVjdC5ldmVudE5hbWUsXHJcbiAgICAgICAgICAgICAgICBldmVudERhdGU6IGV2ZW50T2JqZWN0LmV2ZW50RGF0ZSxcclxuICAgICAgICAgICAgICAgIGV2ZW50VGltZTogZXZlbnRPYmplY3QuZXZlbnRUaW1lLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRMb2NhdGlvbjogZXZlbnRPYmplY3QuZXZlbnRMb2NhdGlvblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihwYXJzZWRSZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50cy5hcHBlbmRVc2VyRXZlbnRzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlRXZlbnREZWxldGVCdXR0b24oKSB7XHJcbiAgICAgICAgY29uc3QgaWRUb0RlbGV0ZSA9IGV2ZW50LnRhcmdldC5pZC5zcGxpdChcIi0tXCIpWzFdO1xyXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuICAgICAgICAgICAgZGVsZXRlSWQ6IGlkVG9EZWxldGUsXHJcbiAgICAgICAgICAgIGRhdGFTZXQ6IFwiZXZlbnRzXCIsXHJcbiAgICAgICAgICAgIGZldGNoVHlwZTogXCJERUxFVEVcIixcclxuICAgICAgICAgICAgZGF0YUJhc2VPYmplY3Q6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihwYXJzZWRSZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50cy5hcHBlbmRVc2VyRXZlbnRzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBldmVudExpc3RlbmVycyIsIi8vIEF1dGhvcjogQ29sZSBCcnlhbnQgLyBQdXJwb3NlOlxyXG5cclxuaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcclxuaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xyXG5pbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnNcIjtcclxuXHJcbmNvbnN0IGV2ZW50cyA9IHtcclxuICBzaG93RXZlbnRGb3JtICgpIHtcclxuICAgIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3V0cHV0XCIpO1xyXG4gICAgY29uc3QgZXZlbnRGb3JtID0gZG9tQ29tcG9uZW50cy5jcmVhdGVFdmVudElucHV0KCk7XHJcbiAgICBvdXRwdXQuYXBwZW5kQ2hpbGQoZXZlbnRGb3JtKTtcclxuICAgIGNvbnN0IGV2ZW50TG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIilcclxuICAgIGV2ZW50TG9nLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZXZlbnRMb2dcIik7XHJcbiAgICBvdXRwdXQuYXBwZW5kQ2hpbGQoZXZlbnRMb2cpO1xyXG4gIH0sXHJcbiAgYXBwZW5kVXNlckV2ZW50cygpIHtcclxuICAgIGNvbnN0IGV2ZW50TG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldmVudExvZ1wiKTtcclxuICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuICAgICAgZGF0YVNldDogXCJldmVudHNcIixcclxuICAgICAgZmV0Y2hUeXBlOiBcIkdFVFwiLFxyXG4gICAgICBkYXRhQmFzZU9iamVjdDoge1xyXG4gICAgICAgIHVzZXJJZDogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKVxyXG4gICAgICAgIH0sXHJcbiAgICAgIGVtYmVkSXRlbTogXCI/X2VtYmVkPWV2ZW50c1wiXHJcbiAgICB9KVxyXG4gICAgLnRoZW4ocGFyc2VkUmVzcG9uc2UgPT4ge1xyXG4gICAgICBsZXQgZG9jdUZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgIHBhcnNlZFJlc3BvbnNlLmZvckVhY2goZXZlbnQgPT4ge1xyXG4gICAgICAgIHdoaWxlIChldmVudExvZy5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICBldmVudExvZy5yZW1vdmVDaGlsZChldmVudExvZy5maXJzdENoaWxkKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgZXZlbnRJdGVtID0gZG9tQ29tcG9uZW50cy5jcmVhdGVFdmVudEl0ZW0oZXZlbnQpO1xyXG4gICAgICAgIGRvY3VGcmFnLmFwcGVuZENoaWxkKGV2ZW50SXRlbSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBldmVudExvZy5hcHBlbmRDaGlsZChkb2N1RnJhZyk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGRlbGV0ZUV2ZW50KCkge1xyXG4gICAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2F2ZUV2ZW50XCIpO1xyXG4gICAgc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnRMaXN0ZW5lcnMuaGFuZGxlRXZlbnRTYXZlQnV0dG9uKTtcclxuICB9LFxyXG4gIGVkaXRFdmVudCgpIHtcclxuXHJcbiAgfVxyXG59O1xyXG5cclxuZXZlbnRzLnNob3dFdmVudEZvcm0oKTtcclxuZXZlbnRzLmFwcGVuZFVzZXJFdmVudHMoKTtcclxuZXZlbnRzLmRlbGV0ZUV2ZW50KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBldmVudHM7IiwiaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcclxuaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgbWVzc2FnZXMgPSB7XHJcblxyXG4gICAgY3JlYXRlTWVzc2FnZUJvYXJkKCkge1xyXG5cclxuICAgICAgICBsZXQgb3V0cHV0QXJ0aWNsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpXHJcblxyXG4gICAgICAgIC8vY3JlYXRlIGRpc3BsYXkgY29udGFpbmVyXHJcbiAgICAgICAgbGV0IG1lc3NhZ2VzQ29udGFpbmVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiIDogXCJkaXZcIixcclxuICAgICAgICAgICAgXCJjc3NDbGFzc1wiIDogXCJtZXNzYWdlc0NvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICBcImF0dHJpYnV0ZXNcIiA6IHtcclxuICAgICAgICAgICAgICAgIGlkIDogXCJtZXNzYWdlc0NvbnRhaW5lclwiXHJcbiAgICAgICAgICAgIH19KTtcclxuXHJcbiAgICAgICAgLy9jcmVhdGUgbWVzc2FnZSBpbnB1dCBmaWVsZFxyXG4gICAgICAgIGxldCBtZXNzYWdlSW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCIgOiBcImlucHV0XCIsXHJcbiAgICAgICAgICAgIFwiY3NzQ2xhc3NcIiA6IFwibWVzc2FnZUlucHV0XCIsXHJcbiAgICAgICAgICAgIFwiYXR0cmlidXRlc1wiIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBcIm1lc3NhZ2VJbnB1dFwiLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgTWVzc2FnZSBIZXJlXCJcclxuICAgICAgICAgICAgfX0pO1xyXG4gICAgICAgIC8vY3JlYXRlIHN1Ym1pdCBidXR0b24gZm9yIGlucHV0IGZpZWxkXHJcblxyXG4gICAgICAgIGxldCBtZXNzYWdlU3VibWl0QnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiIDogXCJidXR0b25cIixcclxuICAgICAgICAgICAgXCJjc3NDbGFzc1wiIDogXCJtZXNzYWdlU3VibWl0QnV0dG9uXCIsXHJcbiAgICAgICAgICAgIFwiY29udGVudFwiIDogXCJTdWJtaXRcIixcclxuICAgICAgICAgICAgXCJhdHRyaWJ1dGVzXCIgOiB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IFwibWVzc2FnZVN1Ym1pdEJ1dHRvblwiXHJcbiAgICAgICAgICAgIH19KTtcclxuXHJcbiAgICAgICAgbWVzc2FnZXNDb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZUlucHV0KTtcclxuICAgICAgICBtZXNzYWdlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlU3VibWl0QnV0dG9uKTtcclxuICAgICAgICBvdXRwdXRBcnRpY2xlLmFwcGVuZENoaWxkKG1lc3NhZ2VzQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRNZXNzYWdlcygpXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBnZXRNZXNzYWdlcygpIHtcclxuXHJcbiAgICAgICAgLy9HRVQgZmV0Y2ggJiAudGhlbiB0byBidWlsZCBvYmplY3QocykgZm9yIGNyZWF0ZURvbUVsZW1lbnQoKSB1c2luZyBfZXhwYW5kIHRvIGRpc3BsYXkgVU46IG1lc3NhZ2VcclxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XHJcblxyXG4gICAgICAgICAgICAgICAgXCJkYXRhU2V0XCIgOiBcIm1lc3NhZ2VzXCIsXHJcbiAgICAgICAgICAgICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZXhwYW5kPXVzZXJcIlxyXG5cclxuICAgICAgICB9KS50aGVuKHBhcnNlZE1lc3NhZ2VzID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBtZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlc0NvbnRhaW5lclwiKTtcclxuICAgICAgICAgICAgbGV0IG1lc3NhZ2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZUlucHV0XCIpO1xyXG5cclxuICAgICAgICAgICAgcGFyc2VkTWVzc2FnZXMuZm9yRWFjaChtZXNzYWdlID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlVGV4dCA9IG1lc3NhZ2UubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIGxldCB1c2VyTmFtZSA9IG1lc3NhZ2UudXNlci51c2VyTmFtZTtcclxuICAgICAgICAgICAgICAgIGxldCB0aW1lU3RhbXAgPSBtZXNzYWdlLnRpbWVTdGFtcDtcclxuXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlQ29udGFpbmVyLmluc2VydEJlZm9yZShkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCIgOiBcInBcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNzc0NsYXNzXCIgOiBcIm1lc3NhZ2VcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIiA6IGAke3VzZXJOYW1lfTogICR7bWVzc2FnZVRleHR9YFxyXG5cclxuICAgICAgICAgICAgICAgIH0pLCBtZXNzYWdlSW5wdXQpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIHBvc3ROZXdNZXNzYWdlKCkge1xyXG5cclxuICAgICAgICAvL2NhbGxlZCBieSBldmVudExpc3RlbmVyIG9uIHN1Ym1pdCBidXR0b25cclxuICAgICAgICAvL3BlcmZvcm0gUE9TVCBmZXRjaFxyXG4gICAgICAgIC8vY2FsbCBkb21SZWZyZXNoIGZ1bmN0aW9uXHJcbiAgICB9LFxyXG5cclxuICAgIGVkaXRNZXNzYWdlKCkge1xyXG5cclxuICAgICAgICAvL2JyaW5nIHVwIG1lc3NhZ2UgaW4gYSBwcmVwb3B1bGF0ZWQgZm9ybVxyXG4gICAgICAgIC8vZm9yIGNvbnRhaW5zIGEgc3VibWl0IGJ1dHRvbiAoc2FtZSBvbmUgYXMgaW4gcG9zdE5ld01lc3NhZ2UoKT8pXHJcbiAgICAgICAgLy9hbGxvdyBlZGl0c1xyXG4gICAgICAgIC8vZG8gUFVUIGZldGNoXHJcbiAgICB9LFxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lc3NhZ2VzOyIsImNvbnN0IG5vbWFkRGF0YSA9IHtcclxuXHJcbiAgICBjb25uZWN0VG9EYXRhKGZldGNoT2JqZWN0KSB7XHJcblxyXG4gICAgICBsZXQgZGF0YVNldCA9IGZldGNoT2JqZWN0LmRhdGFTZXQ7XHJcbiAgICAgIGxldCBlbWJlZEl0ZW0gPSBmZXRjaE9iamVjdC5lbWJlZEl0ZW07XHJcbiAgICAgIGxldCBmZXRjaFR5cGUgPSBmZXRjaE9iamVjdC5mZXRjaFR5cGU7XHJcbiAgICAgIGxldCBkYXRhQmFzZU9iamVjdCA9IGZldGNoT2JqZWN0LmRhdGFCYXNlT2JqZWN0O1xyXG4gICAgICBsZXQgcHV0SWQgPSBmZXRjaE9iamVjdC5wdXRJZDtcclxuICAgICAgbGV0IGRlbGV0ZUlkID0gZmV0Y2hPYmplY3QuZGVsZXRlSWQ7XHJcblxyXG4gICAgICAgIGlmIChmZXRjaFR5cGUgPT0gXCJHRVRcIikge1xyXG5cclxuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC8ke2RhdGFTZXR9JHtlbWJlZEl0ZW19YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKSAvLyBwYXJzZXMgcmVzcG9uc2UgdG8gSlNPTlxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGZldGNoVHlwZSA9PT0gXCJQT1NUXCIpe1xyXG5cclxuICAgICAgICAvLyBEZWZhdWx0IG9wdGlvbnMgYXJlIG1hcmtlZCB3aXRoICpcclxuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC8ke2RhdGFTZXR9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IGAke2ZldGNoVHlwZX1gLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjLlxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgICAgIC8vIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIHJlZmVycmVyOiBcIm5vLXJlZmVycmVyXCIsIC8vIG5vLXJlZmVycmVyLCAqY2xpZW50XHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGFCYXNlT2JqZWN0KSwgLy8gYm9keSBkYXRhIHR5cGUgbXVzdCBtYXRjaCBcIkNvbnRlbnQtVHlwZVwiIGhlYWRlclxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIH0gZWxzZSBpZihmZXRjaFR5cGUgPT09IFwiUFVUXCIpe1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4LyR7ZGF0YVNldH0vJHtwdXRJZH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogYCR7ZmV0Y2hUeXBlfWAsIC8vICpHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBldGMuXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICAgICAgLy8gXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gcmVmZXJyZXI6IFwibm8tcmVmZXJyZXJcIiwgLy8gbm8tcmVmZXJyZXIsICpjbGllbnRcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YUJhc2VPYmplY3QpLCAvLyBib2R5IGRhdGEgdHlwZSBtdXN0IG1hdGNoIFwiQ29udGVudC1UeXBlXCIgaGVhZGVyXHJcbiAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2UgaWYgKGZldGNoVHlwZSA9PT0gXCJERUxFVEVcIikge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4LyR7ZGF0YVNldH0vJHtkZWxldGVJZH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogYCR7ZmV0Y2hUeXBlfWAsIC8vICpHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBldGMuXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICAgICAgLy8gXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gcmVmZXJyZXI6IFwibm8tcmVmZXJyZXJcIiwgLy8gbm8tcmVmZXJyZXIsICpjbGllbnRcclxuICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nIChcIllPVSBTQ1JFV0VEIElUIFVQXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgbm9tYWREYXRhIl19
