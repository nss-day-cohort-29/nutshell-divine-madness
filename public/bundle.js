(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _eventListeners = _interopRequireDefault(require("./eventListeners"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const dashboard = {
  buildLoginForm() {
    //using string interpolation to create the form
    let formHTML = `
    <h1 class = "t-border">Nomads</h1>
      <section class = "form">
        <form action="" class = registerForm>
          <input id = "regUserName" type="text" placeholder = "Username" required>
          <input id = "regEmail" type="email" placeholder = "Email" required>
          <input id = "regPassword" type="password" placeholder = "Password" required>
          <input id = "regConfirmPassword" type="password" placeholder = "Confirm Password" required>
          <button id = "registerButton">Create Account</button>
          <p class = "message">Already a Registered Member? <a href = "#">LogIn </a></p>
        </form>
        <form class = "login-form">
          <input id = "userNameVal" type="text" placeholder = "Username">
          <input id = "passwordVal" type="password" placeholder = "Password">
          <button type = "button" id = "logIn">Login</button>
          <button id = "modalButton">Nomads Mission</button>
          <p class = "message">Don't have an account? <a href = "#">Register</a></p>
        </form>
      </section>
      <section id="nomadModal" class="modal">
      <!-- Modal content -->
        <section class="modal-content">
          <section class="modal-header">
            <span class="close">&times;</span>
            <h2>The Purpose Behind Nomads</h2>
          </section>
          <section class="modal-body">
            <h3>The minds behing Nomads</h3>
            <img id = "creatorsImage" src = "images/nomadCreators.jpg" alt = "application creators">
            <p>As outdoorsman, environmentalist, and filmmakers continue to grow. So do the adventurous spirits of those who embrace conscious consumerism and sustainable living. The purpose is to make a point of plugging into modern life and connecting with your fellow nomads from anywhere you may be. Share your location, Meet up, Exchange stories, Create relationships with people who have similar interest and enhance your traveling experience with nomads.</p> 
          </section>
          <section class="modal-footer">
            <h3>Created By: Divine Madness&copy</h3>
          </section>
        </section>
      </section>
      `;
    $("#output").html(formHTML);

    _eventListeners.default.modalDisplayAnimation();

    $("#logIn").click(_eventListeners.default.userLogin);
    $("#registerButton").click(_eventListeners.default.userRegistration);
    $("#registerButton").click(this.buildLoginForm); // $("#registerButton").click(eventListeners.userLogin)
  },

  createNavBar() {
    let navHTML = ` 
      <nav>
        <ul>
          <li id = "newsLink"><a class = "active" href = "#">Articles</a></li>
          <li id = "eventLink"><a href = "#">Events</a></li>
          <li id = "tasksLink"><a href = "#">Tasks</a></li>
          <li id = "friendsLink"><a href = "#">Friends</a></li>
          <li id = "messagesLink"><a href = "#">Messages</a></li>
          <li class = "signOut" id = "logo" ><a href="#">Sign Out</a></li>
        </ul>
      </nav>
    `;
    let navBarContainer = document.querySelector("#main-nav");
    navBarContainer.innerHTML = navHTML;
    /*Navigation link event listeners*/

    $("#messagesLink").click(_eventListeners.default.messagesNavLink);
    $("#eventLink").click(_eventListeners.default.eventsNavLink);
    $("#friendsLink").click(_eventListeners.default.friendsNavLink);
    $("#tasksLink").click(_eventListeners.default.tasksNavLink);
    $("#newsLink").click(_eventListeners.default.newsNavLink);
    /*after signout is clicked session storage is cleared and the logIn/register form is presented from here
    another user can log in and session storage will kick off for the new logged in user*/

    $(".signOut").click(_eventListeners.default.nomadNavLink);
  }

};
var _default = dashboard;
exports.default = _default;

},{"./eventListeners":4}],2:[function(require,module,exports){
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
    const eventForm = this.createDomElement({
      elementType: "form",
      attribues: {
        class: "eventInput"
      }
    });
    const formHeading = document.querySelector("#output");
    const formHeader = this.createDomElement({
      elementType: "h1",
      content: "Add a New Event:"
    });
    formHeading.appendChild(formHeader);
    const nameFieldset = this.createDomElement({
      elementType: "fieldset",
      attributes: {
        id: "eventNameFieldset"
      }
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
    nameFieldset.appendChild(nameInput); // eventForm.appendChild(nameFieldset)

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
    eventForm.appendChild(nameFieldset);
    eventForm.appendChild(dateFieldset);
    eventForm.appendChild(timeFieldset);
    eventForm.appendChild(locationFieldset);
    eventForm.appendChild(saveButton);
    return eventForm;
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
    locationFieldset.appendChild(locationInput); //const updateButton = this.createDomElement({elementType: "button", content: "Update", attributes: {type: "button", id: "submitEdits"}});
    // updateButton.addEventListener("click", eventListeners.handleEventUpdateButton);

    formContainer.appendChild(nameFieldset);
    formContainer.appendChild(dateFieldset);
    formContainer.appendChild(timeFieldset);
    formContainer.appendChild(locationFieldset); //formContainer.appendChild(submitButton);

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

},{"./eventListeners":4}],3:[function(require,module,exports){
"use strict";

var _dashboard = _interopRequireDefault(require("./dashboard"));

var _eventListeners = _interopRequireDefault(require("./eventListeners"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import events from "./events";
// import nomadData from "./nomadData";
// import nomadData from "./nomadData";
// import friends from "./friends";
// import news from "./news"
// import messages from "./messages";
// import domComponents from "./domComponents";
//BUILDS NAIGATIONBAR//
// domComponents.createNavBar()
_dashboard.default.buildLoginForm();

$("modalButton").click(_eventListeners.default.modalDisplayAnimation); //NEWS SECTION
// news.save();
// news.allSaved();
// news.getNews();
// news.newsElementCreator();
// news.newsElementCreator();

},{"./dashboard":1,"./eventListeners":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dashboard = _interopRequireDefault(require("./dashboard"));

var _domComponents = _interopRequireDefault(require("./domComponents"));

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _events = _interopRequireDefault(require("./events"));

var _messages = _interopRequireDefault(require("./messages"));

var _friends = _interopRequireDefault(require("./friends"));

var _news = _interopRequireDefault(require("./news"));

var _tasks = _interopRequireDefault(require("./tasks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const eventListeners = {
  /*===============================================================================================================
  LOGIN FORM: user enters Username and Password. when User clicks login, the input field and NOMADS header disappear
  and the user will be displayed the "Dashboard" and the navigation bar. Upon login, sessionStorage is started. In the Console
  you will be able to see Who is logged in and what their userId is. ie. 1,2,3,4 etc.
  =================================================================================================================*/
  userLogin() {
    let logInVal = document.querySelector("#userNameVal").value;
    let passwordVal = document.querySelector("#passwordVal").value; //get to compare

    _nomadData.default.connectToData({
      "dataSet": "users",
      "fetchType": "GET",
      "embedItem": "?_embed=users"
    }).then(parsedUsers => {
      parsedUsers.forEach(user => {
        /*If login credentials match those in database.json. We want the user to be displayed their "dashboad"
        and navigation bar. So we need to set display to none and invoke the function - createNavBar()*/
        if (logInVal === user.userName && passwordVal === user.password) {
          //hides NOMAD heading
          $(".t-border").hide(); //hides the form

          $(".form").hide(); //displays navigatin bar

          _dashboard.default.createNavBar(); //session storage


          sessionStorage.setItem("userId", user.id);
          let userId = sessionStorage.getItem("userId"); //console.log verifying that credentials match and user is logged in

          console.log("logged in as" + " " + user.userName);
          console.log("your user ID is: " + userId);
        }
      });
    });
  },

  /*===============================================================================================================
  REGISTRATION FORM: When registering for an account the user will enter desired username, email, and password
  =================================================================================================================*/
  userRegistration() {
    let regUserName = document.querySelector("#regUserName").value;
    let regEmail = document.querySelector("#regEmail").value;
    let regPassword = document.querySelector("#regPassword").value; // let regConfirmPassword = document.querySelector("#regUserName").value

    _nomadData.default.connectToData({
      "dataSet": "users",
      "fetchType": "POST",
      "dataBaseObject": {
        "userName": regUserName,
        "email": regEmail,
        "password": regPassword
      }
    }).then(_nomadData.default.connectToData({
      "dataSet": "users",
      "fetchType": "GET",
      "embedItem": `?userName=${regUserName}`
    }).then(user => {
      console.log(user);
      user.forEach(x => {
        sessionStorage.setItem("userId", x.id); //hides NOMAD heading

        $(".t-border").hide(); //hides the form

        $(".form").hide(); //displays navigatin bar

        _dashboard.default.createNavBar();

        let userId = sessionStorage.getItem("userId"); //console.log verifying that credentials match and user is logged in

        console.log("logged in as" + " " + x.userName);
        console.log("your user ID is: " + userId);
      });
    }));
  },

  /*===============================================================================================================
  MODAL: user will click the NOMAD MISSION button and a modal will pop up describing what the application is about
  and who it is tailored towards
  =================================================================================================================*/
  modalDisplayAnimation() {
    let modal = document.getElementById("nomadModal"); // target modal to open it

    let btn = document.getElementById("modalButton"); // Get the <span> element that closes the modal

    let span = document.getElementsByClassName("close")[0]; // When the user clicks the button, open the modal

    btn.onclick = function () {
      modal.style.display = "block";
    }; // When the user clicks on <span> (x), close the modal


    span.onclick = function () {
      modal.style.display = "none";
    }; // When the user clicks anywhere outside of the modal, close it


    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };

    $(".message a").click(function () {
      $("form").animate({
        height: "toggle",
        opacity: "toggle"
      }, "slow");
    });
  },

  /*===============================================================================================================
  NAVBAR LI ELISTENERS: When user clicks an item in the NAVBAR the content associated with that tab will populate the DOM
  =================================================================================================================*/
  messagesNavLink() {
    _messages.default.createMessageBoard();

    console.log("working");
  },

  eventsNavLink() {
    _events.default.showEventForm(); //appendUserEvent


    console.log("events clicked");
  },

  friendsNavLink() {
    console.log("friends nav link clicked");

    _friends.default.loadCurrentUsersFriends();

    _friends.default.defineCurrentUsersFriends();
  },

  newsNavLink() {
    //NEWS SECTION
    _news.default.save();

    _news.default.allSaved();

    _news.default.getNews();

    _news.default.newsElementCreator();

    console.log("news link clicked");
  },

  tasksNavLink() {
    _tasks.default.createTaskTables();
  },

  nomadNavLink() {
    _dashboard.default.buildLoginForm();

    $("nav").hide();
    sessionStorage.clear();
    console.log("signed out");
  },

  /*========================================================================================================
  END OF NAVIGATION EVENTLISTENERS
  =========================================================================================================*/
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
    const idToEdit = event.target.id.split("--")[1]; // const eventObject =

    _domComponents.default.createEventEditInput(idToEdit);
  },

  handleEventUpdateButton() {}

};
var _default = eventListeners;
exports.default = _default;

},{"./dashboard":1,"./domComponents":2,"./events":5,"./friends":6,"./messages":8,"./news":10,"./nomadData":11,"./tasks":12}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _domComponents = _interopRequireDefault(require("./domComponents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Author: Cole Bryant / Purpose:
//import eventListeners from "./eventListeners";
//createEventInput and createEventItem will be added to this object. so dombuilder.
const events = {
  showEventForm() {
    $("#output").empty();
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

},{"./domComponents":2,"./nomadData":11}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _domComponents = _interopRequireDefault(require("./domComponents"));

var _friendsEventsListener = _interopRequireDefault(require("./friendsEventsListener"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const friends = {
  defineCurrentUsersFriends() {
    $("#output").empty();
    const currentUser = 1;
    let userId = sessionStorage.getItem('userId'); // let currentUser = Number(userId);

    console.log(currentUser, userId);
    let friendHolder = []; // PULL FROM FRIENDS JSON-------------------------

    _nomadData.default.connectToData({
      "dataSet": "friends",
      "fetchType": "GET",
      "dataBaseObject": "",
      "embedItem": "?_embed=events"
    }).then(fromFriends => {
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
    const targetContainer = document.getElementById("output");
    targetContainer.appendChild(_domComponents.default.createDomElement({
      elementType: "section",
      attributes: {
        class: "friend-container",
        id: `friend-${friend}`
      }
    }));
    const friendContainer = document.getElementById(`friend-${friend}`);
    let friendDomBuilder = [];

    _nomadData.default.connectToData({
      "dataSet": "users",
      "fetchType": "GET",
      "dataBaseObject": "",
      "embedItem": "?_embed=events"
    }).then(fromUserData => {
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

          _nomadData.default.connectToData({
            "dataSet": "events",
            "fetchType": "GET",
            "dataBaseObject": "",
            "embedItem": "?_embed=events"
          }).then(events => {
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


          _nomadData.default.connectToData({
            "dataSet": "newsitems",
            "fetchType": "GET",
            "dataBaseObject": "",
            "embedItem": "?_embed=newsitems"
          }).then(newsShiz => {
            // console.log(newsShiz)
            newsShiz.forEach(userSpecificArticles => {
              if (userSpecificArticles.userId === friend) {
                // console.log(userSpecificArticles.title)
                const articleHolder = {
                  elementType: "p",
                  content: userSpecificArticles.title,
                  attributes: {
                    id: `article-${userSpecificArticles.id}`
                  }
                };
                friendDomBuilder.push(articleHolder);
              }
            }); // console.log(friendDomBuilder)

            friendDomBuilder.forEach(object => {
              // console.log(object);
              friendContainer.appendChild(_domComponents.default.createDomElement(object));
            });
            const deleteFriend = document.createElement("button");
            deleteFriend.classList.add(`delete-friend-${friend}`);
            deleteFriend.textContent = "DELETE";
            friendContainer.appendChild(deleteFriend);
            deleteFriend.addEventListener("click", () => {
              _friendsEventsListener.default.friendsDeleteFriend();
            });
          });
        }
      });
    });
  },

  initializePotentialFriends() {
    let userId = sessionStorage.getItem('userId');
    let currentUser = Number(userId); // console.log("friends Page user id is-",currentUser);

    const targetContainer = document.getElementById("output");
    const findNewFriendContainer = document.createElement("section");
    let friendsIHave = [];
    findNewFriendContainer.setAttribute("id", "future-friends");
    targetContainer.appendChild(findNewFriendContainer);

    _nomadData.default.connectToData({
      "dataSet": "friends",
      "fetchType": "GET",
      "dataBaseObject": "",
      "embedItem": "?_embed=friends"
    }).then(fromFriends => {
      // console.log(fromFriends)
      fromFriends.forEach(friendData => {
        // console.log(friendData)
        if (friendData.userId === currentUser) {
          friendsIHave.push(friendData.otherFriendId);
        }
      }); // console.log(friendsIHave)

      this.showUserPotentialFriends(friendsIHave);
    });
  },

  showUserPotentialFriends(friend) {
    let userId = sessionStorage.getItem('userId');
    let currentUser = Number(userId); // console.log(friend)

    let allTheUsers = [];
    friend.push(currentUser);

    _nomadData.default.connectToData({
      "dataSet": "users",
      "fetchType": "GET",
      "dataBaseObject": "",
      "embedItem": "?_embed=users"
    }).then(allUsers => {
      allUsers.forEach(user => {
        // console.log(user.id)
        allTheUsers.push(user.id);
      });
      console.log("everyone", allTheUsers, "user and friends", friend);
      let notCurrentFriend = this.differenceOf2Arrays(allTheUsers, friend);
      notCurrentFriend.forEach(noFriendOfMine => {
        this.printPotentialFriendsToBrowser(noFriendOfMine);
      });
    });
  },

  differenceOf2Arrays(array1, array2) {
    var temp = [];
    array1 = array1.toString().split(',').map(Number);
    array2 = array2.toString().split(',').map(Number);

    for (var i in array1) {
      if (array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
    }

    for (i in array2) {
      if (array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
    }

    return temp.sort((a, b) => a - b);
  },

  printPotentialFriendsToBrowser(notAFriend) {
    // console.log(notAFriend)
    const targetSectionContainer = document.getElementById("future-friends");
    targetSectionContainer.appendChild(_domComponents.default.createDomElement({
      elementType: "div",
      attributes: {
        id: `potentialFriend-${notAFriend}`
      }
    }));

    _nomadData.default.connectToData({
      "dataSet": "users",
      "fetchType": "GET",
      "dataBaseObject": "",
      "embedItem": "?_embed=users"
    }).then(usersInfo => {
      usersInfo.forEach(user => {
        if (user.id === notAFriend) {
          console.log(user.id, "is no friend");
          const potentialFriendContainer = document.getElementById(`potentialFriend-${notAFriend}`);
          potentialFriendContainer.appendChild(_domComponents.default.createDomElement({
            elementType: 'h2',
            content: user.userName,
            cssClass: `potential-friend-${user.id}`
          }));
          potentialFriendContainer.appendChild(_domComponents.default.createDomElement({
            elementType: "button",
            content: "Add Friend",
            attributes: {
              id: `add-friend-button-${user.id}`
            }
          }));
          const forAddButton = document.getElementById(`add-friend-button-${user.id}`);
          forAddButton.addEventListener("click", () => {
            _friendsEventsListener.default.friendsAddFriend();
          });
        }
      });
    }); // console.log(notAFriend)

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

},{"./domComponents":2,"./friendsEventsListener":7,"./nomadData":11}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import friends from "./friends"
const friendsEventsListener = {
  friendsDeleteFriend() {
    const friendToDelete = event.target.classList.value.split("-")[2];
    let userId = sessionStorage.getItem("userId");
    let currentUser = userId;
    console.log(friendToDelete, currentUser);
    let finalNumberSendForDelete = 0;

    _nomadData.default.connectToData({
      "dataSet": "friends",
      "fetchType": "GET",
      "dataBaseObject": "",
      "embedItem": "?_embed=friends"
    }).then(destroyFriendsHeart => {
      destroyFriendsHeart.forEach(goodbyeFriend => {
        console.log(goodbyeFriend.userId, Number(currentUser));

        if (goodbyeFriend.otherFriendId === Number(friendToDelete) && goodbyeFriend.userId === Number(currentUser)) {
          console.log("PeaceOut", goodbyeFriend.id);
          finalNumberSendForDelete = goodbyeFriend.id;
        }
      });
      let goodByeSearchResults = document.getElementById(`friend-${friendToDelete}`);
      goodByeSearchResults.parentNode.removeChild(goodByeSearchResults);
      console.log(finalNumberSendForDelete);

      _nomadData.default.connectToData({
        "deleteId": finalNumberSendForDelete,
        "dataSet": "friends",
        "fetchType": "DELETE",
        "dataBaseObject": {
          "userId": sessionStorage.getItem("userId")
        }
      });
    });
  },

  friendsAddFriend() {
    let userId = sessionStorage.getItem("userId");
    let currentUser = Number(userId);
    const friendToBeAdded = event.target.id.split("-")[3];
    console.log(`user${currentUser}`, `Adding Friend${friendToBeAdded}`);
    let goodByeNonFriend = document.getElementById(`potentialFriend-${friendToBeAdded}`);
    goodByeNonFriend.parentNode.removeChild(goodByeNonFriend);
    alert(`${event.target.previousSibling.innerText} is now your friend!`);

    _nomadData.default.connectToData({
      "dataSet": "friends",
      "fetchType": "POST",
      "dataBaseObject": {
        "userId": currentUser,
        "otherFriendId": Number(friendToBeAdded)
      }
    });
  }

};
var _default = friendsEventsListener;
exports.default = _default;

},{"./nomadData":11}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _domComponents = _interopRequireDefault(require("./domComponents"));

var _messagesEventListeners = _interopRequireDefault(require("./messagesEventListeners"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import friendsEventListeners from "./friendsEventListeners.js";
const messages = {
  createMessageBoard() {
    $("#output").empty();
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
        id: "messageSubmitButton",
        type: "submit"
      }
    });

    messageSubmitButton.addEventListener("click", _messagesEventListeners.default.postNewMessage, {
      once: true
    });
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
        console.log(message);
        let messageText = message.message;
        let userName = message.user.userName;
        let messageId = message.id;
        let messageTimeStamp = message.timeStamp;
        let messageUser = `${message.userId}`;
        let loggedInUser = sessionStorage.getItem("userId");

        let messageElement = _domComponents.default.createDomElement({
          elementType: "h3",
          cssClass: "messageUserName",
          content: `${userName}:`,
          attributes: {
            id: `message${messageId}`,
            name: parseInt(messageUser)
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

          messageEditButton.addEventListener("click", _messagesEventListeners.default.editMessage, {
            once: true
          });
          messageElement.appendChild(messageElement2);
          messageElement.appendChild(messageEditButton);
          messageContainer.insertBefore(messageElement, messageInput);
        } else {
          messageElement.appendChild(messageElement2);
          messageContainer.insertBefore(messageElement, messageInput);
        } // messageElement.addEventListener("click", friendsEventListeners.shiz)

      });
    });
  }

};
var _default = messages;
exports.default = _default;

},{"./domComponents":2,"./messagesEventListeners":9,"./nomadData":11}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _domComponents = _interopRequireDefault(require("./domComponents"));

var _messages = _interopRequireDefault(require("./messages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import friendsEventListeners from "./friendsEventListeners.js";
const messagesEventListeners = {
  postNewMessage() {
    let messageInput = document.getElementById("messageInput").value;
    let timeStamp = new Date();

    _nomadData.default.connectToData({
      dataSet: "messages",
      fetchType: "POST",
      dataBaseObject: {
        userId: Number(sessionStorage.getItem("userId")),
        message: messageInput,
        //.value,
        timeStamp: timeStamp
      }
    }).then(shit => {
      console.log(shit);
      $("#output").empty();

      _messages.default.createMessageBoard();
    });
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
        name: messageTimeStamp,
        type: "button"
      }
    });

    messageEditSubmitButton.addEventListener("click", messagesEventListeners.handleEditSubmitButton);
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
    }).then(shit => {
      console.log(shit);
      $("#output").empty();

      _messages.default.createMessageBoard();
    });
  }

};
var _default = messagesEventListeners;
exports.default = _default;

},{"./domComponents":2,"./messages":8,"./nomadData":11}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _domComponents = _interopRequireDefault(require("./domComponents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//pull from api then display to dom.
// create save button send saved articles to Json
// create button to pull all saved materials in json.
// delete method for articles
const news = {
  getNews() {
    //pull then send pulled data to dom
    return fetch("http://jsonplaceholder.typicode.com/posts/1").then(newsItems => newsItems.json());
  },

  save() {
    //This is functioning and writing to JSON.
    this.getNews().then(post => {
      const newsObject = {
        "dataSet": "newsItems",
        "fetchType": "POST",
        "dataBaseObject": {
          "userId": 1,
          "url": `${post.title}`,
          "title": `${post.body}`,
          "synopsis": "blah blah blah"
        } // console.log(testnewsObj);

      };

      _nomadData.default.connectToData(newsObject);
    });
  },

  allSaved() {// nomadData.connectToData(testnewsObj)
  },

  deleteDB() {},

  newsElementCreator() {
    $("#output").empty();
    const newsContainer = document.querySelector("#output");
    let newsCreatorKey = {
      "dataSet": "newsItems",
      "fetchType": "GET",
      "dataBaseObject": "",
      "embedItem": "?_embed=newsItems"
    };

    _nomadData.default.connectToData(newsCreatorKey).then(dbGrabs => {
      dbGrabs.forEach(dbGrab => {
        console.log(dbGrab);
        newsContainer.appendChild(_domComponents.default.createDomElement({
          elementType: "button",
          content: "SAVE BITCH",
          cssClass: "newsSaveButton"
        }));
        newsContainer.appendChild(_domComponents.default.createDomElement({
          elementType: "h2",
          content: dbGrab.title,
          cssClass: "newsTitle"
        }));
        newsContainer.appendChild(_domComponents.default.createDomElement({
          elementType: "p",
          content: dbGrab.synopsis,
          cssClass: "newsBody"
        }));
        newsContainer.appendChild(_domComponents.default.createDomElement({
          elementType: "a",
          content: dbGrab.url,
          cssClass: "newsURL",
          attributes: {
            href: `${dbGrab.url}`
          }
        }));
      });
    }); // const NewsTest = domComponents.createDomElement("h2",testPass,"testObj",null);
    //output.appendChild(NewsTest);

  }

};
var _default = news;
exports.default = _default;

},{"./domComponents":2,"./nomadData":11}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _domComponents = _interopRequireDefault(require("./domComponents"));

var _tasksEventListeners = _interopRequireDefault(require("./tasksEventListeners"));

var _tasksPopup = _interopRequireDefault(require("./tasksPopup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import eventListeners from "./eventListeners"
const tasks = {
  createTaskTables() {
    $("#output").empty();
    let outputArticle = document.getElementById("output"); //create display container

    let tasksContainer = _domComponents.default.createDomElement({
      elementType: "section",
      cssClass: "tasksContainer",
      attributes: {
        id: "tasksContainer"
      }
    }); //create tasks tables


    let activeTasksTable = _domComponents.default.createDomElement({
      elementType: "table",
      cssClass: "activeTasksTable",
      attributes: {
        id: "activeTasksTable"
      }
    });

    let activeTasksTableTitle = _domComponents.default.createDomElement({
      elementType: "caption",
      cssClass: "activeTasksTableTitle",
      content: "ACTIVE TASKS"
    });

    let completedTasksTable = _domComponents.default.createDomElement({
      elementType: "table",
      cssClass: "completedTasksTable",
      attributes: {
        id: "completedTasksTable"
      }
    });

    let completedTasksTableTitle = _domComponents.default.createDomElement({
      elementType: "caption",
      cssClass: "completedTasksTableTitle",
      content: "COMPLETED TASKS"
    }); //create row with column headers


    let activeTasksHeaderRow = _domComponents.default.createDomElement({
      elementType: "tr",
      cssClass: "activeTasksHeaderRow",
      attributes: {
        id: "activeTasksHeaderRow"
      }
    });

    let completedTasksHeaderRow = _domComponents.default.createDomElement({
      elementType: "tr",
      cssClass: "completedTasksHeaderRow",
      attributes: {
        id: "completedTasksHeaderRow"
      }
    }); //create column headers


    let activeTasksHeader = _domComponents.default.createDomElement({
      elementType: "th",
      cssClass: "activeTasksHeader",
      content: "Task",
      attributes: {
        id: "activeTasksHeader"
      }
    });

    let activeTasksDueDateHeader = _domComponents.default.createDomElement({
      elementType: "th",
      cssClass: "activeTasksDueDateHeader",
      content: "Due Date",
      attributes: {
        id: "activeTasksDueDateHeader"
      }
    });

    let completedTasksHeader = _domComponents.default.createDomElement({
      elementType: "th",
      cssClass: "completedTasksHeader",
      content: "Task",
      attributes: {
        id: "completedTasksHeader"
      }
    });

    let completedTasksDueDateHeader = _domComponents.default.createDomElement({
      elementType: "th",
      cssClass: "completedTasksDueDateHeader",
      content: "Due Date",
      attributes: {
        id: "completedTasksDueDateHeader"
      }
    }); //create button to make new tasks


    let createTaskButton = _domComponents.default.createDomElement({
      elementType: "button",
      cssClass: "createTaskButton",
      content: "Create New Task",
      attributes: {
        id: "createTaskButton"
      }
    }); //append header row to table and table to container


    activeTasksTable.appendChild(activeTasksTableTitle);
    completedTasksTable.appendChild(completedTasksTableTitle);
    activeTasksHeaderRow.appendChild(activeTasksHeader);
    activeTasksHeaderRow.appendChild(activeTasksDueDateHeader);
    activeTasksTable.appendChild(activeTasksHeaderRow);
    tasksContainer.appendChild(activeTasksTable);
    completedTasksHeaderRow.appendChild(completedTasksHeader);
    completedTasksHeaderRow.appendChild(completedTasksDueDateHeader);
    completedTasksTable.appendChild(completedTasksHeaderRow);
    tasksContainer.appendChild(completedTasksTable);
    createTaskButton.addEventListener("click", _tasksPopup.default.createNewTaskForm);
    tasksContainer.appendChild(createTaskButton);
    outputArticle.appendChild(tasksContainer);
    this.getTasks();
  },

  getTasks() {
    let currentUser = Number(sessionStorage.getItem("userId")); //populate tasks

    _nomadData.default.connectToData({
      dataSet: "tasks",
      fetchType: "GET",
      embedItem: "?_embed=users"
    }).then(tasks => {
      tasks.sort(function (a, b) {
        return new Date(a.expectedCompletionDate) - new Date(b.expectedCompletionDate);
      });
      tasks.forEach(task => {
        if (task.userId === currentUser) {
          let status = task.complete;
          let activeTasksTable = document.getElementById("activeTasksTable");
          let completedTasksTable = document.getElementById("completedTasksTable"); // create a new table row for each task

          let taskRow = _domComponents.default.createDomElement({
            elementType: "tr",
            cssClass: "taskTableRow",
            attributes: {
              id: `taskTableRow_${task.id}`
            }
          }); //create cells to hold task and due date


          let taskCell = _domComponents.default.createDomElement({
            elementType: "td",
            cssClass: "taskCell",
            attributes: {
              id: `taskCell_${task.id}`
            }
          });

          let dueDateCell = _domComponents.default.createDomElement({
            elementType: "td",
            cssClass: "dueDateCell",
            attributes: {
              id: `dueDateCell_${task.id}`
            }
          }); //create task checkbox and title


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
          }); //create task dute date


          let dueDateArray = new Date(task.expectedCompletionDate).toDateString().split(" ");
          let dueDate = `${dueDateArray[1]} ${dueDateArray[2]}, ${dueDateArray[3]}`;

          let taskDueDate = _domComponents.default.createDomElement({
            elementType: "p",
            cssClass: "taskDueDate",
            content: dueDate,
            attributes: {
              id: `taskDueDate_${task.id}`
            }
          }); //append -- order is important for checkbox and label to ensure box in on the left


          taskCheckbox.addEventListener("change", _tasksEventListeners.default.markTaskComplete);
          taskLabel.appendChild(taskCheckbox);
          taskLabel.appendChild(taskTitle);
          taskCell.appendChild(taskLabel);
          dueDateCell.appendChild(taskDueDate);
          taskRow.appendChild(taskCell);
          taskRow.appendChild(dueDateCell);

          if (status) {
            completedTasksTable.appendChild(taskRow);
            taskCheckbox.setAttribute("checked", "");
          } else {
            activeTasksTable.appendChild(taskRow);
          }
        }
      });
    });
  }

};
var _default = tasks;
exports.default = _default;

},{"./domComponents":2,"./nomadData":11,"./tasksEventListeners":13,"./tasksPopup":14}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _tasks = _interopRequireDefault(require("./tasks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const tasksEventListeners = {
  createNewTask() {
    let taskTitle = document.getElementById("taskTitleInput").value;
    let dueDate = document.getElementById("taskDateInput").value;
    let userId = Number(sessionStorage.getItem("userId"));

    _nomadData.default.connectToData({
      dataSet: "tasks",
      fetchType: "POST",
      dataBaseObject: {
        userId: userId,
        task: taskTitle,
        expectedCompletionDate: dueDate,
        complete: false
      }
    }).then(response => response.json()).then(shit => {
      console.log(shit);
      $("#output").empty();

      _tasks.default.createTaskTables();
    });
  },

  markTaskComplete() {
    let taskToEditId = event.target.id.split("_")[1];

    _nomadData.default.connectToData({
      dataSet: "tasks",
      fetchType: "GET",
      embedItem: `?&id=${taskToEditId}`
    }).then(tasks => {
      let taskId = tasks[0].id;
      let userId = tasks[0].userId;
      let task = tasks[0].task;
      let expectedCompletionDate = tasks[0].expectedCompletionDate;
      let complete = tasks[0].complete;
      console.log(taskId, userId, task, expectedCompletionDate, complete);

      if (complete) {
        complete = false;
      } else {
        complete = true;
      }

      _nomadData.default.connectToData({
        putId: taskToEditId,
        dataSet: "tasks",
        fetchType: "PUT",
        dataBaseObject: {
          id: taskId,
          userId: userId,
          task: task,
          expectedCompletionDate: expectedCompletionDate,
          complete: complete
        }
      });
    });

    $("#output").empty();

    _tasks.default.createTaskTables();
  }

};
var _default = tasksEventListeners;
exports.default = _default;

},{"./nomadData":11,"./tasks":12}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _domComponents = _interopRequireDefault(require("./domComponents"));

var _tasksEventListeners = _interopRequireDefault(require("./tasksEventListeners"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const tasksPopup = {
  createNewTaskForm() {
    let tasksContainer = document.getElementById("tasksContainer");

    let taskPopupDiv = _domComponents.default.createDomElement({
      elementType: "div",
      cssClass: "taskPopupDiv",
      attributes: {
        id: "taskPopupDiv"
      }
    });

    let newTaskForm = _domComponents.default.createDomElement({
      elementType: "div",
      cssClass: "newTaskForm",
      attributes: {
        id: "newTaskForm"
      }
    });

    let newTaskFormTitle = _domComponents.default.createDomElement({
      elementType: "h2",
      cssClass: "newTaskFormTitle",
      content: "Create A New Task",
      attributes: {
        id: "newTaskFormTitle"
      }
    });

    let horizontalLine = _domComponents.default.createDomElement({
      elementType: "hr"
    });

    let taskTitleInput = _domComponents.default.createDomElement({
      elementType: "input",
      cssClass: "taskTitleInput",
      attributes: {
        id: "taskTitleInput",
        placeholder: "Enter new task title",
        type: "text"
      }
    });

    let taskDateInput = _domComponents.default.createDomElement({
      elementType: "input",
      cssClass: "taskDateInput",
      attributes: {
        id: "taskDateInput",
        type: "date"
      }
    });

    let submitNewTaskButton = _domComponents.default.createDomElement({
      elementType: "button",
      cssClass: "submitNewTaskButton",
      content: "Submit",
      attributes: {
        id: "submitNewTaskButton" // type : "submit"

      }
    });

    submitNewTaskButton.addEventListener("click", _tasksEventListeners.default.createNewTask);
    newTaskForm.appendChild(newTaskFormTitle);
    newTaskForm.appendChild(horizontalLine);
    newTaskForm.appendChild(taskTitleInput);
    newTaskForm.appendChild(taskDateInput);
    newTaskForm.appendChild(submitNewTaskButton);
    taskPopupDiv.appendChild(newTaskForm);
    tasksContainer.appendChild(taskPopupDiv);
  }

};
var _default = tasksPopup;
exports.default = _default;

},{"./domComponents":2,"./tasksEventListeners":13}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2Rhc2hib2FyZC5qcyIsIi4uL3NjcmlwdHMvZG9tQ29tcG9uZW50cy5qcyIsIi4uL3NjcmlwdHMvZG9tUmVuZGVyZXIuanMiLCIuLi9zY3JpcHRzL2V2ZW50TGlzdGVuZXJzLmpzIiwiLi4vc2NyaXB0cy9ldmVudHMuanMiLCIuLi9zY3JpcHRzL2ZyaWVuZHMuanMiLCIuLi9zY3JpcHRzL2ZyaWVuZHNFdmVudHNMaXN0ZW5lci5qcyIsIi4uL3NjcmlwdHMvbWVzc2FnZXMuanMiLCIuLi9zY3JpcHRzL21lc3NhZ2VzRXZlbnRMaXN0ZW5lcnMuanMiLCIuLi9zY3JpcHRzL25ld3MuanMiLCIuLi9zY3JpcHRzL25vbWFkRGF0YS5qcyIsIi4uL3NjcmlwdHMvdGFza3MuanMiLCIuLi9zY3JpcHRzL3Rhc2tzRXZlbnRMaXN0ZW5lcnMuanMiLCIuLi9zY3JpcHRzL3Rhc2tzUG9wdXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7Ozs7QUFDQSxNQUFNLFNBQVMsR0FBRztBQUNoQixFQUFBLGNBQWMsR0FBRTtBQUNkO0FBQ0EsUUFBSSxRQUFRLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQUFoQjtBQXFDRSxJQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYSxJQUFiLENBQWtCLFFBQWxCOztBQUNBLDRCQUFlLHFCQUFmOztBQUNBLElBQUEsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZLEtBQVosQ0FBa0Isd0JBQWUsU0FBakM7QUFDQSxJQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCLEtBQXJCLENBQTJCLHdCQUFlLGdCQUExQztBQUNBLElBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIsS0FBckIsQ0FBMkIsS0FBSyxjQUFoQyxFQTNDWSxDQTRDWjtBQUVELEdBL0NhOztBQWdEaEIsRUFBQSxZ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QUFoQyxDQUFyQjs7QUFVQSxRQUFJLGFBQWEsR0FBRyx1QkFBYyxnQkFBZCxDQUFnQztBQUNoRCxNQUFBLFdBQVcsRUFBRyxPQURrQztBQUVoRCxNQUFBLFFBQVEsRUFBRyxlQUZxQztBQUdoRCxNQUFBLFVBQVUsRUFBRztBQUNULFFBQUEsRUFBRSxFQUFHLGVBREk7QUFFVCxRQUFBLElBQUksRUFBRztBQUZFO0FBSG1DLEtBQWhDLENBQXBCOztBQVNBLFFBQUksbUJBQW1CLEdBQUcsdUJBQWMsZ0JBQWQsQ0FBZ0M7QUFDdEQsTUFBQSxXQUFXLEVBQUcsUUFEd0M7QUFFdEQsTUFBQSxRQUFRLEVBQUcscUJBRjJDO0FBR3RELE1BQUEsT0FBTyxFQUFHLFFBSDRDO0FBSXRELE1BQUEsVUFBVSxFQUFHO0FBQ1QsUUFBQSxFQUFFLEVBQUcscUJBREksQ0FFVDs7QUFGUztBQUp5QyxLQUFoQyxDQUExQjs7QUFVQSxJQUFBLG1CQUFtQixDQUFDLGdCQUFwQixDQUFxQyxPQUFyQyxFQUE4Qyw2QkFBb0IsYUFBbEU7QUFDQSxJQUFBLFdBQVcsQ0FBQyxXQUFaLENBQXdCLGdCQUF4QjtBQUNBLElBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0IsY0FBeEI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxXQUFaLENBQXdCLGNBQXhCO0FBQ0EsSUFBQSxXQUFXLENBQUMsV0FBWixDQUF3QixhQUF4QjtBQUNBLElBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0IsbUJBQXhCO0FBQ0EsSUFBQSxZQUFZLENBQUMsV0FBYixDQUF5QixXQUF6QjtBQUNBLElBQUEsY0FBYyxDQUFDLFdBQWYsQ0FBMkIsWUFBM0I7QUFDSDs7QUF0RWMsQ0FBbkI7ZUF5RWUsVSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBldmVudExpc3RlbmVycyBmcm9tIFwiLi9ldmVudExpc3RlbmVyc1wiXHJcbmNvbnN0IGRhc2hib2FyZCA9IHtcclxuICBidWlsZExvZ2luRm9ybSgpe1xyXG4gICAgLy91c2luZyBzdHJpbmcgaW50ZXJwb2xhdGlvbiB0byBjcmVhdGUgdGhlIGZvcm1cclxuICAgIGxldCBmb3JtSFRNTCA9IGBcclxuICAgIDxoMSBjbGFzcyA9IFwidC1ib3JkZXJcIj5Ob21hZHM8L2gxPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzcyA9IFwiZm9ybVwiPlxyXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIGNsYXNzID0gcmVnaXN0ZXJGb3JtPlxyXG4gICAgICAgICAgPGlucHV0IGlkID0gXCJyZWdVc2VyTmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXIgPSBcIlVzZXJuYW1lXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICA8aW5wdXQgaWQgPSBcInJlZ0VtYWlsXCIgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXIgPSBcIkVtYWlsXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICA8aW5wdXQgaWQgPSBcInJlZ1Bhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXIgPSBcIlBhc3N3b3JkXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICA8aW5wdXQgaWQgPSBcInJlZ0NvbmZpcm1QYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyID0gXCJDb25maXJtIFBhc3N3b3JkXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICA8YnV0dG9uIGlkID0gXCJyZWdpc3RlckJ1dHRvblwiPkNyZWF0ZSBBY2NvdW50PC9idXR0b24+XHJcbiAgICAgICAgICA8cCBjbGFzcyA9IFwibWVzc2FnZVwiPkFscmVhZHkgYSBSZWdpc3RlcmVkIE1lbWJlcj8gPGEgaHJlZiA9IFwiI1wiPkxvZ0luIDwvYT48L3A+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxmb3JtIGNsYXNzID0gXCJsb2dpbi1mb3JtXCI+XHJcbiAgICAgICAgICA8aW5wdXQgaWQgPSBcInVzZXJOYW1lVmFsXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlciA9IFwiVXNlcm5hbWVcIj5cclxuICAgICAgICAgIDxpbnB1dCBpZCA9IFwicGFzc3dvcmRWYWxcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlciA9IFwiUGFzc3dvcmRcIj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZSA9IFwiYnV0dG9uXCIgaWQgPSBcImxvZ0luXCI+TG9naW48L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gaWQgPSBcIm1vZGFsQnV0dG9uXCI+Tm9tYWRzIE1pc3Npb248L2J1dHRvbj5cclxuICAgICAgICAgIDxwIGNsYXNzID0gXCJtZXNzYWdlXCI+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyA8YSBocmVmID0gXCIjXCI+UmVnaXN0ZXI8L2E+PC9wPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvbiBpZD1cIm5vbWFkTW9kYWxcIiBjbGFzcz1cIm1vZGFsXCI+XHJcbiAgICAgIDwhLS0gTW9kYWwgY29udGVudCAtLT5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2VcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICA8aDI+VGhlIFB1cnBvc2UgQmVoaW5kIE5vbWFkczwvaDI+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgPGgzPlRoZSBtaW5kcyBiZWhpbmcgTm9tYWRzPC9oMz5cclxuICAgICAgICAgICAgPGltZyBpZCA9IFwiY3JlYXRvcnNJbWFnZVwiIHNyYyA9IFwiaW1hZ2VzL25vbWFkQ3JlYXRvcnMuanBnXCIgYWx0ID0gXCJhcHBsaWNhdGlvbiBjcmVhdG9yc1wiPlxyXG4gICAgICAgICAgICA8cD5BcyBvdXRkb29yc21hbiwgZW52aXJvbm1lbnRhbGlzdCwgYW5kIGZpbG1tYWtlcnMgY29udGludWUgdG8gZ3Jvdy4gU28gZG8gdGhlIGFkdmVudHVyb3VzIHNwaXJpdHMgb2YgdGhvc2Ugd2hvIGVtYnJhY2UgY29uc2Npb3VzIGNvbnN1bWVyaXNtIGFuZCBzdXN0YWluYWJsZSBsaXZpbmcuIFRoZSBwdXJwb3NlIGlzIHRvIG1ha2UgYSBwb2ludCBvZiBwbHVnZ2luZyBpbnRvIG1vZGVybiBsaWZlIGFuZCBjb25uZWN0aW5nIHdpdGggeW91ciBmZWxsb3cgbm9tYWRzIGZyb20gYW55d2hlcmUgeW91IG1heSBiZS4gU2hhcmUgeW91ciBsb2NhdGlvbiwgTWVldCB1cCwgRXhjaGFuZ2Ugc3RvcmllcywgQ3JlYXRlIHJlbGF0aW9uc2hpcHMgd2l0aCBwZW9wbGUgd2hvIGhhdmUgc2ltaWxhciBpbnRlcmVzdCBhbmQgZW5oYW5jZSB5b3VyIHRyYXZlbGluZyBleHBlcmllbmNlIHdpdGggbm9tYWRzLjwvcD4gXHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICA8aDM+Q3JlYXRlZCBCeTogRGl2aW5lIE1hZG5lc3MmY29weTwvaDM+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIGBcclxuICAgICAgJChcIiNvdXRwdXRcIikuaHRtbChmb3JtSFRNTClcclxuICAgICAgZXZlbnRMaXN0ZW5lcnMubW9kYWxEaXNwbGF5QW5pbWF0aW9uKClcclxuICAgICAgJChcIiNsb2dJblwiKS5jbGljayhldmVudExpc3RlbmVycy51c2VyTG9naW4pXHJcbiAgICAgICQoXCIjcmVnaXN0ZXJCdXR0b25cIikuY2xpY2soZXZlbnRMaXN0ZW5lcnMudXNlclJlZ2lzdHJhdGlvbilcclxuICAgICAgJChcIiNyZWdpc3RlckJ1dHRvblwiKS5jbGljayh0aGlzLmJ1aWxkTG9naW5Gb3JtKVxyXG4gICAgICAvLyAkKFwiI3JlZ2lzdGVyQnV0dG9uXCIpLmNsaWNrKGV2ZW50TGlzdGVuZXJzLnVzZXJMb2dpbilcclxuXHJcbiAgICB9LFxyXG4gIGNyZWF0ZU5hdkJhcigpe1xyXG4gICAgbGV0IG5hdkhUTUwgPSBgIFxyXG4gICAgICA8bmF2PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaSBpZCA9IFwibmV3c0xpbmtcIj48YSBjbGFzcyA9IFwiYWN0aXZlXCIgaHJlZiA9IFwiI1wiPkFydGljbGVzPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGkgaWQgPSBcImV2ZW50TGlua1wiPjxhIGhyZWYgPSBcIiNcIj5FdmVudHM8L2E+PC9saT5cclxuICAgICAgICAgIDxsaSBpZCA9IFwidGFza3NMaW5rXCI+PGEgaHJlZiA9IFwiI1wiPlRhc2tzPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGkgaWQgPSBcImZyaWVuZHNMaW5rXCI+PGEgaHJlZiA9IFwiI1wiPkZyaWVuZHM8L2E+PC9saT5cclxuICAgICAgICAgIDxsaSBpZCA9IFwibWVzc2FnZXNMaW5rXCI+PGEgaHJlZiA9IFwiI1wiPk1lc3NhZ2VzPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3MgPSBcInNpZ25PdXRcIiBpZCA9IFwibG9nb1wiID48YSBocmVmPVwiI1wiPlNpZ24gT3V0PC9hPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9uYXY+XHJcbiAgICBgXHJcbiAgICBsZXQgbmF2QmFyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLW5hdlwiKVxyXG4gICAgbmF2QmFyQ29udGFpbmVyLmlubmVySFRNTCA9IG5hdkhUTUxcclxuXHJcbiAgICAvKk5hdmlnYXRpb24gbGluayBldmVudCBsaXN0ZW5lcnMqL1xyXG4gICAgJChcIiNtZXNzYWdlc0xpbmtcIikuY2xpY2soZXZlbnRMaXN0ZW5lcnMubWVzc2FnZXNOYXZMaW5rKVxyXG4gICAgJChcIiNldmVudExpbmtcIikuY2xpY2soZXZlbnRMaXN0ZW5lcnMuZXZlbnRzTmF2TGluaylcclxuICAgICQoXCIjZnJpZW5kc0xpbmtcIikuY2xpY2soZXZlbnRMaXN0ZW5lcnMuZnJpZW5kc05hdkxpbmspXHJcbiAgICAkKFwiI3Rhc2tzTGlua1wiKS5jbGljayhldmVudExpc3RlbmVycy50YXNrc05hdkxpbmspXHJcbiAgICAkKFwiI25ld3NMaW5rXCIpLmNsaWNrKGV2ZW50TGlzdGVuZXJzLm5ld3NOYXZMaW5rKVxyXG5cclxuICAgIC8qYWZ0ZXIgc2lnbm91dCBpcyBjbGlja2VkIHNlc3Npb24gc3RvcmFnZSBpcyBjbGVhcmVkIGFuZCB0aGUgbG9nSW4vcmVnaXN0ZXIgZm9ybSBpcyBwcmVzZW50ZWQgZnJvbSBoZXJlXHJcbiAgICBhbm90aGVyIHVzZXIgY2FuIGxvZyBpbiBhbmQgc2Vzc2lvbiBzdG9yYWdlIHdpbGwga2ljayBvZmYgZm9yIHRoZSBuZXcgbG9nZ2VkIGluIHVzZXIqL1xyXG4gICAgJChcIi5zaWduT3V0XCIpLmNsaWNrKGV2ZW50TGlzdGVuZXJzLm5vbWFkTmF2TGluaylcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBkYXNoYm9hcmQiLCJpbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnNcIjtcclxuXHJcbmNvbnN0IGRvbUNvbXBvbmVudHMgPSB7XHJcbiAgY3JlYXRlRG9tRWxlbWVudCh7IGVsZW1lbnRUeXBlLCBjb250ZW50ID0gbnVsbCwgY3NzQ2xhc3MsIGF0dHJpYnV0ZXMgPSB7fSB9KSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XHJcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcclxuICAgIGlmKGNzc0NsYXNzKXtcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XHJcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcclxuICAgIH1cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH0sXHJcbiAgY3JlYXRlRXZlbnRJbnB1dCgpIHtcclxuICAgIGNvbnN0IGV2ZW50Rm9ybSA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZm9ybVwiLCBhdHRyaWJ1ZXM6IHtjbGFzczogXCJldmVudElucHV0XCJ9fSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGZvcm1IZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdXRwdXRcIilcclxuICAgIGNvbnN0IGZvcm1IZWFkZXIgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImgxXCIsIGNvbnRlbnQ6IFwiQWRkIGEgTmV3IEV2ZW50OlwifSk7XHJcbiAgICBmb3JtSGVhZGluZy5hcHBlbmRDaGlsZChmb3JtSGVhZGVyKTtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IG5hbWVGaWVsZHNldCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZmllbGRzZXRcIiAsIGF0dHJpYnV0ZXM6e2lkOiBcImV2ZW50TmFtZUZpZWxkc2V0XCIgfX0pO1xyXG4gICAgY29uc3QgbmFtZUxhYmVsID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJsYWJlbFwiLCBjb250ZW50OiBcIkV2ZW50IE5hbWU6XCIsIGF0dHJpYnV0ZXM6IHtmb3I6IFwiZXZlbnROYW1lXCJ9fSk7XHJcbiAgICBjb25zdCBuYW1lSW5wdXQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImlucHV0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcInRleHRcIiwgbmFtZTogXCJldmVudE5hbWVcIiwgaWQ6IFwiZXZlbnROYW1lXCJ9fSk7XHJcbiAgICBuYW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcclxuICAgIG5hbWVGaWVsZHNldC5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xyXG4gICAgLy8gZXZlbnRGb3JtLmFwcGVuZENoaWxkKG5hbWVGaWVsZHNldClcclxuXHJcbiAgICBjb25zdCBkYXRlRmllbGRzZXQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcclxuICAgIGNvbnN0IGRhdGVMYWJlbCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFdmVudCBEYXRlOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50RGF0ZVwifX0pO1xyXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJkYXRlXCIsIG5hbWU6IFwiZXZlbnREYXRlXCIsIGlkOiBcImV2ZW50RGF0ZVwifX0pO1xyXG4gICAgZGF0ZUZpZWxkc2V0LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XHJcbiAgICBkYXRlRmllbGRzZXQuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcclxuXHJcbiAgICBjb25zdCB0aW1lRmllbGRzZXQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcclxuICAgIGNvbnN0IHRpbWVMYWJlbCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFdmVudCBUaW1lOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50VGltZVwifX0pO1xyXG4gICAgY29uc3QgdGltZUlucHV0ID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJ0aW1lXCIsIG5hbWU6IFwiZXZlbnRUaW1lXCIsIGlkOiBcImV2ZW50VGltZVwifX0pO1xyXG4gICAgdGltZUZpZWxkc2V0LmFwcGVuZENoaWxkKHRpbWVMYWJlbCk7XHJcbiAgICB0aW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQodGltZUlucHV0KTtcclxuXHJcbiAgICBjb25zdCBsb2NhdGlvbkZpZWxkc2V0ID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJmaWVsZHNldFwifSk7XHJcbiAgICBjb25zdCBsb2NhdGlvbkxhYmVsID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJsYWJlbFwiLCBjb250ZW50OiBcIkVudGVyIExvY2F0aW9uOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50TG9jYXRpb25cIn19KTtcclxuICAgIGNvbnN0IGxvY2F0aW9uSW5wdXQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImlucHV0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcInRleHRcIiwgbmFtZTogXCJldmVudExvY2F0aW9uXCIsIGlkOiBcImV2ZW50TG9jYXRpb25cIn19KTtcclxuICAgIGxvY2F0aW9uRmllbGRzZXQuYXBwZW5kQ2hpbGQobG9jYXRpb25MYWJlbCk7XHJcbiAgICBsb2NhdGlvbkZpZWxkc2V0LmFwcGVuZENoaWxkKGxvY2F0aW9uSW5wdXQpO1xyXG5cclxuICAgIGNvbnN0IHNhdmVCdXR0b24gPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImJ1dHRvblwiLCBjb250ZW50OiBcIlNhdmVcIiwgYXR0cmlidXRlczoge3R5cGU6IFwiYnV0dG9uXCIsIGlkOiBcInNhdmVFdmVudFwifX0pO1xyXG5cclxuICAgIGV2ZW50Rm9ybS5hcHBlbmRDaGlsZChuYW1lRmllbGRzZXQpO1xyXG4gICAgZXZlbnRGb3JtLmFwcGVuZENoaWxkKGRhdGVGaWVsZHNldCk7XHJcbiAgICBldmVudEZvcm0uYXBwZW5kQ2hpbGQodGltZUZpZWxkc2V0KTtcclxuICAgIGV2ZW50Rm9ybS5hcHBlbmRDaGlsZChsb2NhdGlvbkZpZWxkc2V0KTtcclxuICAgIGV2ZW50Rm9ybS5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcclxuXHJcbiAgICByZXR1cm4gZXZlbnRGb3JtO1xyXG4gIH0sXHJcbiAgY3JlYXRlRXZlbnRJdGVtIChldmVudE9iamVjdCkge1xyXG4gICAgY29uc3QgZXZlbnRJdGVtID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJhcnRpY2xlXCIsIGF0dHJpYnV0ZXM6IHtjbGFzczogXCJldmVudEl0ZW1cIn19KTtcclxuICAgIGNvbnN0IGV2ZW50SGVhZGVyID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJoMlwiLCBjb250ZW50OiBldmVudE9iamVjdC5ldmVudE5hbWV9KTtcclxuICAgIGNvbnN0IGV2ZW50RGF0ZVRpbWUgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcInBcIiwgY29udGVudDogYEF0ICR7ZXZlbnRPYmplY3QuZXZlbnRUaW1lfSBvbiAke2V2ZW50T2JqZWN0LmV2ZW50RGF0ZX1gfSk7XHJcbiAgICBjb25zdCBldmVudExvY2F0aW9uID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJwXCIsIGNvbnRlbnQ6IGBMb2NhdGlvbjogJHtldmVudE9iamVjdC5ldmVudExvY2F0aW9ufWB9KTtcclxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImJ1dHRvblwiLCBjb250ZW50OiBcIkVkaXRcIiwgYXR0cmlidXRlczoge3R5cGU6IFwiYnV0dG9uXCIsIGlkOiBgZWRpdEV2ZW50LS0ke2V2ZW50T2JqZWN0LmlkfWB9fSk7XHJcbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudExpc3RlbmVycy5oYW5kbGVFdmVudEVkaXRCdXR0b24pO1xyXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJidXR0b25cIiwgY29udGVudDogXCJEZWxldGVcIiwgYXR0cmlidXRlczoge3R5cGU6IFwiYnV0dG9uXCIsIGlkOiBgZGVsZXRlRXZlbnQtLSR7ZXZlbnRPYmplY3QuaWR9YH19KTtcclxuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnRMaXN0ZW5lcnMuaGFuZGxlRXZlbnREZWxldGVCdXR0b24pO1xyXG5cclxuICAgIGV2ZW50SXRlbS5hcHBlbmRDaGlsZChldmVudEhlYWRlcik7XHJcbiAgICBldmVudEl0ZW0uYXBwZW5kQ2hpbGQoZXZlbnREYXRlVGltZSk7XHJcbiAgICBldmVudEl0ZW0uYXBwZW5kQ2hpbGQoZXZlbnRMb2NhdGlvbik7XHJcbiAgICBldmVudEl0ZW0uYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XHJcbiAgICBldmVudEl0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuXHJcbiAgICByZXR1cm4gZXZlbnRJdGVtO1xyXG4gIH0sXHJcbiAgY3JlYXRlRXZlbnRFZGl0SW5wdXQoY29udGFpbmVySWQsIGV2ZW50T2JqZWN0KSB7XHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJmb3JtXCIsIGF0dHJpYnVlczoge2NsYXNzOiBcImV2ZW50RWRpdFwifX0pO1xyXG5cclxuICAgIGNvbnN0IG5hbWVGaWVsZHNldCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZmllbGRzZXRcIn0pO1xyXG4gICAgY29uc3QgbmFtZUxhYmVsID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJsYWJlbFwiLCBjb250ZW50OiBcIkVkaXQgTmFtZTpcIiwgYXR0cmlidXRlczoge2ZvcjogXCJldmVudE5hbWVcIn19KTtcclxuICAgIGNvbnN0IG5hbWVJbnB1dCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiaW5wdXRcIiwgYXR0cmlidXRlczoge3R5cGU6IFwidGV4dFwiLCBuYW1lOiBcImV2ZW50TmFtZVwiLCB2YWx1ZTogZXZlbnRPYmplY3QuZXZlbnROYW1lfX0pO1xyXG4gICAgbmFtZUZpZWxkc2V0LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XHJcbiAgICBuYW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcclxuXHJcbiAgICBjb25zdCBkYXRlRmllbGRzZXQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcclxuICAgIGNvbnN0IGRhdGVMYWJlbCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFZGl0IERhdGU6XCIsIGF0dHJpYnV0ZXM6IHtmb3I6IFwiZXZlbnREYXRlXCJ9fSk7XHJcbiAgICBjb25zdCBkYXRlSW5wdXQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImlucHV0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcImRhdGVcIiwgbmFtZTogXCJldmVudERhdGVcIiwgdmFsdWU6IGV2ZW50T2JqZWN0LmV2ZW50RGF0ZX19KTtcclxuICAgIGRhdGVGaWVsZHNldC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xyXG4gICAgZGF0ZUZpZWxkc2V0LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XHJcblxyXG4gICAgY29uc3QgdGltZUZpZWxkc2V0ID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJmaWVsZHNldFwifSk7XHJcbiAgICBjb25zdCB0aW1lTGFiZWwgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImxhYmVsXCIsIGNvbnRlbnQ6IFwiRWRpdCBUaW1lOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50VGltZVwifX0pO1xyXG4gICAgY29uc3QgdGltZUlucHV0ID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJ0aW1lXCIsIG5hbWU6IFwiZXZlbnRUaW1lXCIsIHZhbHVlOiBldmVudE9iamVjdC5ldmVudFRpbWV9fSk7XHJcbiAgICB0aW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQodGltZUxhYmVsKTtcclxuICAgIHRpbWVGaWVsZHNldC5hcHBlbmRDaGlsZCh0aW1lSW5wdXQpO1xyXG5cclxuICAgIGNvbnN0IGxvY2F0aW9uRmllbGRzZXQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcclxuICAgIGNvbnN0IGxvY2F0aW9uTGFiZWwgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImxhYmVsXCIsIGNvbnRlbnQ6IFwiRWRpdCBMb2NhdGlvbjpcIiwgYXR0cmlidXRlczoge2ZvcjogXCJldmVudExvY2F0aW9uXCJ9fSk7XHJcbiAgICBjb25zdCBsb2NhdGlvbklucHV0ID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwiZXZlbnRMb2NhdGlvblwiLCB2YWx1ZTogZXZlbnRPYmplY3QuZXZlbnRMb2NhdGlvbn19KTtcclxuICAgIGxvY2F0aW9uRmllbGRzZXQuYXBwZW5kQ2hpbGQobG9jYXRpb25MYWJlbCk7XHJcbiAgICBsb2NhdGlvbkZpZWxkc2V0LmFwcGVuZENoaWxkKGxvY2F0aW9uSW5wdXQpO1xyXG5cclxuICAgIC8vY29uc3QgdXBkYXRlQnV0dG9uID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJidXR0b25cIiwgY29udGVudDogXCJVcGRhdGVcIiwgYXR0cmlidXRlczoge3R5cGU6IFwiYnV0dG9uXCIsIGlkOiBcInN1Ym1pdEVkaXRzXCJ9fSk7XHJcbiAgICAvLyB1cGRhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50TGlzdGVuZXJzLmhhbmRsZUV2ZW50VXBkYXRlQnV0dG9uKTtcclxuXHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVGaWVsZHNldCk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVGaWVsZHNldCk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVGaWVsZHNldCk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uRmllbGRzZXQpO1xyXG4gICAgLy9mb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcblxyXG4gICAgbGV0IGN1cnJlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjb250YWluZXJJZH1gKTtcclxuICAgIHdoaWxlIChjdXJyZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgY3VycmVudENvbnRhaW5lci5yZW1vdmVDaGlsZChjdXJyZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gZm9ybUNvbnRhaW5lcjtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvbUNvbXBvbmVudHMiLCIvLyBpbXBvcnQgZXZlbnRzIGZyb20gXCIuL2V2ZW50c1wiO1xyXG5cclxuLy8gaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcclxuLy8gaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcclxuLy8gaW1wb3J0IGZyaWVuZHMgZnJvbSBcIi4vZnJpZW5kc1wiO1xyXG4vLyBpbXBvcnQgbmV3cyBmcm9tIFwiLi9uZXdzXCJcclxuLy8gaW1wb3J0IG1lc3NhZ2VzIGZyb20gXCIuL21lc3NhZ2VzXCI7XHJcbmltcG9ydCBkYXNoQm9hcmQgZnJvbSBcIi4vZGFzaGJvYXJkXCJcclxuLy8gaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xyXG5pbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnNcIjtcclxuXHJcbi8vQlVJTERTIE5BSUdBVElPTkJBUi8vXHJcbi8vIGRvbUNvbXBvbmVudHMuY3JlYXRlTmF2QmFyKClcclxuZGFzaEJvYXJkLmJ1aWxkTG9naW5Gb3JtKClcclxuJChcIm1vZGFsQnV0dG9uXCIpLmNsaWNrKGV2ZW50TGlzdGVuZXJzLm1vZGFsRGlzcGxheUFuaW1hdGlvbilcclxuXHJcbi8vTkVXUyBTRUNUSU9OXHJcbi8vIG5ld3Muc2F2ZSgpO1xyXG4vLyBuZXdzLmFsbFNhdmVkKCk7XHJcbi8vIG5ld3MuZ2V0TmV3cygpO1xyXG5cclxuXHJcbi8vIG5ld3MubmV3c0VsZW1lbnRDcmVhdG9yKCk7XHJcbi8vIG5ld3MubmV3c0VsZW1lbnRDcmVhdG9yKCk7XHJcblxyXG4iLCJpbXBvcnQgZGFzaGJvYXJkIGZyb20gXCIuL2Rhc2hib2FyZFwiXHJcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcclxuaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcclxuaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcclxuaW1wb3J0IG1lc3NhZ2VzIGZyb20gXCIuL21lc3NhZ2VzXCI7XHJcbmltcG9ydCBmcmllbmRzIGZyb20gXCIuL2ZyaWVuZHNcIjtcclxuaW1wb3J0IG5ld3MgZnJvbSBcIi4vbmV3c1wiO1xyXG5pbXBvcnQgdGFza3MgZnJvbSBcIi4vdGFza3NcIjtcclxuXHJcbmNvbnN0IGV2ZW50TGlzdGVuZXJzID0ge1xyXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIExPR0lOIEZPUk06IHVzZXIgZW50ZXJzIFVzZXJuYW1lIGFuZCBQYXNzd29yZC4gd2hlbiBVc2VyIGNsaWNrcyBsb2dpbiwgdGhlIGlucHV0IGZpZWxkIGFuZCBOT01BRFMgaGVhZGVyIGRpc2FwcGVhclxyXG4gICAgYW5kIHRoZSB1c2VyIHdpbGwgYmUgZGlzcGxheWVkIHRoZSBcIkRhc2hib2FyZFwiIGFuZCB0aGUgbmF2aWdhdGlvbiBiYXIuIFVwb24gbG9naW4sIHNlc3Npb25TdG9yYWdlIGlzIHN0YXJ0ZWQuIEluIHRoZSBDb25zb2xlXHJcbiAgICB5b3Ugd2lsbCBiZSBhYmxlIHRvIHNlZSBXaG8gaXMgbG9nZ2VkIGluIGFuZCB3aGF0IHRoZWlyIHVzZXJJZCBpcy4gaWUuIDEsMiwzLDQgZXRjLlxyXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgdXNlckxvZ2luKCl7XHJcbiAgICAgICAgbGV0IGxvZ0luVmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1c2VyTmFtZVZhbFwiKS52YWx1ZVxyXG4gICAgICAgIGxldCBwYXNzd29yZFZhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFzc3dvcmRWYWxcIikudmFsdWVcclxuICAgICAgICAvL2dldCB0byBjb21wYXJlXHJcbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xyXG5cclxuICAgICAgICBcImRhdGFTZXRcIiA6IFwidXNlcnNcIixcclxuICAgICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcclxuICAgICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPXVzZXJzXCJcclxuXHJcbiAgICB9KS50aGVuKHBhcnNlZFVzZXJzID0+IHtcclxuXHJcbiAgICAgICAgcGFyc2VkVXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcclxuICAgICAgICAgICAgICAvKklmIGxvZ2luIGNyZWRlbnRpYWxzIG1hdGNoIHRob3NlIGluIGRhdGFiYXNlLmpzb24uIFdlIHdhbnQgdGhlIHVzZXIgdG8gYmUgZGlzcGxheWVkIHRoZWlyIFwiZGFzaGJvYWRcIlxyXG4gICAgICAgICAgICAgIGFuZCBuYXZpZ2F0aW9uIGJhci4gU28gd2UgbmVlZCB0byBzZXQgZGlzcGxheSB0byBub25lIGFuZCBpbnZva2UgdGhlIGZ1bmN0aW9uIC0gY3JlYXRlTmF2QmFyKCkqL1xyXG4gICAgICAgICAgICBpZihsb2dJblZhbCA9PT0gdXNlci51c2VyTmFtZSAmJiBwYXNzd29yZFZhbCA9PT0gdXNlci5wYXNzd29yZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaGlkZXMgTk9NQUQgaGVhZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIudC1ib3JkZXJcIikuaGlkZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLy9oaWRlcyB0aGUgZm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuZm9ybVwiKS5oaWRlKClcclxuICAgICAgICAgICAgICAgICAgICAvL2Rpc3BsYXlzIG5hdmlnYXRpbiBiYXJcclxuICAgICAgICAgICAgICAgICAgICBkYXNoYm9hcmQuY3JlYXRlTmF2QmFyKClcclxuICAgICAgICAgICAgICAgICAgICAvL3Nlc3Npb24gc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgdXNlci5pZClcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cgdmVyaWZ5aW5nIHRoYXQgY3JlZGVudGlhbHMgbWF0Y2ggYW5kIHVzZXIgaXMgbG9nZ2VkIGluXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2dnZWQgaW4gYXNcIiArIFwiIFwiICsgdXNlci51c2VyTmFtZSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInlvdXIgdXNlciBJRCBpczogXCIgKyB1c2VySWQpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBSRUdJU1RSQVRJT04gRk9STTogV2hlbiByZWdpc3RlcmluZyBmb3IgYW4gYWNjb3VudCB0aGUgdXNlciB3aWxsIGVudGVyIGRlc2lyZWQgdXNlcm5hbWUsIGVtYWlsLCBhbmQgcGFzc3dvcmRcclxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgIHVzZXJSZWdpc3RyYXRpb24oKXtcclxuICAgICAgICBsZXQgcmVnVXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlZ1VzZXJOYW1lXCIpLnZhbHVlXHJcbiAgICAgICAgbGV0IHJlZ0VtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZWdFbWFpbFwiKS52YWx1ZVxyXG4gICAgICAgIGxldCByZWdQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVnUGFzc3dvcmRcIikudmFsdWVcclxuICAgICAgICAvLyBsZXQgcmVnQ29uZmlybVBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZWdVc2VyTmFtZVwiKS52YWx1ZVxyXG5cclxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XHJcblxyXG4gICAgICAgICAgICAgICAgXCJkYXRhU2V0XCIgOiBcInVzZXJzXCIsXHJcbiAgICAgICAgICAgICAgICBcImZldGNoVHlwZVwiIDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ1c2VyTmFtZVwiOiByZWdVc2VyTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBcImVtYWlsXCI6IHJlZ0VtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGFzc3dvcmRcIjogcmVnUGFzc3dvcmRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xyXG4gICAgICAgICAgICAgICAgXCJkYXRhU2V0XCIgOiBcInVzZXJzXCIsXHJcbiAgICAgICAgICAgICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgIFwiZW1iZWRJdGVtXCIgOiBgP3VzZXJOYW1lPSR7cmVnVXNlck5hbWV9YFxyXG4gICAgICAgICAgICB9KS50aGVuKHVzZXIgPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyKVxyXG4gICAgICAgICAgICAgICAgdXNlci5mb3JFYWNoKCB4ID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgeC5pZClcclxuXHJcbiAgICAgICAgICAgICAgICAvL2hpZGVzIE5PTUFEIGhlYWRpbmdcclxuICAgICAgICAgICAgICAgICQoXCIudC1ib3JkZXJcIikuaGlkZSgpXHJcbiAgICAgICAgICAgICAgICAvL2hpZGVzIHRoZSBmb3JtXHJcbiAgICAgICAgICAgICAgICAkKFwiLmZvcm1cIikuaGlkZSgpXHJcbiAgICAgICAgICAgICAgICAvL2Rpc3BsYXlzIG5hdmlnYXRpbiBiYXJcclxuICAgICAgICAgICAgICAgIGRhc2hib2FyZC5jcmVhdGVOYXZCYXIoKVxyXG4gICAgICAgICAgICAgICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIilcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cgdmVyaWZ5aW5nIHRoYXQgY3JlZGVudGlhbHMgbWF0Y2ggYW5kIHVzZXIgaXMgbG9nZ2VkIGluXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2dlZCBpbiBhc1wiICsgXCIgXCIgKyB4LnVzZXJOYW1lKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ5b3VyIHVzZXIgSUQgaXM6IFwiICsgdXNlcklkKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfSxcclxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBNT0RBTDogdXNlciB3aWxsIGNsaWNrIHRoZSBOT01BRCBNSVNTSU9OIGJ1dHRvbiBhbmQgYSBtb2RhbCB3aWxsIHBvcCB1cCBkZXNjcmliaW5nIHdoYXQgdGhlIGFwcGxpY2F0aW9uIGlzIGFib3V0XHJcbiAgICBhbmQgd2hvIGl0IGlzIHRhaWxvcmVkIHRvd2FyZHNcclxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgIG1vZGFsRGlzcGxheUFuaW1hdGlvbigpe1xyXG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm9tYWRNb2RhbFwiKTtcclxuXHJcbiAgICAgICAgLy8gdGFyZ2V0IG1vZGFsIHRvIG9wZW4gaXRcclxuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbEJ1dHRvblwiKTtcclxuXHJcbiAgICAgICAgLy8gR2V0IHRoZSA8c3Bhbj4gZWxlbWVudCB0aGF0IGNsb3NlcyB0aGUgbW9kYWxcclxuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZVwiKVswXTtcclxuICAgICAgICAvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyB0aGUgYnV0dG9uLCBvcGVuIHRoZSBtb2RhbFxyXG4gICAgICAgIGJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3Mgb24gPHNwYW4+ICh4KSwgY2xvc2UgdGhlIG1vZGFsXHJcbiAgICAgICAgc3Bhbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBhbnl3aGVyZSBvdXRzaWRlIG9mIHRoZSBtb2RhbCwgY2xvc2UgaXRcclxuICAgICAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcclxuICAgICAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiLm1lc3NhZ2UgYVwiKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQoXCJmb3JtXCIpLmFuaW1hdGUoe2hlaWdodDogXCJ0b2dnbGVcIiwgb3BhY2l0eTogXCJ0b2dnbGVcIn0sIFwic2xvd1wiKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIE5BVkJBUiBMSSBFTElTVEVORVJTOiBXaGVuIHVzZXIgY2xpY2tzIGFuIGl0ZW0gaW4gdGhlIE5BVkJBUiB0aGUgY29udGVudCBhc3NvY2lhdGVkIHdpdGggdGhhdCB0YWIgd2lsbCBwb3B1bGF0ZSB0aGUgRE9NXHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICBtZXNzYWdlc05hdkxpbmsoKXtcclxuICAgICAgICBtZXNzYWdlcy5jcmVhdGVNZXNzYWdlQm9hcmQoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwid29ya2luZ1wiKVxyXG5cclxuICAgIH0sXHJcbiAgICBldmVudHNOYXZMaW5rKCl7XHJcbiAgICAgICAgICAgIGV2ZW50cy5zaG93RXZlbnRGb3JtKClcclxuICAgICAgICAgICAgLy9hcHBlbmRVc2VyRXZlbnRcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJldmVudHMgY2xpY2tlZFwiKVxyXG4gICAgfSxcclxuICAgIGZyaWVuZHNOYXZMaW5rKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmcmllbmRzIG5hdiBsaW5rIGNsaWNrZWRcIilcclxuICAgICAgICBmcmllbmRzLmxvYWRDdXJyZW50VXNlcnNGcmllbmRzKClcclxuICAgICAgICBmcmllbmRzLmRlZmluZUN1cnJlbnRVc2Vyc0ZyaWVuZHMoKVxyXG4gICAgfSxcclxuICAgIG5ld3NOYXZMaW5rKCl7XHJcbiAgICAgICAgLy9ORVdTIFNFQ1RJT05cclxuICAgICAgICBuZXdzLnNhdmUoKTtcclxuICAgICAgICBuZXdzLmFsbFNhdmVkKCk7XHJcbiAgICAgICAgbmV3cy5nZXROZXdzKCk7XHJcbiAgICAgICAgbmV3cy5uZXdzRWxlbWVudENyZWF0b3IoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5ld3MgbGluayBjbGlja2VkXCIpXHJcbiAgICB9LFxyXG4gICAgdGFza3NOYXZMaW5rKCl7XHJcbiAgICAgICAgdGFza3MuY3JlYXRlVGFza1RhYmxlcygpXHJcbiAgICB9LFxyXG4gICAgbm9tYWROYXZMaW5rKCl7XHJcbiAgICAgICAgZGFzaGJvYXJkLmJ1aWxkTG9naW5Gb3JtKClcclxuICAgICAgICAkKFwibmF2XCIpLmhpZGUoKVxyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLmNsZWFyKClcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNpZ25lZCBvdXRcIilcclxuICAgIH0sXHJcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBFTkQgT0YgTkFWSUdBVElPTiBFVkVOVExJU1RFTkVSU1xyXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbiAgICBmcmllbmRzRGVsZXRlRnJpZW5kICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xyXG4gICAgXHJcbiAgICB9LFxyXG4gICAgaGFuZGxlRXZlbnRTYXZlQnV0dG9uKCkge1xyXG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dHRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnROYW1lXCIpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dHRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnREYXRlXCIpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRpbWVJbnB1dHRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnRUaW1lXCIpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uSW5wdXR0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V2ZW50TG9jYXRpb25cIikudmFsdWU7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBldmVudE9iamVjdCA9IHtcclxuICAgICAgICAgICAgZXZlbnROYW1lOiBuYW1lSW5wdXR0ZWQsXHJcbiAgICAgICAgICAgIGV2ZW50RGF0ZTogZGF0ZUlucHV0dGVkLFxyXG4gICAgICAgICAgICBldmVudFRpbWU6IHRpbWVJbnB1dHRlZCxcclxuICAgICAgICAgICAgZXZlbnRMb2NhdGlvbjogbG9jYXRpb25JbnB1dHRlZFxyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuICAgICAgICAgICAgZGF0YVNldDogXCJldmVudHNcIixcclxuICAgICAgICAgICAgZmV0Y2hUeXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgZGF0YUJhc2VPYmplY3Q6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSxcclxuICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogZXZlbnRPYmplY3QuZXZlbnROYW1lLFxyXG4gICAgICAgICAgICAgICAgZXZlbnREYXRlOiBldmVudE9iamVjdC5ldmVudERhdGUsXHJcbiAgICAgICAgICAgICAgICBldmVudFRpbWU6IGV2ZW50T2JqZWN0LmV2ZW50VGltZSxcclxuICAgICAgICAgICAgICAgIGV2ZW50TG9jYXRpb246IGV2ZW50T2JqZWN0LmV2ZW50TG9jYXRpb25cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oICgpID0+IHtcclxuICAgICAgICAgICAgZXZlbnRzLmFwcGVuZFVzZXJFdmVudHMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgaGFuZGxlRXZlbnREZWxldGVCdXR0b24oKSB7XHJcbiAgICAgICAgY29uc3QgaWRUb0RlbGV0ZSA9IGV2ZW50LnRhcmdldC5pZC5zcGxpdChcIi0tXCIpWzFdO1xyXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuICAgICAgICAgICAgZGVsZXRlSWQ6IGlkVG9EZWxldGUsXHJcbiAgICAgICAgICAgIGRhdGFTZXQ6IFwiZXZlbnRzXCIsXHJcbiAgICAgICAgICAgIGZldGNoVHlwZTogXCJERUxFVEVcIixcclxuICAgICAgICAgICAgZGF0YUJhc2VPYmplY3Q6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbiggKCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudHMuYXBwZW5kVXNlckV2ZW50cygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBoYW5kbGVFdmVudEVkaXRCdXR0b24oKSB7XHJcbiAgICAgICAgY29uc3QgaWRUb0VkaXQgPSBldmVudC50YXJnZXQuaWQuc3BsaXQoXCItLVwiKVsxXTtcclxuICAgICAgICAvLyBjb25zdCBldmVudE9iamVjdCA9XHJcbiAgICAgICAgZG9tQ29tcG9uZW50cy5jcmVhdGVFdmVudEVkaXRJbnB1dChpZFRvRWRpdCwgKVxyXG4gICAgfSxcclxuICAgIGhhbmRsZUV2ZW50VXBkYXRlQnV0dG9uKCkge1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV2ZW50TGlzdGVuZXJzO1xyXG4iLCIvLyBBdXRob3I6IENvbGUgQnJ5YW50IC8gUHVycG9zZTpcclxuXHJcbmltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XHJcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcclxuLy9pbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnNcIjtcclxuXHJcblxyXG4vL2NyZWF0ZUV2ZW50SW5wdXQgYW5kIGNyZWF0ZUV2ZW50SXRlbSB3aWxsIGJlIGFkZGVkIHRvIHRoaXMgb2JqZWN0LiBzbyBkb21idWlsZGVyLlxyXG5jb25zdCBldmVudHMgPSB7XHJcbiAgc2hvd0V2ZW50Rm9ybSAoKSB7XHJcbiAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpXHJcbiAgICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI291dHB1dFwiKTtcclxuICAgIGNvbnN0IGV2ZW50Rm9ybSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRXZlbnRJbnB1dCgpO1xyXG4gICAgb3V0cHV0LmFwcGVuZENoaWxkKGV2ZW50Rm9ybSk7XHJcbiAgICBjb25zdCBldmVudExvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpXHJcbiAgICBldmVudExvZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImV2ZW50TG9nXCIpO1xyXG4gICAgb3V0cHV0LmFwcGVuZENoaWxkKGV2ZW50TG9nKTtcclxuICB9LFxyXG4gIGFwcGVuZFVzZXJFdmVudHMoKSB7XHJcbiAgICBjb25zdCBldmVudExvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnRMb2dcIik7XHJcbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XHJcbiAgICAgIGRhdGFTZXQ6IFwiZXZlbnRzXCIsXHJcbiAgICAgIGZldGNoVHlwZTogXCJHRVRcIixcclxuICAgICAgZGF0YUJhc2VPYmplY3Q6IHtcclxuICAgICAgICB1c2VySWQ6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIilcclxuICAgICAgICB9LFxyXG4gICAgICBlbWJlZEl0ZW06IFwiP19lbWJlZD1ldmVudHNcIlxyXG4gICAgfSlcclxuICAgIC50aGVuKHBhcnNlZFJlc3BvbnNlID0+IHtcclxuICAgICAgbGV0IGRvY3VGcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICBwYXJzZWRSZXNwb25zZS5mb3JFYWNoKGV2ZW50ID0+IHtcclxuICAgICAgICB3aGlsZSAoZXZlbnRMb2cuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgZXZlbnRMb2cucmVtb3ZlQ2hpbGQoZXZlbnRMb2cuZmlyc3RDaGlsZClcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGV2ZW50SXRlbSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRXZlbnRJdGVtKGV2ZW50KTtcclxuICAgICAgICBkb2N1RnJhZy5hcHBlbmRDaGlsZChldmVudEl0ZW0pO1xyXG4gICAgICB9KTtcclxuICAgICAgZXZlbnRMb2cuYXBwZW5kQ2hpbGQoZG9jdUZyYWcpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufTtcclxuXHJcbi8vIGV2ZW50cy5zaG93RXZlbnRGb3JtKCk7XHJcbi8vIGV2ZW50cy5hcHBlbmRVc2VyRXZlbnRzKCk7XHJcbi8vIGV2ZW50cy5kZWxldGVFdmVudCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXZlbnRzOyIsImltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCJcclxuaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xyXG5pbXBvcnQgZnJpZW5kc0V2ZW50c0xpc3RlbmVyIGZyb20gXCIuL2ZyaWVuZHNFdmVudHNMaXN0ZW5lclwiO1xyXG5cclxuY29uc3QgZnJpZW5kcyA9IHtcclxuXHJcbiAgXHJcbiAgZGVmaW5lQ3VycmVudFVzZXJzRnJpZW5kcyAoKSB7XHJcbiAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpXHJcbiAgICBjb25zdCBjdXJyZW50VXNlciA9IDE7XHJcbiAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgICAvLyBsZXQgY3VycmVudFVzZXIgPSBOdW1iZXIodXNlcklkKTtcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyLCB1c2VySWQpXHJcbiAgICBsZXQgZnJpZW5kSG9sZGVyID0gW107XHJcbi8vIFBVTEwgRlJPTSBGUklFTkRTIEpTT04tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5ub21hZERhdGEuY29ubmVjdFRvRGF0YSh7ICAgIFxyXG5cImRhdGFTZXRcIiA6IFwiZnJpZW5kc1wiLFxyXG5cImZldGNoVHlwZVwiIDogXCJHRVRcIixcclxuXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcclxuXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1ldmVudHNcIn0pXHJcbi50aGVuKGZyb21GcmllbmRzID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhmcm9tRnJpZW5kcylcclxuICBmcm9tRnJpZW5kcy5mb3JFYWNoKGZyaWVuZERhdGEgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coZnJpZW5kRGF0YSlcclxuICAgIGlmIChmcmllbmREYXRhLnVzZXJJZCA9PT0gY3VycmVudFVzZXIpIHtcclxuICAgICAgZnJpZW5kSG9sZGVyLnB1c2goZnJpZW5kRGF0YS5vdGhlckZyaWVuZElkKVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgZnJpZW5kSG9sZGVyLmZvckVhY2gob2ZmaWNpYWxGcmllbmQgPT4ge1xyXG4gICAgdGhpcy5sb2FkQ3VycmVudFVzZXJzRnJpZW5kcyhvZmZpY2lhbEZyaWVuZClcclxuICB9KVxyXG59KVxyXG59LFxyXG5sb2FkQ3VycmVudFVzZXJzRnJpZW5kcyAoZnJpZW5kKSB7XHJcbiAgLy8gUFVMTCBGUk9NIFVTRVJTIEpTT04gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvLyBjb25zb2xlLmxvZyhmcmllbmQpXHJcbiAgICAgIGNvbnN0IHRhcmdldENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpXHJcbiAgICAgIHRhcmdldENvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcInNlY3Rpb25cIixcclxuICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICBjbGFzczogXCJmcmllbmQtY29udGFpbmVyXCIsXHJcbiAgICAgICAgICBpZDogYGZyaWVuZC0ke2ZyaWVuZH1gXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSlcclxuICAgICAgY29uc3QgZnJpZW5kQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGZyaWVuZC0ke2ZyaWVuZH1gKVxyXG5cclxuXHJcbiAgICAgIGxldCBmcmllbmREb21CdWlsZGVyID0gW107XHJcbiAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuICAgICAgXCJkYXRhU2V0XCIgOiBcInVzZXJzXCIsXHJcbiAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxyXG4gICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxyXG4gICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPWV2ZW50c1wifSlcclxuICAgICAgLnRoZW4oZnJvbVVzZXJEYXRhID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhmcm9tVXNlckRhdGEpO1xyXG4gICAgICAgIGZyb21Vc2VyRGF0YS5mb3JFYWNoKHVzZXJJbmZvID0+IHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGZyaWVuZCwgdXNlckluZm8uaWQpXHJcbiAgICAgICAgICBpZiAodXNlckluZm8uaWQgPT09IGZyaWVuZCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2VySW5mby51c2VyTmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyaWVuZElkZW50aWZpZXIgPSB7XHJcbiAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiaDJcIixcclxuICAgICAgICAgICAgICBjb250ZW50OiB1c2VySW5mby51c2VyTmFtZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmcmllbmREb21CdWlsZGVyLnB1c2goZnJpZW5kSWRlbnRpZmllcilcclxuICAgICAgICAgICAgLy8gUFVMTCBGUk9NIEVWRU5UUyBKU09OIC0tLS0tLVxyXG4gICAgICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XHJcbiAgICAgICAgICAgICAgICBcImRhdGFTZXRcIiA6IFwiZXZlbnRzXCIsXHJcbiAgICAgICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxyXG4gICAgICAgICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPWV2ZW50c1wifSlcclxuICAgICAgICAgICAgLnRoZW4oZXZlbnRzID0+IHtcclxuICAgICAgICAgICAgICBldmVudHMuZm9yRWFjaChldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudXNlcklkID09PSBmcmllbmQpIHtcclxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQuZXZlbnROYW1lKTtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgZXZlbnRIb2xkZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwicFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGBZb3VyIGZlbGxvdyBub21hZHMgdXBjb21pbmcgZXZlbnQ6ICR7ZXZlbnQuZXZlbnROYW1lfSBvbiAke2V2ZW50LmV2ZW50RGF0ZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBgZXZlbnQtJHtldmVudC5pZH1gLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBmcmllbmREb21CdWlsZGVyLnB1c2goZXZlbnRIb2xkZXIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy8gUFVMTCBGUk9NIE5FV1NJVEVNUyBKU09OIC0tLS0tLVxyXG4gICAgICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XHJcbiAgICAgICAgICAgIFwiZGF0YVNldFwiIDogXCJuZXdzaXRlbXNcIixcclxuICAgICAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IFwiXCIsXHJcbiAgICAgICAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9bmV3c2l0ZW1zXCJ9KVxyXG4gICAgICAgICAgICAudGhlbihuZXdzU2hpeiA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmV3c1NoaXopXHJcbiAgICAgICAgICAgICAgbmV3c1NoaXouZm9yRWFjaCh1c2VyU3BlY2lmaWNBcnRpY2xlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlclNwZWNpZmljQXJ0aWNsZXMudXNlcklkID09PSBmcmllbmQpIHtcclxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codXNlclNwZWNpZmljQXJ0aWNsZXMudGl0bGUpXHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFydGljbGVIb2xkZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwicFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHVzZXJTcGVjaWZpY0FydGljbGVzLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBgYXJ0aWNsZS0ke3VzZXJTcGVjaWZpY0FydGljbGVzLmlkfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGZyaWVuZERvbUJ1aWxkZXIucHVzaChhcnRpY2xlSG9sZGVyKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZnJpZW5kRG9tQnVpbGRlcilcclxuICAgICAgICAgICAgICBmcmllbmREb21CdWlsZGVyLmZvckVhY2gob2JqZWN0ID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICBmcmllbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KG9iamVjdCkpXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBjb25zdCBkZWxldGVGcmllbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICAgICAgICAgICAgZGVsZXRlRnJpZW5kLmNsYXNzTGlzdC5hZGQoYGRlbGV0ZS1mcmllbmQtJHtmcmllbmR9YClcclxuICAgICAgICAgICAgICBkZWxldGVGcmllbmQudGV4dENvbnRlbnQgPSBcIkRFTEVURVwiO1xyXG4gICAgICAgICAgICAgIGZyaWVuZENvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVGcmllbmQpO1xyXG4gICAgICAgICAgICAgIGRlbGV0ZUZyaWVuZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZnJpZW5kc0V2ZW50c0xpc3RlbmVyLmZyaWVuZHNEZWxldGVGcmllbmQoKVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuXHJcbiAgfSxcclxuICBpbml0aWFsaXplUG90ZW50aWFsRnJpZW5kcyAoKSB7XHJcbiAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgICBsZXQgY3VycmVudFVzZXIgPSBOdW1iZXIodXNlcklkKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiZnJpZW5kcyBQYWdlIHVzZXIgaWQgaXMtXCIsY3VycmVudFVzZXIpO1xyXG5cclxuICAgIGNvbnN0IHRhcmdldENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpO1xyXG4gICAgY29uc3QgZmluZE5ld0ZyaWVuZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gICAgbGV0IGZyaWVuZHNJSGF2ZSA9IFtdO1xyXG4gICAgZmluZE5ld0ZyaWVuZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZ1dHVyZS1mcmllbmRzXCIpO1xyXG4gICAgdGFyZ2V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZpbmROZXdGcmllbmRDb250YWluZXIpO1xyXG5cclxuICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuICAgICAgXCJkYXRhU2V0XCIgOiBcImZyaWVuZHNcIixcclxuICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXHJcbiAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IFwiXCIsXHJcbiAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9ZnJpZW5kc1wiXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oZnJvbUZyaWVuZHMgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhmcm9tRnJpZW5kcylcclxuICAgICAgZnJvbUZyaWVuZHMuZm9yRWFjaChmcmllbmREYXRhID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhmcmllbmREYXRhKVxyXG4gICAgICAgIGlmIChmcmllbmREYXRhLnVzZXJJZCA9PT0gY3VycmVudFVzZXIpIHtcclxuICAgICAgICAgIGZyaWVuZHNJSGF2ZS5wdXNoKGZyaWVuZERhdGEub3RoZXJGcmllbmRJZClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZyaWVuZHNJSGF2ZSlcclxuICAgICAgXHJcbiAgICAgICAgdGhpcy5zaG93VXNlclBvdGVudGlhbEZyaWVuZHMoZnJpZW5kc0lIYXZlKVxyXG4gICAgfSlcclxuICB9LFxyXG4gIHNob3dVc2VyUG90ZW50aWFsRnJpZW5kcyAoZnJpZW5kKSB7XHJcbiAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgICBsZXQgY3VycmVudFVzZXIgPSBOdW1iZXIodXNlcklkKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGZyaWVuZClcclxuICAgIGxldCBhbGxUaGVVc2VycyA9IFtdXHJcbiAgICBmcmllbmQucHVzaChjdXJyZW50VXNlcilcclxuICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuICAgICAgXCJkYXRhU2V0XCIgOiBcInVzZXJzXCIsXHJcbiAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxyXG4gICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxyXG4gICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPXVzZXJzXCJcclxuICAgIH0pXHJcbiAgICAudGhlbihhbGxVc2VycyA9PiB7XHJcbiAgICAgIGFsbFVzZXJzLmZvckVhY2godXNlciA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codXNlci5pZClcclxuICAgICAgICBhbGxUaGVVc2Vycy5wdXNoKHVzZXIuaWQpXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZXZlcnlvbmVcIixhbGxUaGVVc2VycywgXCJ1c2VyIGFuZCBmcmllbmRzXCIsZnJpZW5kKVxyXG4gICAgICBsZXQgbm90Q3VycmVudEZyaWVuZCA9IHRoaXMuZGlmZmVyZW5jZU9mMkFycmF5cyhhbGxUaGVVc2VycywgZnJpZW5kKVxyXG4gICAgICBub3RDdXJyZW50RnJpZW5kLmZvckVhY2gobm9GcmllbmRPZk1pbmUgPT4ge1xyXG4gICAgICAgIHRoaXMucHJpbnRQb3RlbnRpYWxGcmllbmRzVG9Ccm93c2VyKG5vRnJpZW5kT2ZNaW5lKVxyXG4gICAgICAgIFxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9LFxyXG4gICBkaWZmZXJlbmNlT2YyQXJyYXlzIChhcnJheTEsIGFycmF5Mikge1xyXG4gICAgdmFyIHRlbXAgPSBbXTtcclxuICAgIGFycmF5MSA9IGFycmF5MS50b1N0cmluZygpLnNwbGl0KCcsJykubWFwKE51bWJlcik7XHJcbiAgICBhcnJheTIgPSBhcnJheTIudG9TdHJpbmcoKS5zcGxpdCgnLCcpLm1hcChOdW1iZXIpO1xyXG4gICAgXHJcbiAgICBmb3IgKHZhciBpIGluIGFycmF5MSkge1xyXG4gICAgaWYoYXJyYXkyLmluZGV4T2YoYXJyYXkxW2ldKSA9PT0gLTEpIHRlbXAucHVzaChhcnJheTFbaV0pO1xyXG4gICAgfVxyXG4gICAgZm9yKGkgaW4gYXJyYXkyKSB7XHJcbiAgICBpZihhcnJheTEuaW5kZXhPZihhcnJheTJbaV0pID09PSAtMSkgdGVtcC5wdXNoKGFycmF5MltpXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGVtcC5zb3J0KChhLGIpID0+IGEtYik7XHJcbiAgICB9LFxyXG4gICAgcHJpbnRQb3RlbnRpYWxGcmllbmRzVG9Ccm93c2VyIChub3RBRnJpZW5kKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKG5vdEFGcmllbmQpXHJcbiAgICAgIGNvbnN0IHRhcmdldFNlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZ1dHVyZS1mcmllbmRzXCIpO1xyXG4gICAgICB0YXJnZXRTZWN0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXHJcbiAgICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgaWQ6IGBwb3RlbnRpYWxGcmllbmQtJHtub3RBRnJpZW5kfWBcclxuICAgICAgICB9XHJcbiAgICAgIH0pKVxyXG5cclxuICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xyXG4gICAgICAgIFwiZGF0YVNldFwiIDogXCJ1c2Vyc1wiLFxyXG4gICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxyXG4gICAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IFwiXCIsXHJcbiAgICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD11c2Vyc1wiXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKHVzZXJzSW5mbyA9PiB7XHJcbiAgICAgICAgdXNlcnNJbmZvLmZvckVhY2godXNlciA9PiB7XHJcbiAgICAgICAgICBpZiAodXNlci5pZCA9PT0gbm90QUZyaWVuZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyLmlkLCBcImlzIG5vIGZyaWVuZFwiKVxyXG4gICAgICAgICAgICBjb25zdCBwb3RlbnRpYWxGcmllbmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcG90ZW50aWFsRnJpZW5kLSR7bm90QUZyaWVuZH1gKVxyXG4gICAgICAgICAgICBwb3RlbnRpYWxGcmllbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2gyJyxcclxuICAgICAgICAgICAgICBjb250ZW50OiB1c2VyLnVzZXJOYW1lLFxyXG4gICAgICAgICAgICAgIGNzc0NsYXNzOiBgcG90ZW50aWFsLWZyaWVuZC0ke3VzZXIuaWR9YFxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgcG90ZW50aWFsRnJpZW5kQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgY29udGVudDogXCJBZGQgRnJpZW5kXCIsXHJcbiAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGBhZGQtZnJpZW5kLWJ1dHRvbi0ke3VzZXIuaWR9YFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIGNvbnN0IGZvckFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBhZGQtZnJpZW5kLWJ1dHRvbi0ke3VzZXIuaWR9YCk7XHJcbiAgICAgICAgICAgIGZvckFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGZyaWVuZHNFdmVudHNMaXN0ZW5lci5mcmllbmRzQWRkRnJpZW5kKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhub3RBRnJpZW5kKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnJpZW5kc1xyXG5cclxuLy8gY29uc3QgdGVzdGVyID0gW1xyXG4vLyAgIHtcclxuLy8gICAgIGVsZW1lbnRUeXBlOiBcImgyXCIsXHJcbi8vICAgICBjb250ZW50OiBcImpha2UgYmFubm9uXCJcclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIGVsZW1lbnRUeXBlOiBcInBcIixcclxuLy8gICAgIGNvbnRlbnQ6IFwiUG9vbCBQYXJ0eSAzcG1cIlxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgZWxlbWVudFR5cGU6IFwicFwiLFxyXG4vLyAgICAgY29udGVudDogXCJjaGVjayBvdXQgdGhpcyBuZXdzIGFydGljbGVcIlxyXG4vLyAgIH1cclxuLy8gXSIsIi8vIGltcG9ydCBmcmllbmRzIGZyb20gXCIuL2ZyaWVuZHNcIlxyXG5pbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xyXG5cclxuY29uc3QgZnJpZW5kc0V2ZW50c0xpc3RlbmVyID0ge1xyXG4gIGZyaWVuZHNEZWxldGVGcmllbmQgKCkge1xyXG4gICAgY29uc3QgZnJpZW5kVG9EZWxldGUgPSAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC52YWx1ZSkuc3BsaXQoXCItXCIpWzJdO1xyXG4gICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIik7XHJcbiAgICBsZXQgY3VycmVudFVzZXIgPSB1c2VySWQ7XHJcbiAgICBjb25zb2xlLmxvZyhmcmllbmRUb0RlbGV0ZSwgY3VycmVudFVzZXIpO1xyXG4gICAgbGV0IGZpbmFsTnVtYmVyU2VuZEZvckRlbGV0ZSA9IDBcclxuXHJcbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XHJcbiAgICAgIFwiZGF0YVNldFwiIDogXCJmcmllbmRzXCIsXHJcbiAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxyXG4gICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxyXG4gICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPWZyaWVuZHNcIlxyXG4gICAgfSlcclxuICAgIC50aGVuKGRlc3Ryb3lGcmllbmRzSGVhcnQgPT4ge1xyXG4gICAgICBkZXN0cm95RnJpZW5kc0hlYXJ0LmZvckVhY2goZ29vZGJ5ZUZyaWVuZCA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZ29vZGJ5ZUZyaWVuZC51c2VySWQsIE51bWJlcihjdXJyZW50VXNlcikpXHJcbiAgICAgICAgaWYgKGdvb2RieWVGcmllbmQub3RoZXJGcmllbmRJZCA9PT0gTnVtYmVyKGZyaWVuZFRvRGVsZXRlKSAmJiBnb29kYnllRnJpZW5kLnVzZXJJZCA9PT0gTnVtYmVyKGN1cnJlbnRVc2VyKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBlYWNlT3V0XCIsZ29vZGJ5ZUZyaWVuZC5pZCk7XHJcbiAgICAgICAgICAgIGZpbmFsTnVtYmVyU2VuZEZvckRlbGV0ZSA9IGdvb2RieWVGcmllbmQuaWQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgbGV0IGdvb2RCeWVTZWFyY2hSZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGZyaWVuZC0ke2ZyaWVuZFRvRGVsZXRlfWApO1xyXG4gICAgICBnb29kQnllU2VhcmNoUmVzdWx0cy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGdvb2RCeWVTZWFyY2hSZXN1bHRzKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKGZpbmFsTnVtYmVyU2VuZEZvckRlbGV0ZSlcclxuICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xyXG4gICAgICAgIFwiZGVsZXRlSWRcIiA6IGZpbmFsTnVtYmVyU2VuZEZvckRlbGV0ZSxcclxuICAgICAgICBcImRhdGFTZXRcIiA6IFwiZnJpZW5kc1wiLFxyXG4gICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkRFTEVURVwiLFxyXG4gICAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IHtcclxuICAgICAgICAgIFwidXNlcklkXCI6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIilcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgZnJpZW5kc0FkZEZyaWVuZCAoKSB7XHJcbiAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKTtcclxuICAgIGxldCBjdXJyZW50VXNlciA9IE51bWJlcih1c2VySWQpO1xyXG5cclxuICAgIFxyXG4gICAgY29uc3QgZnJpZW5kVG9CZUFkZGVkID0gKGV2ZW50LnRhcmdldC5pZCkuc3BsaXQoXCItXCIpWzNdO1xyXG4gICAgY29uc29sZS5sb2coYHVzZXIke2N1cnJlbnRVc2VyfWAsYEFkZGluZyBGcmllbmQke2ZyaWVuZFRvQmVBZGRlZH1gKVxyXG4gICAgXHJcbiAgICBsZXQgZ29vZEJ5ZU5vbkZyaWVuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwb3RlbnRpYWxGcmllbmQtJHtmcmllbmRUb0JlQWRkZWR9YCk7XHJcbiAgICBnb29kQnllTm9uRnJpZW5kLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZ29vZEJ5ZU5vbkZyaWVuZCk7XHJcbiAgICBhbGVydChgJHtldmVudC50YXJnZXQucHJldmlvdXNTaWJsaW5nLmlubmVyVGV4dH0gaXMgbm93IHlvdXIgZnJpZW5kIWApO1xyXG5cclxuICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuICAgICAgXCJkYXRhU2V0XCIgOiBcImZyaWVuZHNcIixcclxuICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiUE9TVFwiLFxyXG4gICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiB7XHJcbiAgICAgICAgXCJ1c2VySWRcIjogY3VycmVudFVzZXIsXHJcbiAgICAgICAgXCJvdGhlckZyaWVuZElkXCI6IE51bWJlcihmcmllbmRUb0JlQWRkZWQpLFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnJpZW5kc0V2ZW50c0xpc3RlbmVyIiwiaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcclxuaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xyXG5pbXBvcnQgbWVzc2FnZXNFdmVudExpc3RlbmVycyBmcm9tIFwiLi9tZXNzYWdlc0V2ZW50TGlzdGVuZXJzXCI7XHJcbi8vIGltcG9ydCBmcmllbmRzRXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZnJpZW5kc0V2ZW50TGlzdGVuZXJzLmpzXCI7XHJcblxyXG5jb25zdCBtZXNzYWdlcyA9IHtcclxuXHJcbiAgICBjcmVhdGVNZXNzYWdlQm9hcmQoKSB7XHJcbiAgICAgICAgJChcIiNvdXRwdXRcIikuZW1wdHkoKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBvdXRwdXRBcnRpY2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXRcIilcclxuXHJcbiAgICAgICAgLy9jcmVhdGUgZGlzcGxheSBjb250YWluZXJcclxuICAgICAgICBsZXQgbWVzc2FnZXNDb250YWluZXIgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwic2VjdGlvblwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZXNDb250YWluZXJcIixcclxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcclxuICAgICAgICAgICAgICAgIGlkIDogXCJtZXNzYWdlc0NvbnRhaW5lclwiXHJcbiAgICAgICAgICAgIH19KTtcclxuXHJcbiAgICAgICAgLy9jcmVhdGUgbWVzc2FnZSBpbnB1dCBmaWVsZFxyXG4gICAgICAgIGxldCBtZXNzYWdlSW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiaW5wdXRcIixcclxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm1lc3NhZ2VJbnB1dFwiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBcIm1lc3NhZ2VJbnB1dFwiLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgTWVzc2FnZSBIZXJlXCJcclxuICAgICAgICAgICAgfX0pO1xyXG5cclxuICAgICAgICAvL2NyZWF0ZSBzdWJtaXQgYnV0dG9uIGZvciBpbnB1dCBmaWVsZFxyXG4gICAgICAgIGxldCBtZXNzYWdlU3VibWl0QnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZVN1Ym1pdEJ1dHRvblwiLFxyXG4gICAgICAgICAgICBjb250ZW50IDogXCJTdWJtaXRcIixcclxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcclxuICAgICAgICAgICAgICAgIGlkIDogXCJtZXNzYWdlU3VibWl0QnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlIDogXCJzdWJtaXRcIlxyXG4gICAgICAgICAgICB9fSk7XHJcblxyXG4gICAgICAgIG1lc3NhZ2VTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1lc3NhZ2VzRXZlbnRMaXN0ZW5lcnMucG9zdE5ld01lc3NhZ2UsIHtvbmNlOiB0cnVlfSk7XHJcbiAgICAgICAgbWVzc2FnZXNDb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZUlucHV0KTtcclxuICAgICAgICBtZXNzYWdlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlU3VibWl0QnV0dG9uKTtcclxuICAgICAgICBvdXRwdXRBcnRpY2xlLmFwcGVuZENoaWxkKG1lc3NhZ2VzQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TWVzc2FnZXMoKVxyXG4gICAgfSxcclxuXHJcbiAgICBnZXRNZXNzYWdlcygpIHtcclxuXHJcbiAgICAgICAgLy9HRVQgZmV0Y2ggJiAudGhlbiB0byBidWlsZCBvYmplY3QocykgZm9yIGNyZWF0ZURvbUVsZW1lbnQoKSB1c2luZyBfZXhwYW5kIHRvIGRpc3BsYXkgVU46IG1lc3NhZ2VcclxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YVNldCA6IFwibWVzc2FnZXNcIixcclxuICAgICAgICAgICAgICAgIGZldGNoVHlwZSA6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICBlbWJlZEl0ZW0gOiBcIj9fZXhwYW5kPXVzZXJcIlxyXG5cclxuICAgICAgICB9KS50aGVuKG1lc3NhZ2VzID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBtZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlc0NvbnRhaW5lclwiKTtcclxuICAgICAgICAgICAgbGV0IG1lc3NhZ2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZUlucHV0XCIpO1xyXG5cclxuICAgICAgICAgICAgLy9zb3J0IG1lc3NhZ2VzIGJ5IHRpbWVTdGFtcFxyXG4gICAgICAgICAgICBtZXNzYWdlcy5zb3J0KGZ1bmN0aW9uKGEsYil7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYS50aW1lU3RhbXApIC0gbmV3IERhdGUoYi50aW1lU3RhbXApO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vYnVpbGQgRE9NIENvbXBvbmVudCBmb3IgZWFjaCBtZXNzYWdlIGFuZCBhcHBlbmRcclxuICAgICAgICAgICAgbWVzc2FnZXMuZm9yRWFjaChtZXNzYWdlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZVRleHQgPSBtZXNzYWdlLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICBsZXQgdXNlck5hbWUgPSBtZXNzYWdlLnVzZXIudXNlck5hbWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZUlkID0gbWVzc2FnZS5pZDtcclxuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlVGltZVN0YW1wID0gbWVzc2FnZS50aW1lU3RhbXA7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZVVzZXIgPSBgJHttZXNzYWdlLnVzZXJJZH1gO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvZ2dlZEluVXNlciA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VFbGVtZW50ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImgzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm1lc3NhZ2VVc2VyTmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgOiBgJHt1c2VyTmFtZX06YCxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogYG1lc3NhZ2Uke21lc3NhZ2VJZH1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lIDogcGFyc2VJbnQobWVzc2FnZVVzZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZUVsZW1lbnQyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwicFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlVGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgOiBgJHttZXNzYWdlVGV4dH1gLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBtZXNzYWdlSWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VVc2VyID09PSBsb2dnZWRJblVzZXIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VFZGl0QnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJidXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm1lc3NhZ2VFZGl0QnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgOiBcIkVkaXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBgbWVzc2FnZUVkaXRCdXR0b25fJHttZXNzYWdlSWR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG1lc3NhZ2VUaW1lU3RhbXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1lc3NhZ2VzRXZlbnRMaXN0ZW5lcnMuZWRpdE1lc3NhZ2UsIHtvbmNlOiB0cnVlfSlcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudC5hcHBlbmRDaGlsZChtZXNzYWdlRWxlbWVudDIpXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQuYXBwZW5kQ2hpbGQobWVzc2FnZUVkaXRCdXR0b24pXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUNvbnRhaW5lci5pbnNlcnRCZWZvcmUobWVzc2FnZUVsZW1lbnQsIG1lc3NhZ2VJbnB1dClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50LmFwcGVuZENoaWxkKG1lc3NhZ2VFbGVtZW50MilcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlQ29udGFpbmVyLmluc2VydEJlZm9yZShtZXNzYWdlRWxlbWVudCwgbWVzc2FnZUlucHV0KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gbWVzc2FnZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZyaWVuZHNFdmVudExpc3RlbmVycy5zaGl6KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVzc2FnZXM7XHJcbiIsImltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XHJcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcclxuaW1wb3J0IG1lc3NhZ2VzIGZyb20gXCIuL21lc3NhZ2VzXCI7XHJcbi8vIGltcG9ydCBmcmllbmRzRXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZnJpZW5kc0V2ZW50TGlzdGVuZXJzLmpzXCI7XHJcblxyXG5jb25zdCBtZXNzYWdlc0V2ZW50TGlzdGVuZXJzID0ge1xyXG5cclxuICAgIHBvc3ROZXdNZXNzYWdlKCkge1xyXG5cclxuICAgICAgICBsZXQgbWVzc2FnZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlSW5wdXRcIikudmFsdWU7XHJcbiAgICAgICAgbGV0IHRpbWVTdGFtcCA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuXHJcbiAgICAgICAgICAgIGRhdGFTZXQgOiBcIm1lc3NhZ2VzXCIsXHJcbiAgICAgICAgICAgIGZldGNoVHlwZSA6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBkYXRhQmFzZU9iamVjdCA6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJJZCA6IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgOiBtZXNzYWdlSW5wdXQsLy8udmFsdWUsXHJcbiAgICAgICAgICAgICAgICB0aW1lU3RhbXAgOiB0aW1lU3RhbXBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oc2hpdCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNoaXQpXHJcbiAgICAgICAgICAgICQoXCIjb3V0cHV0XCIpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VzLmNyZWF0ZU1lc3NhZ2VCb2FyZCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIGVkaXRNZXNzYWdlKCkge1xyXG4gICAgICAgIGxldCBudW1iZXIgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xyXG4gICAgICAgIGxldCBtZXNzYWdlQXJyYXkgPSBudW1iZXIuc3BsaXQoXCJfXCIpO1xyXG4gICAgICAgIGxldCBtZXNzYWdlSWQgPSBtZXNzYWdlQXJyYXlbMV07XHJcblxyXG4gICAgICAgIGxldCBtZXNzYWdlVG9FZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7bWVzc2FnZUlkfWApO1xyXG4gICAgICAgIGxldCBtZXNzYWdlVGV4dCA9IG1lc3NhZ2VUb0VkaXQuaW5uZXJIVE1MO1xyXG4gICAgICAgIGxldCBtZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG1lc3NhZ2Uke21lc3NhZ2VJZH1gKTtcclxuICAgICAgICBsZXQgbWVzc2FnZVRpbWVTdGFtcCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQubmFtZTtcclxuXHJcbiAgICAgICAgbGV0IG1lc3NhZ2VFZGl0Rm9ybSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCAoe1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImZvcm1cIixcclxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm1lc3NhZ2VFZGl0Rm9ybVwiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBcIm1lc3NhZ2VFZGl0Rm9ybVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IG1lc3NhZ2VFZGl0RmllbGRzZXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImZpZWxkc2V0XCIsXHJcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlRWRpdEZpZWxkc2V0XCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IFwibWVzc2FnZUVkaXRGaWVsZHNldFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IG1lc3NhZ2VFZGl0SW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImlucHV0XCIsXHJcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlRWRpdElucHV0XCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IGBtZXNzYWdlRWRpdElucHV0XyR7bWVzc2FnZUlkfWAsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA6IGAke21lc3NhZ2VUZXh0fWBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgbWVzc2FnZUVkaXRTdWJtaXRCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZUVkaXRTdWJtaXRCdXR0b25cIixcclxuICAgICAgICAgICAgY29udGVudCA6IFwiU3VibWl0XCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IGBtZXNzYWdlRWRpdFN1Ym1pdEJ1dHRvbl8ke21lc3NhZ2VJZH1gLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogbWVzc2FnZVRpbWVTdGFtcCxcclxuICAgICAgICAgICAgICAgIHR5cGUgOiBcImJ1dHRvblwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBtZXNzYWdlRWRpdFN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWVzc2FnZXNFdmVudExpc3RlbmVycy5oYW5kbGVFZGl0U3VibWl0QnV0dG9uKVxyXG4gICAgICAgIG1lc3NhZ2VFZGl0RmllbGRzZXQuYXBwZW5kQ2hpbGQobWVzc2FnZUVkaXRJbnB1dClcclxuICAgICAgICBtZXNzYWdlRWRpdEZpZWxkc2V0LmFwcGVuZENoaWxkKG1lc3NhZ2VFZGl0U3VibWl0QnV0dG9uKVxyXG4gICAgICAgIG1lc3NhZ2VFZGl0Rm9ybS5hcHBlbmRDaGlsZChtZXNzYWdlRWRpdEZpZWxkc2V0KVxyXG4gICAgICAgIG1lc3NhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZUVkaXRGb3JtKVxyXG4gICAgfSxcclxuXHJcbiAgICBoYW5kbGVFZGl0U3VibWl0QnV0dG9uKCkge1xyXG4gICAgICAgIGxldCBudW1iZXIgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xyXG4gICAgICAgIGxldCBtZXNzYWdlQXJyYXkgPSBudW1iZXIuc3BsaXQoXCJfXCIpO1xyXG4gICAgICAgIGxldCBtZXNzYWdlSWQgPSBtZXNzYWdlQXJyYXlbMV07XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VUaW1lU3RhbXAgPSBgJHtldmVudC5jdXJyZW50VGFyZ2V0Lm5hbWV9YDtcclxuICAgICAgICBsZXQgbWVzc2FnZUVkaXRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBtZXNzYWdlRWRpdElucHV0XyR7bWVzc2FnZUlkfWApO1xyXG5cclxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XHJcblxyXG4gICAgICAgICAgICBwdXRJZCA6IG1lc3NhZ2VJZCxcclxuICAgICAgICAgICAgZGF0YVNldCA6IFwibWVzc2FnZXNcIixcclxuICAgICAgICAgICAgZmV0Y2hUeXBlIDogXCJQVVRcIixcclxuICAgICAgICAgICAgZGF0YUJhc2VPYmplY3QgOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VySWQgOiBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSksXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgJHttZXNzYWdlRWRpdElucHV0LnZhbHVlfWAsXHJcbiAgICAgICAgICAgICAgICB0aW1lU3RhbXA6IGAke21lc3NhZ2VUaW1lU3RhbXB9YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbihzaGl0ID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc2hpdClcclxuICAgICAgICAgICAgJChcIiNvdXRwdXRcIikuZW1wdHkoKTtcclxuICAgICAgICAgICAgbWVzc2FnZXMuY3JlYXRlTWVzc2FnZUJvYXJkKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBtZXNzYWdlc0V2ZW50TGlzdGVuZXJzOyIsImltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XHJcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcclxuLy9wdWxsIGZyb20gYXBpIHRoZW4gZGlzcGxheSB0byBkb20uXHJcbi8vIGNyZWF0ZSBzYXZlIGJ1dHRvbiBzZW5kIHNhdmVkIGFydGljbGVzIHRvIEpzb25cclxuLy8gY3JlYXRlIGJ1dHRvbiB0byBwdWxsIGFsbCBzYXZlZCBtYXRlcmlhbHMgaW4ganNvbi5cclxuLy8gZGVsZXRlIG1ldGhvZCBmb3IgYXJ0aWNsZXNcclxuY29uc3QgbmV3cyA9IHtcclxuXHJcbiAgICBnZXROZXdzKCl7XHJcbiAgICAgICAgLy9wdWxsIHRoZW4gc2VuZCBwdWxsZWQgZGF0YSB0byBkb21cclxuICAgICAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8xXCIpXHJcbiAgICAgICAgICAgIC50aGVuKG5ld3NJdGVtcyA9PiBuZXdzSXRlbXMuanNvbigpKVxyXG4gICAgfSxcclxuICAgIHNhdmUoKSB7XHJcbiAgICAgICAgLy9UaGlzIGlzIGZ1bmN0aW9uaW5nIGFuZCB3cml0aW5nIHRvIEpTT04uXHJcbiAgICAgICAgdGhpcy5nZXROZXdzKCkudGhlbihwb3N0ID0+e1xyXG4gICAgICAgIGNvbnN0IG5ld3NPYmplY3QgPSB7XHJcbiAgICAgICAgICAgICAgICBcImRhdGFTZXRcIiA6IFwibmV3c0l0ZW1zXCIsXHJcbiAgICAgICAgICAgICAgICBcImZldGNoVHlwZVwiIDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ1c2VySWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcInVybFwiOiBgJHtwb3N0LnRpdGxlfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBgJHtwb3N0LmJvZHl9YCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5bm9wc2lzXCI6IFwiYmxhaCBibGFoIGJsYWhcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0ZXN0bmV3c09iaik7XHJcbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEobmV3c09iamVjdCk7XHJcbiAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICBhbGxTYXZlZCgpe1xyXG4gICAgLy8gbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEodGVzdG5ld3NPYmopXHJcbiAgICB9LFxyXG5cclxuICAgIGRlbGV0ZURCKCl7XHJcbiAgICAgICAgXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBuZXdzRWxlbWVudENyZWF0b3IoKXtcclxuICAgICAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpXHJcbiAgICAgICAgY29uc3QgbmV3c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3V0cHV0XCIpXHJcbiAgICAgICAgbGV0IG5ld3NDcmVhdG9yS2V5ID0ge1xyXG4gICAgICAgICAgICBcImRhdGFTZXRcIiA6IFwibmV3c0l0ZW1zXCIsXHJcbiAgICAgICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxyXG4gICAgICAgICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPW5ld3NJdGVtc1wiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKG5ld3NDcmVhdG9yS2V5KVxyXG4gICAgICAgIC50aGVuIChkYkdyYWJzID0+IHtcclxuICAgICAgICAgICAgZGJHcmFicy5mb3JFYWNoKGRiR3JhYiA9PiAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGJHcmFiKTtcclxuICAgICAgICAgICAgICAgIG5ld3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJidXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlNBVkUgQklUQ0hcIixcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogXCJuZXdzU2F2ZUJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgIG5ld3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJoMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGRiR3JhYi50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogXCJuZXdzVGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICBuZXdzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwicFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGRiR3JhYi5zeW5vcHNpcyxcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogXCJuZXdzQm9keVwiXHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgIG5ld3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogZGJHcmFiLnVybCxcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogXCJuZXdzVVJMXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6YCR7ZGJHcmFiLnVybH1gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAvLyBjb25zdCBOZXdzVGVzdCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudChcImgyXCIsdGVzdFBhc3MsXCJ0ZXN0T2JqXCIsbnVsbCk7XHJcbiAgICAgICAgLy9vdXRwdXQuYXBwZW5kQ2hpbGQoTmV3c1Rlc3QpO1xyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXdzIiwiY29uc3Qgbm9tYWREYXRhID0ge1xyXG5cclxuICAgIGNvbm5lY3RUb0RhdGEoZmV0Y2hPYmplY3QpIHtcclxuXHJcbiAgICAgICAgbGV0IGRhdGFTZXQgPSBmZXRjaE9iamVjdC5kYXRhU2V0O1xyXG4gICAgICAgIGxldCBlbWJlZEl0ZW0gPSBmZXRjaE9iamVjdC5lbWJlZEl0ZW07XHJcbiAgICAgICAgbGV0IGZldGNoVHlwZSA9IGZldGNoT2JqZWN0LmZldGNoVHlwZTtcclxuICAgICAgICBsZXQgZGF0YUJhc2VPYmplY3QgPSBmZXRjaE9iamVjdC5kYXRhQmFzZU9iamVjdDtcclxuICAgICAgICBsZXQgcHV0SWQgPSBmZXRjaE9iamVjdC5wdXRJZDtcclxuICAgICAgICBsZXQgZGVsZXRlSWQgPSBmZXRjaE9iamVjdC5kZWxldGVJZDtcclxuXHJcbiAgICAgICAgaWYgKGZldGNoVHlwZSA9PSBcIkdFVFwiKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4LyR7ZGF0YVNldH0ke2VtYmVkSXRlbX1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpIC8vIHBhcnNlcyByZXNwb25zZSB0byBKU09OXHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoZmV0Y2hUeXBlID09PSBcIlBPU1RcIil7XHJcblxyXG4gICAgICAgIC8vIERlZmF1bHQgb3B0aW9ucyBhcmUgbWFya2VkIHdpdGggKlxyXG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4LyR7ZGF0YVNldH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogYCR7ZmV0Y2hUeXBlfWAsIC8vICpHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBldGMuXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICAgICAgLy8gXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gcmVmZXJyZXI6IFwibm8tcmVmZXJyZXJcIiwgLy8gbm8tcmVmZXJyZXIsICpjbGllbnRcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YUJhc2VPYmplY3QpLCAvLyBib2R5IGRhdGEgdHlwZSBtdXN0IG1hdGNoIFwiQ29udGVudC1UeXBlXCIgaGVhZGVyXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmKGZldGNoVHlwZSA9PT0gXCJQVVRcIil7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHtkYXRhU2V0fS8ke3B1dElkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBgJHtmZXRjaFR5cGV9YCwgLy8gKkdFVCwgUE9TVCwgUFVULCBERUxFVEUsIGV0Yy5cclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgICAgICAvLyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyByZWZlcnJlcjogXCJuby1yZWZlcnJlclwiLCAvLyBuby1yZWZlcnJlciwgKmNsaWVudFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhQmFzZU9iamVjdCksIC8vIGJvZHkgZGF0YSB0eXBlIG11c3QgbWF0Y2ggXCJDb250ZW50LVR5cGVcIiBoZWFkZXJcclxuICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZmV0Y2hUeXBlID09PSBcIkRFTEVURVwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHtkYXRhU2V0fS8ke2RlbGV0ZUlkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBgJHtmZXRjaFR5cGV9YCwgLy8gKkdFVCwgUE9TVCwgUFVULCBERUxFVEUsIGV0Yy5cclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgICAgICAvLyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyByZWZlcnJlcjogXCJuby1yZWZlcnJlclwiLCAvLyBuby1yZWZlcnJlciwgKmNsaWVudFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cgKFwiWU9VIFNDUkVXRUQgSVQgVVBcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5vbWFkRGF0YSIsImltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XHJcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHRhc2tzRXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vdGFza3NFdmVudExpc3RlbmVyc1wiO1xyXG5pbXBvcnQgdGFza3NQb3B1cCBmcm9tIFwiLi90YXNrc1BvcHVwXCI7XHJcbi8vIGltcG9ydCBldmVudExpc3RlbmVycyBmcm9tIFwiLi9ldmVudExpc3RlbmVyc1wiXHJcblxyXG5jb25zdCB0YXNrcyA9IHtcclxuXHJcbiAgICBjcmVhdGVUYXNrVGFibGVzKCkge1xyXG4gICAgICAgICQoXCIjb3V0cHV0XCIpLmVtcHR5KClcclxuXHJcbiAgICAgICAgbGV0IG91dHB1dEFydGljbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dFwiKVxyXG5cclxuICAgICAgICAvL2NyZWF0ZSBkaXNwbGF5IGNvbnRhaW5lclxyXG4gICAgICAgIGxldCB0YXNrc0NvbnRhaW5lciA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJzZWN0aW9uXCIsXHJcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrc0NvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBcInRhc2tzQ29udGFpbmVyXCJcclxuICAgICAgICAgICAgfX0pO1xyXG5cclxuICAgICAgICAvL2NyZWF0ZSB0YXNrcyB0YWJsZXNcclxuICAgICAgICBsZXQgYWN0aXZlVGFza3NUYWJsZSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0YWJsZVwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiYWN0aXZlVGFza3NUYWJsZVwiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBcImFjdGl2ZVRhc2tzVGFibGVcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBhY3RpdmVUYXNrc1RhYmxlVGl0bGUgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiY2FwdGlvblwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiYWN0aXZlVGFza3NUYWJsZVRpdGxlXCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQgOiBcIkFDVElWRSBUQVNLU1wiXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBjb21wbGV0ZWRUYXNrc1RhYmxlID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRhYmxlXCIsXHJcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJjb21wbGV0ZWRUYXNrc1RhYmxlXCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IFwiY29tcGxldGVkVGFza3NUYWJsZVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGNvbXBsZXRlZFRhc2tzVGFibGVUaXRsZSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJjYXB0aW9uXCIsXHJcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJjb21wbGV0ZWRUYXNrc1RhYmxlVGl0bGVcIixcclxuICAgICAgICAgICAgY29udGVudCA6IFwiQ09NUExFVEVEIFRBU0tTXCJcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvL2NyZWF0ZSByb3cgd2l0aCBjb2x1bW4gaGVhZGVyc1xyXG4gICAgICAgIGxldCBhY3RpdmVUYXNrc0hlYWRlclJvdyA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0clwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiYWN0aXZlVGFza3NIZWFkZXJSb3dcIixcclxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcclxuICAgICAgICAgICAgICAgIGlkIDogXCJhY3RpdmVUYXNrc0hlYWRlclJvd1wiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGNvbXBsZXRlZFRhc2tzSGVhZGVyUm93ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRyXCIsXHJcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJjb21wbGV0ZWRUYXNrc0hlYWRlclJvd1wiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBcImNvbXBsZXRlZFRhc2tzSGVhZGVyUm93XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL2NyZWF0ZSBjb2x1bW4gaGVhZGVyc1xyXG4gICAgICAgIGxldCBhY3RpdmVUYXNrc0hlYWRlciA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0aFwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiYWN0aXZlVGFza3NIZWFkZXJcIixcclxuICAgICAgICAgICAgY29udGVudDogXCJUYXNrXCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IFwiYWN0aXZlVGFza3NIZWFkZXJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBhY3RpdmVUYXNrc0R1ZURhdGVIZWFkZXIgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwidGhcIixcclxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcImFjdGl2ZVRhc2tzRHVlRGF0ZUhlYWRlclwiLFxyXG4gICAgICAgICAgICBjb250ZW50OiBcIkR1ZSBEYXRlXCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IFwiYWN0aXZlVGFza3NEdWVEYXRlSGVhZGVyXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgY29tcGxldGVkVGFza3NIZWFkZXIgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwidGhcIixcclxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcImNvbXBsZXRlZFRhc2tzSGVhZGVyXCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiVGFza1wiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBcImNvbXBsZXRlZFRhc2tzSGVhZGVyXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgY29tcGxldGVkVGFza3NEdWVEYXRlSGVhZGVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRoXCIsXHJcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJjb21wbGV0ZWRUYXNrc0R1ZURhdGVIZWFkZXJcIixcclxuICAgICAgICAgICAgY29udGVudDogXCJEdWUgRGF0ZVwiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBcImNvbXBsZXRlZFRhc2tzRHVlRGF0ZUhlYWRlclwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL2NyZWF0ZSBidXR0b24gdG8gbWFrZSBuZXcgdGFza3NcclxuICAgICAgICBsZXQgY3JlYXRlVGFza0J1dHRvbiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJidXR0b25cIixcclxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcImNyZWF0ZVRhc2tCdXR0b25cIixcclxuICAgICAgICAgICAgY29udGVudCA6IFwiQ3JlYXRlIE5ldyBUYXNrXCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IFwiY3JlYXRlVGFza0J1dHRvblwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9hcHBlbmQgaGVhZGVyIHJvdyB0byB0YWJsZSBhbmQgdGFibGUgdG8gY29udGFpbmVyXHJcbiAgICAgICAgYWN0aXZlVGFza3NUYWJsZS5hcHBlbmRDaGlsZChhY3RpdmVUYXNrc1RhYmxlVGl0bGUpO1xyXG4gICAgICAgIGNvbXBsZXRlZFRhc2tzVGFibGUuYXBwZW5kQ2hpbGQoY29tcGxldGVkVGFza3NUYWJsZVRpdGxlKTtcclxuICAgICAgICBhY3RpdmVUYXNrc0hlYWRlclJvdy5hcHBlbmRDaGlsZChhY3RpdmVUYXNrc0hlYWRlcilcclxuICAgICAgICBhY3RpdmVUYXNrc0hlYWRlclJvdy5hcHBlbmRDaGlsZChhY3RpdmVUYXNrc0R1ZURhdGVIZWFkZXIpO1xyXG4gICAgICAgIGFjdGl2ZVRhc2tzVGFibGUuYXBwZW5kQ2hpbGQoYWN0aXZlVGFza3NIZWFkZXJSb3cpO1xyXG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGl2ZVRhc2tzVGFibGUpO1xyXG4gICAgICAgIGNvbXBsZXRlZFRhc2tzSGVhZGVyUm93LmFwcGVuZENoaWxkKGNvbXBsZXRlZFRhc2tzSGVhZGVyKVxyXG4gICAgICAgIGNvbXBsZXRlZFRhc2tzSGVhZGVyUm93LmFwcGVuZENoaWxkKGNvbXBsZXRlZFRhc2tzRHVlRGF0ZUhlYWRlcik7XHJcbiAgICAgICAgY29tcGxldGVkVGFza3NUYWJsZS5hcHBlbmRDaGlsZChjb21wbGV0ZWRUYXNrc0hlYWRlclJvdyk7XHJcbiAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcGxldGVkVGFza3NUYWJsZSk7XHJcbiAgICAgICAgY3JlYXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFza3NQb3B1cC5jcmVhdGVOZXdUYXNrRm9ybSk7XHJcbiAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0J1dHRvbik7XHJcbiAgICAgICAgb3V0cHV0QXJ0aWNsZS5hcHBlbmRDaGlsZCh0YXNrc0NvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0VGFza3MoKTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0VGFza3MoKSB7XHJcblxyXG4gICAgICAgIGxldCBjdXJyZW50VXNlciA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKTtcclxuXHJcbiAgICAgICAgLy9wb3B1bGF0ZSB0YXNrc1xyXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuXHJcbiAgICAgICAgICAgIGRhdGFTZXQgOiBcInRhc2tzXCIsXHJcbiAgICAgICAgICAgIGZldGNoVHlwZSA6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIGVtYmVkSXRlbSA6IFwiP19lbWJlZD11c2Vyc1wiXHJcblxyXG4gICAgICAgIH0pLnRoZW4odGFza3MgPT4ge1xyXG5cclxuICAgICAgICAgICAgdGFza3Muc29ydChmdW5jdGlvbihhLGIpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGEuZXhwZWN0ZWRDb21wbGV0aW9uRGF0ZSkgLSBuZXcgRGF0ZShiLmV4cGVjdGVkQ29tcGxldGlvbkRhdGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRhc2sudXNlcklkID09PSBjdXJyZW50VXNlcikge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBzdGF0dXMgPSB0YXNrLmNvbXBsZXRlO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFjdGl2ZVRhc2tzVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGl2ZVRhc2tzVGFibGVcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcGxldGVkVGFza3NUYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcGxldGVkVGFza3NUYWJsZVwiKTtcclxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIG5ldyB0YWJsZSByb3cgZm9yIGVhY2ggdGFza1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tSb3cgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0clwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrVGFibGVSb3dcIixcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA6IGB0YXNrVGFibGVSb3dfJHt0YXNrLmlkfWBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIC8vY3JlYXRlIGNlbGxzIHRvIGhvbGQgdGFzayBhbmQgZHVlIGRhdGVcclxuICAgICAgICAgICAgICAgIGxldCB0YXNrQ2VsbCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInRhc2tDZWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiBgdGFza0NlbGxfJHt0YXNrLmlkfWBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBkdWVEYXRlQ2VsbCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgOiBcImR1ZURhdGVDZWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiBgZHVlRGF0ZUNlbGxfJHt0YXNrLmlkfWBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIC8vY3JlYXRlIHRhc2sgY2hlY2tib3ggYW5kIHRpdGxlXHJcbiAgICAgICAgICAgICAgICBsZXQgdGFza0xhYmVsID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwibGFiZWxcIixcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA6IFwidGFza0xhYmVsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiBgdGFza0xhYmVsXyR7dGFzay5pZH1gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vY3JlYXRlIHRhc2sgdGl0bGVcclxuICAgICAgICAgICAgICAgIGxldCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHt0YXNrLnRhc2t9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9jcmVhdGUgdGFzayBjaGVja2JveFxyXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tDaGVja2JveCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImlucHV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInRhc2tDaGVja2JveFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogYHRhc2tDaGVja2JveF8ke3Rhc2suaWR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA6IFwiY2hlY2tib3hcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgOiBgJHt0YXNrLnRhc2t9YFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvL2NyZWF0ZSB0YXNrIGR1dGUgZGF0ZVxyXG4gICAgICAgICAgICAgICAgbGV0IGR1ZURhdGVBcnJheSA9IG5ldyBEYXRlKHRhc2suZXhwZWN0ZWRDb21wbGV0aW9uRGF0ZSkudG9EYXRlU3RyaW5nKCkuc3BsaXQoXCIgXCIpXHJcbiAgICAgICAgICAgICAgICBsZXQgZHVlRGF0ZSA9IGAke2R1ZURhdGVBcnJheVsxXX0gJHtkdWVEYXRlQXJyYXlbMl19LCAke2R1ZURhdGVBcnJheVszXX1gXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tEdWVEYXRlID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwicFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrRHVlRGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgOiBkdWVEYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogYHRhc2tEdWVEYXRlXyR7dGFzay5pZH1gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vYXBwZW5kIC0tIG9yZGVyIGlzIGltcG9ydGFudCBmb3IgY2hlY2tib3ggYW5kIGxhYmVsIHRvIGVuc3VyZSBib3ggaW4gb24gdGhlIGxlZnRcclxuICAgICAgICAgICAgICAgIHRhc2tDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRhc2tzRXZlbnRMaXN0ZW5lcnMubWFya1Rhc2tDb21wbGV0ZSlcclxuICAgICAgICAgICAgICAgIHRhc2tMYWJlbC5hcHBlbmRDaGlsZCh0YXNrQ2hlY2tib3gpO1xyXG4gICAgICAgICAgICAgICAgdGFza0xhYmVsLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XHJcbiAgICAgICAgICAgICAgICB0YXNrQ2VsbC5hcHBlbmRDaGlsZCh0YXNrTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgZHVlRGF0ZUNlbGwuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xyXG4gICAgICAgICAgICAgICAgdGFza1Jvdy5hcHBlbmRDaGlsZCh0YXNrQ2VsbCk7XHJcbiAgICAgICAgICAgICAgICB0YXNrUm93LmFwcGVuZENoaWxkKGR1ZURhdGVDZWxsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZFRhc2tzVGFibGUuYXBwZW5kQ2hpbGQodGFza1Jvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0NoZWNrYm94LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJcIilcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVRhc2tzVGFibGUuYXBwZW5kQ2hpbGQodGFza1Jvdyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YXNrcztcclxuIiwiaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcclxuaW1wb3J0IHRhc2tzIGZyb20gXCIuL3Rhc2tzXCI7XHJcblxyXG5jb25zdCB0YXNrc0V2ZW50TGlzdGVuZXJzID0ge1xyXG5cclxuICAgIGNyZWF0ZU5ld1Rhc2soKSB7XHJcblxyXG4gICAgICAgIGxldCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tUaXRsZUlucHV0XCIpLnZhbHVlO1xyXG4gICAgICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRGF0ZUlucHV0XCIpLnZhbHVlO1xyXG4gICAgICAgIGxldCB1c2VySWQgPSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSk7XHJcblxyXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuXHJcbiAgICAgICAgICAgIGRhdGFTZXQgOiBcInRhc2tzXCIsXHJcbiAgICAgICAgICAgIGZldGNoVHlwZSA6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBkYXRhQmFzZU9iamVjdCA6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJJZCA6IHVzZXJJZCxcclxuICAgICAgICAgICAgICAgIHRhc2sgOiB0YXNrVGl0bGUsXHJcbiAgICAgICAgICAgICAgICBleHBlY3RlZENvbXBsZXRpb25EYXRlIDogZHVlRGF0ZSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKHNoaXQgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzaGl0KVxyXG4gICAgICAgICAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpXHJcbiAgICAgICAgICAgIHRhc2tzLmNyZWF0ZVRhc2tUYWJsZXMoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIG1hcmtUYXNrQ29tcGxldGUoKSB7XHJcbiAgICAgICAgbGV0IHRhc2tUb0VkaXRJZCA9IGV2ZW50LnRhcmdldC5pZC5zcGxpdChcIl9cIilbMV07XHJcblxyXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuXHJcbiAgICAgICAgICAgIGRhdGFTZXQgOiBcInRhc2tzXCIsXHJcbiAgICAgICAgICAgIGZldGNoVHlwZSA6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIGVtYmVkSXRlbSA6IGA/JmlkPSR7dGFza1RvRWRpdElkfWBcclxuICAgICAgICB9KS50aGVuKHRhc2tzID0+IHtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgdGFza0lkID0gdGFza3NbMF0uaWQ7XHJcbiAgICAgICAgICAgIGxldCB1c2VySWQgPSB0YXNrc1swXS51c2VySWQ7XHJcbiAgICAgICAgICAgIGxldCB0YXNrID0gdGFza3NbMF0udGFzaztcclxuICAgICAgICAgICAgbGV0IGV4cGVjdGVkQ29tcGxldGlvbkRhdGUgPSB0YXNrc1swXS5leHBlY3RlZENvbXBsZXRpb25EYXRlO1xyXG4gICAgICAgICAgICBsZXQgY29tcGxldGUgPSB0YXNrc1swXS5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tJZCwgdXNlcklkLCB0YXNrLCBleHBlY3RlZENvbXBsZXRpb25EYXRlLCBjb21wbGV0ZSlcclxuXHJcbiAgICAgICAgICAgIGlmIChjb21wbGV0ZSkge1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuICAgICAgICAgICAgICAgIHB1dElkIDogdGFza1RvRWRpdElkLFxyXG4gICAgICAgICAgICAgICAgZGF0YVNldCA6IFwidGFza3NcIixcclxuICAgICAgICAgICAgICAgIGZldGNoVHlwZSA6IFwiUFVUXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhQmFzZU9iamVjdCA6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdGFza0lkLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZCA6IHVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICB0YXNrIDogdGFzayxcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3RlZENvbXBsZXRpb25EYXRlOiBleHBlY3RlZENvbXBsZXRpb25EYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBjb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJChcIiNvdXRwdXRcIikuZW1wdHkoKVxyXG4gICAgICAgIHRhc2tzLmNyZWF0ZVRhc2tUYWJsZXMoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCB0YXNrc0V2ZW50TGlzdGVuZXJzOyIsImltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHRhc2tzRXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vdGFza3NFdmVudExpc3RlbmVyc1wiO1xyXG5cclxuY29uc3QgdGFza3NQb3B1cCA9IHtcclxuXHJcbiAgICBjcmVhdGVOZXdUYXNrRm9ybSgpIHtcclxuICAgICAgICBsZXQgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzQ29udGFpbmVyXCIpO1xyXG4gICAgICAgIGxldCB0YXNrUG9wdXBEaXYgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrUG9wdXBEaXZcIixcclxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcclxuICAgICAgICAgICAgICAgIGlkIDogXCJ0YXNrUG9wdXBEaXZcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBuZXdUYXNrRm9ybSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJkaXZcIixcclxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm5ld1Rhc2tGb3JtXCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IFwibmV3VGFza0Zvcm1cIixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgbmV3VGFza0Zvcm1UaXRsZSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJoMlwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibmV3VGFza0Zvcm1UaXRsZVwiLFxyXG4gICAgICAgICAgICBjb250ZW50IDogXCJDcmVhdGUgQSBOZXcgVGFza1wiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBcIm5ld1Rhc2tGb3JtVGl0bGVcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBob3Jpem9udGFsTGluZSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCAoe1xyXG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiaHJcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgdGFza1RpdGxlSW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQgKHtcclxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImlucHV0XCIsXHJcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrVGl0bGVJbnB1dFwiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBcInRhc2tUaXRsZUlucHV0XCIsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA6IFwiRW50ZXIgbmV3IHRhc2sgdGl0bGVcIixcclxuICAgICAgICAgICAgICAgIHR5cGUgOiBcInRleHRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCB0YXNrRGF0ZUlucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50ICh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJpbnB1dFwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwidGFza0RhdGVJbnB1dFwiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBcInRhc2tEYXRlSW5wdXRcIixcclxuICAgICAgICAgICAgICAgIHR5cGUgOiBcImRhdGVcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBzdWJtaXROZXdUYXNrQnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50ICh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJidXR0b25cIixcclxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInN1Ym1pdE5ld1Rhc2tCdXR0b25cIixcclxuICAgICAgICAgICAgY29udGVudCA6IFwiU3VibWl0XCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IFwic3VibWl0TmV3VGFza0J1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgLy8gdHlwZSA6IFwic3VibWl0XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzdWJtaXROZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0YXNrc0V2ZW50TGlzdGVuZXJzLmNyZWF0ZU5ld1Rhc2spXHJcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQobmV3VGFza0Zvcm1UaXRsZSk7XHJcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoaG9yaXpvbnRhbExpbmUpO1xyXG4gICAgICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tUaXRsZUlucHV0KTtcclxuICAgICAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRGF0ZUlucHV0KTtcclxuICAgICAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChzdWJtaXROZXdUYXNrQnV0dG9uKTtcclxuICAgICAgICB0YXNrUG9wdXBEaXYuYXBwZW5kQ2hpbGQobmV3VGFza0Zvcm0pO1xyXG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tQb3B1cERpdik7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHRhc2tzUG9wdXA7Il19
