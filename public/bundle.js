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

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _friends = _interopRequireDefault(require("./friends"));

var _eventListeners = _interopRequireDefault(require("./eventListeners"));

var _news = _interopRequireDefault(require("./news"));

var _messages = _interopRequireDefault(require("./messages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import events from "./events";
// import messages from "./messages";
console.log("I'm working"); // template for object to pass into nomadData.connectToData() if you are doing a GET
// let fetchTest = {
//     "dataSet" : "users",
//     "fetchType" : "GET",
//     "dataBaseObject" : "",
//     "embedItem" : "?_embed=events"
// }
// template for object to pass into nomadData.connectToData() if you are doing a POST
// let fetchTest2 = {
//     "dataSet" : "events",
//     "fetchType" : "POST",
//     "dataBaseObject" : {
//       "userId": 1,
//       "eventName": "yet another toga party",
//       "eventDate": "2-12",
//       "eventTime": "3:00pm",
//       "eventLocation": "Vegas"
//     }
// }
// template for object to pass into nomadData.connectToData() if you are doing a PUT
// let fetchTest3 = {
//     "putId" : 2,
//     "dataSet" : "events",
//     "fetchType" : "PUT",
//     "dataBaseObject" : {
//       "id" : 2,
//       "userId": 1,
//       "eventName": "another toga party",
//       "eventDate": "2-15",
//       "eventTime": "3:00pm",
//       "eventLocation": "Vegas"
//     }
// }
// nomadData.connectToData(fetchTest3)
//NEWS SECTION
// news.save();
// news.allSaved();
// news.getNews();
// news.newsElementCreator();

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

function loadDashboard(userId) {// console.log(`Thanks for passing the userId.  The userId is ${userId}`)
}

_friends.default.defineCurrentUsersFriends();

},{"./eventListeners":3,"./friends":5,"./messages":6,"./news":7,"./nomadData":8}],3:[function(require,module,exports){
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
  friendsDeleteFriend() {
    console.log(event.target);
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

},{"./domComponents":1,"./events":4,"./nomadData":8}],4:[function(require,module,exports){
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

}; // events.showEventForm();
// events.appendUserEvents();
// events.deleteEvent();

var _default = events;
exports.default = _default;

},{"./domComponents":1,"./eventListeners":3,"./nomadData":8}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _domComponents = _interopRequireDefault(require("./domComponents"));

var _eventListeners = _interopRequireDefault(require("./eventListeners"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const friends = {
  defineCurrentUsersFriends() {
    const currentUser = 1;
    let friendHolder = []; // PULL FROM FRIENDS JSON-------------------------

    const friendIntersectionTable = {
      "dataSet": "friends",
      "fetchType": "GET",
      "dataBaseObject": "",
      "embedItem": "?_embed=events"
    };

    _nomadData.default.connectToData(friendIntersectionTable).then(fromFriends => {
      // console.log(fromFriends)
      fromFriends.forEach(friendData => {
        // console.log(friendData)
        if (friendData.userId === currentUser) {
          friendHolder.push(friendData.otherFriendId);
        }
      });
      friendHolder.forEach(officialFriend => {
        this.loadCurrentUsersFriends(officialFriend);
      });
    });
  },

  loadCurrentUsersFriends(friend) {
    // PULL FROM USERS JSON -----------------------
    // console.log(friend)
    const userInfo = {
      "dataSet": "users",
      "fetchType": "GET",
      "dataBaseObject": "",
      "embedItem": "?_embed=events"
    };
    const userEvents = {
      "dataSet": "events",
      "fetchType": "GET",
      "dataBaseObject": "",
      "embedItem": "?_embed=events"
    };
    const usersSavedArticle = {
      "dataSet": "newsitems",
      "fetchType": "GET",
      "dataBaseObject": "",
      "embedItem": "?_embed=newsitems"
    };
    const targetContainer = document.getElementById("output");
    targetContainer.appendChild(_domComponents.default.createDomElement({
      elementType: "section",
      attributes: {
        class: "friend-container",
        id: `friend-${friend}`
      }
    }));
    const friendContainer = document.getElementById(`friend-${friend}`);
    const deleteFriend = document.createElement("button");
    deleteFriend.classList.add(`delete-friend-${friend}`);
    deleteFriend.textContent = "DELETE";
    friendContainer.appendChild(deleteFriend);
    deleteFriend.addEventListener("click", () => {
      _eventListeners.default.friendsDeleteFriend();
    });
    let friendDomBuilder = [];

    _nomadData.default.connectToData(userInfo).then(fromUserData => {
      // console.log(fromUserData);
      fromUserData.forEach(userInfo => {
        // console.log(friend, userInfo.id)
        if (userInfo.id === friend) {
          // console.log(userInfo.userName);
          const friendIdentifier = {
            elementType: "h2",
            content: userInfo.userName
          };
          friendDomBuilder.push(friendIdentifier); // PULL FROM EVENTS JSON ------

          _nomadData.default.connectToData(userEvents).then(events => {
            events.forEach(event => {
              if (event.userId === friend) {
                // console.log(event.eventName);
                const eventHolder = {
                  elementType: "p",
                  content: `Your fellow nomads upcoming event: ${event.eventName} on ${event.eventDate}`,
                  attributes: {
                    id: `event-${event.id}`
                  }
                };
                friendDomBuilder.push(eventHolder);
              }
            });
          }); // PULL FROM NEWSITEMS JSON ------


          _nomadData.default.connectToData(usersSavedArticle).then(newsShiz => {
            // console.log(newsShiz)
            newsShiz.forEach(userSpecificArticles => {
              if (userSpecificArticles.userId === friend) {
                console.log(userSpecificArticles.title);
                const articleHolder = {
                  elementType: "p",
                  content: userSpecificArticles.title,
                  attributes: {
                    id: `article-${userSpecificArticles.id}`
                  }
                };
                friendDomBuilder.push(articleHolder);
              }
            });
            console.log(friendDomBuilder);
            friendDomBuilder.forEach(object => {
              // console.log(object);
              friendContainer.appendChild(_domComponents.default.createDomElement(object));
            });
          });
        }
      });
    });
  }

};
var _default = friends; // const tester = [
//   {
//     elementType: "h2",
//     content: "jake bannon"
//   },
//   {
//     elementType: "p",
//     content: "Pool Party 3pm"
//   },
//   {
//     elementType: "p",
//     content: "check out this news article"
//   }
// ]

exports.default = _default;

},{"./domComponents":1,"./eventListeners":3,"./nomadData":8}],6:[function(require,module,exports){
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

},{"./domComponents":1,"./eventListeners":3,"./nomadData":8}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const news = {};
var _default = news;
exports.default = _default;

},{}],8:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RvbUNvbXBvbmVudHMuanMiLCIuLi9zY3JpcHRzL2RvbVJlbmRlcmVyLmpzIiwiLi4vc2NyaXB0cy9ldmVudExpc3RlbmVycy5qcyIsIi4uL3NjcmlwdHMvZXZlbnRzLmpzIiwiLi4vc2NyaXB0cy9mcmllbmRzLmpzIiwiLi4vc2NyaXB0cy9tZXNzYWdlcy5qcyIsIi4uL3NjcmlwdHMvbmV3cy5qcyIsIi4uL3NjcmlwdHMvbm9tYWREYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBOzs7O0FBRUEsTUFBTSxhQUFhLEdBQUc7QUFDcEIsRUFBQSxnQkFBZ0IsQ0FBQztBQUFFLElBQUEsV0FBRjtBQUFlLElBQUEsT0FBTyxHQUFHLElBQXpCO0FBQStCLElBQUEsUUFBL0I7QUFBeUMsSUFBQSxVQUFVLEdBQUc7QUFBdEQsR0FBRCxFQUE2RDtBQUMzRSxVQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixXQUF2QixDQUFoQjtBQUNBLElBQUEsT0FBTyxDQUFDLFdBQVIsR0FBc0IsT0FBdEI7O0FBRUEsUUFBSSxRQUFKLEVBQWM7QUFDWixNQUFBLE9BQU8sQ0FBQyxTQUFSLENBQWtCLEdBQWxCLENBQXNCLFFBQXRCO0FBQ0Q7O0FBRUQsU0FBSyxJQUFJLEdBQVQsSUFBZ0IsVUFBaEIsRUFBNEI7QUFDMUIsTUFBQSxPQUFPLENBQUMsWUFBUixDQUFxQixHQUFyQixFQUEwQixVQUFVLENBQUMsR0FBRCxDQUFwQztBQUNEOztBQUNELFdBQU8sT0FBUDtBQUNELEdBYm1COztBQWNwQixFQUFBLGdCQUFnQixHQUFHO0FBQ2pCLFVBQU0sYUFBYSxHQUFHLEtBQUssZ0JBQUwsQ0FBc0I7QUFBQyxNQUFBLFdBQVcsRUFBRSxNQUFkO0FBQXNCLE1BQUEsU0FBUyxFQUFFO0FBQUMsUUFBQSxLQUFLLEVBQUU7QUFBUjtBQUFqQyxLQUF0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OztBQUZLLFNBRmdELENBTXpEOztBQU55RCxPQUFqRCxDQUFaO0FBUUMsS0FUTSxNQVNBO0FBQ0gsTUFBQSxPQUFPLENBQUMsR0FBUixDQUFhLG1CQUFiO0FBQ0g7QUFDSjs7QUFuRGEsQ0FBbEI7ZUFzRGlCLFMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnNcIjtcblxuY29uc3QgZG9tQ29tcG9uZW50cyA9IHtcbiAgY3JlYXRlRG9tRWxlbWVudCh7IGVsZW1lbnRUeXBlLCBjb250ZW50ID0gbnVsbCwgY3NzQ2xhc3MsIGF0dHJpYnV0ZXMgPSB7fSB9KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuXG4gICAgaWYgKGNzc0NsYXNzKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xuICB9LFxuICBjcmVhdGVFdmVudElucHV0KCkge1xuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZvcm1cIiwgYXR0cmlidWVzOiB7Y2xhc3M6IFwiZXZlbnRJbnB1dFwifX0pO1xuICAgIGNvbnN0IGZvcm1IZWFkZXIgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImgxXCIsIGNvbnRlbnQ6IFwiQWRkIGEgTmV3IEV2ZW50OlwifSk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtSGVhZGVyKTtcblxuICAgIGNvbnN0IG5hbWVGaWVsZHNldCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZmllbGRzZXRcIn0pO1xuICAgIGNvbnN0IG5hbWVMYWJlbCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFdmVudCBOYW1lOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50TmFtZVwifX0pO1xuICAgIGNvbnN0IG5hbWVJbnB1dCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiaW5wdXRcIiwgYXR0cmlidXRlczoge3R5cGU6IFwidGV4dFwiLCBuYW1lOiBcImV2ZW50TmFtZVwiLCBpZDogXCJldmVudE5hbWVcIn19KTtcbiAgICBuYW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICBuYW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuICAgIGNvbnN0IGRhdGVGaWVsZHNldCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZmllbGRzZXRcIn0pO1xuICAgIGNvbnN0IGRhdGVMYWJlbCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFdmVudCBEYXRlOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50RGF0ZVwifX0pO1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiaW5wdXRcIiwgYXR0cmlidXRlczoge3R5cGU6IFwiZGF0ZVwiLCBuYW1lOiBcImV2ZW50RGF0ZVwiLCBpZDogXCJldmVudERhdGVcIn19KTtcbiAgICBkYXRlRmllbGRzZXQuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICBkYXRlRmllbGRzZXQuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICAgIGNvbnN0IHRpbWVGaWVsZHNldCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZmllbGRzZXRcIn0pO1xuICAgIGNvbnN0IHRpbWVMYWJlbCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFdmVudCBUaW1lOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50VGltZVwifX0pO1xuICAgIGNvbnN0IHRpbWVJbnB1dCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiaW5wdXRcIiwgYXR0cmlidXRlczoge3R5cGU6IFwidGltZVwiLCBuYW1lOiBcImV2ZW50VGltZVwiLCBpZDogXCJldmVudFRpbWVcIn19KTtcbiAgICB0aW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQodGltZUxhYmVsKTtcbiAgICB0aW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQodGltZUlucHV0KTtcblxuICAgIGNvbnN0IGxvY2F0aW9uRmllbGRzZXQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcbiAgICBjb25zdCBsb2NhdGlvbkxhYmVsID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJsYWJlbFwiLCBjb250ZW50OiBcIkVudGVyIExvY2F0aW9uOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50TG9jYXRpb25cIn19KTtcbiAgICBjb25zdCBsb2NhdGlvbklucHV0ID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwiZXZlbnRMb2NhdGlvblwiLCBpZDogXCJldmVudExvY2F0aW9uXCJ9fSk7XG4gICAgbG9jYXRpb25GaWVsZHNldC5hcHBlbmRDaGlsZChsb2NhdGlvbkxhYmVsKTtcbiAgICBsb2NhdGlvbkZpZWxkc2V0LmFwcGVuZENoaWxkKGxvY2F0aW9uSW5wdXQpO1xuXG4gICAgY29uc3Qgc2F2ZUJ1dHRvbiA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsIGNvbnRlbnQ6IFwiU2F2ZVwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJidXR0b25cIiwgaWQ6IFwic2F2ZUV2ZW50XCJ9fSk7XG5cbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVGaWVsZHNldCk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlRmllbGRzZXQpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGltZUZpZWxkc2V0KTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uRmllbGRzZXQpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoc2F2ZUJ1dHRvbik7XG5cbiAgICByZXR1cm4gZm9ybUNvbnRhaW5lcjtcbiAgfSxcbiAgY3JlYXRlRXZlbnRJdGVtIChldmVudE9iamVjdCkge1xuICAgIGNvbnN0IGV2ZW50SXRlbSA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiYXJ0aWNsZVwiLCBhdHRyaWJ1dGVzOiB7Y2xhc3M6IFwiZXZlbnRJdGVtXCJ9fSk7XG4gICAgY29uc3QgZXZlbnRIZWFkZXIgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImgyXCIsIGNvbnRlbnQ6IGV2ZW50T2JqZWN0LmV2ZW50TmFtZX0pO1xuICAgIGNvbnN0IGV2ZW50RGF0ZVRpbWUgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcInBcIiwgY29udGVudDogYEF0ICR7ZXZlbnRPYmplY3QuZXZlbnRUaW1lfSBvbiAke2V2ZW50T2JqZWN0LmV2ZW50RGF0ZX1gfSk7XG4gICAgY29uc3QgZXZlbnRMb2NhdGlvbiA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwicFwiLCBjb250ZW50OiBgTG9jYXRpb246ICR7ZXZlbnRPYmplY3QuZXZlbnRMb2NhdGlvbn1gfSk7XG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsIGNvbnRlbnQ6IFwiRWRpdFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJidXR0b25cIiwgaWQ6IGBlZGl0RXZlbnQtLSR7ZXZlbnRPYmplY3QuaWR9YH19KTtcbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudExpc3RlbmVycy5oYW5kbGVFdmVudEVkaXRCdXR0b24pO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsIGNvbnRlbnQ6IFwiRGVsZXRlXCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcImJ1dHRvblwiLCBpZDogYGRlbGV0ZUV2ZW50LS0ke2V2ZW50T2JqZWN0LmlkfWB9fSk7XG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudExpc3RlbmVycy5oYW5kbGVFdmVudERlbGV0ZUJ1dHRvbik7XG5cbiAgICBldmVudEl0ZW0uYXBwZW5kQ2hpbGQoZXZlbnRIZWFkZXIpO1xuICAgIGV2ZW50SXRlbS5hcHBlbmRDaGlsZChldmVudERhdGVUaW1lKTtcbiAgICBldmVudEl0ZW0uYXBwZW5kQ2hpbGQoZXZlbnRMb2NhdGlvbik7XG4gICAgZXZlbnRJdGVtLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgIGV2ZW50SXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gICAgcmV0dXJuIGV2ZW50SXRlbTtcbiAgfSxcbiAgY3JlYXRlRXZlbnRFZGl0SW5wdXQoY29udGFpbmVySWQsIGV2ZW50T2JqZWN0KSB7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZm9ybVwiLCBhdHRyaWJ1ZXM6IHtjbGFzczogXCJldmVudEVkaXRcIn19KTtcblxuICAgIGNvbnN0IG5hbWVGaWVsZHNldCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZmllbGRzZXRcIn0pO1xuICAgIGNvbnN0IG5hbWVMYWJlbCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFZGl0IE5hbWU6XCIsIGF0dHJpYnV0ZXM6IHtmb3I6IFwiZXZlbnROYW1lXCJ9fSk7XG4gICAgY29uc3QgbmFtZUlucHV0ID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwiZXZlbnROYW1lXCIsIHZhbHVlOiBldmVudE9iamVjdC5ldmVudE5hbWV9fSk7XG4gICAgbmFtZUZpZWxkc2V0LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG4gICAgbmFtZUZpZWxkc2V0LmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5cbiAgICBjb25zdCBkYXRlRmllbGRzZXQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcbiAgICBjb25zdCBkYXRlTGFiZWwgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImxhYmVsXCIsIGNvbnRlbnQ6IFwiRWRpdCBEYXRlOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50RGF0ZVwifX0pO1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiaW5wdXRcIiwgYXR0cmlidXRlczoge3R5cGU6IFwiZGF0ZVwiLCBuYW1lOiBcImV2ZW50RGF0ZVwiLCB2YWx1ZTogZXZlbnRPYmplY3QuZXZlbnREYXRlfX0pO1xuICAgIGRhdGVGaWVsZHNldC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgIGRhdGVGaWVsZHNldC5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXG4gICAgY29uc3QgdGltZUZpZWxkc2V0ID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJmaWVsZHNldFwifSk7XG4gICAgY29uc3QgdGltZUxhYmVsID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJsYWJlbFwiLCBjb250ZW50OiBcIkVkaXQgVGltZTpcIiwgYXR0cmlidXRlczoge2ZvcjogXCJldmVudFRpbWVcIn19KTtcbiAgICBjb25zdCB0aW1lSW5wdXQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImlucHV0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcInRpbWVcIiwgbmFtZTogXCJldmVudFRpbWVcIiwgdmFsdWU6IGV2ZW50T2JqZWN0LmV2ZW50VGltZX19KTtcbiAgICB0aW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQodGltZUxhYmVsKTtcbiAgICB0aW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQodGltZUlucHV0KTtcblxuICAgIGNvbnN0IGxvY2F0aW9uRmllbGRzZXQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcbiAgICBjb25zdCBsb2NhdGlvbkxhYmVsID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJsYWJlbFwiLCBjb250ZW50OiBcIkVkaXQgTG9jYXRpb246XCIsIGF0dHJpYnV0ZXM6IHtmb3I6IFwiZXZlbnRMb2NhdGlvblwifX0pO1xuICAgIGNvbnN0IGxvY2F0aW9uSW5wdXQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImlucHV0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcInRleHRcIiwgbmFtZTogXCJldmVudExvY2F0aW9uXCIsIHZhbHVlOiBldmVudE9iamVjdC5ldmVudExvY2F0aW9ufX0pO1xuICAgIGxvY2F0aW9uRmllbGRzZXQuYXBwZW5kQ2hpbGQobG9jYXRpb25MYWJlbCk7XG4gICAgbG9jYXRpb25GaWVsZHNldC5hcHBlbmRDaGlsZChsb2NhdGlvbklucHV0KTtcblxuICAgIGNvbnN0IHVwZGF0ZUJ1dHRvbiA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsIGNvbnRlbnQ6IFwiVXBkYXRlXCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcImJ1dHRvblwiLCBpZDogXCJzdWJtaXRFZGl0c1wifX0pO1xuICAgIC8vIHVwZGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnRMaXN0ZW5lcnMuaGFuZGxlRXZlbnRVcGRhdGVCdXR0b24pO1xuXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lRmllbGRzZXQpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUZpZWxkc2V0KTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVGaWVsZHNldCk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbkZpZWxkc2V0KTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgICBsZXQgY3VycmVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2NvbnRhaW5lcklkfWApO1xuICAgIHdoaWxlIChjdXJyZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGN1cnJlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQoY3VycmVudENvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZvcm1Db250YWluZXI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZG9tQ29tcG9uZW50cyIsIi8vIGltcG9ydCBldmVudHMgZnJvbSBcIi4vZXZlbnRzXCI7XG5pbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xuLy8gaW1wb3J0IG1lc3NhZ2VzIGZyb20gXCIuL21lc3NhZ2VzXCI7XG5pbXBvcnQgZnJpZW5kcyBmcm9tIFwiLi9mcmllbmRzXCI7XG5pbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnNcIjtcbmltcG9ydCBuZXdzIGZyb20gXCIuL25ld3NcIlxuY29uc29sZS5sb2coXCJJJ20gd29ya2luZ1wiKVxuXG4vLyB0ZW1wbGF0ZSBmb3Igb2JqZWN0IHRvIHBhc3MgaW50byBub21hZERhdGEuY29ubmVjdFRvRGF0YSgpIGlmIHlvdSBhcmUgZG9pbmcgYSBHRVRcblxuLy8gbGV0IGZldGNoVGVzdCA9IHtcblxuLy8gICAgIFwiZGF0YVNldFwiIDogXCJ1c2Vyc1wiLFxuLy8gICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxuLy8gICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IFwiXCIsXG4vLyAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1ldmVudHNcIlxuLy8gfVxuXG4vLyB0ZW1wbGF0ZSBmb3Igb2JqZWN0IHRvIHBhc3MgaW50byBub21hZERhdGEuY29ubmVjdFRvRGF0YSgpIGlmIHlvdSBhcmUgZG9pbmcgYSBQT1NUXG5cbi8vIGxldCBmZXRjaFRlc3QyID0ge1xuXG4vLyAgICAgXCJkYXRhU2V0XCIgOiBcImV2ZW50c1wiLFxuLy8gICAgIFwiZmV0Y2hUeXBlXCIgOiBcIlBPU1RcIixcbi8vICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiB7XG4vLyAgICAgICBcInVzZXJJZFwiOiAxLFxuLy8gICAgICAgXCJldmVudE5hbWVcIjogXCJ5ZXQgYW5vdGhlciB0b2dhIHBhcnR5XCIsXG4vLyAgICAgICBcImV2ZW50RGF0ZVwiOiBcIjItMTJcIixcbi8vICAgICAgIFwiZXZlbnRUaW1lXCI6IFwiMzowMHBtXCIsXG4vLyAgICAgICBcImV2ZW50TG9jYXRpb25cIjogXCJWZWdhc1wiXG4vLyAgICAgfVxuLy8gfVxuXG4vLyB0ZW1wbGF0ZSBmb3Igb2JqZWN0IHRvIHBhc3MgaW50byBub21hZERhdGEuY29ubmVjdFRvRGF0YSgpIGlmIHlvdSBhcmUgZG9pbmcgYSBQVVRcblxuLy8gbGV0IGZldGNoVGVzdDMgPSB7XG5cbi8vICAgICBcInB1dElkXCIgOiAyLFxuLy8gICAgIFwiZGF0YVNldFwiIDogXCJldmVudHNcIixcbi8vICAgICBcImZldGNoVHlwZVwiIDogXCJQVVRcIixcbi8vICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiB7XG4vLyAgICAgICBcImlkXCIgOiAyLFxuLy8gICAgICAgXCJ1c2VySWRcIjogMSxcbi8vICAgICAgIFwiZXZlbnROYW1lXCI6IFwiYW5vdGhlciB0b2dhIHBhcnR5XCIsXG4vLyAgICAgICBcImV2ZW50RGF0ZVwiOiBcIjItMTVcIixcbi8vICAgICAgIFwiZXZlbnRUaW1lXCI6IFwiMzowMHBtXCIsXG4vLyAgICAgICBcImV2ZW50TG9jYXRpb25cIjogXCJWZWdhc1wiXG4vLyAgICAgfVxuLy8gfVxuXG4vLyBub21hZERhdGEuY29ubmVjdFRvRGF0YShmZXRjaFRlc3QzKVxuLy9ORVdTIFNFQ1RJT05cbi8vIG5ld3Muc2F2ZSgpO1xuLy8gbmV3cy5hbGxTYXZlZCgpO1xuLy8gbmV3cy5nZXROZXdzKCk7XG4vLyBuZXdzLm5ld3NFbGVtZW50Q3JlYXRvcigpO1xuXG5pbXBvcnQgbWVzc2FnZXMgZnJvbSBcIi4vbWVzc2FnZXNcIjtcblxuXG4vLyBtZXNzYWdlcy5jcmVhdGVNZXNzYWdlQm9hcmQoKTtcblxuZnVuY3Rpb24gdXNlckxvZ2luICgpIHtcblxuICAgIGxldCB1c2VyTmFtZSA9IFwiSGVybmFuZG9cIjtcbiAgICBsZXQgcGFzc3dvcmQgPSBcInlvbWFtYVwiO1xuXG4gICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuXG4gICAgICAgIFwiZGF0YVNldFwiIDogXCJ1c2Vyc1wiLFxuICAgICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcbiAgICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1ldmVudHNcIlxuXG4gICAgfSkudGhlbihwYXJzZWRVc2VycyA9PiB7XG5cbiAgICAgICAgcGFyc2VkVXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcblxuICAgICAgICAgICAgaWYgKHVzZXJOYW1lID09PSB1c2VyLnVzZXJOYW1lICYmIHBhc3N3b3JkID09PSB1c2VyLnBhc3N3b3JkKSB7XG5cbiAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VySWQnLCB1c2VyLmlkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KVxuICAgIGxldCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcbiAgICBsb2FkRGFzaGJvYXJkKHVzZXJJZClcbiAgICAvLyBjb25zb2xlLmxvZyhcIlVzZXJJZCA9IFwiLCBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKSlcbn1cblxudXNlckxvZ2luKCk7XG5cbmZ1bmN0aW9uIGxvYWREYXNoYm9hcmQgKHVzZXJJZCkge1xuICAgIC8vIGNvbnNvbGUubG9nKGBUaGFua3MgZm9yIHBhc3NpbmcgdGhlIHVzZXJJZC4gIFRoZSB1c2VySWQgaXMgJHt1c2VySWR9YClcbn1cblxuZnJpZW5kcy5kZWZpbmVDdXJyZW50VXNlcnNGcmllbmRzKClcbiIsImltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XG5pbXBvcnQgZG9tQ29tcG9uZW50cyBmcm9tIFwiLi9kb21Db21wb25lbnRzXCI7XG5pbXBvcnQgZXZlbnRzIGZyb20gXCIuL2V2ZW50c1wiO1xuXG5jb25zdCBldmVudExpc3RlbmVycyA9IHtcbiAgZnJpZW5kc0RlbGV0ZUZyaWVuZCAoKSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTtcbiAgICBcbiAgfSxcbiAgICBoYW5kbGVFdmVudFNhdmVCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dHRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnROYW1lXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlSW5wdXR0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V2ZW50RGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdGltZUlucHV0dGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldmVudFRpbWVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uSW5wdXR0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V2ZW50TG9jYXRpb25cIikudmFsdWU7XG5cbiAgICAgICAgY29uc3QgZXZlbnRPYmplY3QgPSB7XG4gICAgICAgICAgICBldmVudE5hbWU6IG5hbWVJbnB1dHRlZCxcbiAgICAgICAgICAgIGV2ZW50RGF0ZTogZGF0ZUlucHV0dGVkLFxuICAgICAgICAgICAgZXZlbnRUaW1lOiB0aW1lSW5wdXR0ZWQsXG4gICAgICAgICAgICBldmVudExvY2F0aW9uOiBsb2NhdGlvbklucHV0dGVkXG4gICAgICAgIH07XG5cblxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgICAgICBkYXRhU2V0OiBcImV2ZW50c1wiLFxuICAgICAgICAgICAgZmV0Y2hUeXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGRhdGFCYXNlT2JqZWN0OiB7XG4gICAgICAgICAgICAgICAgdXNlcklkOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpLFxuICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogZXZlbnRPYmplY3QuZXZlbnROYW1lLFxuICAgICAgICAgICAgICAgIGV2ZW50RGF0ZTogZXZlbnRPYmplY3QuZXZlbnREYXRlLFxuICAgICAgICAgICAgICAgIGV2ZW50VGltZTogZXZlbnRPYmplY3QuZXZlbnRUaW1lLFxuICAgICAgICAgICAgICAgIGV2ZW50TG9jYXRpb246IGV2ZW50T2JqZWN0LmV2ZW50TG9jYXRpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oICgpID0+IHtcbiAgICAgICAgICAgIGV2ZW50cy5hcHBlbmRVc2VyRXZlbnRzKCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgaGFuZGxlRXZlbnREZWxldGVCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IGlkVG9EZWxldGUgPSBldmVudC50YXJnZXQuaWQuc3BsaXQoXCItLVwiKVsxXTtcbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgICAgICAgZGVsZXRlSWQ6IGlkVG9EZWxldGUsXG4gICAgICAgICAgICBkYXRhU2V0OiBcImV2ZW50c1wiLFxuICAgICAgICAgICAgZmV0Y2hUeXBlOiBcIkRFTEVURVwiLFxuICAgICAgICAgICAgZGF0YUJhc2VPYmplY3Q6IHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oICgpID0+IHtcbiAgICAgICAgICAgIGV2ZW50cy5hcHBlbmRVc2VyRXZlbnRzKCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgaGFuZGxlRXZlbnRFZGl0QnV0dG9uKCkge1xuICAgICAgICBjb25zdCBpZFRvRWRpdCA9IGV2ZW50LnRhcmdldC5pZC5zcGxpdChcIi0tXCIpWzFdO1xuICAgICAgICBjb25zdCBldmVudE9iamVjdCA9XG4gICAgICAgIGRvbUNvbXBvbmVudHMuY3JlYXRlRXZlbnRFZGl0SW5wdXQoaWRUb0VkaXQsIClcbiAgICB9LFxuICAgIGhhbmRsZUV2ZW50VXBkYXRlQnV0dG9uKCkge1xuXG4gICAgfSxcbiAgICBwb3N0TmV3TWVzc2FnZSgpIHtcblxuICAgICAgICBsZXQgbWVzc2FnZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlSW5wdXRcIik7XG4gICAgICAgIGxldCB0aW1lU3RhbXAgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcblxuICAgICAgICAgICAgZGF0YVNldCA6IFwibWVzc2FnZXNcIixcbiAgICAgICAgICAgIGZldGNoVHlwZSA6IFwiUE9TVFwiLFxuICAgICAgICAgICAgZGF0YUJhc2VPYmplY3QgOiB7XG4gICAgICAgICAgICAgICAgdXNlcklkIDogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyksXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA6IG1lc3NhZ2VJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICB0aW1lU3RhbXAgOiB0aW1lU3RhbXBcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpOyAvL3JlcGxhY2Ugd2l0aCBET00gcmVmcmVzaCBmdW5jdGlvbiBvbmNlIGJ1aWx0XG4gICAgfSxcbiAgICBlZGl0TWVzc2FnZSgpIHtcbiAgICAgICAgbGV0IG51bWJlciA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQ7XG4gICAgICAgIGxldCBtZXNzYWdlQXJyYXkgPSBudW1iZXIuc3BsaXQoXCJfXCIpO1xuICAgICAgICBsZXQgbWVzc2FnZUlkID0gbWVzc2FnZUFycmF5WzFdO1xuXG4gICAgICAgIGxldCBtZXNzYWdlVG9FZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7bWVzc2FnZUlkfWApO1xuICAgICAgICBsZXQgbWVzc2FnZVRleHQgPSBtZXNzYWdlVG9FZGl0LmlubmVySFRNTDtcbiAgICAgICAgbGV0IG1lc3NhZ2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbWVzc2FnZSR7bWVzc2FnZUlkfWApO1xuICAgICAgICBsZXQgbWVzc2FnZVRpbWVTdGFtcCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQubmFtZTtcblxuICAgICAgICBsZXQgbWVzc2FnZUVkaXRGb3JtID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50ICh7XG5cbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJmb3JtXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZUVkaXRGb3JtXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJtZXNzYWdlRWRpdEZvcm1cIlxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBtZXNzYWdlRWRpdEZpZWxkc2V0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcblxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImZpZWxkc2V0XCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZUVkaXRGaWVsZHNldFwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwibWVzc2FnZUVkaXRGaWVsZHNldFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgbWVzc2FnZUVkaXRJbnB1dCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG5cbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJpbnB1dFwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm1lc3NhZ2VFZGl0SW5wdXRcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBgbWVzc2FnZUVkaXRJbnB1dF8ke21lc3NhZ2VJZH1gLFxuICAgICAgICAgICAgICAgIHZhbHVlIDogYCR7bWVzc2FnZVRleHR9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbWVzc2FnZUVkaXRTdWJtaXRCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuXG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZUVkaXRTdWJtaXRCdXR0b25cIixcbiAgICAgICAgICAgIGNvbnRlbnQgOiBcIlN1Ym1pdFwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IGBtZXNzYWdlRWRpdFN1Ym1pdEJ1dHRvbl8ke21lc3NhZ2VJZH1gLFxuICAgICAgICAgICAgICAgIG5hbWU6IG1lc3NhZ2VUaW1lU3RhbXBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVzc2FnZUVkaXRTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50TGlzdGVuZXJzLmhhbmRsZUVkaXRTdWJtaXRCdXR0b24pXG4gICAgICAgIG1lc3NhZ2VFZGl0RmllbGRzZXQuYXBwZW5kQ2hpbGQobWVzc2FnZUVkaXRJbnB1dClcbiAgICAgICAgbWVzc2FnZUVkaXRGaWVsZHNldC5hcHBlbmRDaGlsZChtZXNzYWdlRWRpdFN1Ym1pdEJ1dHRvbilcbiAgICAgICAgbWVzc2FnZUVkaXRGb3JtLmFwcGVuZENoaWxkKG1lc3NhZ2VFZGl0RmllbGRzZXQpXG4gICAgICAgIG1lc3NhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZUVkaXRGb3JtKVxuICAgIH0sXG4gICAgaGFuZGxlRWRpdFN1Ym1pdEJ1dHRvbigpIHtcbiAgICAgICAgbGV0IG51bWJlciA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQ7XG4gICAgICAgIGxldCBtZXNzYWdlQXJyYXkgPSBudW1iZXIuc3BsaXQoXCJfXCIpO1xuICAgICAgICBsZXQgbWVzc2FnZUlkID0gbWVzc2FnZUFycmF5WzFdO1xuICAgICAgICBsZXQgbWVzc2FnZVRpbWVTdGFtcCA9IGAke2V2ZW50LmN1cnJlbnRUYXJnZXQubmFtZX1gO1xuICAgICAgICBsZXQgbWVzc2FnZUVkaXRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBtZXNzYWdlRWRpdElucHV0XyR7bWVzc2FnZUlkfWApO1xuXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcblxuICAgICAgICAgICAgcHV0SWQgOiBtZXNzYWdlSWQsXG4gICAgICAgICAgICBkYXRhU2V0IDogXCJtZXNzYWdlc1wiLFxuICAgICAgICAgICAgZmV0Y2hUeXBlIDogXCJQVVRcIixcbiAgICAgICAgICAgIGRhdGFCYXNlT2JqZWN0IDoge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA6IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgJHttZXNzYWdlRWRpdElucHV0LnZhbHVlfWAsXG4gICAgICAgICAgICAgICAgdGltZVN0YW1wOiBgJHttZXNzYWdlVGltZVN0YW1wfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBldmVudExpc3RlbmVyczsiLCIvLyBBdXRob3I6IENvbGUgQnJ5YW50IC8gUHVycG9zZTpcblxuaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcbmltcG9ydCBldmVudExpc3RlbmVycyBmcm9tIFwiLi9ldmVudExpc3RlbmVyc1wiO1xuXG5jb25zdCBldmVudHMgPSB7XG4gIHNob3dFdmVudEZvcm0gKCkge1xuICAgIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3V0cHV0XCIpO1xuICAgIGNvbnN0IGV2ZW50Rm9ybSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRXZlbnRJbnB1dCgpO1xuICAgIG91dHB1dC5hcHBlbmRDaGlsZChldmVudEZvcm0pO1xuICAgIGNvbnN0IGV2ZW50TG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIilcbiAgICBldmVudExvZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImV2ZW50TG9nXCIpO1xuICAgIG91dHB1dC5hcHBlbmRDaGlsZChldmVudExvZyk7XG4gIH0sXG4gIGFwcGVuZFVzZXJFdmVudHMoKSB7XG4gICAgY29uc3QgZXZlbnRMb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V2ZW50TG9nXCIpO1xuICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgIGRhdGFTZXQ6IFwiZXZlbnRzXCIsXG4gICAgICBmZXRjaFR5cGU6IFwiR0VUXCIsXG4gICAgICBkYXRhQmFzZU9iamVjdDoge1xuICAgICAgICB1c2VySWQ6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIilcbiAgICAgICAgfSxcbiAgICAgIGVtYmVkSXRlbTogXCI/X2VtYmVkPWV2ZW50c1wiXG4gICAgfSlcbiAgICAudGhlbihwYXJzZWRSZXNwb25zZSA9PiB7XG4gICAgICBsZXQgZG9jdUZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICBwYXJzZWRSZXNwb25zZS5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgICAgd2hpbGUgKGV2ZW50TG9nLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICBldmVudExvZy5yZW1vdmVDaGlsZChldmVudExvZy5maXJzdENoaWxkKVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBldmVudEl0ZW0gPSBkb21Db21wb25lbnRzLmNyZWF0ZUV2ZW50SXRlbShldmVudCk7XG4gICAgICAgIGRvY3VGcmFnLmFwcGVuZENoaWxkKGV2ZW50SXRlbSk7XG4gICAgICB9KTtcbiAgICAgIGV2ZW50TG9nLmFwcGVuZENoaWxkKGRvY3VGcmFnKTtcbiAgICB9KTtcbiAgfVxufTtcblxuLy8gZXZlbnRzLnNob3dFdmVudEZvcm0oKTtcbi8vIGV2ZW50cy5hcHBlbmRVc2VyRXZlbnRzKCk7XG4vLyBldmVudHMuZGVsZXRlRXZlbnQoKTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRzOyIsImltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCJcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcbmltcG9ydCBldmVudExpc3RlbmVycyBmcm9tIFwiLi9ldmVudExpc3RlbmVyc1wiO1xuXG5jb25zdCBmcmllbmRzID0ge1xuXG4gIFxuICBkZWZpbmVDdXJyZW50VXNlcnNGcmllbmRzICgpIHtcbiAgICBjb25zdCBjdXJyZW50VXNlciA9IDE7XG4gICAgbGV0IGZyaWVuZEhvbGRlciA9IFtdO1xuLy8gUFVMTCBGUk9NIEZSSUVORFMgSlNPTi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBjb25zdCBmcmllbmRJbnRlcnNlY3Rpb25UYWJsZSA9IHtcbiAgICBcImRhdGFTZXRcIiA6IFwiZnJpZW5kc1wiLFxuICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxuICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IFwiXCIsXG4gICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1ldmVudHNcIlxufVxubm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoZnJpZW5kSW50ZXJzZWN0aW9uVGFibGUpXG4udGhlbihmcm9tRnJpZW5kcyA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKGZyb21GcmllbmRzKVxuICBmcm9tRnJpZW5kcy5mb3JFYWNoKGZyaWVuZERhdGEgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGZyaWVuZERhdGEpXG4gICAgaWYgKGZyaWVuZERhdGEudXNlcklkID09PSBjdXJyZW50VXNlcikge1xuICAgICAgZnJpZW5kSG9sZGVyLnB1c2goZnJpZW5kRGF0YS5vdGhlckZyaWVuZElkKVxuICAgIH1cbiAgfSlcbiAgZnJpZW5kSG9sZGVyLmZvckVhY2gob2ZmaWNpYWxGcmllbmQgPT4ge1xuICAgIHRoaXMubG9hZEN1cnJlbnRVc2Vyc0ZyaWVuZHMob2ZmaWNpYWxGcmllbmQpXG4gIH0pXG59KVxufSxcbmxvYWRDdXJyZW50VXNlcnNGcmllbmRzIChmcmllbmQpIHtcbiAgLy8gUFVMTCBGUk9NIFVTRVJTIEpTT04gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gY29uc29sZS5sb2coZnJpZW5kKVxuICAgICAgY29uc3QgdXNlckluZm8gPSB7XG4gICAgICAgIFwiZGF0YVNldFwiIDogXCJ1c2Vyc1wiLFxuICAgICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcbiAgICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcbiAgICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1ldmVudHNcIlxuICAgICAgfVxuICAgICAgY29uc3QgdXNlckV2ZW50cyA9IHtcbiAgICAgICAgXCJkYXRhU2V0XCIgOiBcImV2ZW50c1wiLFxuICAgICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcbiAgICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcbiAgICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1ldmVudHNcIlxuICAgICAgfVxuICAgICAgY29uc3QgdXNlcnNTYXZlZEFydGljbGUgPSB7XG4gICAgICAgIFwiZGF0YVNldFwiIDogXCJuZXdzaXRlbXNcIixcbiAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IFwiXCIsXG4gICAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9bmV3c2l0ZW1zXCJcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRhcmdldENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpXG4gICAgICB0YXJnZXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwic2VjdGlvblwiLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgY2xhc3M6IFwiZnJpZW5kLWNvbnRhaW5lclwiLFxuICAgICAgICAgIGlkOiBgZnJpZW5kLSR7ZnJpZW5kfWBcbiAgICAgICAgfVxuICAgICAgfSkpXG4gICAgICBjb25zdCBmcmllbmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZnJpZW5kLSR7ZnJpZW5kfWApXG4gICAgICBjb25zdCBkZWxldGVGcmllbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICBkZWxldGVGcmllbmQuY2xhc3NMaXN0LmFkZChgZGVsZXRlLWZyaWVuZC0ke2ZyaWVuZH1gKVxuICAgICAgZGVsZXRlRnJpZW5kLnRleHRDb250ZW50ID0gXCJERUxFVEVcIjtcbiAgICAgIGZyaWVuZENvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVGcmllbmQpO1xuICAgICAgZGVsZXRlRnJpZW5kLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGV2ZW50TGlzdGVuZXJzLmZyaWVuZHNEZWxldGVGcmllbmQoKVxuICAgICAgfSlcblxuICAgICAgbGV0IGZyaWVuZERvbUJ1aWxkZXIgPSBbXTtcbiAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHVzZXJJbmZvKVxuICAgICAgLnRoZW4oZnJvbVVzZXJEYXRhID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZnJvbVVzZXJEYXRhKTtcbiAgICAgICAgZnJvbVVzZXJEYXRhLmZvckVhY2godXNlckluZm8gPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGZyaWVuZCwgdXNlckluZm8uaWQpXG4gICAgICAgICAgaWYgKHVzZXJJbmZvLmlkID09PSBmcmllbmQpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJJbmZvLnVzZXJOYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGZyaWVuZElkZW50aWZpZXIgPSB7XG4gICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImgyXCIsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHVzZXJJbmZvLnVzZXJOYW1lLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnJpZW5kRG9tQnVpbGRlci5wdXNoKGZyaWVuZElkZW50aWZpZXIpXG4gICAgICAgICAgICAvLyBQVUxMIEZST00gRVZFTlRTIEpTT04gLS0tLS0tXG4gICAgICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh1c2VyRXZlbnRzKVxuICAgICAgICAgICAgLnRoZW4oZXZlbnRzID0+IHtcbiAgICAgICAgICAgICAgZXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC51c2VySWQgPT09IGZyaWVuZCkge1xuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQuZXZlbnROYW1lKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50SG9sZGVyID0ge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGBZb3VyIGZlbGxvdyBub21hZHMgdXBjb21pbmcgZXZlbnQ6ICR7ZXZlbnQuZXZlbnROYW1lfSBvbiAke2V2ZW50LmV2ZW50RGF0ZX1gLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IGBldmVudC0ke2V2ZW50LmlkfWAsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGZyaWVuZERvbUJ1aWxkZXIucHVzaChldmVudEhvbGRlcilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gUFVMTCBGUk9NIE5FV1NJVEVNUyBKU09OIC0tLS0tLVxuICAgICAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEodXNlcnNTYXZlZEFydGljbGUpXG4gICAgICAgICAgICAudGhlbihuZXdzU2hpeiA9PiB7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld3NTaGl6KVxuICAgICAgICAgICAgICBuZXdzU2hpei5mb3JFYWNoKHVzZXJTcGVjaWZpY0FydGljbGVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodXNlclNwZWNpZmljQXJ0aWNsZXMudXNlcklkID09PSBmcmllbmQpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJTcGVjaWZpY0FydGljbGVzLnRpdGxlKVxuICAgICAgICAgICAgICAgICAgY29uc3QgYXJ0aWNsZUhvbGRlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwicFwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB1c2VyU3BlY2lmaWNBcnRpY2xlcy50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgICAgICAgIGlkOiBgYXJ0aWNsZS0ke3VzZXJTcGVjaWZpY0FydGljbGVzLmlkfWAsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGZyaWVuZERvbUJ1aWxkZXIucHVzaChhcnRpY2xlSG9sZGVyKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZnJpZW5kRG9tQnVpbGRlcilcbiAgICAgICAgICAgICAgZnJpZW5kRG9tQnVpbGRlci5mb3JFYWNoKG9iamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob2JqZWN0KTtcbiAgICAgICAgICAgICAgICBmcmllbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KG9iamVjdCkpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmcmllbmRzXG5cbi8vIGNvbnN0IHRlc3RlciA9IFtcbi8vICAge1xuLy8gICAgIGVsZW1lbnRUeXBlOiBcImgyXCIsXG4vLyAgICAgY29udGVudDogXCJqYWtlIGJhbm5vblwiXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBlbGVtZW50VHlwZTogXCJwXCIsXG4vLyAgICAgY29udGVudDogXCJQb29sIFBhcnR5IDNwbVwiXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBlbGVtZW50VHlwZTogXCJwXCIsXG4vLyAgICAgY29udGVudDogXCJjaGVjayBvdXQgdGhpcyBuZXdzIGFydGljbGVcIlxuLy8gICB9XG4vLyBdIiwiaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcbmltcG9ydCBldmVudExpc3RlbmVycyBmcm9tIFwiLi9ldmVudExpc3RlbmVyc1wiO1xuXG5jb25zdCBtZXNzYWdlcyA9IHtcblxuICAgIGNyZWF0ZU1lc3NhZ2VCb2FyZCgpIHtcblxuICAgICAgICBsZXQgb3V0cHV0QXJ0aWNsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpXG5cbiAgICAgICAgLy9jcmVhdGUgZGlzcGxheSBjb250YWluZXJcbiAgICAgICAgbGV0IG1lc3NhZ2VzQ29udGFpbmVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJzZWN0aW9uXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZXNDb250YWluZXJcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcIm1lc3NhZ2VzQ29udGFpbmVyXCJcbiAgICAgICAgICAgIH19KTtcblxuICAgICAgICAvL2NyZWF0ZSBtZXNzYWdlIGlucHV0IGZpZWxkXG4gICAgICAgIGxldCBtZXNzYWdlSW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImlucHV0XCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZUlucHV0XCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJtZXNzYWdlSW5wdXRcIixcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBNZXNzYWdlIEhlcmVcIlxuICAgICAgICAgICAgfX0pO1xuXG4gICAgICAgIC8vY3JlYXRlIHN1Ym1pdCBidXR0b24gZm9yIGlucHV0IGZpZWxkXG4gICAgICAgIGxldCBtZXNzYWdlU3VibWl0QnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJidXR0b25cIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlU3VibWl0QnV0dG9uXCIsXG4gICAgICAgICAgICBjb250ZW50IDogXCJTdWJtaXRcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcIm1lc3NhZ2VTdWJtaXRCdXR0b25cIlxuICAgICAgICAgICAgfX0pO1xuXG4gICAgICAgIG1lc3NhZ2VTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50TGlzdGVuZXJzLnBvc3ROZXdNZXNzYWdlKTtcbiAgICAgICAgbWVzc2FnZXNDb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZUlucHV0KTtcbiAgICAgICAgbWVzc2FnZXNDb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZVN1Ym1pdEJ1dHRvbik7XG4gICAgICAgIG91dHB1dEFydGljbGUuYXBwZW5kQ2hpbGQobWVzc2FnZXNDb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMuZ2V0TWVzc2FnZXMoKVxuICAgIH0sXG5cbiAgICBnZXRNZXNzYWdlcygpIHtcblxuICAgICAgICAvL0dFVCBmZXRjaCAmIC50aGVuIHRvIGJ1aWxkIG9iamVjdChzKSBmb3IgY3JlYXRlRG9tRWxlbWVudCgpIHVzaW5nIF9leHBhbmQgdG8gZGlzcGxheSBVTjogbWVzc2FnZVxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG5cbiAgICAgICAgICAgICAgICBkYXRhU2V0IDogXCJtZXNzYWdlc1wiLFxuICAgICAgICAgICAgICAgIGZldGNoVHlwZSA6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgZW1iZWRJdGVtIDogXCI/X2V4cGFuZD11c2VyXCJcblxuICAgICAgICB9KS50aGVuKG1lc3NhZ2VzID0+IHtcblxuICAgICAgICAgICAgbGV0IG1lc3NhZ2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2VzQ29udGFpbmVyXCIpO1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZUlucHV0XCIpO1xuXG4gICAgICAgICAgICAvL3NvcnQgbWVzc2FnZXMgYnkgdGltZVN0YW1wXG4gICAgICAgICAgICBtZXNzYWdlcy5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGEudGltZVN0YW1wKSAtIG5ldyBEYXRlKGIudGltZVN0YW1wKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvL2J1aWxkIERPTSBDb21wb25lbnQgZm9yIGVhY2ggbWVzc2FnZSBhbmQgYXBwZW5kXG4gICAgICAgICAgICBtZXNzYWdlcy5mb3JFYWNoKG1lc3NhZ2UgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlVGV4dCA9IG1lc3NhZ2UubWVzc2FnZTtcbiAgICAgICAgICAgICAgICBsZXQgdXNlck5hbWUgPSBtZXNzYWdlLnVzZXIudXNlck5hbWU7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VJZCA9IG1lc3NhZ2UuaWQ7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VUaW1lU3RhbXAgPSBtZXNzYWdlLnRpbWVTdGFtcDtcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZVVzZXIgPSBgJHttZXNzYWdlLnVzZXJJZH1gO1xuICAgICAgICAgICAgICAgIGxldCBsb2dnZWRJblVzZXIgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcblxuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlRWxlbWVudCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG5cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImgzXCIsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlVXNlck5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA6IGAke3VzZXJOYW1lfTpgLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGBtZXNzYWdlJHttZXNzYWdlSWR9YFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlRWxlbWVudDIgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwicFwiLFxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZVRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA6IGAke21lc3NhZ2VUZXh0fWAsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogbWVzc2FnZUlkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlVXNlciA9PT0gbG9nZ2VkSW5Vc2VyKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VFZGl0QnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm1lc3NhZ2VFZGl0QnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50IDogXCJFZGl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBgbWVzc2FnZUVkaXRCdXR0b25fJHttZXNzYWdlSWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBtZXNzYWdlVGltZVN0YW1wXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudExpc3RlbmVycy5lZGl0TWVzc2FnZSwge29uY2U6IHRydWV9KVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudC5hcHBlbmRDaGlsZChtZXNzYWdlRWxlbWVudDIpXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50LmFwcGVuZENoaWxkKG1lc3NhZ2VFZGl0QnV0dG9uKVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlQ29udGFpbmVyLmluc2VydEJlZm9yZShtZXNzYWdlRWxlbWVudCwgbWVzc2FnZUlucHV0KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQuYXBwZW5kQ2hpbGQobWVzc2FnZUVsZW1lbnQyKVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlQ29udGFpbmVyLmluc2VydEJlZm9yZShtZXNzYWdlRWxlbWVudCwgbWVzc2FnZUlucHV0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lc3NhZ2VzOyIsImNvbnN0IG5ld3MgPSB7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3cyIsImNvbnN0IG5vbWFkRGF0YSA9IHtcblxuICAgIGNvbm5lY3RUb0RhdGEoZmV0Y2hPYmplY3QpIHtcblxuICAgICAgbGV0IGRhdGFTZXQgPSBmZXRjaE9iamVjdC5kYXRhU2V0O1xuICAgICAgbGV0IGVtYmVkSXRlbSA9IGZldGNoT2JqZWN0LmVtYmVkSXRlbTtcbiAgICAgIGxldCBmZXRjaFR5cGUgPSBmZXRjaE9iamVjdC5mZXRjaFR5cGU7XG4gICAgICBsZXQgZGF0YUJhc2VPYmplY3QgPSBmZXRjaE9iamVjdC5kYXRhQmFzZU9iamVjdDtcbiAgICAgIGxldCBwdXRJZCA9IGZldGNoT2JqZWN0LnB1dElkO1xuICAgICAgbGV0IGRlbGV0ZUlkID0gZmV0Y2hPYmplY3QuZGVsZXRlSWQ7XG5cbiAgICAgICAgaWYgKGZldGNoVHlwZSA9PSBcIkdFVFwiKSB7XG5cbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHtkYXRhU2V0fSR7ZW1iZWRJdGVtfWApXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpIC8vIHBhcnNlcyByZXNwb25zZSB0byBKU09OXG5cbiAgICAgICAgfSBlbHNlIGlmIChmZXRjaFR5cGUgPT09IFwiUE9TVFwiKXtcblxuICAgICAgICAvLyBEZWZhdWx0IG9wdGlvbnMgYXJlIG1hcmtlZCB3aXRoICpcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHtkYXRhU2V0fWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogYCR7ZmV0Y2hUeXBlfWAsIC8vICpHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBldGMuXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG4gICAgICAgICAgICAgICAgLy8gXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyByZWZlcnJlcjogXCJuby1yZWZlcnJlclwiLCAvLyBuby1yZWZlcnJlciwgKmNsaWVudFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YUJhc2VPYmplY3QpLCAvLyBib2R5IGRhdGEgdHlwZSBtdXN0IG1hdGNoIFwiQ29udGVudC1UeXBlXCIgaGVhZGVyXG4gICAgICAgIH0pXG5cbiAgICAgICAgfSBlbHNlIGlmKGZldGNoVHlwZSA9PT0gXCJQVVRcIil7XG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4LyR7ZGF0YVNldH0vJHtwdXRJZH1gLCB7XG4gICAgICAgICAgICBtZXRob2Q6IGAke2ZldGNoVHlwZX1gLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjLlxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICAgICAgICAgIC8vIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gcmVmZXJyZXI6IFwibm8tcmVmZXJyZXJcIiwgLy8gbm8tcmVmZXJyZXIsICpjbGllbnRcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGFCYXNlT2JqZWN0KSwgLy8gYm9keSBkYXRhIHR5cGUgbXVzdCBtYXRjaCBcIkNvbnRlbnQtVHlwZVwiIGhlYWRlclxuICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKGZldGNoVHlwZSA9PT0gXCJERUxFVEVcIikge1xuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC8ke2RhdGFTZXR9LyR7ZGVsZXRlSWR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiBgJHtmZXRjaFR5cGV9YCwgLy8gKkdFVCwgUE9TVCwgUFVULCBERUxFVEUsIGV0Yy5cbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcbiAgICAgICAgICAgICAgICAvLyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIHJlZmVycmVyOiBcIm5vLXJlZmVycmVyXCIsIC8vIG5vLXJlZmVycmVyLCAqY2xpZW50XG4gICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyAoXCJZT1UgU0NSRVdFRCBJVCBVUFwiKVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQgbm9tYWREYXRhIl19
