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

  createEventEditInput(containerId, eventObject) {
    const formContainer = this.createDomElement({
      elementType: "form",
      attribues: {
        class: "eventEdit"
      }
    });
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
    }); // updateButton.addEventListener("click", eventListeners.handleEventUpdateButton);

    formContainer.appendChild(nameFieldset);
    formContainer.appendChild(dateFieldset);
    formContainer.appendChild(timeFieldset);
    formContainer.appendChild(locationFieldset);
    formContainer.appendChild(submitButton);
    let currentContainer = document.querySelector(`#${containerId}`);

    while (currentContainer.firstChild) {
      currentContainer.removeChild(currentContainer.firstChild);
    }

    ;
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

var _tasks = _interopRequireDefault(require("./tasks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// messages.createMessageBoard();
_tasks.default.createTaskList();

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

},{"./events":4,"./messages":5,"./nomadData":6,"./tasks":7}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _domComponents = _interopRequireDefault(require("./domComponents"));

var _events = _interopRequireDefault(require("./events"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    }).then(() => {
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
    }).then(() => {
      _events.default.appendUserEvents();
    });
  },

  handleEventEditButton() {
    const idToEdit = event.target.id.split("--")[1];

    const eventObject = _domComponents.default.createEventEditInput(idToEdit);
  },

  handleEventUpdateButton() {},

  postNewMessage() {
    let messageInput = document.getElementById("messageInput");
    let timeStamp = new Date();

    _nomadData.default.connectToData({
      dataSet: "messages",
      fetchType: "POST",
      dataBaseObject: {
        userId: sessionStorage.getItem('userId'),
        message: messageInput.value,
        timeStamp: timeStamp
      }
    });

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

    let messageEditForm = _domComponents.default.createDomElement({
      elementType: "form",
      cssClass: "messageEditForm",
      attributes: {
        id: "messageEditForm"
      }
    });

    let messageEditFieldset = _domComponents.default.createDomElement({
      elementType: "fieldset",
      cssClass: "messageEditFieldset",
      attributes: {
        id: "messageEditFieldset"
      }
    });

    let messageEditInput = _domComponents.default.createDomElement({
      elementType: "input",
      cssClass: "messageEditInput",
      attributes: {
        id: `messageEditInput_${messageId}`,
        value: `${messageText}`
      }
    });

    let messageEditSubmitButton = _domComponents.default.createDomElement({
      elementType: "button",
      cssClass: "messageEditSubmitButton",
      content: "Submit",
      attributes: {
        id: `messageEditSubmitButton_${messageId}`,
        name: messageTimeStamp
      }
    });

    messageEditSubmitButton.addEventListener("click", eventListeners.handleEditSubmitButton);
    messageEditFieldset.appendChild(messageEditInput);
    messageEditFieldset.appendChild(messageEditSubmitButton);
    messageEditForm.appendChild(messageEditFieldset);
    messageContainer.appendChild(messageEditForm);
  },

  handleEditSubmitButton() {
    let number = event.currentTarget.id;
    let messageArray = number.split("_");
    let messageId = messageArray[1];
    let messageTimeStamp = `${event.currentTarget.name}`;
    let messageEditInput = document.getElementById(`messageEditInput_${messageId}`);

    _nomadData.default.connectToData({
      putId: messageId,
      dataSet: "messages",
      fetchType: "PUT",
      dataBaseObject: {
        userId: Number(sessionStorage.getItem("userId")),
        message: `${messageEditInput.value}`,
        timeStamp: `${messageTimeStamp}`
      }
    });
  }

};
var _default = eventListeners;
exports.default = _default;

},{"./domComponents":1,"./events":4,"./nomadData":6}],4:[function(require,module,exports){
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
  }

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

var _eventListeners = _interopRequireDefault(require("./eventListeners"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const messages = {
  createMessageBoard() {
    let outputArticle = document.getElementById("output"); //create display container

    let messagesContainer = _domComponents.default.createDomElement({
      elementType: "section",
      cssClass: "messagesContainer",
      attributes: {
        id: "messagesContainer"
      }
    }); //create message input field


    let messageInput = _domComponents.default.createDomElement({
      elementType: "input",
      cssClass: "messageInput",
      attributes: {
        id: "messageInput",
        placeholder: "Enter Message Here"
      }
    }); //create submit button for input field


    let messageSubmitButton = _domComponents.default.createDomElement({
      elementType: "button",
      cssClass: "messageSubmitButton",
      content: "Submit",
      attributes: {
        id: "messageSubmitButton"
      }
    });

    messageSubmitButton.addEventListener("click", _eventListeners.default.postNewMessage);
    messagesContainer.appendChild(messageInput);
    messagesContainer.appendChild(messageSubmitButton);
    outputArticle.appendChild(messagesContainer);
    this.getMessages();
  },

  getMessages() {
    //GET fetch & .then to build object(s) for createDomElement() using _expand to display UN: message
    _nomadData.default.connectToData({
      dataSet: "messages",
      fetchType: "GET",
      embedItem: "?_expand=user"
    }).then(messages => {
      let messageContainer = document.getElementById("messagesContainer");
      let messageInput = document.getElementById("messageInput"); //sort messages by timeStamp

      messages.sort(function (a, b) {
        return new Date(a.timeStamp) - new Date(b.timeStamp);
      }); //build DOM Component for each message and append

      messages.forEach(message => {
        let messageText = message.message;
        let userName = message.user.userName;
        let messageId = message.id;
        let messageTimeStamp = message.timeStamp;
        let messageUser = `${message.userId}`;
        let loggedInUser = sessionStorage.getItem('userId');

        let messageElement = _domComponents.default.createDomElement({
          elementType: "h3",
          cssClass: "messageUserName",
          content: `${userName}:`,
          attributes: {
            id: `message${messageId}`
          }
        });

        let messageElement2 = _domComponents.default.createDomElement({
          elementType: "p",
          cssClass: "messageText",
          content: `${messageText}`,
          attributes: {
            id: messageId
          }
        });

        if (messageUser === loggedInUser) {
          let messageEditButton = _domComponents.default.createDomElement({
            elementType: "button",
            cssClass: "messageEditButton",
            content: "Edit",
            attributes: {
              id: `messageEditButton_${messageId}`,
              name: messageTimeStamp
            }
          });

          messageEditButton.addEventListener("click", _eventListeners.default.editMessage, {
            once: true
          });
          messageElement.appendChild(messageElement2);
          messageElement.appendChild(messageEditButton);
          messageContainer.insertBefore(messageElement, messageInput);
        } else {
          messageElement.appendChild(messageElement2);
          messageContainer.insertBefore(messageElement, messageInput);
        }
      });
    });
  }

};
var _default = messages;
exports.default = _default;

},{"./domComponents":1,"./eventListeners":3,"./nomadData":6}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _domComponents = _interopRequireDefault(require("./domComponents"));

var _eventListeners = _interopRequireDefault(require("./eventListeners"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const tasks = {
  createTaskList() {
    let outputArticle = document.getElementById("output"); //create display container

    let tasksContainer = _domComponents.default.createDomElement({
      elementType: "section",
      cssClass: "tasksContainer",
      attributes: {
        id: "tasksContainer"
      }
    });

    _nomadData.default.connectToData({
      dataSet: "tasks",
      fetchType: "GET",
      embedItem: "?_embed=users"
    }).then(tasks => {
      tasks.forEach(task => {
        // create the task label
        let taskLabel = _domComponents.default.createDomElement({
          elementType: "label",
          cssClass: "taskLabel",
          attributes: {
            id: `taskLabel_${task.id}`
          }
        }); //create task title


        let taskTitle = document.createTextNode(`${task.task}`); //create task checkbox

        let taskCheckbox = _domComponents.default.createDomElement({
          elementType: "input",
          cssClass: "taskCheckbox",
          attributes: {
            id: `taskCheckbox_${task.id}`,
            type: "checkbox",
            value: `${task.task}`
          }
        }); //append all elements, this order is necessary to have the checkbox to the left of the title


        tasksContainer.appendChild(taskLabel);
        taskLabel.appendChild(taskCheckbox);
        taskLabel.appendChild(taskTitle);
      });
    });

    outputArticle.appendChild(tasksContainer); // this.getTasks()
  }

};
var _default = tasks;
exports.default = _default;

},{"./domComponents":1,"./eventListeners":3,"./nomadData":6}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RvbUNvbXBvbmVudHMuanMiLCIuLi9zY3JpcHRzL2RvbVJlbmRlcmVyLmpzIiwiLi4vc2NyaXB0cy9ldmVudExpc3RlbmVycy5qcyIsIi4uL3NjcmlwdHMvZXZlbnRzLmpzIiwiLi4vc2NyaXB0cy9tZXNzYWdlcy5qcyIsIi4uL3NjcmlwdHMvbm9tYWREYXRhLmpzIiwiLi4vc2NyaXB0cy90YXNrcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNBQTs7OztBQUVBLE1BQU0sYUFBYSxHQUFHO0FBQ3BCLEVBQUEsZ0JBQWdCLENBQUM7QUFBRSxJQUFBLFdBQUY7QUFBZSxJQUFBLE9BQU8sR0FBRyxJQUF6QjtBQUErQixJQUFBLFFBQS9CO0FBQXlDLElBQUEsVUFBVSxHQUFHO0FBQXRELEdBQUQsRUFBNkQ7QUFDM0UsVUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBaEI7QUFDQSxJQUFBLE9BQU8sQ0FBQyxXQUFSLEdBQXNCLE9BQXRCOztBQUVBLFFBQUksUUFBSixFQUFjO0FBQ1osTUFBQSxPQUFPLENBQUMsU0FBUixDQUFrQixHQUFsQixDQUFzQixRQUF0QjtBQUNEOztBQUVELFNBQUssSUFBSSxHQUFULElBQWdCLFVBQWhCLEVBQTRCO0FBQzFCLE1BQUEsT0FBTyxDQUFDLFlBQVIsQ0FBcUIsR0FBckIsRUFBMEIsVUFBVSxDQUFDLEdBQUQsQ0FBcEM7QUFDRDs7QUFDRCxXQUFPLE9BQVA7QUFDRCxHQWJtQjs7QUFjcEIsRUFBQSxnQkFBZ0IsR0FBRztBQUNqQixVQUFNLGFBQWEsR0FBRyxLQUFLLGdCQUFMLENBQXNCO0FBQUMsTUFBQSxXQUFXLEVBQUUsTUFBZDtBQUFzQixNQUFBLFNBQVMsRUFBRTtBQUFDLFFBQUEsS0FBSyxFQUFFO0FBQVI7QUFBakMsS0FBdEIsQ0FBdEI7QUFDQSxVQUFNLFVBQVUs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SUFOSCxDQU1RLEtBQUssSUFBSTtBQUViLE1BQUEsS0FBSyxDQUFDLE9BQU4sQ0FBYyxJQUFJLElBQUk7QUFFbEI7QUFDQSxZQUFJLFNBQVMsR0FBRyx1QkFBYyxnQkFBZCxDQUErQjtBQUMzQyxVQUFBLFdBQVcsRUFBRyxPQUQ2QjtBQUUzQyxVQUFBLFFBQVEsRUFBRyxXQUZnQztBQUczQyxVQUFBLFVBQVUsRUFBRztBQUNULFlBQUEsRUFBRSxFQUFJLGFBQVksSUFBSSxDQUFDLEVBQUc7QUFEakI7QUFIOEIsU0FBL0IsQ0FBaEIsQ0FIa0IsQ0FVbEI7OztBQUNBLFlBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXlCLEdBQUUsSUFBSSxDQUFDLElBQUssRUFBckMsQ0FBaEIsQ0FYa0IsQ0FhbEI7O0FBQ0EsWUFBSSxZQUFZLEdBQUcsdUJBQWMsZ0JBQWQsQ0FBK0I7QUFDOUMsVUFBQSxXQUFXLEVBQUcsT0FEZ0M7QUFFOUMsVUFBQSxRQUFRLEVBQUcsY0FGbUM7QUFHOUMsVUFBQSxVQUFVLEVBQUc7QUFDVCxZQUFBLEVBQUUsRUFBSSxnQkFBZSxJQUFJLENBQUMsRUFBRyxFQURwQjtBQUVULFlBQUEsSUFBSSxFQUFHLFVBRkU7QUFHVCxZQUFBLEtBQUssRUFBSSxHQUFFLElBQUksQ0FBQyxJQUFLO0FBSFo7QUFIaUMsU0FBL0IsQ0FBbkIsQ0Fka0IsQ0F3QmxCOzs7QUFDQSxRQUFBLGNBQWMsQ0FBQyxXQUFmLENBQTJCLFNBQTNCO0FBQ0EsUUFBQSxTQUFTLENBQUMsV0FBVixDQUFzQixZQUF0QjtBQUNBLFFBQUEsU0FBUyxDQUFDLFdBQVYsQ0FBc0IsU0FBdEI7QUFDSCxPQTVCRDtBQTZCSCxLQXJDRDs7QUF1Q0EsSUFBQSxhQUFhLENBQUMsV0FBZCxDQUEwQixjQUExQixFQW5EYSxDQXFEYjtBQUNIOztBQXhEUyxDQUFkO2VBa0llLEsiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnNcIjtcblxuY29uc3QgZG9tQ29tcG9uZW50cyA9IHtcbiAgY3JlYXRlRG9tRWxlbWVudCh7IGVsZW1lbnRUeXBlLCBjb250ZW50ID0gbnVsbCwgY3NzQ2xhc3MsIGF0dHJpYnV0ZXMgPSB7fSB9KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuXG4gICAgaWYgKGNzc0NsYXNzKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xuICB9LFxuICBjcmVhdGVFdmVudElucHV0KCkge1xuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZvcm1cIiwgYXR0cmlidWVzOiB7Y2xhc3M6IFwiZXZlbnRJbnB1dFwifX0pO1xuICAgIGNvbnN0IGZvcm1IZWFkZXIgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImgxXCIsIGNvbnRlbnQ6IFwiQWRkIGEgTmV3IEV2ZW50OlwifSk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtSGVhZGVyKTtcblxuICAgIGNvbnN0IG5hbWVGaWVsZHNldCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZmllbGRzZXRcIn0pO1xuICAgIGNvbnN0IG5hbWVMYWJlbCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFdmVudCBOYW1lOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50TmFtZVwifX0pO1xuICAgIGNvbnN0IG5hbWVJbnB1dCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiaW5wdXRcIiwgYXR0cmlidXRlczoge3R5cGU6IFwidGV4dFwiLCBuYW1lOiBcImV2ZW50TmFtZVwiLCBpZDogXCJldmVudE5hbWVcIn19KTtcbiAgICBuYW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICBuYW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuICAgIGNvbnN0IGRhdGVGaWVsZHNldCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZmllbGRzZXRcIn0pO1xuICAgIGNvbnN0IGRhdGVMYWJlbCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFdmVudCBEYXRlOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50RGF0ZVwifX0pO1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiaW5wdXRcIiwgYXR0cmlidXRlczoge3R5cGU6IFwiZGF0ZVwiLCBuYW1lOiBcImV2ZW50RGF0ZVwiLCBpZDogXCJldmVudERhdGVcIn19KTtcbiAgICBkYXRlRmllbGRzZXQuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICBkYXRlRmllbGRzZXQuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICAgIGNvbnN0IHRpbWVGaWVsZHNldCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZmllbGRzZXRcIn0pO1xuICAgIGNvbnN0IHRpbWVMYWJlbCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFdmVudCBUaW1lOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50VGltZVwifX0pO1xuICAgIGNvbnN0IHRpbWVJbnB1dCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiaW5wdXRcIiwgYXR0cmlidXRlczoge3R5cGU6IFwidGltZVwiLCBuYW1lOiBcImV2ZW50VGltZVwiLCBpZDogXCJldmVudFRpbWVcIn19KTtcbiAgICB0aW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQodGltZUxhYmVsKTtcbiAgICB0aW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQodGltZUlucHV0KTtcblxuICAgIGNvbnN0IGxvY2F0aW9uRmllbGRzZXQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcbiAgICBjb25zdCBsb2NhdGlvbkxhYmVsID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJsYWJlbFwiLCBjb250ZW50OiBcIkVudGVyIExvY2F0aW9uOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50TG9jYXRpb25cIn19KTtcbiAgICBjb25zdCBsb2NhdGlvbklucHV0ID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwiZXZlbnRMb2NhdGlvblwiLCBpZDogXCJldmVudExvY2F0aW9uXCJ9fSk7XG4gICAgbG9jYXRpb25GaWVsZHNldC5hcHBlbmRDaGlsZChsb2NhdGlvbkxhYmVsKTtcbiAgICBsb2NhdGlvbkZpZWxkc2V0LmFwcGVuZENoaWxkKGxvY2F0aW9uSW5wdXQpO1xuXG4gICAgY29uc3Qgc2F2ZUJ1dHRvbiA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsIGNvbnRlbnQ6IFwiU2F2ZVwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJidXR0b25cIiwgaWQ6IFwic2F2ZUV2ZW50XCJ9fSk7XG5cbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVGaWVsZHNldCk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlRmllbGRzZXQpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGltZUZpZWxkc2V0KTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uRmllbGRzZXQpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoc2F2ZUJ1dHRvbik7XG5cbiAgICByZXR1cm4gZm9ybUNvbnRhaW5lcjtcbiAgfSxcbiAgY3JlYXRlRXZlbnRJdGVtIChldmVudE9iamVjdCkge1xuICAgIGNvbnN0IGV2ZW50SXRlbSA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiYXJ0aWNsZVwiLCBhdHRyaWJ1dGVzOiB7Y2xhc3M6IFwiZXZlbnRJdGVtXCJ9fSk7XG4gICAgY29uc3QgZXZlbnRIZWFkZXIgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImgyXCIsIGNvbnRlbnQ6IGV2ZW50T2JqZWN0LmV2ZW50TmFtZX0pO1xuICAgIGNvbnN0IGV2ZW50RGF0ZVRpbWUgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcInBcIiwgY29udGVudDogYEF0ICR7ZXZlbnRPYmplY3QuZXZlbnRUaW1lfSBvbiAke2V2ZW50T2JqZWN0LmV2ZW50RGF0ZX1gfSk7XG4gICAgY29uc3QgZXZlbnRMb2NhdGlvbiA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwicFwiLCBjb250ZW50OiBgTG9jYXRpb246ICR7ZXZlbnRPYmplY3QuZXZlbnRMb2NhdGlvbn1gfSk7XG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsIGNvbnRlbnQ6IFwiRWRpdFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJidXR0b25cIiwgaWQ6IGBlZGl0RXZlbnQtLSR7ZXZlbnRPYmplY3QuaWR9YH19KTtcbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudExpc3RlbmVycy5oYW5kbGVFdmVudEVkaXRCdXR0b24pO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsIGNvbnRlbnQ6IFwiRGVsZXRlXCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcImJ1dHRvblwiLCBpZDogYGRlbGV0ZUV2ZW50LS0ke2V2ZW50T2JqZWN0LmlkfWB9fSk7XG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudExpc3RlbmVycy5oYW5kbGVFdmVudERlbGV0ZUJ1dHRvbik7XG5cbiAgICBldmVudEl0ZW0uYXBwZW5kQ2hpbGQoZXZlbnRIZWFkZXIpO1xuICAgIGV2ZW50SXRlbS5hcHBlbmRDaGlsZChldmVudERhdGVUaW1lKTtcbiAgICBldmVudEl0ZW0uYXBwZW5kQ2hpbGQoZXZlbnRMb2NhdGlvbik7XG4gICAgZXZlbnRJdGVtLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgIGV2ZW50SXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gICAgcmV0dXJuIGV2ZW50SXRlbTtcbiAgfSxcbiAgY3JlYXRlRXZlbnRFZGl0SW5wdXQoY29udGFpbmVySWQsIGV2ZW50T2JqZWN0KSB7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZm9ybVwiLCBhdHRyaWJ1ZXM6IHtjbGFzczogXCJldmVudEVkaXRcIn19KTtcblxuICAgIGNvbnN0IG5hbWVGaWVsZHNldCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZmllbGRzZXRcIn0pO1xuICAgIGNvbnN0IG5hbWVMYWJlbCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFZGl0IE5hbWU6XCIsIGF0dHJpYnV0ZXM6IHtmb3I6IFwiZXZlbnROYW1lXCJ9fSk7XG4gICAgY29uc3QgbmFtZUlucHV0ID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwiZXZlbnROYW1lXCIsIHZhbHVlOiBldmVudE9iamVjdC5ldmVudE5hbWV9fSk7XG4gICAgbmFtZUZpZWxkc2V0LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG4gICAgbmFtZUZpZWxkc2V0LmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5cbiAgICBjb25zdCBkYXRlRmllbGRzZXQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcbiAgICBjb25zdCBkYXRlTGFiZWwgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImxhYmVsXCIsIGNvbnRlbnQ6IFwiRWRpdCBEYXRlOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50RGF0ZVwifX0pO1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiaW5wdXRcIiwgYXR0cmlidXRlczoge3R5cGU6IFwiZGF0ZVwiLCBuYW1lOiBcImV2ZW50RGF0ZVwiLCB2YWx1ZTogZXZlbnRPYmplY3QuZXZlbnREYXRlfX0pO1xuICAgIGRhdGVGaWVsZHNldC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgIGRhdGVGaWVsZHNldC5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXG4gICAgY29uc3QgdGltZUZpZWxkc2V0ID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJmaWVsZHNldFwifSk7XG4gICAgY29uc3QgdGltZUxhYmVsID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJsYWJlbFwiLCBjb250ZW50OiBcIkVkaXQgVGltZTpcIiwgYXR0cmlidXRlczoge2ZvcjogXCJldmVudFRpbWVcIn19KTtcbiAgICBjb25zdCB0aW1lSW5wdXQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImlucHV0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcInRpbWVcIiwgbmFtZTogXCJldmVudFRpbWVcIiwgdmFsdWU6IGV2ZW50T2JqZWN0LmV2ZW50VGltZX19KTtcbiAgICB0aW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQodGltZUxhYmVsKTtcbiAgICB0aW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQodGltZUlucHV0KTtcblxuICAgIGNvbnN0IGxvY2F0aW9uRmllbGRzZXQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcbiAgICBjb25zdCBsb2NhdGlvbkxhYmVsID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJsYWJlbFwiLCBjb250ZW50OiBcIkVkaXQgTG9jYXRpb246XCIsIGF0dHJpYnV0ZXM6IHtmb3I6IFwiZXZlbnRMb2NhdGlvblwifX0pO1xuICAgIGNvbnN0IGxvY2F0aW9uSW5wdXQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImlucHV0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcInRleHRcIiwgbmFtZTogXCJldmVudExvY2F0aW9uXCIsIHZhbHVlOiBldmVudE9iamVjdC5ldmVudExvY2F0aW9ufX0pO1xuICAgIGxvY2F0aW9uRmllbGRzZXQuYXBwZW5kQ2hpbGQobG9jYXRpb25MYWJlbCk7XG4gICAgbG9jYXRpb25GaWVsZHNldC5hcHBlbmRDaGlsZChsb2NhdGlvbklucHV0KTtcblxuICAgIGNvbnN0IHVwZGF0ZUJ1dHRvbiA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsIGNvbnRlbnQ6IFwiVXBkYXRlXCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcImJ1dHRvblwiLCBpZDogXCJzdWJtaXRFZGl0c1wifX0pO1xuICAgIC8vIHVwZGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnRMaXN0ZW5lcnMuaGFuZGxlRXZlbnRVcGRhdGVCdXR0b24pO1xuXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lRmllbGRzZXQpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUZpZWxkc2V0KTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVGaWVsZHNldCk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbkZpZWxkc2V0KTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgICBsZXQgY3VycmVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2NvbnRhaW5lcklkfWApO1xuICAgIHdoaWxlIChjdXJyZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGN1cnJlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQoY3VycmVudENvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZvcm1Db250YWluZXI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZG9tQ29tcG9uZW50cyIsImltcG9ydCBldmVudHMgZnJvbSBcIi4vZXZlbnRzXCI7XG5pbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xuaW1wb3J0IG1lc3NhZ2VzIGZyb20gXCIuL21lc3NhZ2VzXCI7XG5pbXBvcnQgdGFza3MgZnJvbSBcIi4vdGFza3NcIjtcblxuXG4vLyBtZXNzYWdlcy5jcmVhdGVNZXNzYWdlQm9hcmQoKTtcbnRhc2tzLmNyZWF0ZVRhc2tMaXN0KCk7XG5mdW5jdGlvbiB1c2VyTG9naW4gKCkge1xuXG4gICAgbGV0IHVzZXJOYW1lID0gXCJIZXJuYW5kb1wiO1xuICAgIGxldCBwYXNzd29yZCA9IFwieW9tYW1hXCI7XG5cbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG5cbiAgICAgICAgXCJkYXRhU2V0XCIgOiBcInVzZXJzXCIsXG4gICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxuICAgICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPWV2ZW50c1wiXG5cbiAgICB9KS50aGVuKHBhcnNlZFVzZXJzID0+IHtcblxuICAgICAgICBwYXJzZWRVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuXG4gICAgICAgICAgICBpZiAodXNlck5hbWUgPT09IHVzZXIudXNlck5hbWUgJiYgcGFzc3dvcmQgPT09IHVzZXIucGFzc3dvcmQpIHtcblxuICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXJJZCcsIHVzZXIuaWQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pXG4gICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xuICAgIGxvYWREYXNoYm9hcmQodXNlcklkKVxuICAgIC8vIGNvbnNvbGUubG9nKFwiVXNlcklkID0gXCIsIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpKVxufVxuXG51c2VyTG9naW4oKTtcblxuZnVuY3Rpb24gbG9hZERhc2hib2FyZCAodXNlcklkKSB7XG4gICAgY29uc29sZS5sb2coYFRoYW5rcyBmb3IgcGFzc2luZyB0aGUgdXNlcklkLiAgVGhlIHVzZXJJZCBpcyAke3VzZXJJZH1gKVxufSIsImltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XG5pbXBvcnQgZG9tQ29tcG9uZW50cyBmcm9tIFwiLi9kb21Db21wb25lbnRzXCI7XG5pbXBvcnQgZXZlbnRzIGZyb20gXCIuL2V2ZW50c1wiO1xuXG5jb25zdCBldmVudExpc3RlbmVycyA9IHtcbiAgICBoYW5kbGVFdmVudFNhdmVCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dHRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnROYW1lXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlSW5wdXR0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V2ZW50RGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdGltZUlucHV0dGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldmVudFRpbWVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uSW5wdXR0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V2ZW50TG9jYXRpb25cIikudmFsdWU7XG5cbiAgICAgICAgY29uc3QgZXZlbnRPYmplY3QgPSB7XG4gICAgICAgICAgICBldmVudE5hbWU6IG5hbWVJbnB1dHRlZCxcbiAgICAgICAgICAgIGV2ZW50RGF0ZTogZGF0ZUlucHV0dGVkLFxuICAgICAgICAgICAgZXZlbnRUaW1lOiB0aW1lSW5wdXR0ZWQsXG4gICAgICAgICAgICBldmVudExvY2F0aW9uOiBsb2NhdGlvbklucHV0dGVkXG4gICAgICAgIH07XG5cbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgICAgICAgZGF0YVNldDogXCJldmVudHNcIixcbiAgICAgICAgICAgIGZldGNoVHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICBkYXRhQmFzZU9iamVjdDoge1xuICAgICAgICAgICAgICAgIHVzZXJJZDogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSxcbiAgICAgICAgICAgICAgICBldmVudE5hbWU6IGV2ZW50T2JqZWN0LmV2ZW50TmFtZSxcbiAgICAgICAgICAgICAgICBldmVudERhdGU6IGV2ZW50T2JqZWN0LmV2ZW50RGF0ZSxcbiAgICAgICAgICAgICAgICBldmVudFRpbWU6IGV2ZW50T2JqZWN0LmV2ZW50VGltZSxcbiAgICAgICAgICAgICAgICBldmVudExvY2F0aW9uOiBldmVudE9iamVjdC5ldmVudExvY2F0aW9uXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCAoKSA9PiB7XG4gICAgICAgICAgICBldmVudHMuYXBwZW5kVXNlckV2ZW50cygpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGhhbmRsZUV2ZW50RGVsZXRlQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBpZFRvRGVsZXRlID0gZXZlbnQudGFyZ2V0LmlkLnNwbGl0KFwiLS1cIilbMV07XG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgICAgICAgIGRlbGV0ZUlkOiBpZFRvRGVsZXRlLFxuICAgICAgICAgICAgZGF0YVNldDogXCJldmVudHNcIixcbiAgICAgICAgICAgIGZldGNoVHlwZTogXCJERUxFVEVcIixcbiAgICAgICAgICAgIGRhdGFCYXNlT2JqZWN0OiB7XG4gICAgICAgICAgICAgICAgdXNlcklkOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCAoKSA9PiB7XG4gICAgICAgICAgICBldmVudHMuYXBwZW5kVXNlckV2ZW50cygpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGhhbmRsZUV2ZW50RWRpdEJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgaWRUb0VkaXQgPSBldmVudC50YXJnZXQuaWQuc3BsaXQoXCItLVwiKVsxXTtcbiAgICAgICAgY29uc3QgZXZlbnRPYmplY3QgPVxuICAgICAgICBkb21Db21wb25lbnRzLmNyZWF0ZUV2ZW50RWRpdElucHV0KGlkVG9FZGl0LCApXG4gICAgfSxcbiAgICBoYW5kbGVFdmVudFVwZGF0ZUJ1dHRvbigpIHtcblxuICAgIH0sXG4gICAgcG9zdE5ld01lc3NhZ2UoKSB7XG5cbiAgICAgICAgbGV0IG1lc3NhZ2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZUlucHV0XCIpO1xuICAgICAgICBsZXQgdGltZVN0YW1wID0gbmV3IERhdGUoKTtcblxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG5cbiAgICAgICAgICAgIGRhdGFTZXQgOiBcIm1lc3NhZ2VzXCIsXG4gICAgICAgICAgICBmZXRjaFR5cGUgOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGRhdGFCYXNlT2JqZWN0IDoge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgOiBtZXNzYWdlSW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgdGltZVN0YW1wIDogdGltZVN0YW1wXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTsgLy9yZXBsYWNlIHdpdGggRE9NIHJlZnJlc2ggZnVuY3Rpb24gb25jZSBidWlsdFxuICAgIH0sXG4gICAgZWRpdE1lc3NhZ2UoKSB7XG4gICAgICAgIGxldCBudW1iZXIgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xuICAgICAgICBsZXQgbWVzc2FnZUFycmF5ID0gbnVtYmVyLnNwbGl0KFwiX1wiKTtcbiAgICAgICAgbGV0IG1lc3NhZ2VJZCA9IG1lc3NhZ2VBcnJheVsxXTtcblxuICAgICAgICBsZXQgbWVzc2FnZVRvRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke21lc3NhZ2VJZH1gKTtcbiAgICAgICAgbGV0IG1lc3NhZ2VUZXh0ID0gbWVzc2FnZVRvRWRpdC5pbm5lckhUTUw7XG4gICAgICAgIGxldCBtZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG1lc3NhZ2Uke21lc3NhZ2VJZH1gKTtcbiAgICAgICAgbGV0IG1lc3NhZ2VUaW1lU3RhbXAgPSBldmVudC5jdXJyZW50VGFyZ2V0Lm5hbWU7XG5cbiAgICAgICAgbGV0IG1lc3NhZ2VFZGl0Rm9ybSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCAoe1xuXG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiZm9ybVwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm1lc3NhZ2VFZGl0Rm9ybVwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwibWVzc2FnZUVkaXRGb3JtXCJcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbWVzc2FnZUVkaXRGaWVsZHNldCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG5cbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJmaWVsZHNldFwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm1lc3NhZ2VFZGl0RmllbGRzZXRcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcIm1lc3NhZ2VFZGl0RmllbGRzZXRcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IG1lc3NhZ2VFZGl0SW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuXG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiaW5wdXRcIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlRWRpdElucHV0XCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogYG1lc3NhZ2VFZGl0SW5wdXRfJHttZXNzYWdlSWR9YCxcbiAgICAgICAgICAgICAgICB2YWx1ZSA6IGAke21lc3NhZ2VUZXh0fWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG1lc3NhZ2VFZGl0U3VibWl0QnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcblxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm1lc3NhZ2VFZGl0U3VibWl0QnV0dG9uXCIsXG4gICAgICAgICAgICBjb250ZW50IDogXCJTdWJtaXRcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBgbWVzc2FnZUVkaXRTdWJtaXRCdXR0b25fJHttZXNzYWdlSWR9YCxcbiAgICAgICAgICAgICAgICBuYW1lOiBtZXNzYWdlVGltZVN0YW1wXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lc3NhZ2VFZGl0U3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudExpc3RlbmVycy5oYW5kbGVFZGl0U3VibWl0QnV0dG9uKVxuICAgICAgICBtZXNzYWdlRWRpdEZpZWxkc2V0LmFwcGVuZENoaWxkKG1lc3NhZ2VFZGl0SW5wdXQpXG4gICAgICAgIG1lc3NhZ2VFZGl0RmllbGRzZXQuYXBwZW5kQ2hpbGQobWVzc2FnZUVkaXRTdWJtaXRCdXR0b24pXG4gICAgICAgIG1lc3NhZ2VFZGl0Rm9ybS5hcHBlbmRDaGlsZChtZXNzYWdlRWRpdEZpZWxkc2V0KVxuICAgICAgICBtZXNzYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VFZGl0Rm9ybSlcbiAgICB9LFxuICAgIGhhbmRsZUVkaXRTdWJtaXRCdXR0b24oKSB7XG4gICAgICAgIGxldCBudW1iZXIgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xuICAgICAgICBsZXQgbWVzc2FnZUFycmF5ID0gbnVtYmVyLnNwbGl0KFwiX1wiKTtcbiAgICAgICAgbGV0IG1lc3NhZ2VJZCA9IG1lc3NhZ2VBcnJheVsxXTtcbiAgICAgICAgbGV0IG1lc3NhZ2VUaW1lU3RhbXAgPSBgJHtldmVudC5jdXJyZW50VGFyZ2V0Lm5hbWV9YDtcbiAgICAgICAgbGV0IG1lc3NhZ2VFZGl0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbWVzc2FnZUVkaXRJbnB1dF8ke21lc3NhZ2VJZH1gKTtcblxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG5cbiAgICAgICAgICAgIHB1dElkIDogbWVzc2FnZUlkLFxuICAgICAgICAgICAgZGF0YVNldCA6IFwibWVzc2FnZXNcIixcbiAgICAgICAgICAgIGZldGNoVHlwZSA6IFwiUFVUXCIsXG4gICAgICAgICAgICBkYXRhQmFzZU9iamVjdCA6IHtcbiAgICAgICAgICAgICAgICB1c2VySWQgOiBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSksXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYCR7bWVzc2FnZUVkaXRJbnB1dC52YWx1ZX1gLFxuICAgICAgICAgICAgICAgIHRpbWVTdGFtcDogYCR7bWVzc2FnZVRpbWVTdGFtcH1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRMaXN0ZW5lcnM7IiwiLy8gQXV0aG9yOiBDb2xlIEJyeWFudCAvIFB1cnBvc2U6XG5cbmltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XG5pbXBvcnQgZG9tQ29tcG9uZW50cyBmcm9tIFwiLi9kb21Db21wb25lbnRzXCI7XG5pbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnNcIjtcblxuY29uc3QgZXZlbnRzID0ge1xuICBzaG93RXZlbnRGb3JtICgpIHtcbiAgICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI291dHB1dFwiKTtcbiAgICBjb25zdCBldmVudEZvcm0gPSBkb21Db21wb25lbnRzLmNyZWF0ZUV2ZW50SW5wdXQoKTtcbiAgICBvdXRwdXQuYXBwZW5kQ2hpbGQoZXZlbnRGb3JtKTtcbiAgICBjb25zdCBldmVudExvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpXG4gICAgZXZlbnRMb2cuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJldmVudExvZ1wiKTtcbiAgICBvdXRwdXQuYXBwZW5kQ2hpbGQoZXZlbnRMb2cpO1xuICB9LFxuICBhcHBlbmRVc2VyRXZlbnRzKCkge1xuICAgIGNvbnN0IGV2ZW50TG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldmVudExvZ1wiKTtcbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICBkYXRhU2V0OiBcImV2ZW50c1wiLFxuICAgICAgZmV0Y2hUeXBlOiBcIkdFVFwiLFxuICAgICAgZGF0YUJhc2VPYmplY3Q6IHtcbiAgICAgICAgdXNlcklkOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpXG4gICAgICAgIH0sXG4gICAgICBlbWJlZEl0ZW06IFwiP19lbWJlZD1ldmVudHNcIlxuICAgIH0pXG4gICAgLnRoZW4ocGFyc2VkUmVzcG9uc2UgPT4ge1xuICAgICAgbGV0IGRvY3VGcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgcGFyc2VkUmVzcG9uc2UuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgIHdoaWxlIChldmVudExvZy5maXJzdENoaWxkKSB7XG4gICAgICAgICAgZXZlbnRMb2cucmVtb3ZlQ2hpbGQoZXZlbnRMb2cuZmlyc3RDaGlsZClcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXZlbnRJdGVtID0gZG9tQ29tcG9uZW50cy5jcmVhdGVFdmVudEl0ZW0oZXZlbnQpO1xuICAgICAgICBkb2N1RnJhZy5hcHBlbmRDaGlsZChldmVudEl0ZW0pO1xuICAgICAgfSk7XG4gICAgICBldmVudExvZy5hcHBlbmRDaGlsZChkb2N1RnJhZyk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV2ZW50cy5zaG93RXZlbnRGb3JtKCk7XG5ldmVudHMuYXBwZW5kVXNlckV2ZW50cygpO1xuZXZlbnRzLmRlbGV0ZUV2ZW50KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50czsiLCJpbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xuaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xuaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL2V2ZW50TGlzdGVuZXJzXCI7XG5cbmNvbnN0IG1lc3NhZ2VzID0ge1xuXG4gICAgY3JlYXRlTWVzc2FnZUJvYXJkKCkge1xuXG4gICAgICAgIGxldCBvdXRwdXRBcnRpY2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXRcIilcblxuICAgICAgICAvL2NyZWF0ZSBkaXNwbGF5IGNvbnRhaW5lclxuICAgICAgICBsZXQgbWVzc2FnZXNDb250YWluZXIgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInNlY3Rpb25cIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlc0NvbnRhaW5lclwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwibWVzc2FnZXNDb250YWluZXJcIlxuICAgICAgICAgICAgfX0pO1xuXG4gICAgICAgIC8vY3JlYXRlIG1lc3NhZ2UgaW5wdXQgZmllbGRcbiAgICAgICAgbGV0IG1lc3NhZ2VJbnB1dCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiaW5wdXRcIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlSW5wdXRcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcIm1lc3NhZ2VJbnB1dFwiLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIE1lc3NhZ2UgSGVyZVwiXG4gICAgICAgICAgICB9fSk7XG5cbiAgICAgICAgLy9jcmVhdGUgc3VibWl0IGJ1dHRvbiBmb3IgaW5wdXQgZmllbGRcbiAgICAgICAgbGV0IG1lc3NhZ2VTdWJtaXRCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm1lc3NhZ2VTdWJtaXRCdXR0b25cIixcbiAgICAgICAgICAgIGNvbnRlbnQgOiBcIlN1Ym1pdFwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwibWVzc2FnZVN1Ym1pdEJ1dHRvblwiXG4gICAgICAgICAgICB9fSk7XG5cbiAgICAgICAgbWVzc2FnZVN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnRMaXN0ZW5lcnMucG9zdE5ld01lc3NhZ2UpO1xuICAgICAgICBtZXNzYWdlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlSW5wdXQpO1xuICAgICAgICBtZXNzYWdlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlU3VibWl0QnV0dG9uKTtcbiAgICAgICAgb3V0cHV0QXJ0aWNsZS5hcHBlbmRDaGlsZChtZXNzYWdlc0NvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy5nZXRNZXNzYWdlcygpXG4gICAgfSxcblxuICAgIGdldE1lc3NhZ2VzKCkge1xuXG4gICAgICAgIC8vR0VUIGZldGNoICYgLnRoZW4gdG8gYnVpbGQgb2JqZWN0KHMpIGZvciBjcmVhdGVEb21FbGVtZW50KCkgdXNpbmcgX2V4cGFuZCB0byBkaXNwbGF5IFVOOiBtZXNzYWdlXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcblxuICAgICAgICAgICAgICAgIGRhdGFTZXQgOiBcIm1lc3NhZ2VzXCIsXG4gICAgICAgICAgICAgICAgZmV0Y2hUeXBlIDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICBlbWJlZEl0ZW0gOiBcIj9fZXhwYW5kPXVzZXJcIlxuXG4gICAgICAgIH0pLnRoZW4obWVzc2FnZXMgPT4ge1xuXG4gICAgICAgICAgICBsZXQgbWVzc2FnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZXNDb250YWluZXJcIik7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlSW5wdXRcIik7XG5cbiAgICAgICAgICAgIC8vc29ydCBtZXNzYWdlcyBieSB0aW1lU3RhbXBcbiAgICAgICAgICAgIG1lc3NhZ2VzLnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYS50aW1lU3RhbXApIC0gbmV3IERhdGUoYi50aW1lU3RhbXApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vYnVpbGQgRE9NIENvbXBvbmVudCBmb3IgZWFjaCBtZXNzYWdlIGFuZCBhcHBlbmRcbiAgICAgICAgICAgIG1lc3NhZ2VzLmZvckVhY2gobWVzc2FnZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VUZXh0ID0gbWVzc2FnZS5tZXNzYWdlO1xuICAgICAgICAgICAgICAgIGxldCB1c2VyTmFtZSA9IG1lc3NhZ2UudXNlci51c2VyTmFtZTtcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZUlkID0gbWVzc2FnZS5pZDtcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZVRpbWVTdGFtcCA9IG1lc3NhZ2UudGltZVN0YW1wO1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlVXNlciA9IGAke21lc3NhZ2UudXNlcklkfWA7XG4gICAgICAgICAgICAgICAgbGV0IGxvZ2dlZEluVXNlciA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xuXG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VFbGVtZW50ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcblxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiaDNcIixcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm1lc3NhZ2VVc2VyTmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50IDogYCR7dXNlck5hbWV9OmAsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogYG1lc3NhZ2Uke21lc3NhZ2VJZH1gXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VFbGVtZW50MiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlVGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50IDogYCR7bWVzc2FnZVRleHR9YCxcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBtZXNzYWdlSWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VVc2VyID09PSBsb2dnZWRJblVzZXIpIHtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZUVkaXRCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZUVkaXRCdXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgOiBcIkVkaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGBtZXNzYWdlRWRpdEJ1dHRvbl8ke21lc3NhZ2VJZH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG1lc3NhZ2VUaW1lU3RhbXBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50TGlzdGVuZXJzLmVkaXRNZXNzYWdlLCB7b25jZTogdHJ1ZX0pXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50LmFwcGVuZENoaWxkKG1lc3NhZ2VFbGVtZW50MilcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQuYXBwZW5kQ2hpbGQobWVzc2FnZUVkaXRCdXR0b24pXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VDb250YWluZXIuaW5zZXJ0QmVmb3JlKG1lc3NhZ2VFbGVtZW50LCBtZXNzYWdlSW5wdXQpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudC5hcHBlbmRDaGlsZChtZXNzYWdlRWxlbWVudDIpXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VDb250YWluZXIuaW5zZXJ0QmVmb3JlKG1lc3NhZ2VFbGVtZW50LCBtZXNzYWdlSW5wdXQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVzc2FnZXM7IiwiY29uc3Qgbm9tYWREYXRhID0ge1xuXG4gICAgY29ubmVjdFRvRGF0YShmZXRjaE9iamVjdCkge1xuXG4gICAgICBsZXQgZGF0YVNldCA9IGZldGNoT2JqZWN0LmRhdGFTZXQ7XG4gICAgICBsZXQgZW1iZWRJdGVtID0gZmV0Y2hPYmplY3QuZW1iZWRJdGVtO1xuICAgICAgbGV0IGZldGNoVHlwZSA9IGZldGNoT2JqZWN0LmZldGNoVHlwZTtcbiAgICAgIGxldCBkYXRhQmFzZU9iamVjdCA9IGZldGNoT2JqZWN0LmRhdGFCYXNlT2JqZWN0O1xuICAgICAgbGV0IHB1dElkID0gZmV0Y2hPYmplY3QucHV0SWQ7XG4gICAgICBsZXQgZGVsZXRlSWQgPSBmZXRjaE9iamVjdC5kZWxldGVJZDtcblxuICAgICAgICBpZiAoZmV0Y2hUeXBlID09IFwiR0VUXCIpIHtcblxuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC8ke2RhdGFTZXR9JHtlbWJlZEl0ZW19YClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkgLy8gcGFyc2VzIHJlc3BvbnNlIHRvIEpTT05cblxuICAgICAgICB9IGVsc2UgaWYgKGZldGNoVHlwZSA9PT0gXCJQT1NUXCIpe1xuXG4gICAgICAgIC8vIERlZmF1bHQgb3B0aW9ucyBhcmUgbWFya2VkIHdpdGggKlxuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC8ke2RhdGFTZXR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiBgJHtmZXRjaFR5cGV9YCwgLy8gKkdFVCwgUE9TVCwgUFVULCBERUxFVEUsIGV0Yy5cbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcbiAgICAgICAgICAgICAgICAvLyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIHJlZmVycmVyOiBcIm5vLXJlZmVycmVyXCIsIC8vIG5vLXJlZmVycmVyLCAqY2xpZW50XG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhQmFzZU9iamVjdCksIC8vIGJvZHkgZGF0YSB0eXBlIG11c3QgbWF0Y2ggXCJDb250ZW50LVR5cGVcIiBoZWFkZXJcbiAgICAgICAgfSlcblxuICAgICAgICB9IGVsc2UgaWYoZmV0Y2hUeXBlID09PSBcIlBVVFwiKXtcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHtkYXRhU2V0fS8ke3B1dElkfWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogYCR7ZmV0Y2hUeXBlfWAsIC8vICpHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBldGMuXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG4gICAgICAgICAgICAgICAgLy8gXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyByZWZlcnJlcjogXCJuby1yZWZlcnJlclwiLCAvLyBuby1yZWZlcnJlciwgKmNsaWVudFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YUJhc2VPYmplY3QpLCAvLyBib2R5IGRhdGEgdHlwZSBtdXN0IG1hdGNoIFwiQ29udGVudC1UeXBlXCIgaGVhZGVyXG4gICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAoZmV0Y2hUeXBlID09PSBcIkRFTEVURVwiKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4LyR7ZGF0YVNldH0vJHtkZWxldGVJZH1gLCB7XG4gICAgICAgICAgICBtZXRob2Q6IGAke2ZldGNoVHlwZX1gLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjLlxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICAgICAgICAgIC8vIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gcmVmZXJyZXI6IFwibm8tcmVmZXJyZXJcIiwgLy8gbm8tcmVmZXJyZXIsICpjbGllbnRcbiAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nIChcIllPVSBTQ1JFV0VEIElUIFVQXCIpXG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCBub21hZERhdGEiLCJpbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xuaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xuaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL2V2ZW50TGlzdGVuZXJzXCI7XG5cbmNvbnN0IHRhc2tzID0ge1xuXG4gICAgY3JlYXRlVGFza0xpc3QoKSB7XG5cbiAgICAgICAgbGV0IG91dHB1dEFydGljbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dFwiKVxuXG4gICAgICAgIC8vY3JlYXRlIGRpc3BsYXkgY29udGFpbmVyXG4gICAgICAgIGxldCB0YXNrc0NvbnRhaW5lciA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwic2VjdGlvblwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInRhc2tzQ29udGFpbmVyXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJ0YXNrc0NvbnRhaW5lclwiXG4gICAgICAgICAgICB9fSk7XG5cbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuXG4gICAgICAgICAgICBkYXRhU2V0IDogXCJ0YXNrc1wiLFxuICAgICAgICAgICAgZmV0Y2hUeXBlIDogXCJHRVRcIixcbiAgICAgICAgICAgIGVtYmVkSXRlbSA6IFwiP19lbWJlZD11c2Vyc1wiXG5cbiAgICAgICAgfSkudGhlbih0YXNrcyA9PiB7XG5cbiAgICAgICAgICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG5cbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGhlIHRhc2sgbGFiZWxcbiAgICAgICAgICAgICAgICBsZXQgdGFza0xhYmVsID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogYHRhc2tMYWJlbF8ke3Rhc2suaWR9YFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvL2NyZWF0ZSB0YXNrIHRpdGxlXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke3Rhc2sudGFza31gKTtcblxuICAgICAgICAgICAgICAgIC8vY3JlYXRlIHRhc2sgY2hlY2tib3hcbiAgICAgICAgICAgICAgICBsZXQgdGFza0NoZWNrYm94ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrQ2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogYHRhc2tDaGVja2JveF8ke3Rhc2suaWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA6IGAke3Rhc2sudGFza31gXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgLy9hcHBlbmQgYWxsIGVsZW1lbnRzLCB0aGlzIG9yZGVyIGlzIG5lY2Vzc2FyeSB0byBoYXZlIHRoZSBjaGVja2JveCB0byB0aGUgbGVmdCBvZiB0aGUgdGl0bGVcbiAgICAgICAgICAgICAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTGFiZWwpO1xuICAgICAgICAgICAgICAgIHRhc2tMYWJlbC5hcHBlbmRDaGlsZCh0YXNrQ2hlY2tib3gpO1xuICAgICAgICAgICAgICAgIHRhc2tMYWJlbC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgb3V0cHV0QXJ0aWNsZS5hcHBlbmRDaGlsZCh0YXNrc0NvbnRhaW5lcik7XG5cbiAgICAgICAgLy8gdGhpcy5nZXRUYXNrcygpXG4gICAgfSxcblxuICAgIC8vIGdldE1lc3NhZ2VzKCkge1xuXG4gICAgLy8gICAgIC8vR0VUIGZldGNoICYgLnRoZW4gdG8gYnVpbGQgb2JqZWN0KHMpIGZvciBjcmVhdGVEb21FbGVtZW50KCkgdXNpbmcgX2V4cGFuZCB0byBkaXNwbGF5IFVOOiBtZXNzYWdlXG4gICAgLy8gICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcblxuICAgIC8vICAgICAgICAgICAgIGRhdGFTZXQgOiBcIm1lc3NhZ2VzXCIsXG4gICAgLy8gICAgICAgICAgICAgZmV0Y2hUeXBlIDogXCJHRVRcIixcbiAgICAvLyAgICAgICAgICAgICBlbWJlZEl0ZW0gOiBcIj9fZXhwYW5kPXVzZXJcIlxuXG4gICAgLy8gICAgIH0pLnRoZW4obWVzc2FnZXMgPT4ge1xuXG4gICAgLy8gICAgICAgICBsZXQgbWVzc2FnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZXNDb250YWluZXJcIik7XG4gICAgLy8gICAgICAgICBsZXQgbWVzc2FnZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlSW5wdXRcIik7XG5cbiAgICAvLyAgICAgICAgIC8vc29ydCBtZXNzYWdlcyBieSB0aW1lU3RhbXBcbiAgICAvLyAgICAgICAgIG1lc3NhZ2VzLnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYS50aW1lU3RhbXApIC0gbmV3IERhdGUoYi50aW1lU3RhbXApO1xuICAgIC8vICAgICAgICAgfSk7XG5cbiAgICAvLyAgICAgICAgIC8vYnVpbGQgRE9NIENvbXBvbmVudCBmb3IgZWFjaCBtZXNzYWdlIGFuZCBhcHBlbmRcbiAgICAvLyAgICAgICAgIG1lc3NhZ2VzLmZvckVhY2gobWVzc2FnZSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgbGV0IG1lc3NhZ2VUZXh0ID0gbWVzc2FnZS5tZXNzYWdlO1xuICAgIC8vICAgICAgICAgICAgIGxldCB1c2VyTmFtZSA9IG1lc3NhZ2UudXNlci51c2VyTmFtZTtcbiAgICAvLyAgICAgICAgICAgICBsZXQgbWVzc2FnZUlkID0gbWVzc2FnZS5pZDtcbiAgICAvLyAgICAgICAgICAgICBsZXQgbWVzc2FnZVRpbWVTdGFtcCA9IG1lc3NhZ2UudGltZVN0YW1wO1xuICAgIC8vICAgICAgICAgICAgIGxldCBtZXNzYWdlVXNlciA9IGAke21lc3NhZ2UudXNlcklkfWA7XG4gICAgLy8gICAgICAgICAgICAgbGV0IGxvZ2dlZEluVXNlciA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xuXG4gICAgLy8gICAgICAgICAgICAgbGV0IG1lc3NhZ2VFbGVtZW50ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcblxuICAgIC8vICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiaDNcIixcbiAgICAvLyAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm1lc3NhZ2VVc2VyTmFtZVwiLFxuICAgIC8vICAgICAgICAgICAgICAgICBjb250ZW50IDogYCR7dXNlck5hbWV9OmAsXG4gICAgLy8gICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBpZDogYG1lc3NhZ2Uke21lc3NhZ2VJZH1gXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB9KVxuXG4gICAgLy8gICAgICAgICAgICAgbGV0IG1lc3NhZ2VFbGVtZW50MiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgLy8gICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJwXCIsXG4gICAgLy8gICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlVGV4dFwiLFxuICAgIC8vICAgICAgICAgICAgICAgICBjb250ZW50IDogYCR7bWVzc2FnZVRleHR9YCxcbiAgICAvLyAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlkOiBtZXNzYWdlSWRcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAgICAgaWYgKG1lc3NhZ2VVc2VyID09PSBsb2dnZWRJblVzZXIpIHtcblxuICAgIC8vICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZUVkaXRCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiYnV0dG9uXCIsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZUVkaXRCdXR0b25cIixcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgOiBcIkVkaXRcIixcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGBtZXNzYWdlRWRpdEJ1dHRvbl8ke21lc3NhZ2VJZH1gLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG1lc3NhZ2VUaW1lU3RhbXBcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgfSlcbiAgICAvLyAgICAgICAgICAgICAgICAgbWVzc2FnZUVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50TGlzdGVuZXJzLmVkaXRNZXNzYWdlLCB7b25jZTogdHJ1ZX0pXG4gICAgLy8gICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50LmFwcGVuZENoaWxkKG1lc3NhZ2VFbGVtZW50MilcbiAgICAvLyAgICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQuYXBwZW5kQ2hpbGQobWVzc2FnZUVkaXRCdXR0b24pXG4gICAgLy8gICAgICAgICAgICAgICAgIG1lc3NhZ2VDb250YWluZXIuaW5zZXJ0QmVmb3JlKG1lc3NhZ2VFbGVtZW50LCBtZXNzYWdlSW5wdXQpXG4gICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgIC8vICAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudC5hcHBlbmRDaGlsZChtZXNzYWdlRWxlbWVudDIpXG4gICAgLy8gICAgICAgICAgICAgICAgIG1lc3NhZ2VDb250YWluZXIuaW5zZXJ0QmVmb3JlKG1lc3NhZ2VFbGVtZW50LCBtZXNzYWdlSW5wdXQpXG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy8gICAgIH0pXG4gICAgLy8gfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGFza3M7Il19
